import { settingHabit } from "./src/settingHabit.js";

const setHabitBtn = document.querySelector(".set-btn");
const selectBtn = document.querySelector(".select-btn");
const backBtns = document.querySelectorAll(".back-btn");
const startView = document.querySelector(".start-view");
const settingHabitView = document.querySelector(".setting-habit");
const addBtn = document.querySelector(".add-btn");
const habitView = document.querySelector(".week");

const goToSetHabit = () => {
  startView.style.display = "none";
  settingHabitView.style.display = "flex";
};

const goToStartView = (view) => {
  view.style.display = "none";
  startView.style.display = "flex";
};

const goToHabitView = () => {
  settingHabitView.style.display = "none";
  habitView.style.display = "flex";
};

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
