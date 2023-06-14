const countActiveDays = () => {
  const statusBtn = document.querySelectorAll(".days__day > button");

  const activeDays = [...statusBtn].filter((btn) =>
    btn.classList.contains("status-active")
  );
  const countedActiveDays = document.querySelector(".counted-active-days");
  countedActiveDays.textContent = activeDays.length;
};

export default countActiveDays;
