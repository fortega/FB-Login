<html>
	<head>
		<title></title>
		<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
		<script type="text/javascript" src="login.js"></script>
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
				top: 0px;
				left: 0px;
				background-color: white;
				width: 100%;
				display: none;
				height: 100%;
				z-index: 999;
			}
			div#loginInfo {
				display: none;
			}
		</style>
	</head>
	<body>
		<div id="fb-root"></div>
		<div id="loginInfo"></div>
		<div id="loginBlock">
			Para ingresar inicie sesion en <a onclick="fbLogin()">FB</a>
		</div>
	</body>
</html>