let time = document.querySelector('#time'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus'),
    timesOfDays = document.querySelector('#times_of_day'),
    dayMonth = document.querySelector('#day'),
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    times = ['Morning', 'Afternoon', 'Evening', 'Night'];
let hourBtn;


function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    time.innerHTML = getNumberWithZero(hour) + ":" + getNumberWithZero(minutes) + ":" + getNumberWithZero(seconds);
}

function showDay(){
    let today = new Date();
    let numberOfDay = today.getDay();
    let numberOfMonth = today.getMonth();
    let date = today.getDate();

    let day = days[numberOfDay];
    let month = months[numberOfMonth];

    dayMonth.innerHTML = day + ", " + date + " " + month;
}

function getNumberWithZero(number) {
    return (number < 10)?`0${number}`:number;
}

function showGreeting() {
   let timeOfDay = getTimeOfDay();
    timesOfDays.innerHTML = "Good " + timeOfDay + ", ";
}

function  getTimeOfDay() {
    let today = new Date();
    let hour = today.getHours();
    let timeOfDay;
    if (hour < 6) {
        timeOfDay = times[3];
    } else if (hour < 12) {
        timeOfDay = times[0];
    } else if (hour < 18 ) {
        timeOfDay = times[1];
    } else  timeOfDay = times[2];
    return timeOfDay;
}

function getName() {
    console.log(localStorage.getItem('name'));
    if (localStorage.getItem('name') === null) {
        name.textContent = '[EnterName]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
function setName(e) {
    if (e.type === 'keypress') {
        if (e.target.innerText === '[EnterName]' || e.target.innerText === localStorage.getItem('name')) {
            e.target.innerText = '';
        }
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (e.target.innerText === '' && !localStorage.getItem('name')) {
                name.textContent = '[EnterName]';
            } else localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        if (e.target.innerText === '' && !localStorage.getItem('name')) {
            name.textContent = '[EnterName]';
        } else localStorage.setItem('name', e.target.innerText);
    }

}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[EnterFocus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.target.innerText === '[EnterFocus]' || e.target.innerText === localStorage.getItem('focus')) {
            e.target.innerText = '';
        }
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (e.target.innerText === '' && !localStorage.getItem('focus')) {
                focus.textContent = '[EnterFocus]';
            } else localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        if (e.target.innerText === ''&& !localStorage.getItem('focus')) {
            focus.textContent = '[EnterFocus]';
        } else localStorage.setItem('focus', e.target.innerText);
    }

}


// change background
const base = './assets/images/';
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

function viewImage(data) {
    const body = document.querySelector('body');
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
        body.style.backgroundImage = `url(${src}`;
    };
}

function getImage() {
    //const index = i % images.length;
    const min = Math.ceil(1);
    const max = Math.floor(21);
    const index = Math.floor(Math.random() * (max - min)) + min;
    let timeOfDay = getTimeOfDay();
    const imageSrc = base + timeOfDay + '/' + images[index];
   // viewImage(imageSrc);
    setTimeout(viewImage(imageSrc), 1000);
    i++;
}

function getImageBtn() {
    let timeOfDay;
    if (hourBtn  === undefined) {
        let today = new Date();
        let hour = today.getHours();
        hourBtn = hour;
    }
    if (hourBtn < 6) {
        timeOfDay = times[3];
    } else if (hourBtn < 12) {
        timeOfDay = times[0];
    } else if (hourBtn < 18 ) {
        timeOfDay = times[1];
    } else  timeOfDay = times[2];
    const index = i % images.length;
    const imageSrc = base + timeOfDay + '/' + images[index];
    viewImage(imageSrc);
    i++;
    hourBtn ++;
    if (hourBtn == 24) hourBtn = 0;
}

function showImage () {
    let today = new Date();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    console.log(minutes);
    console.log(seconds);

    if (minutes === 0 && seconds === 0) {
        getImage();
    }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImageBtn);



name.addEventListener('keypress',  setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress',  setFocus);
focus.addEventListener('blur', setFocus);

getImage();
getName();
getFocus();
setInterval(showTime, 1000);
setInterval(showDay, 1000);
setInterval(showGreeting, 1000);
setInterval(showImage, 1000);


