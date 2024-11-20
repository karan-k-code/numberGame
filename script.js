const numberText = document.getElementById("number_text");
const sendButton = document.getElementById("send_button");
const number = document.getElementById("number");
const message = document.getElementById("message");

const next = () => {
  numberM = getRandomIntInclusive(1, 10);
  number.innerText = numberM;
};

let numberM;
next();

sendButton.addEventListener("click", () => {
  const search = numberData.find((x) => x.num == numberM);
  const text = numberText.value;

  message.style.display = "flex";

  if (search.text === text.toLowerCase()) {
    successMessage();
    numberText.value = "";
    setTimeout(() => {
      message.style.display = "none";
    }, 1000);
    next();
  } else {
    rongeMessage(search.text);
    numberText.value = "";
    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
  }
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const successMessage = () => {
  message.innerHTML = `<span>
        <i class="fa-solid fa-check"></i>
      </span>`;
};

const rongeMessage = (mes) => {
  message.innerHTML = `<span>
    <i class="fa-solid fa-xmark"></i>
  </span>
  <p> write word is </p>;
  <h1>'${mes}'</h1>`;
};
