var prevlogged = 100;
setInterval(function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var day = now.getDay();
    var clock = hours + minutes/60.0;
    var index = 0;
        if ((clock > 8 && clock < 9) && (prevlogged !== 0)) {
            prevlogged = 0;
            console.log(variable.timetable[day][0].event_name + ' ' + variable.timetable[day][0].place_location + ' ' + variable.timetable[day][0].greeting);
            console.log(secondvariable.messmenu[day].breakfast);
            document.getElementById("nextclass").innerHTML = variable.timetable[day][0].place_location;
            document.getElementById("nexthave").innerHTML = variable.timetable[day][0].event_name;
            document.getElementById("nextmess").innerHTML = secondvariable.messmenu[day].breakfast;
            // Push Message
            // document.getElementById >> Inner html >> secondvariable.messmenu[day].breakfast
        } else if ((clock > 12 && clock < 13) && (prevlogged !== 4)) {
            prevlogged = 4;
            setTimeout(notify,1000);
            console.log(variable.timetable[day][4].event_name + ' ' + variable.timetable[day][4].place_location + ' ' + variable.timetable[day][4].greeting);
            console.log(secondvariable.messmenu[day].lunch);
            document.getElementById("nextclass").innerHTML = variable.timetable[day][4].place_location;
            document.getElementById("nexthave").innerHTML = variable.timetable[day][4].event_name;
            document.getElementById("nextmess").innerHTML = secondvariable.messmenu[day].lunch;
            // Push Message
            // document.getElementById >> Inner html >> secondvariable.messmenu[day].lunch
        } else if ((clock > 20 && clock < 21) && (prevlogged !== 12)) {
            prevlogged = 12;
            console.log(variable.timetable[day][12].event_name + ' ' + variable.timetable[day][12].place_location + ' ' + variable.timetable[day][12].greeting);
            console.log(secondvariable.messmenu[day].dinner);
            document.getElementById("nextclass").innerHTML = variable.timetable[day][12].place_location;
            document.getElementById("nexthave").innerHTML = variable.timetable[day][12].event_name;
            document.getElementById("nextmess").innerHTML = secondvariable.messmenu[day].dinner;
            // Push Message
            // document.getElementById >> Inner html >> secondvariable.messmenu[day].breakfast
        } else {
            for (i = 0; i < variable.timetable[day].length; i++) {
                if (i === 0){
                    continue
                } else if (i === 4){
                    continue
                } else if (i === 12){
                    continue
                } else if ((clock > (i + 8) && clock < (i + 9)) && i !== prevlogged) {
                    prevlogged = i;
                    console.log(variable.timetable[day][i].event_name + ' ' + variable.timetable[day][i].place_location + ' ' + variable.timetable[day][i].greeting);
                    document.getElementById("nextclass").innerHTML = variable.timetable[day][i].place_location;
                    document.getElementById("nexthave").innerHTML = variable.timetable[day][i].event_name;
                    // Push Message
                    // document.getElementById >> Inner html 
                }
            }
        }
}, 1000);
