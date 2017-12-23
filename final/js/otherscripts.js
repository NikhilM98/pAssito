function closecover() {
    document.getElementById("cover").className="cover-fade";
    setTimeout(function() {
        document.getElementById("cover").style.display="none";
    }, 450);
};
function showcover() {
    document.getElementById("cover").className="cover-fadeIn";
    document.getElementById("cover").style.display="flex";
};