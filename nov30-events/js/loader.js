var imgThm = document.querySelector('img.thm'),
	thm2 = document.querySelector('img.thm2'),
	thm3 = document.querySelector('img.thm3');

var imageFiles = ['imgThm', 'thm2', 'thm3'];

for (var i = 0, j = imageFiles.length; i < j; i++) {
    var image = new Image; 
    image.src = 'images/' + imageFiles[i];

}

imgThm.addEventListener('click', function(evt){
	var lowRes = evt.target.src;
	var overlay = document.querySelector('div.overlay');
	var highRes = document.createElement('img');
	var spinner = document.createElement('i');

	overlay.style.display = 'block';
	highRes.src = lowRes.replace('85/85', '4500/3000');
	overlay.appendChild(highRes);

	spinner.className = 'fa fa-refresh fa-spin';
	overlay.appendChild(spinner);

	highRes.addEventListener('load', function(){
		spinner.parentElement.removeChild(spinner);
	});
});
