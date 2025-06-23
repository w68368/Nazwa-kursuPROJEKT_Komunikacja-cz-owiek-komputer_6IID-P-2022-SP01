document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Здесь можно добавить логику фильтрации ленты
  });
});

// === Генерация неоновых звезд ===
const starContainer = document.querySelector(".stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const delay = Math.random() * 5;
  const size = Math.random() * 2 + 1;

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDelay = `${delay}s`;

  starContainer.appendChild(star);
}

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.parentElement.remove();
  });
});

// Live preview avatar
const avatarInput = document.getElementById("avatar");
const avatarPreview = document.getElementById("avatar-preview");
avatarInput.addEventListener("change", () => {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => (avatarPreview.src = e.target.result);
    reader.readAsDataURL(file);
  }
});

// Theme toggle
const themeSelect = document.getElementById("theme");
themeSelect.addEventListener("change", (e) => {
  const root = document.documentElement;
  if (e.target.value === "light") {
    root.style.setProperty("--bg-grad-start", "#f3f3f3");
    root.style.setProperty("--bg-grad-end", "#ddd");
    root.style.setProperty("--white", "#1e1e1e");
  } else {
    root.style.setProperty("--bg-grad-start", "#1e1b3a");
    root.style.setProperty("--bg-grad-end", "#2a0d24");
    root.style.setProperty("--white", "#ffffff");
  }
});
