import { habitsToChooseBox } from "../app.js";
import showHabit from "./showHabit.js";

const showHabitsOptions = () => {
  if (habitsToChooseBox.children.length === 0) {
    alert("You do not have habits to choose");
  } else {
    habitsToChooseBox.classList.toggle("active");
    showHabit();
  }
};

export default showHabitsOptions;
