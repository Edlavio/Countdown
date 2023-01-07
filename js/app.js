const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const launch = "18 Oct 2023";

function countdown() {
  const launchDate = new Date(launch);
  const currentDate = new Date();

  const totalSeconds = (launchDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  day.innerHTML = days;
  hour.innerHTML = formatTime(hours);
  minute.innerHTML = formatTime(minutes);
  second.innerHTML = formatTime(seconds);
};

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
};

countdown();

setInterval(countdown, 1000);

const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const modal = document.querySelector("dialog");

openBtn.onclick = () => {
  modal.showModal()
}

closeBtn.onclick = () => {
  modal.close()
}