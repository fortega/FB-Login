<?php
	include_once 'Constants.php';
	
	function error($t){
		echo "error: \"".$t."\"";
	}
	
	function status($t){
		echo "status: \"".$t."\"";
	}
	
	$data = $_POST;
	print_r($data);
	if(isset($data["method"])){
		
		$sql = null;
		switch($data["method"]){
			case "nologin":
					$sql = "INSERT INTO nologin (gmt,agent,ip,url) VALUE (".
						"current_timestamp,".
						"'".substr(addslashes($_SERVER['HTTP_USER_AGENT']),0,256)."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".substr(addslashes($data["url"]),0,256)."')";
					break;
			case "login_email":
				$sql ="INSERT INTO email_login (gmt,agent,ip,url,email) VALUE (".
						"current_timestamp,".
						"'".substr(addslashes($_SERVER['HTTP_USER_AGENT']),0,256)."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".substr(addslashes($data["url"]),0,256)."',".
						"'".substr(addslashes($data["email"]),0,254)."')";
				break;
			case "visit_email":
				$sql ="INSERT INTO email_visit (gmt,agent,ip,url,email) VALUE (".
						"current_timestamp,".
						"'".substr(addslashes($_SERVER['HTTP_USER_AGENT']),0,256)."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".substr(addslashes($data["url"]),0,256)."',".
						"'".substr(addslashes($data["email"]),0,254)."')";
				break;
			case "visit_fb":
				$sql ="INSERT INTO facebook_visit (gmt,agent,ip,url,fb_id) VALUE (".
						"current_timestamp,".
						"'".substr(addslashes($_SERVER['HTTP_USER_AGENT']),0,256)."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".substr(addslashes($data["url"]),0,256)."',".
						"'".addslashes($data["fbid"])."')";
				break;
			case "login_fb":
				$sql = "INSERT INTO facebook_login (gmt,agent,ip,url,fb_id,email,".
				"first_name,middle_name,last_name,full_name,gender,".
				"locale,timezone,username,verified) VALUES (".
				"current_timestamp,".
				"'".substr(addslashes($_SERVER['HTTP_USER_AGENT']),0,256)."',".
				"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
				"'".substr(addslashes($data["url"]),0,256)."',".
				"'".addslashes($data["fbid"])."',".
				"'".substr($data["email"],0,254)."',".
				"'".substr(addslashes($data["first_name"]),0,64)."',".
				"'".substr(addslashes($data["middle_name"]),0,64)."',".
				"'".substr(addslashes($data["last_name"]),0,64)."',".
				"'".substr(addslashes($data["full_name"]),0,172)."',".
				"'".substr(addslashes($data["gender"]),0,16)."',".
				"'".substr(addslashes($data["locale"]),0,8)."',".
				"'".substr(addslashes($data["timezone"]),0,64)."',".
				"'".substr(addslashes($data["username"]),0,128)."',".
				"'".substr(addslashes($data["verified"]),0,16)."')";
				break;
			default:
				error("unknow method: ".$data["method"]);
		}
		
		if(!is_null($sql)){
			$mysql = new mysqli(SERVER, USER, PASS, DB);
			//print_r($sql);
			if(!$mysql->real_query($sql)){
				$e = $mysql->error;
				file_put_contents($sql."\r\n".$data["method"],$error."\r\n");
				error("mysqli ".$error);
			}
			$mysql->close();
		}
	}else{
		error("method not include");
	}
?>