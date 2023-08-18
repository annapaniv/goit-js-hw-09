import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const el = {
  inputEl: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('[data-start]'),
  dayEl: document.querySelector('[data-days]'),
  hourEl: document.querySelector('[data-hours]'),
  minuteEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]')
}
const currentDate = new Date();
el.buttonStart.disabled = true;
let timerId;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() - currentDate) {
      Notify.failure('Please choose a date in the future');
    } else {
      el.buttonStart.disabled = false;
    }

      el.buttonStart.addEventListener("click", onStartClick);

      function onStartClick() {
        el.inputEl.disabled = true;
        const timerId = setInterval(() => {
        const ms = selectedDates[0].getTime() - currentDate;
        el.dayEl.textContent = addLeadingZero(convertMs(ms).days);
        el.hourEl.textContent = addLeadingZero(convertMs(ms).hours);
        el.minuteEl.textContent = addLeadingZero(convertMs(ms).minutes);
        el.secondsEl.textContent = addLeadingZero(convertMs(ms).seconds);
        if (ms < 1000){
          clearInterval(timerId)
        }
        }, 1000)
      }
  }}


flatpickr(el.inputEl, options);



function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}