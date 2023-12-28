const button = document.getElementById("btn-random-Quote");
const quoteContainer = document.getElementById("quoteContainer");
const quoteNumber = document.getElementById("quoteNumber");
button.addEventListener("click", () => randomQuote());

async function randomQuote() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let advice = await response.json();
  /* ------------------------------------------------ */
  let h2 = document.createElement("h2");
  quoteContainer.textContent = "";
  quoteNumber.textContent = "";
  quoteContainer.appendChild(h2);
  h2.innerHTML = `"` + advice.slip.advice + `"`;
  let p = document.createElement("p");
  quoteNumber.appendChild(p);
  p.innerHTML = "ADVICE #" + advice.slip.id;
}
