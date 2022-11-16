var i = 0;
var txt = 'James M'; /* The text */
var speed = 250; /* The speed/duration of the effect in milliseconds */

function typeF() {
    document.getElementById("name").innerHTML = "";
    function typeB(){
        if (i < txt.length) {
            document.getElementById("name").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeB, speed);
        }
    }
    typeB()
}

