<?php
	header('Access-Control-Allow-Origin: *');
?><div id="loginBlock">
	<div>
		Para mejorar su navegacion favor inicie sesion:<br />
		<img src="/fb-login/fb-connect.png" alt="fb-connect" onclick="fbLogin()" ><br />
		o indiquenos su email:
		<form onsubmit="return setMail()"><input id="tbEmail" type="text" />
		<input type="submit" value="Ingresar"" ></form>
	</div>
</div>