const setHabitBtn = document.querySelector(".set-btn");
const selectBtn = document.querySelector(".select-btn");
const startView = document.querySelector(".start-view");
const settingHabitView = document.querySelector(".setting-habit");

const goToSetHabit = () => {
  startView.style.display = "none";
  settingHabitView.style.display = "flex";
};

setHabitBtn.addEventListener("click", goToSetHabit);
