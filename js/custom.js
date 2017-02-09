/* Background, Weather, Time, and Search setup *\
\*=============================================*/

$(document).ready(function(){		
	//Background image
	// sourced from unsplash.com; reference source.unsplahs.com
	// background got to be dark for the styling/ fonts are light in color
	//var bgURL= 'https://source.unsplash.com/category/nature';
	var bgBaseUrl= settings.background.source.baseUrl;
	var dayColId= settings.background.source.dayColId;
	var nightColId= settings.background.source.nightColId;
	var dawnColId= settings.background.source.dawnColId;
	var duskColId= settings.background.source.duskColId;
	var bgURL= bgBaseUrl;

	var curD= new Date();
	var curH= curD.getHours();
	if (curH >= 5 && curH< 7){
	    bgURL += dawnColId;
	}else if (curH >= 7 && curH< 18){
	    bgURL += dayColId;
	}else if (curH >= 18 && curH< 20){
	    bgURL += duskColId;
	}else {
	    bgURL += nightColId;
	};

	if(settings.background.daily){
	    bgURL= bgURL + '/daily';
	}

	$('body').css({
		'background-image':'url('+ bgURL +')',
		'background-repeat':'no-repeat',
		'background-size': 'cover'
	});


	
	//TIME
	function startTime() {
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var days = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
		var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Nov','Dec'];
		
		m = checkTime(m);
		h = checkTime(h);
		s = "";
		
		if(!settings.clock.IsMilitary){
		    s = today.getHours()>12? s+' PM' : s+' AM';
		    h = h>12? parseInt(h)-12: h ;
		    if(h == 0) {
		    	h = 12;
			}
		    
		    $('#time').css('font-size','64px');
		}

		$('#time').html(h +'<span>:</span>'+ m + '<p style="font-size:32px; text-align: left">' + s + '</p>');
		//$('#time').html(h+'<span>:</span>'+m);
		$('#day').html(days[today.getDay()]+'day');
		$('#date').html(months[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear());
		
		setTimeout(function(){startTime()},500);
	}

	function checkTime(i) {
		i=i<10? i='0'+i:i; 
		return i;
	}
	
	$('#time').html(startTime());
	
	/**
	//SEARCH
	
	// print it first then mess with it
	printSearchEng();

	function deactivateSearchClick(){
	    $('#currtype a').click(function(e){
		    e.preventDefault();
		});
	    
	    $('#curreng a').click(function(e){
		    e.preventDefault();
		});
	}

	$('#search .engine .sel').click(function(e){
		e.preventDefault();
		var ce = $('#curreng').html();
		var se = $(this).html();
		
		$(this).html(ce);
		$('#curreng').html(se);
		
		var searchUrl = $('#curreng a').attr('href');
		var searchVarName = $('#curreng a').attr('id');
		
		setupSearch(searchUrl, searchVarName);
	});
		
 	function printSearchEng(){
 	    var arrSearch = settings.search.engines;
 	    var strHTML='';
 	    var i;
 	    for (i in arrSearch){
 		var iSrch = arrSearch[i];
 		var strURL = iSrch[0];
 		var strID = iSrch[1];
 		var strLabel = iSrch[2];
 		var isCurr = false;
 		if (i==0){
 		    isCurr= true;
 		}
 		strHTML += writeSearchOpt(strURL, strID, strLabel, isCurr);
		
 		if (isCurr){
 		    strHTML += '<ul class="sub">';
		}
	    }
	    strHTML += '</ul></li>';
	    $('#search .engine').append(strHTML);
	}
	

	function writeSearchOpt(strURL, strID, strLabel, isCurr){
	    var strOutput = '<a href="' + strURL + '" id="' + strID + '">' + strLabel + '</a>';
	    if (isCurr) {
		strOutput = '<li class="first"><p id="curreng">'+ strOutput + "</p>";
	    } else {
		strOutput = '<li class="sel">' + strOutput + '</li>';
	    }
	    return strOutput;
 	}

	function getRandInt(min, max){
	    return Math.floor(Math.random() * (max - min +1)) + min;
	}

  	function setupSearch(searchURL, searchVarName){
	    if (!searchURL && !searchVarName){
		var sURL = $('#curreng a').attr('href');
		var sVName= $('#curreng a').attr('id');
		$('#search').attr('action', sURL);
		$('#search #query').attr('name', sVName);
		$('#search #query').val('');
	    } else {
		$('#search').attr('action', searchURL);
		$('#search #query').attr('name', searchVarName);
		}

	    // put quotes in search input box?
	    var arrayQuotes = settings.search.quotes;
	    var strPlaceholder = arrayQuotes[getRandInt(0, arrayQuotes.length-1 )];
	    if (settings.search.showQuotes){
		$('#search #query').attr('placeholder', strPlaceholder);
	    }

	    // new window?
	    if( settings.navigation.newWindow){
		$('#search').attr('target', '_blank');
	    }
	    
	    // give focus
	    if (settings.search.focusSearch){
		$('#search #query').focus();
	    }

	    // override search engine click
	    deactivateSearchClick();
	}
	setupSearch();*/


    // USER CONFIG FONTS
	function styleFonts(){
	    var strBodyFont= settings.fonts.body;
	    var strLinksFont= settings.fonts.links;
	    $('body').css('font-family', strBodyFont);
	    $('#bm').css('font-family', strLinksFont);
	    
	}
	styleFonts();
	
	// PAGE TITLE
	$('title').html(settings.title);

});

//use for any widgets that may take a while to load
$(window).on('load', function() {
    var checkExist = setInterval(function() {
        if ($('a.aw-current-weather p time').length && $('.aw-widget-content').length) {
            console.log("Exists!");
            $('a.aw-current-weather p time').html('');
            $('.aw-widget-content').css('cssText', 'border:none !important');
            $('.aw-current-weather-inner').css('cssText', 'font-family: "Jura", sans-serif !important');
            $('div.aw-widget-content a.aw-current-weather h3').css('cssText', 'font-size:20px !important');
            $('a.aw-current-weather p span.aw-weather-description').css('cssText', 'font-size: 20px!important; padding-right: 20px !important;text-align: right !important');
            $('a.aw-current-weather p.aw-temp-time-desc').css('cssText', 'width: 100%!important;');
            $('a.aw-current-weather span.aw-temperature-today').css('cssText', 'font-size: 55px!important; text-align: right !important');

            clearInterval(checkExist);
        }
    }, 100);
});

/*function initMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}*/


