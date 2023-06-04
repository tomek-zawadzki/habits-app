const toggleHabitStatus = (event) => {
  const { target } = event;
  if (target.classList.contains("days__day--status")) {
    toggleClass(target, "status-active", "days__day--status");
  } else if (target.classList.contains("status-active")) {
    toggleClass(target, "status-stop", "status-active");
  } else if (target.classList.contains("status-stop")) {
    toggleClass(target, "days__day--status", "status-stop");
  }
};

const toggleClass = (element, addClass, removeClass) => {
  element.classList.remove(removeClass);
  element.classList.add(addClass);
};

export default toggleHabitStatus;
