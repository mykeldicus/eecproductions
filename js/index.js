function makeTextBlue() {
    document.querySelector('#eectitle').style.color = 'blue';
}
function makeTextWhite() {
    document.querySelector('#eectitle').style.color = 'white';
}
const el = document.querySelector('#eectitle');
el.addEventListener('mouseover', makeTextBlue);
el.addEventListener('mouseout', makeTextWhite);

function makeTextRed() {
    document.querySelector('#eecmission').style.color = 'red';
}
function makeTextBlue2() {
    document.querySelector('#eecmission').style.color = 'blue'
}
const ell = document.querySelector('#eecmission');
ell.addEventListener('mouseover', makeTextRed);
ell.addEventListener('mouseout' , makeTextBlue2);

