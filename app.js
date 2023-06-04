import showHabitsOptions from "./src/showHabitsOptions.js";
import toggleHabitStatus from "./src/toggleHabitStatus.js";
import {
  goToHabitView,
  goToStartView,
  goToSetHabit,
} from "./src/appManipulation.js";

const setHabitBtn = document.querySelector(".set-btn");
const selectBtn = document.querySelector(".select-btn");
const backBtns = document.querySelectorAll(".back-btn");
const addBtn = document.querySelector(".add-btn");

export const habitView = document.querySelector(".habit");
export const settingHabitView = document.querySelector(".setting-habit");
export const startView = document.querySelector(".start-view");
export const habitsToChooseBox = document.querySelector(
  ".start-view__habitsToChoose"
);

backBtns.forEach((btn) => {
  if (btn.parentElement.classList.contains("setting-habit")) {
    btn.addEventListener("click", () => goToStartView(settingHabitView));
  }
  if (btn.parentElement.classList.contains("habit")) {
    btn.addEventListener("click", () => {
      goToStartView(habitView);
      const habitBoxes = document.querySelectorAll(".habit-box");
      habitBoxes.forEach((box) => box.classList.add("hidden"));
    });
  }
});

setHabitBtn.addEventListener("click", goToSetHabit);
addBtn.addEventListener("click", goToHabitView);
selectBtn.addEventListener("click", showHabitsOptions);
habitView.addEventListener("click", toggleHabitStatus);
