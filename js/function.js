window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-30.032319,-51.230139),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content){
		var latLng = {'lat':lat, 'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		})
		
	}

	initialize();
	addMarker(-30.032319,-51.230139,'','Exemplo de marcação');

	setTimeout(function(){
	map.panTo({'lat':-30.032319,'lng':-51.230139});

	},4000);


	$('section.clientes-slider .slider-container').slick({
		dots: true,
		arrows:false,
	    infinite: false,
	    speed:1000,
	    slidesToShow: 1,
	    autoplay: true,
	    centerMode:false,
	    autoplaySpeed: 3000,
	    pauseOnHover:false,
	    responsive: 
	    [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	    ]
	});

	
}

window.onscroll = function(){
		scroll();
	};

	function scroll(){
		let btn = document.getElementById("btntop");
		if (document.documentElement.scrollTop > 50) {
			btn.style.display = "block";
		} else {
			btn.style.display = "none";
		}
	}

	function backToTop() {
		document.documentElement.scrollTop = 0;
	}