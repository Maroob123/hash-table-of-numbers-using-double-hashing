let box0 = [], box1 = [], box2 = [], box3 = [], box4 = [], box5 = [], box6 = [], box7 = [], box8 = [], box9 = [];
document.getElementById("box0").innerHTML = box0;


function sear() {
    var ele = document.getElementById("name").value;
    var kk = ele.split("").map(Number)
    var num = Number(kk.reduce(function (a, b) { return a + b }))
    searchid(num);
    for (var j = 0; j < sno.length; j++) {
        if (sno[j] === ele) {
            alert("your id is avaliable at row no =" + num + " with index no =" + j)
            break
        }
    }
    if (sno.indexOf(ele) === -1) {
       alert("your id is not avaliable")
    }
}

function ins() {
    var ele = document.getElementById("name").value;
    var kk = ele.split("").map(Number)
    var num = Number(kk.reduce(function (a, b) { return a + b }))
    searchid(num);
    for (var k = 0; k < sno.length; k++) {
        if (sno[k] === ele) {
            alert("Element you insert is already avaliable")
            break
        }
    }
    if (sno.indexOf(ele) === -1) {
    //    alert("your id is not avaliable")
    sno.push(ele)
    ex.innerHTML = sno;
    }
   
}
function del() {
    var ele = document.getElementById("name").value;
    var kk = ele.split("").map(Number)
    var num = Number(kk.reduce(function (a, b) { return a + b }))
    searchid(num);
    for (var i = 0; i <= sno.length; i++) {
        ele = Number(ele);
        if (sno[i] == ele) {
            delete (sno[i]);
        }
    }
    // sno.remove(ele)
    ex.innerHTML = sno;
}
var sno;
var ex = "";
function searchid(num) {


    switch (num) {
        case 0:
            sno = box0;
            ex = document.getElementById("box0");
            return ex;
            break
        case 1:
            sno = box1;
            ex = document.getElementById("box1");
            return ex;
            break
        case 2:
            sno = box2;
            ex = document.getElementById("box2");
            return ex;
            break
        case 3:
            sno = box3;
            ex = document.getElementById("box3");
            return ex;
            break
        case 4:
            sno = box4;
            ex = document.getElementById("box4");
            return ex;
            break
        case 5:
            sno = box5;
            ex = document.getElementById("box5");
            return ex;
            break
        case 6:
            sno = box6;
            ex = document.getElementById("box6");
            return ex;
            break
        case 7:
            sno = box7;
            ex = document.getElementById("box7");
            return ex;
            break
        case 8:
            sno = box8;
            ex = document.getElementById("box8");
            return ex;
            break
        case 9:
            sno = box9;
            ex = document.getElementById("box9");
            return ex;
            break
        default:
            sno = box0;
            ex = document.getElementById("box0");
            return ex;
            break

    }
}