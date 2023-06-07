import { startView, settingHabitView, habitView } from "../app.js";
import {
  renderHabitContainer,
  renderHabitCalendar,
  renderHabitHeader,
} from "./renderHabitCalendar.js";

export const goToSetHabit = () => {
  changeView(startView, settingHabitView);
};

export const goToStartView = () => {
  changeView(settingHabitView, startView);
};

export const goToHabitView = () => {
  changeView(settingHabitView, habitView);

  renderHabitContainer();
  renderHabitHeader();
  renderHabitCalendar();
};

const changeView = (currentView, goToView) => {
  currentView.style.display = "none";
  goToView.style.display = "flex";
};
