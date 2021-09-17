function timer(){
    const currentDate  = new Date();
    const newYearDate = new Date("1 Jan 2022");
    const total_sec =(newYearDate - currentDate)/1000;
    

    const day = Math.floor(total_sec/3600/24);
    const hours = Math.floor(total_sec/3600)%24;
    const mins = Math.floor(total_sec/60)%60;
    const secs = Math.floor(total_sec)%60;

    document.getElementById('day').innerHTML=day;
    document.getElementById('hour').innerHTML=format_time(hours);
    document.getElementById('min').innerHTML=format_time(mins);
    document.getElementById('sec').innerHTML=format_time(secs);
}
function format_time(time){
    return time <10 ? (`0${time}`) : time;
}

setInterval(timer, 1000);