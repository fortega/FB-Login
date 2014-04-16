<?php
	header('Access-Control-Allow-Origin: *');
?><div id="loginBlock">
	<div>
		<form onsubmit="return setMail()">
			<input style="left: 30px; top: 152px;" id="tbNombre" type="text" />
			<input style="left: 30px; top: 182px;" id="tbEmail" type="text" />
			<input style="left: 99999px; width: 0px; height: 0px" type="submit" />
		</form>
		<a id="fb-button" onclick="fbLogin()"></a>
	</div>
</div>