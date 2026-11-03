"use strict";

const widthText = document.querySelector("#window-width");
const scrollText = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");
const resetButton = document.querySelector("#reset-button");

// Задание 1. Изменение размера окна (resize)
function updateWidth() {
  if (widthText) {
    widthText.textContent = window.innerWidth;
  }
}
updateWidth(); // Вызов при загрузке скрипта
window.addEventListener("resize", updateWidth);

// Задание 2. Прокрутка страницы (scroll)
function updateScroll() {
  if (scrollText) {
    scrollText.textContent = Math.round(window.scrollY);
  }
}
updateScroll(); // Вызов при загрузке скрипта
window.addEventListener("scroll", updateScroll);

// Задание 3. Активность окна (focus и blur)
window.addEventListener("focus", () => {
  if (focusStatus) {
    focusStatus.textContent = "Активно";
  }
});

window.addEventListener("blur", () => {
  if (focusStatus) {
    focusStatus.textContent = "Неактивно";
  }
});

// Задание 4. Ввод имени (prompt)
if (nameButton) {
  nameButton.addEventListener("click", () => {
    const userName = window.prompt("Введите ваше имя:");

    // Проверяем, что нажата не "Отмена" (null) и строка не пустая после удаления пробелов
    if (userName !== null && userName.trim() !== "") {
      if (greeting) {
        greeting.textContent = `Привет, ${userName.trim()}!`;
      }
    }
  });
}