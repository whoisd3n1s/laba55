// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme.getAttribute("href") == "css/style1.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "css/dark-theme3.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "css/style1.css";
  }
});