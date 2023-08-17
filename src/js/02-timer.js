 import { Notify } from 'notiflix/build/notiflix-notify-aio';
 import flatpickr from "flatpickr";
 import "flatpickr/dist/flatpickr.min.css";

const el = {
  inputEl :document.querySelector('#datetime-picker'),
  buttonStart : document.querySelector('[data-start]'),
  dayEl : document.querySelector('[data-days]'),
  hourEl :document.querySelector('[data-hours]'),
  minuteEl: document.querySelector('[data-minutes]'),
  secondsEl :document.querySelector('[data-seconds]')
}
const date = new Date();
el.buttonStart.disabled = true;


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
      console.log(selectedDates[0]);
    },
  };
  flatpickr(el.inputEl, options);