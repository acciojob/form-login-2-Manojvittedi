let formElement = document.getElementById("formalert");

formElement.addEventListener("submit",(e)=>{
	e.preventDefault();
	let formData = e.target;
	alert(`First Name:${formData["First Name"].value} Name:${formData["Last Name"].value} Phone Number:${formData["Phone Number"].value} Email ID:${formData["Email ID"].value}`);
	
})