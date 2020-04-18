if(BSEolasFixLoaded != true)
{

	function eolasFix()
	{
		if (navigator.appName == "Microsoft Internet Explorer") 
		{
			var arrElements = new Array(2);
			arrElements[0] = "object";
			arrElements[1] = "embed";
			
			for (n = 0; n < arrElements.length; n++) 
			{
				replaceObj = document.getElementsByTagName(arrElements[n]);
				for (i = 0; i < replaceObj.length; i++ ) 
				{
					if(replaceObj[i].className == "BSFlashAd")
					{
						parentObj = replaceObj[i].parentNode;
						newHTML = parentObj.innerHTML;
						parentObj.removeChild(replaceObj[i]);
						parentObj.innerHTML = newHTML;
					}
				}
			}
		}

	}

	if (navigator.appName == "Microsoft Internet Explorer") 
	{
		oldOnload = window.onload;
		window.onload = function() {};
		if(oldOnload)
			window.attachEvent("onload",oldOnload);
		window.attachEvent("onload",eolasFix);
	}

	var BSEolasFixLoaded = true;

}