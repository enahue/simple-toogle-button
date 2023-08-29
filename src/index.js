const toggleButton = document.querySelector(".toggle-button");
const toggleSelector = document.querySelector(".toggle-selector");

toggleButton.addEventListener("click", () => {
  const isNight = toggleSelector.style.transform === "translateX(40px)";
  const newPosition = isNight ? "translateX(0px)" : "translateX(40px)";
  const changeBackground = isNight ? "#F9E7B3" : "#191528";
  document.body.style.backgroundColor = changeBackground;
  toggleSelector.style.transform = newPosition;
});
