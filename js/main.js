$(document).ready(function(){
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    // Do something
	    if (scroll >= 150) {
	    	$('.navbar.navbar-inverse.navbar-fixed-top').addClass('fixed');
	    } else {
	    	$('.navbar.navbar-inverse.navbar-fixed-top').removeClass('fixed');
	    }
	});

    $('.carousel').carousel({
	  interval: 5000
	});
 	if (window.mCustomScrollbar) {
	    $(".wrapper").mCustomScrollbar({
	    	axis:"x"
	    });
	}

	var barsCircleOptions = {
	  color: '#0099E6',
	  trailColor: '#ffffff',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 8,
	  trailWidth: 8,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#0099E6', width: 8 },
	  to: { color: '#0099E6', width: 8 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = (Math.round(circle.value() * 100) + ' %');
	
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	};

	var bar = new ProgressBar.Circle(skill_one, barsCircleOptions);
	bar.text.style.fontFamily = '"Arial", Helvetica, sans-serif';
	bar.text.style.fontSize = '35px';
	bar.text.style.fontWeight = 'bold';
	bar.animate(.9);

	var bar = new ProgressBar.Circle(skill_two, barsCircleOptions);
	bar.text.style.fontFamily = '"Arial", Helvetica, sans-serif';
	bar.text.style.fontSize = '35px';
	bar.text.style.fontWeight = 'bold';
	bar.animate(.85);

	var bar = new ProgressBar.Circle(skill_three, barsCircleOptions);
	bar.text.style.fontFamily = '"Arial", Helvetica, sans-serif';
	bar.text.style.fontSize = '35px';
	bar.text.style.fontWeight = 'bold';
	bar.animate(.75);

	var bar = new ProgressBar.Circle(skill_four, barsCircleOptions);
	bar.text.style.fontFamily = '"Arial", Helvetica, sans-serif';
	bar.text.style.fontSize = '35px';
	bar.text.style.fontWeight = 'bold';
	bar.animate(.65);

	var barsLineOptions = {
		strokeWidth: 6,
		easing: 'easeInOut',
		duration: 1400,
		color: '#0088cc',
		trailColor: '#000',
		trailWidth: 6,
		svgStyle: {width: '90%', height: '100%'},
		text: {
		style: {
		  // Text color.
		  // Default: same as stroke color (options.color)
		  color: '#322C2C',
		  fontWeight:'500px',
		  fontSize:'16px',
		  position: 'absolute',
		  right: '70px',
		  top: '0px',
		  padding: 0,
		  margin: 0,
		  transform: null
		},
		autoStyleContainer: false
		},
		from: {color: '#FFEA82'},
		to: {color: '#ED6A5A'},
		step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	};

	var bar = new ProgressBar.Line(skill_1,barsLineOptions );
	bar.animate(.95);  

	var bar = new ProgressBar.Line(skill_2,barsLineOptions );
	bar.animate(.7);

	var bar = new ProgressBar.Line(skill_3,barsLineOptions );
	bar.animate(.9);

	var bar = new ProgressBar.Line(skill_4,barsLineOptions );
	bar.animate(.95);  

	var bar = new ProgressBar.Line(skill_5,barsLineOptions );
	bar.animate(.8);

	var bar = new ProgressBar.Line(skill_6,barsLineOptions );
	bar.animate(.7);

	var bar = new ProgressBar.Line(skill_7,barsLineOptions );
	bar.animate(.85);  

	var bar = new ProgressBar.Line(skill_8,barsLineOptions );
	bar.animate(.7);

	var bar = new ProgressBar.Line(skill_9,barsLineOptions );
	bar.animate(.9);



	$('.count').counterUp();


	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
          
            $('.filter').show('1000');

        }
        else
        {
           
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");

		}
		$(this).addClass("active");


	//   google map
    
    // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(19.076,72.880), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles:[
						    {
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "hue": "#ff4400"
						            },
						            {
						                "saturation": -68
						            },
						            {
						                "lightness": -4
						            },
						            {
						                "gamma": 0.72
						            }
						        ]
						    },
						    {
						        "featureType": "road",
						        "elementType": "labels.icon"
						    },
						    {
						        "featureType": "landscape.man_made",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "hue": "#0077ff"
						            },
						            {
						                "gamma": 3.1
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "stylers": [
						            {
						                "hue": "#00ccff"
						            },
						            {
						                "gamma": 0.44
						            },
						            {
						                "saturation": -33
						            }
						        ]
						    },
						    {
						        "featureType": "poi.park",
						        "stylers": [
						            {
						                "hue": "#44ff00"
						            },
						            {
						                "saturation": -23
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "labels.text.fill",
						        "stylers": [
						            {
						                "hue": "#007fff"
						            },
						            {
						                "gamma": 0.77
						            },
						            {
						                "saturation": 65
						            },
						            {
						                "lightness": 99
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "labels.text.stroke",
						        "stylers": [
						            {
						                "gamma": 0.11
						            },
						            {
						                "weight": 5.6
						            },
						            {
						                "saturation": 99
						            },
						            {
						                "hue": "#0091ff"
						            },
						            {
						                "lightness": -86
						            }
						        ]
						    },
						    {
						        "featureType": "transit.line",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "lightness": -48
						            },
						            {
						                "hue": "#ff5e00"
						            },
						            {
						                "gamma": 1.2
						            },
						            {
						                "saturation": -23
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "labels.text.stroke",
						        "stylers": [
						            {
						                "saturation": -64
						            },
						            {
						                "hue": "#ff9100"
						            },
						            {
						                "lightness": 16
						            },
						            {
						                "gamma": 0.47
						            },
						            {
						                "weight": 2.7
						            }
						        ]
						    }
						]
                };
                
                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(19.076,72.880),
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    title: 'Snazzy!'
                });
                
            }
            
});





