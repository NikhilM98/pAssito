var lastplace = "";
setInterval(getLocation, 1000);

function getTimeTable() {
    document.getElementById("imagebox").style.backgroundImage='url("img/timetable.jpg")';
    showcover();
}

function getMessMenu() {
    document.getElementById("imagebox").style.backgroundImage='url("img/messmenu.jpg")';
    showcover();
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
                    lastplace = thirdvariable.places[i].info.name;
                    if (thirdvariable.places[i].info.viewmodal === true){
                        document.getElementById("cover").className="cover-fadeIn";
                        document.getElementById("cover").style.display = "flex";
                        var imageurl = thirdvariable.places[i].info.url;
                        document.getElementById("imagebox").style.backgroundImage='url(' + imageurl+ ')';
                    } else {
                        document.getElementById("cover").style.display = "none";
                    }
                }
            }
        });
    } else {
        console.log("Geolocation is off");
    }
}
