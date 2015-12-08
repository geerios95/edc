var turtles = {
	leonardo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/LEONARDO.JPG/220px-LEONARDO.JPG',
	vangogh: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/220px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
	rembrandt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/220px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg',
	michelangelo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelango_Portrait_by_Volterra.jpg/220px-Michelango_Portrait_by_Volterra.jpg',
	picasso: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Portrait_de_Picasso%2C_1908.jpg/230px-Portrait_de_Picasso%2C_1908.jpg',
	monet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/220px-Claude_Monet_1899_Nadar_crop.jpg',
	renoir: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg/220px-Pierre_Auguste_Renoir%2C_uncropped_image.jpg',
	vermeer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg/220px-Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg',
	cezanne: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Paul_cezanne_1861.jpg/220px-Paul_cezanne_1861.jpg'
};



var artist = function(){
	var output = '<ul>';
	var gallery = document.getElementsByClassName('gallery');
	for(var key in arguments[0]){
		output += '<li><img src="' + turtles[key] + '" alt="' + i +'"></li>';
	}
	output += '</ul>';

	for(var i = 0; i < gallery.length; i++){
		gallery[i].innerHTML = output;
	}

	var galleryImg = document.querySelectorAll('li img');
	galleryImg.addEventListener('click', function(evt){
		console.log('itworked');
	});
}(turtles);


/*var socialMedia = {
	twitter: 'https://www.twitter.com/Real_CSS_Tricks',
	flickr: 'https://www.flickr.com/photos/zeldman/18658541431',
	youtube: 'https://www.youtube.com/user/realcsstricks',
	facebook: 'https://www.facebook.com/CSSTricks'
};
var social = function(){
	var output = '<ul>';
	var smiList = document.getElementsByClassName('smi');
	for(var key in arguments[0]){
		//console.log(socialMedia[key]);
		output += '<li><a href="' + socialMedia[key] + '"><i class="fa fa-' + key + '"></i></a></li>';	
	}
	output += '</ul>';

	for(var i = 0; i < smiList.length; i++){
		smiList[i].innerHTML = output;
	}
}(socialMedia);
*/



