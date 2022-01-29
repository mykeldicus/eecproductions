const ell = document.querySelector('#eecmission');
ell.addEventListener('mouseover', makeTextRed);
ell.addEventListener('mouseout' , makeTextBlue2);

function makeTextRed() {
    document.querySelector('#eecmission').style.color = 'red';
}
function makeTextBlue2() {
    document.querySelector('#eecmission').style.color = 'blue'
}

// const elll = document.querySelector('#eechighlight');
// elll.addEventListener('mouseover', makeTextRed);
// elll.addEventListener('mouseout' , makeTextBlue2);

// function makeTextRed() {
//     document.querySelector('#eechighlight').style.color = 'red';
// }
// function makeTextBlue2() {
//     document.querySelector('#eechighlight').style.color = 'blue'
// }


