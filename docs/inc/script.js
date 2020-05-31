
function cheatButton () {
    document.getElementById("runaway").focus();
    document.getElementById("runaway").innerHTML="No Cheating!";
    setTimeout(resetButton, 500)

}

function moveButton () {
    clearTimeout(timeout);
    document.getElementById("runaway").style.left=((50+Math.random()*200))+"px";
    document.getElementById("runaway").style.top=((10+Math.random()*200))+"px";
    document.getElementById("runaway").innerHTML="&#x1f623;";
}

function noFace () {
    if (disableNoFace==true) {return
    } else {
    document.getElementById("runaway").innerHTML="Over here!";
    timeout=setTimeout(resetButton, 500)
    }
}

function clickButton () {
    disableNoFace=true
    let left = +document.getElementById("runaway").style.left.slice(0,-2)
    console.log(left)

    if (left <300) {
        left += (200 + Math.random()*100)
    } else {
        left -= (200 + Math.random()*100)
    }

    let top = +document.getElementById("runaway").style.top.slice(0,-2)
    if (top <200) {
        top += (100 + Math.random()*100)
    } else {
        top -= (100 + Math.random()*100)
    }
    

    document.getElementById("runaway").style.left=left+"px";
    document.getElementById("runaway").style.top=top+"px";
    document.getElementById("runaway").innerHTML="Too slow!";
    setTimeout(resetButton, 800)
}

function resetButton () {
    document.getElementById("runaway").innerHTML="OK"
    disableNoFace=false
}

function clickEffect(e){
    var dd = document.createElement("DIV");
    dd.className="clickEffect";
    dd.style.top=e.clientY+"px";dd.style.left=e.clientX+"px";
    document.body.appendChild(dd);
    dd.addEventListener('animationend',function(){dd.parentElement.removeChild(dd);}.bind(this));
    }

let timeout=""
disableNoFace=false
document.addEventListener('click',clickEffect);
document.addEventListener("keydown", cheatButton);
document.getElementById("runaway").addEventListener("mouseover", moveButton);
document.getElementById("runaway").addEventListener("touchstart", moveButton);
document.getElementById("runaway").addEventListener("mouseout", noFace);
document.getElementById("runaway").addEventListener("mousedown", clickButton);
