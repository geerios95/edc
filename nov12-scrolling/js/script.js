(function(){

	var bodyObj = document.getElementsByTagName('body')[0],
		hdrObj = document.getElementsByTagName('header')[0],
		mainObj = document.getElementsByTagName('main')[0];

	window.addEventListener('scroll', scrollFunc);

	function scrollFunc(evt){
		fixNav();
	}
	/**
	* Function fetches css applied styles.
	* obj needs to be a js object.
	* prop needs to be a css property.
	*/
	function reqStyle(obj, prop){
		return parseInt(window.getComputedStyle(obj, null).getPropertyValue(prop) ); 
	 }

	 /**
	 * Function converting px to vw / vw to px.
	 *  num needs to be an integer.
	 *
	 */

	 function calcUnit(num){
	 	return (document.documentElement.clientWidth / num);
	 }

	function fixNav(){
		var scrollDist = window.scrollY;
		if(scrollDist > reqStyle(bodyObj, 'padding-top')){
			hdrObj.classList.add('fixie');
			mainObj.style.paddingTop = (calcUnit(10) + hdrObj.clientHeight) + 'px';
		}else{
			hdrObj.classList.remove('fixie');
			mainObj.style.paddingTop = '10vw';
		}
	}

	function colorchange(){
		var cH = document.documentElement.clientHeight;
		var sH = document.documentElement.scrollHeight;
		console.log( Math.round(sH / cH) );
	}
	colorchange();
})();
 // console.log(document.documentElement.clientWidth);
