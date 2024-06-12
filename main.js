const adviceId = document.querySelector(".advice-slip-id");
const advice = document.querySelector(".advice-slip-advice");
const button = document.querySelector(".advice-slip-dice");
const parseData = (request) => {
  request
    .then((data) => data.json())
    .then((res) => {
      adviceId.innerHTML = `ADVICE #${res.slip.id}`;
      advice.innerHTML = `"${res.slip.advice}"`;
    });
};
const handleClick = () => {
  const adv = fetch("https://api.adviceslip.com/advice");
  parseData(adv);
};
const data = fetch("https://api.adviceslip.com/advice");
parseData(data);

button.addEventListener("click", handleClick);
