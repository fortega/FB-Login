var cookieEmail = /email=[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z]{2,4}/i.exec(document.cookie);
var mustTrack = true;
var baseURL = "http://t.monbube.com";
if(cookieEmail !== null){
	cookieEmail = cookieEmail[0].replace("email=","");
}

//Email Functions

function setMail(){
	var textMail = $("input#tbEmail").val();
	var textNombre = $("input#tbNombre").val();
	if(/[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z]{2,4}/.test(textMail)){
		document.cookie = "email=" + textMail;
		trackLoginEmail(textMail,textNombre);
		return false;
	}else{
		alert("Email ingresado es invalido");
		return false;
	}
}

function removeMail(){
	document.cookie = "email=0;expires=Thu, 01 Jan 1970 00:00:01 GMT";
	document.cookie = "nombre=0;expires=Thu, 01 Jan 1970 00:00:01 GMT";
	window.location.reload();
}

function trackLoginEmail(cur_email,cur_nombre){
	//console.log("tracking login email");
	$.post(baseURL + "/fb-login/track.php", { "method": "login_email", "url": window.location.href, "email": cur_email, "nombre": cur_nombre },function(d){
		//console.log(d);
		window.location.reload();
	});
}

function trackVisitEmail(){
	//console.log("track visit email");
	
	$.post(baseURL + "/fb-login/track.php", { "method": "visit_email", "url": window.location.href, "email": cookieEmail },function(d){
		//console.log(d);
	});
}

function trackNologin() {
	//console.log("track nologin");
	$.post(baseURL + "/fb-login/track.php", { "method": "nologin", "url": window.location.href},function(d){
		//console.log(d);
	});
}

// Facebook Functions

function fbLogin(){
	FB.login(function(response){
		if (response.authResponse) {
			FB.getLoginStatus(checkLogin);
			
			trackLoginFB(response);
		}else{
			alert("Favor intente nuevamente");
		}
		
	},{scope: 'email'});
}

function fbLogout(){
	FB.logout();
}

function trackLoginFB(response){
	FB.api("/me",function(fbMe){
		$.post(baseURL + "/fb-login/track.php", {
				"method": "login_fb",
				"url": window.location.href,
				"email": fbMe.email,
				"first_name": fbMe.first_name,
				"gender": fbMe.gender,
				"fbid": fbMe.id,
				"last_name": fbMe.last_name,
				"locale": fbMe.locale,
				"middle_name": fbMe.middle_name,
				"full_name": fbMe.name,
				"timezone": fbMe.timezone,
				"username": fbMe.username,
				"verified": fbMe.verified
				
			},function(d){
				//console.log(d);
		});
	});
}
			
function trackVisitFB(response){
	//console.log("tracking visit fb");
	
	$.post(baseURL + "/fb-login/track.php", {
			"method": "visit_fb",
			"url": window.location.href,
			"fbid": response.authResponse.userID
		},function(d){
			//console.log(d);
	});
}

// General

function setLoginVisible(show){
	var loginBlock = $("div#loginBlock");
	if(show){
		mustTrack = true;
		loginBlock.fadeIn();
		
		trackNologin();
	}else{
		loginBlock.fadeOut();
	}			
}

function showLoginInfoFacebok(){
	var loginInfo = $("div#loginInfo");
	loginInfo.html("Cargando FaceBook");
	loginInfo.show();
	
	FB.api("/me", function(fbMe){
		FB.api("/me/picture?type=square", function(fbPic){
			loginInfo.html("<img src=\"" + fbPic.data.url + "\" />"
					+ fbMe.first_name
					+ "<a onclick=\"fbLogout()\">Salir</a>");
		});
	});
}

function showLoginInfoEmail(){
	var loginInfo = $("div#loginInfo");
	loginInfo.html(cookieEmail + "<a onclick=\"removeMail()\">Salida</a>");
	loginInfo.show();
}

function checkLogin(response){
	var loginVisible = false;
	
	if(cookieEmail === null){
		if(response.status === 'connected'){
			if(mustTrack){
				trackVisitFB(response);
				showLoginInfoFacebok();
				mustTrack = false;
			}
		}else{
			loginVisible = true;
		}
	}else{
		if(mustTrack){
			trackVisitEmail();
			showLoginInfoEmail();
			mustTrack = false;
		}
	}
	setLoginVisible(loginVisible);
}


function appendLoginDiv(){
	if($("div#loginBlock").length == 0){
		//console.log("Se agrega div de login");
		var o = $("body");
		$.get(baseURL + "/fb-login/loginBlock.php",function(d){
			o.append(d);
		});
	}
}

$(document).ready(function(){
	appendLoginDiv();
	$.ajaxSetup({ cache: true });
	$.getScript('http://connect.facebook.net/en_UK/all.js', function(){
		FB.init({
		  appId: '757759187584337',
		  status: true
		});
		
		FB.Event.subscribe('auth.statusChange', checkLogin);
		
		FB.getLoginStatus(checkLogin);
	});
});