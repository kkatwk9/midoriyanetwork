// курсор‑аура
const cursorGlow = document.getElementById("cursorGlow");
if (cursorGlow) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.transform = `translate3d(${e.clientX - 140}px, ${e.clientY - 140}px, 0)`;
  });
}

// параллакс для элементов с классом .parallax
const parallaxElems = document.querySelectorAll(".parallax");
if (parallaxElems.length) {
  window.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5);
    const y = (e.clientY / innerHeight - 0.5);

    parallaxElems.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "4");
      const moveX = -x * speed * 4;
      const moveY = -y * speed * 4;
      el.style.transform =
        `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${y * 6}deg) rotateY(${x * 8}deg)`;
    });
  });
}

// копирование IP
const copyIpBtn = document.getElementById("copyIpBtn");
const serverIpEl = document.getElementById("serverIp");

if (copyIpBtn && serverIpEl) {
  copyIpBtn.addEventListener("click", async () => {
    const ip = serverIpEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(ip);
      const oldText = copyIpBtn.textContent;
      copyIpBtn.textContent = "IP скопирован!";
      copyIpBtn.classList.add("btn-success");
      setTimeout(() => {
        copyIpBtn.textContent = oldText;
        copyIpBtn.classList.remove("btn-success");
      }, 1800);
    } catch (err) {
      console.error(err);
    }
  });
}
