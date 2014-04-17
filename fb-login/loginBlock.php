<?php
	header('Access-Control-Allow-Origin: *');
?><div id="loginBlock">
	<div>
		<form onsubmit="return setMail()">
			<input id="tbNombre" type="text" />
			<input id="tbEmail" type="text" />
			<input style="left: 99999px; width: 0px; height: 0px" type="submit" />
		</form>
		<a id="fb-button" onclick="fbLogin()"></a>
	</div>
</div>