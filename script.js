function newFunction() {
    document.getElementById("meters").value='';
    document.getElementById("inches").value='';
    document.getElementById("feet").value='';
    document.getElementById("yards").value='';
}
const meters=document.getElementById('meters');
meters.addEventListener("input", metersConverter);
function metersConverter(e){
    let metersC =e.target.value;
    document.getElementById('inches').value=metersC/0.0254;
    document.getElementById('feet').value=metersC*3.2808;
    document.getElementById("yards").value=metersC*1.094;
}

const inches=document.getElementById('inches');
inches.addEventListener("input", inchesConverter);
function inchesConverter(e){
    let inchesC =e.target.value;
    document.getElementById('meters').value=inchesC/39.37;
    document.getElementById('feet').value=inchesC/12;
    document.getElementById("yards").value=inchesC/36;
}
const feet=document.getElementById('feet');
feet.addEventListener("input", feetConverter);
function feetConverter(e){
    let feetC =e.target.value;
    document.getElementById('inches').value=feetC*12;
    document.getElementById('meters').value=feetC/3.281;
    document.getElementById("yards").value=feetC/3;
}
const yards=document.getElementById("yards");
yards.addEventListener("input", yardsConverter);
function yardsConverter(e){
    let yardsC =e.target.value;
    document.getElementById('inches').value=yardsC*36;
    document.getElementById('feet').value=yardsC*3;
    document.getElementById('meters').value=yardsC/1.094;
}