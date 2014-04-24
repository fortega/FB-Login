<?php
	header('Access-Control-Allow-Origin: *');
?><div id="loginBlock">
	<div>
		<form onsubmit="return setMail()">
			<input id="tbNombre" type="text" />
			<input id="tbEmail" type="text" />
			<input id="btnIngresar" type="submit" value="Ingresar" />
		</form>
		<a id="fb-button" onclick="fbLogin()"></a>
	</div>
</div>