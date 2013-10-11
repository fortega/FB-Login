var email = /email=[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z]{2,4}/.exec(document.cookie);
var mustTrack = true;

if(email !== null){
	email = email[0].replace("email=","");
}

function setMail(){
	var textMail = $("input#tbEmail").val();
	if(/[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z]{2,4}/.test(textMail)){
		document.cookie = "email=" + textMail;
		trackLoginEmail(textMail);
		//window.location.reload();
		return false;
	}else{
		alert("Email ingresado es invalido");
		return false;
	}
}

function delCookie(){
	document.cookie = "email=0;expires=Thu, 01 Jan 1970 00:00:01 GMT";
	window.location.reload();
}

function trackLoginFB(response){
	FB.api("/me",function(fbMe){
		$.post("track.php", {
				"method": "login_fb",
				"email": fbMe.email,
				"first_name": fbMe.first_name,
				"gender": fbMe.gender,
				"id": fbMe.id,
				"last_name": fbMe.last_name,
				"locale": fbMe.locale,
				"middle_name": fbMe.middle_name,
				"name": fbMe.name,
				"timezone": fbMe.timezone,
				"username": fbMe.username,
				"verified": fbMe.verified
				
			},function(d){
				console.log(d);
		});
		/*
		email: "cantinaxxx@gmail.com"
		first_name: "Felipe"
		gender: "male"
		id: "1157533644"
		last_name: "Ortega Bustamante"
		link: "https://www.facebook.com/ortegabustamante"
		locale: "es_LA"
		middle_name: "Matias"
		name: "Felipe Matias Ortega Bustamante"
		timezone: -3
		updated_time: "2013-03-14T16:01:49+0000"
		username: "ortegabustamante"
		verified: true
		*/
	});
}
			
function trackVisitFB(response){
	console.log("tracking visit fb");
	
	$.post("track.php", {
			"method": "visit_fb",
			"id": response.authResponse.userID
		},function(d){
			console.log(d);
	});
	
	/*
	authResponse: Object
		accessToken: "CAAKxLY8zhVEBAEFguegiCGHW3peYfCHaN7S7e2fP8QJcZA1XUpLLZATihLHfFVYlM4vidKgN4JL1wTjh1s54j0usTKwv8NGjP6t9BKJ4udI2SBAhrLmMLW94bFgaQBauRsrY0tJDB0mJhgkRmidcZAdL7chbZCtZAE8msZC57uWHjiDw3gvqPxnc4LXt8EROiahk7MoA6ZCVwZDZD"
		expiresIn: 4376
		signedRequest: "jZ-AW603P2tmipPj9lR-TNYnGQvFDgKJKmC20AfoyyQ.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUItclVvNWhFVzNBRlZRY0dDM2xhaVdHRTJHMFdiLWVBZEIydWRMeEF1bHN3N0VhWnhyaGh6bnBNYzRKdXQ4X3NBZ1dILUNvVFhqcjhIbkJZMmhSamllVkc4eW5EaTNjQm9sQVZ4a21QZjR2VUNsZUdSNmppbGp4aldTMHVwNmpibVVpSXV2blNad1d5V0gwdXhHaHJITVdmQk1KZlRlWDlnSkM5bEQ3VGlybGpsOWNEZGI4THBCX3E2MlpESjExaVU2anExOEtKOHJqMzEzRUFQR0xVXzUxbkNSUjdheVk1MnphOUpSTUp4Y2hzUzA4cWt0QjJHTXc0dTNLdWtmVi1pcWRPQ0RfanB4V2ExcXVMenJWUEgzcnVnYmVFSnBMMTRJeXd6M1NwQ2d4RU9xSUt1Sk1sZFJvSUpPUWNDNFM2WSIsImlzc3VlZF9hdCI6MTM4MTM1NTIyNCwidXNlcl9pZCI6IjExNTc1MzM2NDQifQ"
		userID: "1157533644"
	status: "connected"
	*/
}

function trackLoginEmail(cur_email){
	console.log("tracking login email");
	$.post("track.php", { "method": "login_email", "email": cur_email },function(d){
		console.log(d);
	});
}

function trackVisitEmail(){
	console.log("track visit email");
	
	$.post("track.php", { "method": "visit_email", "email": email },function(d){
		console.log(d);
	});
	
}

function fbLogin(){
	FB.login(function(response){
		if (response.authResponse) {
			FB.getLoginStatus(checkLogin);
			
			trackLoginFB(response);
		}else{
			alert("No se ingreso. Favor intente nuevamente");
		}
		
	},{scope: 'email'});
}

function showLogin(show){
	var loginBlock = $("div#loginBlock");
	if(show){
		mustTrack = true;
		loginBlock.fadeIn();
	}else{
		loginBlock.hide();
	}			
}

function checkLogin(response){
	var mustShow = false;
	var loginInfo = $("div#loginInfo");
	
	if(email === null){
		if(response.status === 'connected'){
			if(mustTrack){
				trackVisitFB(response);
				
				loginInfo.html("Cargando FaceBook");
				loginInfo.show();
				
				var first_name = "", picture = "";
				
				FB.api("/me", function(fbMe){
					first_name = fbMe.first_name;
					
					FB.api("/me/picture?type=square", function(fbPic){
						picture = fbPic.data.url;
						
						loginInfo.html("<img src=\"" + picture + "\" />" + first_name);
						
					});
				});
			}
			mustTrack = false;
		}else{
			mustShow = true;
		}
	}else{
		if(mustTrack){
			trackVisitEmail();
			
			loginInfo.append(email);
			loginInfo.show();
		}
		mustTrack = false;
	}
	showLogin(mustShow);
}

function checkLoginDiv(){
	if($("div#loginBlock").length == 0){
		console.log("Se agrega div de login");
		var o = $("body");
		o.append("<div id=\"loginBlock\">"
				+ "<div>"
					+ "Para mejorar su navegacion favor inicie sesion:<br />"
					+ "<img src=\"fb-connect.png\" alt=\"fb-connect\" onclick=\"fbLogin()\" ><br />"
					+ "o indiquenos su email:"
					+ "<form onsubmit=\"return setMail()\"><input id=\"tbEmail\" type=\"text\" />"
					+ "<input type=\"submit\" value=\"Ingresar\"\" ></form>"
				+ "</div>"
			+ "</div>");
	}
}

$(document).ready(function(){
	checkLoginDiv();
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