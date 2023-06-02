import { settingHabit } from "./src/settingHabit.js";
import { toggleStatus } from "./src/renderHabitCalendar.js";
import {
  goToHabitView,
  goToStartView,
  goToSetHabit,
} from "./src/appManipulation.js";

const setHabitBtn = document.querySelector(".set-btn");
const selectBtn = document.querySelector(".select-btn");
const backBtns = document.querySelectorAll(".back-btn");
const addBtn = document.querySelector(".add-btn");
// const habitContainer = document.querySelector();

export const habitView = document.querySelector(".week");
export const settingHabitView = document.querySelector(".setting-habit");
export const startView = document.querySelector(".start-view");

backBtns.forEach((btn) => {
  if (btn.parentElement.classList.contains("setting-habit")) {
    btn.addEventListener("click", () => goToStartView(settingHabitView));
  }
  if (btn.parentElement.classList.contains("week")) {
    btn.addEventListener("click", () => goToStartView(habitView));
  }
});

setHabitBtn.addEventListener("click", goToSetHabit);
addBtn.addEventListener("click", goToHabitView);

if (habitView) {
  habitView.addEventListener("click", (event) => {
    if (event.target.classList.contains("days__day--status")) {
      event.target.classList.remove("days__day--status");
      event.target.classList.add("status-active");
    } else if (event.target.classList.contains("status-active")) {
      event.target.classList.remove("status-active");
      event.target.classList.add("status-stop");
    } else if (event.target.classList.contains("status-stop")) {
      event.target.classList.remove("status-stop");
      event.target.classList.add("days__day--status");
    }
  });
}

// toggleStatus();
