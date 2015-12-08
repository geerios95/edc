var bodyObj = document.body,
	loginObj = document.getElementById('#login'),
	formObj = document.getElementsByTagName('form')[0],
	submitBtn = document.querySelector('#login input[type="submit"]');

if(loginObj){
	bodyObj.style.overflow = 'hidden';
}	

submitBtn.addEventListener('click', function(evt){
	submitForm();
});

var submitForm = function(e){
	e.preventDefault();
	var formElemsVals = formObj.elements;
	for (var i = 0; i < formElemsVals.length-1; i++) {
		submitInfo(formElemsVals[i].value);
	}
};

var submitInfo = function(x){
	if(x.type === 'password'){
		var pass = btoa(x.value);
	}
}
