var thirdvariable = {
    "places" : [
        {
            "position" : {
                "lat" : 29.87045809,
                "lng" : 77.89470524,
                "radius" : 0.00045329593700926216
            },
            "info" : {
                "name" : "Rajendra Bhawan",
                "greeting" : "Welcome to",
                "activity": "Let's go to canteen",
                "viewmodal": false,
                "url": ""
            }
        },
        {
            "position" : {
                "lat" : 29.87025457,
                "lng" : 77.89647013,
                "radius" : 0.000016319255503639917
            },
            "info" : {
                "name" : "CCD",
                "greeting" : "Welcome to",
                "activity": "Let's have a coffee",
                "viewmodal": true,
                "url": "img/ccd.jpg"
            }
        },
        {
            "position" : {
                "lat" : 29.87123377,
                "lng" : 77.8995928,
                "radius" : 0.0005542942143890002
            },
            "info" : {
                "name" : "RKB",
                "greeting" : "Welcome to",
                "activity": "Home Sweet Home",
                "viewmodal": true,
                "url": "test1.jpg"
            }
        },
        {
            "position" : {
                "lat" : 29.870876499999998,
                "lng" : 77.89382279,
                "radius" : 0.0003407115055338329
            },
            "info" : {
                "name" : "LHC",
                "greeting" : "Welcome to",
                "activity": "Sweet Dreams",
                "viewmodal": true,
                "url": "img/timetable.jpg"
            }
        }
    ]
};
var lastplace = "";
setInterval(getLocation, 1000);

function getTimeTable() {
    
}

function getMessMenu() {

}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){    
            var mylat = position.coords.latitude;
            var mylng = position.coords.longitude;
            var latX = 0;
            var lngX = 0;
            var radius = 0;
            var currentradius = 0;
            for (i = 0; i < thirdvariable.places.length; i++) {
                latX = thirdvariable.places[i].position.lat;
                lngX = thirdvariable.places[i].position.lng;
                radius = thirdvariable.places[i].position.radius;
                currentradius = ((latX - mylat)*(latX - mylat) + (lngX - mylng)*(lngX - mylng));
                if ((radius*radius - currentradius > 0) && (lastplace != thirdvariable.places[i].info.name)) {
                    console.log(thirdvariable.places[i].info.greeting + ' ' + thirdvariable.places[i].info.name + ' ' + thirdvariable.places[i].info.activity);
                    console.log(thirdvariable.places[i].info.name);
                    lastplace = thirdvariable.places[i].info.name;
                    if (thirdvariable.places[i].info.viewmodal === true){
                        document.getElementById("imagebox").style.display = "block";
                        var imageurl = thirdvariable.places[i].info.url;
                        var newurl= 'url(' + imageurl + ')'
                        console.log('url(' + imageurl+ ')');
                        document.getElementById("imagebox").style.backgroundImage='url(' + imageurl+ ')';
                    } else {
                        document.getElementById("imagebox").style.display = "none";
                    }
                }
            }
        });
    } else {
        console.log("Geolocation is off");
    }
}