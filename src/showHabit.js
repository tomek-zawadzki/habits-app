import { startView, habitView } from "../app";

const showHabit = () => {
  const habitOptionsBtns = document.querySelectorAll(".habit-option");
  const habitBoxes = document.querySelectorAll(".habit-box");
  habitOptionsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      habitBoxes.forEach((box) => {
        const h2 = box.querySelector("h2"); // co
        if (btn.textContent === h2.textContent) {
          box.classList.remove("hidden");
          startView.style.display = "none";
          habitView.style.display = "flex";
        }
      });
    });
  });
};

export default showHabit;
