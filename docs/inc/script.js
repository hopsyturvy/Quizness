
function cheatButton () {
    document.getElementById("runaway").focus();
    document.getElementById("runaway").innerHTML="No Cheating!";
    setTimeout(resetButton, 500)

}

function moveButton (e) {
    console.log('move'+e.pointerType);
    clearTimeout(timeout);
    if (e.pointerType=='touch'){
        return
    } else {
    console.log(document.getElementById("runaway").style.left.slice(0,-1))
    document.getElementById("runaway").style.left=((Math.random()*90))+"%";
    document.getElementById("runaway").style.top=((Math.random()*90))+"%";
    document.getElementById("runaway").innerHTML="&#x1f623;";
    }
}

function noFace () {
    if (disableNoFace==true) {return
    } else {
    document.getElementById("runaway").innerHTML="Over here!";
    timeout=setTimeout(resetButton, 500)
    }
}

function clickButton (e) {
    console.log("click")
    console.log(e.pointerType);
    disableNoFace=true
    let left = +document.getElementById("runaway").style.left.slice(0,-1)
    console.log(document.getElementById("runaway").style.left.slice(0,-1))

    if (left <50) {
        left += (20 + Math.random()*20)
    } else {
        left -= (20 + Math.random()*20)
    }

    let top = +document.getElementById("runaway").style.top.slice(0,-1)
    if (top <40) {
        top += (40 + Math.random()*10)
    } else {
        top -= 40
    }
    

    document.getElementById("runaway").style.left=left+"%";
    document.getElementById("runaway").style.top=top+"%";
    document.getElementById("runaway").innerHTML="Too slow!";
    setTimeout(resetButton, 800)
    console.log(document.getElementById("runaway").style.left.slice(0,-1))
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

document.getElementById("runaway").addEventListener("pointerdown", clickButton);
document.getElementById("runaway").addEventListener("pointerover", moveButton);
//document.getElementById("runaway").addEventListener("touchstart", moveButton);
//document.getElementById("runaway").addEventListener("touchend", resetButton);
document.getElementById("runaway").addEventListener("pointerout", noFace);
