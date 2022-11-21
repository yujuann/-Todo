const quotes = [
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
  },
  {
    quote:
      "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
    author: "박명수",
  },
  {
    quote: "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라",
    author: "명수박",
  },
];

const quote = document.querySelector("#advice span:first-child");
const author = document.querySelector("#advice span:last-child");

const latte = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = latte.quote;
author.innerText = latte.author;
