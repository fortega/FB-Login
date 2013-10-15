<html>
	<head>
		<title></title>
		<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
		<script type="text/javascript" src="/fb-login/login.js"></script>
		<style>
			* {
				margin: 0px;
				padding: 0px;
			}
			body {
				background-color: white;
				font-family: Helvetica, Verdana, Arial;
			}
			div#loginBlock {
				position: fixed;
				border: 1px solid black;
				top: 0px;
				left: 0px;
				background-color: grey;
				width: 100%;
				display: none;
				height: 100%;
				z-index: 999;
			}
			
			div#loginBlock div {
				width:300px;
				height:200px;
				position:absolute;
				left:50%; top:50%;
				margin:-100px 0 0 -150px;
			}
			
			div#loginInfo {
				display: none;
			}
			
		</style>
	</head>
	<body>
		Este texto es la web.<br />
		Cuando pide login quedara tapado
		<div id="fb-root"></div>
		<div id="loginInfo"></div>
	</body>
</html>