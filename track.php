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
			case "login_email":
				$sql ="INSERT INTO email_login (gmt,agent,ip,url,email) VALUE (".
						"current_timestamp,".
						"'".addslashes($_SERVER['HTTP_USER_AGENT'])."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".$data["url"]."',".
						"'".$data["email"]."')";
				break;
			case "visit_email":
				$sql ="INSERT INTO email_visit (gmt,agent,ip,url,email) VALUE (".
						"current_timestamp,".
						"'".addslashes($_SERVER['HTTP_USER_AGENT'])."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".$data["url"]."',".
						"'".$data["email"]."')";
				break;
			case "visit_fb":
				$sql ="INSERT INTO facebook_visit (gmt,agent,ip,url,fb_id) VALUE (".
						"current_timestamp,".
						"'".addslashes($_SERVER['HTTP_USER_AGENT'])."',".
						"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
						"'".$data["url"]."',".
						"'".$data["fbid"]."')";
				break;
			case "login_fb":
				$sql = "INSERT INTO facebook_login (gmt,agent,ip,url,fb_id,email,".
				"first_name,middle_name,last_name,full_name,gender,".
				"locale,timezone,username,verified) VALUES (".
				"current_timestamp,".
				"'".addslashes($_SERVER['HTTP_USER_AGENT'])."',".
				"'".addslashes($_SERVER['REMOTE_ADDR'])."',".
				"'".$data["url"]."',".
				"'".$data["fbid"]."',".
				"'".$data["email"]."',".
				"'".$data["first_name"]."',".
				"'".$data["middle_name"]."',".
				"'".$data["last_name"]."',".
				"'".$data["full_name"]."',".
				"'".$data["gender"]."',".
				"'".$data["locale"]."',".
				"'".$data["timezone"]."',".
				"'".$data["username"]."',".
				"'".$data["verified"]."')";
				break;
			default:
				error("unknow method: ".$data["method"]);
		}
		
		if(!is_null($sql)){
			$mysql = new mysqli(SERVER, USER, PASS, DB);
			print_r($sql);
			if(!$mysql->real_query($sql)){
				error("mysqli ".$mysql->error);
			}
			$mysql->close();
		}
	}else{
		error("method not include");
	}
?>