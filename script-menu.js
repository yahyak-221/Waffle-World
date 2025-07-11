// Dark mode toggle
const toggleTheme = document.getElementById("toggle-theme");
if (toggleTheme) {
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// FAQ slide toggle
document.querySelectorAll(".ww-faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isActive = answer.classList.contains("active");

    document.querySelectorAll(".ww-faq-answer").forEach((ans) => {
      ans.classList.remove("active");
      ans.style.maxHeight = null;
    });

    if (!isActive) {
      answer.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
