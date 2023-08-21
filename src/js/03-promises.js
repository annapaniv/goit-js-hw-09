import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

const { delay, step, amount } = form.elements;
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {

  let firstDelay = Number(delay.value);
  let stepTime = Number(step.value);
  let count = Number(delay.value);


  for (let i = 1; i <= Number(amount.value); i += 1) {
    setTimeout(() => {

      let promise = createPromise(i, (count));
      promise.then((value) => { Notify.success(value)})
        .catch((error) => { Notify.failure(error) });
      count += stepTime;

    }, firstDelay);
    firstDelay += stepTime;
  };
  evt.preventDefault();

};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      resolve(`Fulfilled promise ${position} in ${delay}`)
    })
  } else {
    return new Promise((resolve, reject) => {
      reject(`Rejected promise ${position} in ${delay}`)
    })
  }
}