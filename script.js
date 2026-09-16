const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./img/acessa.png";
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./img/apagada.png";
    }
}

function lampBroken() {
    lamp.src = "./img/quabrada.png";
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);