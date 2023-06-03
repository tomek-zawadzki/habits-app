import { settingHabit } from "./src/settingHabit.js";
import toggleHabitStatus from "./toggleHabitStatus.js";
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
export const habitsToChooseBox = document.querySelector(
  ".start-view__habitsToChoose"
);

backBtns.forEach((btn) => {
  if (btn.parentElement.classList.contains("setting-habit")) {
    btn.addEventListener("click", () => goToStartView(settingHabitView));
  }
  if (btn.parentElement.classList.contains("week")) {
    btn.addEventListener("click", () => goToStartView(habitView));
  }
});

const showHabitOptions = () => {
  console.log(habitsToChooseBox.children);
  if (habitsToChooseBox.children.length === 0) {
    alert("You do not have habits to choose");
  } else {
    habitsToChooseBox.style.display = "flex";
  }
};

setHabitBtn.addEventListener("click", goToSetHabit);
addBtn.addEventListener("click", goToHabitView);
selectBtn.addEventListener("click", showHabitOptions);
habitView.addEventListener("click", toggleHabitStatus);
