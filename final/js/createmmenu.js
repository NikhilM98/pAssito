var breakfast = ["breakfast0", "breakfast1", "breakfast2", "breakfast3", "breakfast4", "breakfast5", "breakfast6"];
var lunch = ["lunch0", "lunch1", "lunch2", "lunch3", "lunch4", "lunch5", "lunch6"];
var dinner = ["dinner0", "dinner1", "dinner2", "dinner3", "dinner4", "dinner5", "dinner6"];
document.getElementById('submit').addEventListener('click', function() {
    submitMessMenu();
});
function submitMessMenu(){
    var mymess = [];
    for (i = 0; i < 7; i++) {
        mymess.push({"breakfast": document.getElementById(breakfast[i]).value,
                    "lunch": document.getElementById(lunch[i]).value,
                    "dinner": document.getElementById(dinner[i]).value
        });
    };
    var object = {"messmenu": mymess, "status" : "OK"};
    console.log(object);
}