import { settingHabit } from "./src/settingHabit.js";
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
// backBtn.addEventListener("click", () => goToStartView(settingHabitView));

addBtn.addEventListener("click", goToHabitView);
