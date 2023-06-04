import { habitView, habitsToChooseBox } from "../app.js";

const habitTitleInput = document.querySelector(".title-input");
const habitStartDateInput = document.querySelector(".date-input");
const habitDaysAmountInput = document.querySelector(".days-amount-input");

const date = new Date();
const currYear = date.getFullYear();
const currMonth = date.getMonth();
const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

let habitsArray = [];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const renderHabitContainer = () => {
  if (!habitView.firstElementChild.classList.contains("back-btn")) {
    habitView.firstElementChild.remove();
  }
  const html = `
  
              <div class="habit-box">
              <div class="habit-box__header">
                <h2 class="habit-box__header--title">${habitTitleInput.value}</h2>
                <div class="habit-box__header--details">
                <span>Start date: ${habitStartDateInput.value}</span>
                <span>Number of days: ${habitDaysAmountInput.value}</span>
                </div>
                </div>
                <div class="habit-box__container">
                <div class="controllers">
                    <div class="controllers__first-line">
                        <button class="controllers__prev-btn">&lt; Previous</button>
                        <span class="controllers__month">${months[currMonth]}</span>
                        <button class="controllers__next-btn">Next &gt;</button>
                    </div>
                    <span class="controllers__status">0/${habitDaysAmountInput.value}</span>
                    </div>
                    <div class="days">
                    <div class="days__info">
                        <p class="days__info--element">day</p>
                        <p class="days__info--element"></p>
                        <p class="days__info--element">status</p>
                    </div>
                    <ul class="days__list">
                      
                    </ul>
                    </div>
               </div> 
               </div>
      `;
  habitView.insertAdjacentHTML("afterbegin", html);

  const habitObject = createHabitObject();
  habitsArray.push(habitObject);
  pushHabitToChooseBtn();
};

export const renderHabitCalendar = () => {
  const daysList = document.querySelector(".days__list");
  if (!daysList) return;

  let currentDay = new Date(currYear, currMonth, 1);

  for (let i = 1; i <= lastDateofMonth; i++) {
    const dayOfWeek = days[currentDay.getDay()];

    const day = `
        <li class="days__day">
        <span class="days__day--number">${i}</span>
        <p class="days__day--name">${dayOfWeek}</p>
        <button class="days__day--status"></button>
        </li>
        `;

    daysList.insertAdjacentHTML("beforeend", day);

    currentDay.setDate(currentDay.getDate() + 1);
  }
};

const createHabitObject = () => {
  return {
    title: habitTitleInput.value,
    startData: habitStartDateInput.value,
    numberOfDays: habitDaysAmountInput.value,
  };
};

const pushHabitToChooseBtn = () => {
  const lastIndex = habitsArray.length - 1;
  const newHabitBtn = document.createElement("button");
  newHabitBtn.classList.add("habit-option");
  newHabitBtn.textContent = habitsArray[lastIndex].title;
  habitsToChooseBox.appendChild(newHabitBtn);
};
