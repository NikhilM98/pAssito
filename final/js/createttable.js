var ourclass = [
    ["sunclass0", "sunclass1", "sunclass2", "sunclass3", "sunclass4", "sunclass5", "sunclass6", "sunclass7", "sunclass8", "sunclass9", "sunclass10", "sunclass11", "sunclass12"],
    ["monclass0", "monclass1", "monclass2", "monclass3", "monclass4", "monclass5", "monclass6", "monclass7", "monclass8", "monclass9", "monclass10", "monclass11", "monclass12"],
    ["tueclass0", "tueclass1", "tueclass2", "tueclass3", "tueclass4", "tueclass5", "tueclass6", "tueclass7", "tueclass8", "tueclass9", "tueclass10", "tueclass11", "tueclass12"],
    ["wedclass0", "wedclass1", "wedclass2", "wedclass3", "wedclass4", "wedclass5", "wedclass6", "wedclass7", "wedclass8", "wedclass9", "wedclass10", "wedclass11", "wedclass12"],
    ["thuclass0", "thuclass1", "thuclass2", "thuclass3", "thuclass4", "thuclass5", "thuclass6", "thuclass7", "thuclass8", "thuclass9", "thuclass10", "thuclass11", "thuclass12"],
    ["friclass0", "friclass1", "friclass2", "friclass3", "friclass4", "friclass5", "friclass6", "friclass7", "friclass8", "friclass9", "friclass10", "friclass11", "friclass12"],
    ["satclass0", "satclass1", "satclass2", "satclass3", "satclass4", "satclass5", "satclass6", "satclass7", "satclass8", "satclass9", "satclass10", "satclass11", "satclass12"]
 ];
 var ourlocations = [
    ["sunlocation0", "sunlocation1", "sunlocation2", "sunlocation3", "sunlocation4", "sunlocation5", "sunlocation6", "sunlocation7", "sunlocation8", "sunlocation9", "sunlocation10", "sunlocation11", "sunlocation12"],
    ["monlocation0", "monlocation1", "monlocation2", "monlocation3", "monlocation4", "monlocation5", "monlocation6", "monlocation7", "monlocation8", "monlocation9", "monlocation10", "monlocation11", "monlocation12"],
    ["tuelocation0", "tuelocation1", "tuelocation2", "tuelocation3", "tuelocation4", "tuelocation5", "tuelocation6", "tuelocation7", "tuelocation8", "tuelocation9", "tuelocation10", "tuelocation11", "tuelocation12"],
    ["wedlocation0", "wedlocation1", "wedlocation2", "wedlocation3", "wedlocation4", "wedlocation5", "wedlocation6", "wedlocation7", "wedlocation8", "wedlocation9", "wedlocation10", "wedlocation11", "wedlocation12"],
    ["thulocation0", "thulocation1", "thulocation2", "thulocation3", "thulocation4", "thulocation5", "thulocation6", "thulocation7", "thulocation8", "thulocation9", "thulocation10", "thulocation11", "thulocation12"],
    ["frilocation0", "frilocation1", "frilocation2", "frilocation3", "frilocation4", "frilocation5", "frilocation6", "frilocation7", "frilocation8", "frilocation9", "frilocation10", "frilocation11", "frilocation12"],
    ["satlocation0", "satlocation1", "satlocation2", "satlocation3", "satlocation4", "satlocation5", "satlocation6", "satlocation7", "satlocation8", "satlocation9", "satlocation10", "satlocation11", "satlocation12"]
 ];

 document.getElementById('submit').addEventListener('click', function() {
     submitTimeTable();
 });
 function submitTimeTable(){
     var timetable = [];
     for (i = 0; i < ourclass.length; i++) {
         var daytable = [];
         for (j = 0; j < ourclass[i].length; j++){
             daytable.push({"event_name": document.getElementById(ourclass[i][j]).value,
                             "place_location": document.getElementById(ourlocations[i][j]).value});
         };
         timetable.push(daytable);
     };
     object = {"timetable": timetable, "status": "OK"};
     console.log(object);
 }