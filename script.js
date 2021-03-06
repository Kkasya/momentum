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

function  getTimeOfDay(hour) {
    let today = new Date();
    if (hour == undefined) hour = today.getHours();
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
    if (localStorage.getItem('name') === null) {
        name.textContent = '[EnterName]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
function setName(e) {
    let nameText;
    if (e.type === 'keypress') {
        if( e.target.innerText === localStorage.getItem('name')) {
            nameText = e.target.innerText;
            e.target.innerText = '';
        } else if (e.target.innerText === '[EnterName]') {
            e.target.innerText = '';
        }
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                if (e.target.innerText === '') {
                    if (nameText != undefined){
                        name.textContent = nameText;
                    } else name.textContent = '[EnterName]';
                } else localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        if (e.target.innerText === '') {
            if (nameText != undefined){
                name.textContent = nameText;
            } else name.textContent = '[EnterName]';
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
    let focusText;
    if (e.type === 'keypress') {
        if( e.target.innerText === localStorage.getItem('focus')) {
            focusText = e.target.innerText;
            e.target.innerText = '';
        } else if (e.target.innerText === '[EnterFocus]') {
            e.target.innerText = '';
        }
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (e.target.innerText === '') {
                if (focusText != undefined){
                    focus.textContent = focusText;
                } else focus.textContent = '[EnterFocus]';
            } else localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        if (e.target.innerText === '') {
            if (focusText != undefined){
                focus.textContent = focusText;
            } else focus.textContent = '[EnterFocus]';
        } else localStorage.setItem('focus', e.target.innerText);
    }

}

// change background
const base = './assets/images/';
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
const imagesDay = [];
let j = 0;

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
    let today = new Date();
    let hour = today.getHours();
    let timeOfDay;
    let imageSrc;
    for(let i = 0; i < 24; i++) {
        const index = Math.floor(Math.random() * (Math.floor(images.length) - Math.ceil(1))) + Math.ceil(1);
        timeOfDay = getTimeOfDay(hour);
        imageSrc = base + timeOfDay + '/' + images[index];
        if (imagesDay.includes(imageSrc)) {
            i--;
        } else {
            imagesDay.push(imageSrc);
            hour++;
            if (hour === 24) hour = 0;
        }
    };
    viewImage(imagesDay[0]);
}
console.log(imagesDay);

function getImageBtn() {
    j++;
    if (j === 24) j = 0;
    console.log(imagesDay[j]);
    console.log(j);
    viewImage(imagesDay[j]);
    btn.disabled = true;
    setTimeout(() => {
        btn.disabled = false;
    }, 1000);
};

function showImage () {
    let today = new Date();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

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


//quote

const quotes = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
    },
    {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
    },
    {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
    },
    {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
    },
    {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
    },
    {
        "text": "Well begun is half done.",
        "author": "Aristotle"
    },
    {
        "text": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
    },
    {
        "text": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster"
    },
    {
        "text": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
    },
    {
        "text": "What you give is what you get.",
        "author": "Byron Pulsifer"
    },
    {
        "text": "We can only learn to love by loving.",
        "author": "Iris Murdoch"
    },
    {
        "text": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark"
    },
    {
        "text": "You'll see it when you believe it.",
        "author": "Wayne Dyer"
    },
    {
        "text": "All our knowledge has its origins in our perceptions.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Trusting our intuition often saves us from disaster.",
        "author": "Anne Wilson Schaef"
    },
    {
        "text": "Truth is powerful and it prevails.",
        "author": "Sojourner Truth"
    },
    {
        "text": "To lead people walk behind them.",
        "author": "Lao Tzu"
    },
    {
        "text": "Having nothing, nothing can he lose.",
        "author": "William Shakespeare"
    },
    {
        "text": "Trouble is only opportunity in work clothes.",
        "author": "Henry J. Kaiser"
    },
    {
        "text": "A rolling stone gathers no moss.",
        "author": "Publilius Syrus"
    },
    {
        "text": "Ideas are the beginning points of all fortunes.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Everything in life is luck.",
        "author": "Donald Trump"
    },
    {
        "text": "Doing nothing is better than being busy doing nothing.",
        "author": "Lao Tzu"
    },
    {
        "text": "Trust yourself. You know more than you think you do.",
        "author": "Benjamin Spock"
    },
    {
        "text": "Study the past, if you would divine the future.",
        "author": "Confucius"
    },
    {
        "text": "Light tomorrow with today!",
        "author": "Elizabeth Browning"
    },
    {
        "text": "From error to error one discovers the entire truth.",
        "author": "Sigmund Freud"
    },
    {
        "text": "Well done is better than well said.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Bite off more than you can chew, then chew it.",
        "author": "Ella Williams"
    },
    {
        "text": "Work out your own salvation. Do not depend on others.",
        "author": "Buddha"
    },
    {
        "text": "One today is worth two tomorrows.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Once you choose hope, anythings possible.",
        "author": "Christopher Reeve"
    },
    {
        "text": "God always takes the simplest way.",
        "author": "Albert Einstein"
    },
    {
        "text": "One fails forward toward success.",
        "author": "Charles Kettering"
    },
    {
        "text": "Silence is a fence around wisdom.",
        "author": "German proverb"
    },
    {
        "text": "Learning is a treasure that will follow its owner everywhere",
        "author": "Chinese proverb"
    },
    {
        "text": "Be as you wish to seem.",
        "author": "Socrates"
    },
    {
        "text": "The world is always in movement.",
        "author": "V. Naipaul"
    },
    {
        "text": "Never mistake activity for achievement.",
        "author": "John Wooden"
    },
    {
        "text": "What worries you masters you.",
        "author": "Haddon Robinson"
    },
    {
        "text": "One faces the future with ones past.",
        "author": "Pearl Buck"
    },
    {
        "text": "Goals are the fuel in the furnace of achievement.",
        "author": "Brian Tracy"
    },
    {
        "text": "Who sows virtue reaps honour.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Be kind whenever possible. It is always possible.",
        "author": "Dalai Lama"
    },
    {
        "text": "Talk doesn't cook rice.",
        "author": "Chinese proverb"
    },
    {
        "text": "He is able who thinks he is able.",
        "author": "Buddha"
    },
    {
        "text": "A goal without a plan is just a wish.",
        "author": "Larry Elder"
    },
    {
        "text": "To succeed, we must first believe that we can.",
        "author": "Michael Korda"
    },
    {
        "text": "Learn from yesterday, live for today, hope for tomorrow.",
        "author": "Albert Einstein"
    },
    {
        "text": "A weed is no more than a flower in disguise.",
        "author": "James Lowell"
    },
    {
        "text": "Do, or do not. There is no try.",
        "author": "Yoda"
    },
    {
        "text": "All serious daring starts from within.",
        "author": "Harriet Beecher Stowe"
    },
    {
        "text": "The best teacher is experience learned from failures.",
        "author": "Byron Pulsifer"
    },
    {
        "text": "Think how hard physics would be if particles could think.",
        "author": "Murray Gell-Mann"
    },
    {
        "text": "Love is the flower you've got to let grow.",
        "author": "John Lennon"
    },
    {
        "text": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Time is the wisest counsellor of all.",
        "author": "Pericles"
    },
    {
        "text": "You give before you get.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Wisdom begins in wonder.",
        "author": "Socrates"
    },
    {
        "text": "Without courage, wisdom bears no fruit.",
        "author": "Baltasar Gracian"
    },
    {
        "text": "Change in all things is sweet.",
        "author": "Aristotle"
    },
    {
        "text": "What you fear is that which requires action to overcome.",
        "author": "Byron Pulsifer"
    },
    {
        "text": "When performance exceeds ambition, the overlap is called success.",
        "author": "Cullen Hightower"
    },
    {
        "text": "When deeds speak, words are nothing.",
        "author": "African proverb"
    },
    {
        "text": "Real magic in relationships means an absence of judgement of others.",
        "author": "Wayne Dyer"
    },
    {
        "text": "I never think of the future. It comes soon enough.",
        "author": "Albert Einstein"
    },
    {
        "text": "Skill to do comes of doing.",
        "author": "Ralph Emerson"
    },
    {
        "text": "Wisdom is the supreme part of happiness.",
        "author": "Sophocles"
    },
    {
        "text": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
    },
    {
        "text": "Important principles may, and must, be inflexible.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "The undertaking of a new action brings new strength.",
        "author": "Richard Evans"
    },
    {
        "text": "The years teach much which the days never know.",
        "author": "Ralph Emerson"
    },
    {
        "text": "Our distrust is very expensive.",
        "author": "Ralph Emerson"
    },
    {
        "text": "All know the way; few actually walk it.",
        "author": "Bodhidharma"
    },
    {
        "text": "Great talent finds happiness in execution.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Faith in oneself is the best and safest course.",
        "author": "Michelangelo"
    },
    {
        "text": "Courage is going from failure to failure without losing enthusiasm.",
        "author": "Winston Churchill"
    },
    {
        "text": "The two most powerful warriors are patience and time.",
        "author": "Leo Tolstoy"
    },
    {
        "text": "Anticipate the difficult by managing the easy.",
        "author": "Lao Tzu"
    },
    {
        "text": "Those who are free of resentful thoughts surely find peace.",
        "author": "Buddha"
    },
    {
        "text": "A short saying often contains much wisdom.",
        "author": "Sophocles"
    },
    {
        "text": "Society develops wit, but its contemplation alone forms genius.",
        "author": "Madame de Stael"
    },
    {
        "text": "The simplest things are often the truest.",
        "author": "Richard Bach"
    },
    {
        "text": "Only do what your heart tells you.",
        "author": "Princess Diana"
    },
    {
        "text": "Life is movement-we breathe, we eat, we walk, we move!",
        "author": "John Pierrakos"
    },
    {
        "text": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Argue for your limitations, and sure enough theyre yours.",
        "author": "Richard Bach"
    },
    {
        "text": "Luck is what happens when preparation meets opportunity.",
        "author": "Seneca"
    },
    {
        "text": "Victory belongs to the most persevering.",
        "author": "Napoleon Bonaparte"
    },
    {
        "text": "Love all, trust a few, do wrong to none.",
        "author": "William Shakespeare"
    },
    {
        "text": "In order to win, you must expect to win.",
        "author": "Richard Bach"
    },
    {
        "text": "A goal is a dream with a deadline.",
        "author": "Napoleon Hill"
    },
    {
        "text": "You can do it if you believe you can!",
        "author": "Napoleon Hill"
    },
    {
        "text": "Set your goals high, and don't stop till you get there.",
        "author": "Bo Jackson"
    },
    {
        "text": "Yesterday I dared to struggle. Today I dare to win.",
        "author": "Bernadette Devlin"
    },
    {
        "text": "Smile, breathe, and go slowly.",
        "author": "Thich Nhat Hanh"
    },
    {
        "text": "Nobody will believe in you unless you believe in yourself.",
        "author": "Liberace"
    },
    {
        "text": "Do more than dream: work.",
        "author": "William Arthur Ward"
    },
    {
        "text": "No man was ever wise by chance.",
        "author": "Seneca"
    },
    {
        "text": "No alibi will save you from accepting the responsibility.",
        "author": "Napoleon Hill"
    },
    {
        "text": "He that is giddy thinks the world turns round.",
        "author": "William Shakespeare"
    },
    {
        "text": "Don't ruin the present with the ruined past.",
        "author": "Ellen Gilchrist"
    },
    {
        "text": "Do something wonderful, people may imitate it.",
        "author": "Albert Schweitzer"
    },
    {
        "text": "If you can dream it, you can do it.",
        "author": "Walt Disney"
    },
    {
        "text": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "If you cannot be silent be brilliant and thoughtful.",
        "author": "Byron Pulsifer"
    },
    {
        "text": "Who looks outside, dreams; who looks inside, awakes.",
        "author": "Carl Jung"
    },
    {
        "text": "What we think, we become.",
        "author": "Buddha"
    },
    {
        "text": "The shortest answer is doing.",
        "author": "Lord Herbert"
    }
];
const blockquote = document.querySelector('.blockquote');
const figcaption = document.querySelector('.figcaption');
const quoteBtn = document.querySelector('.quoteBtn');

 function getQuote() {
   let quote = quotes[Math.floor(Math.random() * quotes.length)];
    blockquote.textContent = quote.text;
    figcaption.textContent = quote.author;
}
document.addEventListener('DOMContentLoaded', getQuote);
quoteBtn.addEventListener('click', getQuote);



// WEATHER

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const speed = document.querySelector('.speed');
const err = document.querySelector('.err');
const weatherInfo = document.querySelector('.weather-info');
let error;

async function getWeather() {
    if (localStorage.getItem('city') === null) {
        city.textContent = 'Минск';
    } else {
        city.textContent = localStorage.getItem('city');
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=61d682ad500d78deffe13e76115885a1&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.weather === undefined) {
        if (!err.classList.contains('visibility')) {
            err.classList.add('visibility');
        }
        if (!weatherInfo.classList.contains('hidden')) {
            weatherInfo.classList.add('hidden');
        }
        error = true;
        localStorage.setItem('city', 'Минск');
        city.textContent = '';
        city.focus();
    } else {
        if (err.classList.contains('visibility')) {
            err.classList.remove('visibility');
        }
        if (weatherInfo.classList.contains('hidden')) {
            weatherInfo.classList.remove('hidden');
        }
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity}%`;
        speed.textContent = `${data.wind.speed} m/s`;
        error = false;
    };

}

function setCity(e) {
    let cityText;
    if (e.type === 'keypress') {
        if( e.target.innerText === localStorage.getItem('city') && !error) {
            cityText = e.target.innerText;
            e.target.innerText = '';
        } else if (e.target.innerText === 'Минск') {
            e.target.innerText = '';
        }
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (e.target.innerText === '') {
                if (cityText != undefined){
                    city.textContent = cityText;
                } else city.textContent = 'Минск';
            } else localStorage.setItem('city', e.target.innerText);
            city.blur();
            getWeather();
        }
    } else {
        if (e.target.innerText === '') {
            if (cityText != undefined){
                city.textContent = cityText;
            } else focus.textContent = 'Минск';
        } else localStorage.setItem('city', e.target.innerText);
    }

}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);

getImage();
setInterval(showTime, 1000);
setInterval(showDay, 1000);
setInterval(showGreeting, 1000);
setInterval(showImage, 1000);
getName();
getFocus();

