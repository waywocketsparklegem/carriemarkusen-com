/*
  carriemarkusen.com: the boot screen. Types the welcome line and asks for the password.
  Copied from carriemarkusen.net's boot screen. Here the right password just says "coming soon."
*/

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// The password typed at the boot screen. This is for show: anyone can read it here in the page source.
const password = ":)";

async function runBoot() {
  const boot = document.getElementById("boot");
  const text = document.getElementById("boot-text");
  const login = document.getElementById("boot-login");
  const input = document.getElementById("boot-password");
  const message = document.getElementById("boot-message");
  const cursor = document.getElementById("boot-cursor");

  // Type the welcome line one character at a time, with a little human unevenness.
  await wait(700);
  for (const char of text.dataset.text) {
    text.textContent += char;
    await wait(40 + Math.random() * 40);
  }
  await wait(400);

  // Show the password prompt and move the cursor down to it.
  login.classList.add("is-visible");
  login.appendChild(cursor);
  input.focus({ preventScroll: true });

  // Clicking or tapping anywhere puts the typing back in the password field.
  boot.addEventListener("click", () => input.focus({ preventScroll: true }));

  // Keep the field as wide as what's been typed, so the cursor sits right after it.
  const fitInput = () => { input.style.width = `${input.value.length}ch`; };
  input.addEventListener("input", fitInput);
  fitInput();

  // The right password says "coming soon."; anything else is denied. Either way the field clears.
  login.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = input.value === password ? "coming soon." : "access denied. try again.";
    input.value = "";
    fitInput();
  });
}

runBoot();
