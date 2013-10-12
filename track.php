<?php
	const SERVER = "localhost";
	const DB = "monbubec_track";
	const USER = "monbubec_track";
	const PASS ="&QKM%*p%f3Zd";
	
	function error($t){
		echo "error: \"".$t."\"";
	}
	
	function status($t){
		echo "status: \"".$t."\"";
	}
	
	$data = $_POST;
	
	if(isset($data["method"])){
		switch($data["method"]){
			case "login_email":
			case "login_fb":
			case "visit_email":
			case "visit_fb":
				print_r($data);
				break;
			default:
				error("unknow method: ".$data["method"]);
		}
	}else{
		error("method not include");
	}
?>