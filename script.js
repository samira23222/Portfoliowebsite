const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.navlinks li')



hamburger.addEventListener('click', () => {
	navlinks.classList.toggle("open");
});

function validateform(){  
	var name = document.myform.name.value;  
	var password = document.myform.password.value;  
	  
	if (name == null || name == ""){  
	  alert("Name can't be blank");  
	  return false;  
	}else if(password.length<6){  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	  }  
	}  

	const isEmailValid = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};