let inputbox = document.querySelector(".inputbox");
let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let converters = document.querySelector(".converters");
let main = document.querySelector(".box");

main.style.transition = ".3s";
celsius.addEventListener("click", () => {
  let b = inputbox.value;
  let cel = parseFloat(((b - 32) * 5) / 9).toFixed(2);
  converters.innerHTML = `${b} F = ${cel} °C`;
  if (b <= -32) {
    main.style.background = "#368BC1";
  } else if (b >= 35) {
    main.style.background = "red";
  } else {
    main.style.background = "#ADD8E6";
  }
});
//var num2 = parseFloat("10.547892").toFixed(2)
fahrenheit.addEventListener("click", () => {
  let be = inputbox.value;
  let fah = parseFloat((9 / 5) * be + 32).toFixed(2); //9/5°C + 32
  converters.innerHTML = `${be} °C= ${fah} F`;
  if (be <= -26) {
    main.style.background = "#368BC1";
  } else if (be >= 95) {
    main.style.background = "red";
  } else {
    main.style.background = "#ADD8E6";
  }
});
