import { habitView, habitsToChooseBox } from "../app.js";
import toggleHabitStatus from "./toggleHabitStatus.js";

export const habitTitleInput = document.querySelector(".title-input");
export const habitStartDateInput = document.querySelector(".date-input");
export const habitDaysAmountInput =
  document.querySelector(".days-amount-input");

// const date = new Date();
// const currYear = date.getFullYear();
// const currMonth = date.getMonth();
// const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
const currentDate = new Date();

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
  const html = `
              <div class="habit-box">
             
                <div class="habit-box__container">
                <div class="controllers">
                    <div class="controllers__first-line">
                        <button class="controllers__prev-btn">&lt; Previous</button>
                        <span class="controllers__month">${
                          months[currentDate.getMonth()]
                        }</span>
                        <button class="controllers__next-btn">Next &gt;</button>
                    </div>
                    <span class="controllers__status"><span class="counted-active-days">0</span>/${
                      habitDaysAmountInput.value
                    }</span>
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

  // const nextMonthBtn = document.querySelector(".controllers__next-btn");

  // nextMonthBtn.addEventListener("click", () => {
  //   currentDate.setMonth(currentDate.getMonth() + 1);
  //   const lastDateofMonth = new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth() + 1,
  //     0
  //   ).getDate();

  //   console.log(months[currentDate.getMonth()]);
  //   console.log(months[currentDate.getMonth() + 1]);

  //   const html = `
  //     <div class="habit-box">
  //     <div class="habit-box__container">
  //     <div class="controllers">
  //     <div class="controllers__first-line">
  //     <button class="controllers__prev-btn">&lt; Previous</button>
  //     <span class="controllers__month">${months[currentDate.getMonth()]}</span>
  //     <button class="controllers__next-btn">Next &gt;</button>
  //     </div>
  //     <span class="controllers__status">0/${habitDaysAmountInput.value}</span>
  //     </div>
  //     <div class="days">
  //     <div class="days__info">
  //     <p class="days__info--element">day</p>
  //     <p class="days__info--element"></p>
  //     <p class="days__info--element">status</p>
  //     </div>
  //     <ul class="days__list">

  //     </ul>
  //     </div>
  //     </div>
  //     </div>
  //     `;
  //   habitView.insertAdjacentHTML("beforeend", html);
  //   renderHabitCalendar();
  // });
};

export const renderHabitHeader = () => {
  const habitBox = document.querySelector(".habit-box");
  const html = `
    <div class="habit-box__header">
      <h2 class="habit-box__header--title">${habitTitleInput.value}</h2>
      <div class="habit-box__header--details">
        <span>Start date: ${habitStartDateInput.value}</span>
        <span>Number of days: ${habitDaysAmountInput.value}</span>
      </div>
    </div>
`;

  habitBox.insertAdjacentHTML("afterbegin", html);
  const habitObject = createHabitObject();
  habitsArray.push(habitObject);
  pushHabitToChooseBtn();
};

export const renderHabitCalendar = () => {
  const daysList = document.querySelector(".days__list");
  if (!daysList) return;

  let currentDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDateofMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

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
