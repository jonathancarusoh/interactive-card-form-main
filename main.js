document.querySelector('.cnum-input').oninput = () => {
    document.querySelector('.card-front-num').innerText = document.querySelector(`.cnum-input`).value;
}

document.querySelector('.fname-input').oninput = () => {
    document.querySelector('.card-front-name').innerText = document.querySelector(`.fname-input`).value;
}

document.querySelector('.mm-input').oninput = () => {
    document.querySelector('.card-front-fecha-mes').innerText = document.querySelector(`.mm-input`).value;
}

document.querySelector('.yy-input').oninput = () => {
    document.querySelector('.card-front-fecha-anio').innerText = document.querySelector(`.yy-input`).value;
}

document.querySelector('.cvc-input').oninput = () => {
    document.querySelector('.card-cvc').innerText = document.querySelector(`.cvc-input`).value;
}