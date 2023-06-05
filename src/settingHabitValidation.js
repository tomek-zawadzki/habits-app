import {
  habitDaysAmountInput,
  habitStartDateInput,
  habitStartDateInput,
  habitTitleInput,
} from "./renderHabitCalendar.js";

import { goToHabitView } from "./appManipulation.js";

const settingHabitValidation = () => {
  if (
    habitDaysAmountInput.value <= 0 ||
    habitStartDateInput.value === "" ||
    habitTitleInput.value === ""
  ) {
    alert("all fields must be filled");
  } else {
    goToHabitView();
  }
};

export default settingHabitValidation;
