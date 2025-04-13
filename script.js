// Проверяем, есть ли кнопка смены темы на странице
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    // Переключаем класс у body
    document.body.classList.toggle("dark-theme");

    // Можно сохранить выбор темы в localStorage, чтобы сохранялось между страницами
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// При загрузке страницы проверяем сохранённую тему
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
