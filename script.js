const day = document.querySelector('.today')
const DayMonth = document.querySelector('.month-name');
const year = document.querySelector('.year');
const NumMonth = document.querySelector('.month-num')
const hour = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const wk = document.querySelector('.weekend');

function DateZone() {
    const time = new Date()
    const today = time.getDate();
    const week = time.getDay();
    const monthNum = time.getMonth() + 1;
    const month = time.getMonth();
    const yearNum = time.getFullYear();
    const oclock = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    day.innerHTML = today
    NumMonth.innerHTML = monthNum
    year.innerHTML = yearNum
    hour.innerHTML = oclock
    minutes.innerHTML = minute
    seconds.innerHTML = second
    
    if(second < 10){
        seconds.innerHTML =  `0` + second;
    }
    if(minute < 10){
        minutes.innerHTML =  `0` + minute;
    }
    if(oclock < 10){
        hour.innerHTML =  `0` + oclock;
    }
    if(monthNum < 10){
        NumMonth.innerHTML =  `0` + monthNum;
    }
   

    switch(month){
        case 0 : DayMonth.innerHTML = 'January' ;
        break;
        case 1 : DayMonth.innerHTML = 'February' ;
        break;
        case 2 : DayMonth.innerHTML = 'March' ;
        break;
        case 3 : DayMonth.innerHTML = 'April' ;
        break;
        case 4 : DayMonth.innerHTML = 'May' ;
        break;
        case 5 : DayMonth.innerHTML = 'June' ;
        break;
        case 6 : DayMonth.innerHTML = 'July' ;
        break;
        case 7 : DayMonth.innerHTML = 'August' ;
        break;
        case 8 : DayMonth.innerHTML = 'September' ;
        break;
        case 9 : DayMonth.innerHTML = 'October' ;
        break;
        case 10 : DayMonth.innerHTML = 'November' ;
        break;
        case 11 : DayMonth.innerHTML = 'December' ;
        break;
    }
    switch(week){
        case 0: week.innerHTML = 'Sunday' ;
        break;
        case 1 : wk.innerHTML = 'Monday' ;
        break;
        case 2 : wk.innerHTML = 'Thuesday' ;
        break;
        case 3 : wk.innerHTML = 'Wednesday' ;
        break;
        case 4 : wk.innerHTML = 'Thursday';
        break;
        case 5 : wk.innerHTML = 'Friday' ;
        break;
        case 6 : wk.innerHTML = 'Sanday' ;
        break;
    }
}

DateZone()
setInterval(DateZone, 1000);

const tel = document.querySelector('.tel');
tel.value = '+998'

const ip = document.querySelector('.ip');
const country = document.querySelector('.country')
$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback:"geoip",
    success: function(data) {
      ip.innerHTML = data.ip;
      country.innerHTML = data.country;
    }
  });