const dayEl=document.getElementById("days");
const monthEl=document.getElementById("month");
const yearEl=document.getElementById("year");
const hourEl=document.getElementById("hours");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");
const duedaysEl = document.getElementById("dueday");

function getDifferenceInDays(date1, date2) {        
    const diffInMs = Math.abs(date2 - date1);    
    return diffInMs / (1000 * 60 * 60 * 24);
  }

function updateClock(){
    let d = new Date().getDate();
    let mn = new Date().getMonth()+1;
    let y = new Date().getFullYear();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    const date1 = new Date(y,mn,d);
    const date2 = new Date(2024,12,31);
    let duedays = getDifferenceInDays(date1,date2)

    if(h > 12){        
        ampm = "PM";
    }

    d = d < 10 ? "0" + d : d;
    mn = mn < 10 ? "0" + mn : mn;
    duedays = duedays < 10 ? "0" + duedays : duedays;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    dayEl.innerText = d;
    duedaysEl.innerText = duedays;
    monthEl.innerText = mn;
    yearEl.innerText = y;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>updateClock(), 1000);
}
updateClock();
