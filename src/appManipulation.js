import { startView, settingHabitView, habitView } from "../app.js";
import settingHabitValidation from "./settingHabitValidation.js";

import {
  renderHabitContainer,
  renderHabitCalendar,
  renderHabitHeader,
} from "./renderHabitCalendar.js";

export const goToSetHabit = () => {
  startView.style.display = "none";
  settingHabitView.style.display = "flex";
};

export const goToStartView = (view) => {
  view.style.display = "none";
  startView.style.display = "flex";
};

export const goToHabitView = () => {
  settingHabitView.style.display = "none";
  habitView.style.display = "flex";

  renderHabitContainer();
  renderHabitHeader();
  renderHabitCalendar();
};
