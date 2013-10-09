var email = /email=[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z]{2,4}/.exec(document.cookie);
var firstFb = true;
if(email !== null){
	email = email[0].replace("email=","");
}

function setMail(e){
	document.cookie = document.cookie + ";email=" + e;
}

function trackLoginFB(response){
	console.log("tracking login fb");
	FB.api("/me",function(fbMe){
		console.log(fbMe);
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
	//TODO
	console.log("tracking visit fb");
	console.log(response);
	/*
	authResponse: Object
		accessToken: "CAAKxLY8zhVEBAEFguegiCGHW3peYfCHaN7S7e2fP8QJcZA1XUpLLZATihLHfFVYlM4vidKgN4JL1wTjh1s54j0usTKwv8NGjP6t9BKJ4udI2SBAhrLmMLW94bFgaQBauRsrY0tJDB0mJhgkRmidcZAdL7chbZCtZAE8msZC57uWHjiDw3gvqPxnc4LXt8EROiahk7MoA6ZCVwZDZD"
		expiresIn: 4376
		signedRequest: "jZ-AW603P2tmipPj9lR-TNYnGQvFDgKJKmC20AfoyyQ.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUItclVvNWhFVzNBRlZRY0dDM2xhaVdHRTJHMFdiLWVBZEIydWRMeEF1bHN3N0VhWnhyaGh6bnBNYzRKdXQ4X3NBZ1dILUNvVFhqcjhIbkJZMmhSamllVkc4eW5EaTNjQm9sQVZ4a21QZjR2VUNsZUdSNmppbGp4aldTMHVwNmpibVVpSXV2blNad1d5V0gwdXhHaHJITVdmQk1KZlRlWDlnSkM5bEQ3VGlybGpsOWNEZGI4THBCX3E2MlpESjExaVU2anExOEtKOHJqMzEzRUFQR0xVXzUxbkNSUjdheVk1MnphOUpSTUp4Y2hzUzA4cWt0QjJHTXc0dTNLdWtmVi1pcWRPQ0RfanB4V2ExcXVMenJWUEgzcnVnYmVFSnBMMTRJeXd6M1NwQ2d4RU9xSUt1Sk1sZFJvSUpPUWNDNFM2WSIsImlzc3VlZF9hdCI6MTM4MTM1NTIyNCwidXNlcl9pZCI6IjExNTc1MzM2NDQifQ"
		userID: "1157533644"
	status: "connected"
	*/
}

function trackVisitEmail(){
	//TODO
	console.log("track visit email");
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
		loginBlock.show();
	}else{
		loginBlock.hide();
	}			
}

function checkLogin(response){
	var mustShow = false;
	var loginInfo = $("div#loginInfo");
	
	if(email === null){
		if(response.status === 'connected'){
			if(firstFb){
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
			firstFb = false;
		}else{
			firstFb = true;
			mustShow = true;
		}
	}else{
		trackVisitEmail();
		
		loginInfo.append(email);
		loginInfo.show();
	}
	showLogin(mustShow);
}

$(document).ready(function(){
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