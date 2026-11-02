const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

// Interactive idea dispenser: randomized story prompts, no external service needed.
const discoveries = [
  "Accessibility inspires my builds: my bus identification project explored helping blind passengers identify buses and routes.",
  "I like comparing approaches, not just training one model. My hate speech detection work explored classic ML and LSTM.",
  "A practical lesson from AI projects: preprocessing and evaluation deserve as much care as model choice.",
  "I’m curious about the bridge between data and decisions—turning a table of numbers into a useful next step.",
  "I enjoy hardware-plus-software ideas too, including sensor-based concepts for safer environments.",
  "My builder motto: stay curious, test assumptions, and make the result useful to someone."
];
const button = document.querySelector("#dispenseBtn");
const capsule = document.querySelector("#capsule");
const reveal = document.querySelector("#reveal");
const counter = document.querySelector("#counter");
let count = 0;
let lastIndex = -1;
button?.addEventListener("click", () => {
  let index;
  do { index = Math.floor(Math.random() * discoveries.length); } while (discoveries.length > 1 && index === lastIndex);
  lastIndex = index;
  count++;
  capsule.classList.remove("pop");
  void capsule.offsetWidth;
  capsule.classList.add("pop");
  capsule.querySelector("span").textContent = "✦";
  reveal.textContent = discoveries[index];
  counter.textContent = `DISCOVERIES: ${count}`;
  button.textContent = "Dispense another ✦";
});
