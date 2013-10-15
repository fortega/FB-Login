<?php include_once 'Constants.php'
		;
	$data = $_POST;
	if(isset($data["tipo"]) && isset($data["mes"]) && isset($data["ano"])){
		$table = null;
		switch($data["tipo"]){
			case "login_fb":
				$table = "facebook_login";
				break;
			case "visit_fb":
				$table = "facebook_visit";
				break;
			case "login_email":
				$table = "email_login";
				break;
			case "visit_email":
				$table = "email_visit";
				break;
			default:
				echo "ERROR";
		}
		
		if(!is_null($table)){
			
			header('Content-Type: text/csv');
			header("Content-disposition: attachment; filename=\"".$table."-".$data["ano"].$data["mes"].".csv\"");
			
			$sql = "SELECT * FROM ".$table." WHERE ".
					"month(gmt) = ".addslashes($data["mes"])." AND ".
					"year(gmt) = ".addslashes($data["ano"]);
			$link = new mysqli(SERVER, USER, PASS, DB);
			$query = $link->query($sql);
			$first = true;
			while($row = $query->fetch_assoc()){
				if($first){
					$first  = false;
					$keys = array_keys($row);
					echo implode(",",$keys); echo "\n";
				}
				echo "\""; echo implode("\",\"",$row); echo "\"\n";
			}
			$link->close();
		}
		
		exit();
	}
?><html>
	<head>
		<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				var date = new Date();
				$("input[name='ano']").val(date.getYear()+1900);
				$("input[name='mes']").val(date.getMonth()+1);
			});
		</script>
	</head>
	<body>
		<form method="POST">
			<table>
				<tr>
					<th>Tipo</th>
					<td>
						<select name="tipo">
							<option value="login_fb">Login Facebook</option>
							<option value="visit_fb">Visit Facebook</option>
							<option value="login_email">Login Email</option>
							<option value="visit_email">Visit Email</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>A&#241;o</th>
					<td><input name="ano" type="text" /></td>
				</tr>
				<tr>
					<th>Mes</th>
					<td><input name="mes" type="text" /></td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" value="Descargar" /></td>
				</tr>
			</table>
		</form>
	</body>
</html>