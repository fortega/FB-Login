<?php
	$data = $_POST;
	if(isset($data["tipo"]) && isset($data["mes"]) && isset($data["ano"])){
		exit();
	}
?><html>
	<head>
		<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
		<script type="text/javascript">
			function cargar(){
				var d = $("div#rpt");
				d.html("");
				return false;
			}
			$(document).ready(function(){
				var date = new Date();
				$("input[name='ano']").val(date.getYear()+1900);
				$("input[name='mes']").val(date.getMonth());
			});
		</script>
	</head>
	<body>
		<form method="POST" onsubmit="return cargar()">
			<table>
				<tr>
					<th>Tipo</th>
					<td>
						<select name="tipo">
							<option>Login Facebook</option>
							<option>Visit Facebook</option>
							<option>Login Email</option>
							<option>Visit Email</option>
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
					<td colspan="2"><input type="submit" value="Cargar" /></td>
				</tr>
			</table>
		</form>
		<div id="rpt">
			TODO
		</div>
	</body>
</html>