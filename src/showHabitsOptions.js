import { habitsToChooseBox } from "../app.js";

const showHabitsOptions = () => {
  if (habitsToChooseBox.children.length === 0) {
    alert("You do not have habits to choose");
  } else {
    habitsToChooseBox.classList.toggle("active");
  }
};

export default showHabitsOptions;
