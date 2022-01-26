//***Note to Hiring Manager***
//Using JS fetch to pull data from the JSON file - see request.js
import { getOffer } from "./request";

//Subscribe Feature
const subMessage = document.getElementById("subscribeMessage");
const subLink = document.getElementById("subscribeLink");

const activateSubscription = () => {
  subMessage.textContent = "Thank you for subscribing!";
  subMessage.classList.add("copy--confirm-subscription");

  sessionStorage.setItem("subscription", "true");
};

const checkSubscription = () => {
  if (sessionStorage.getItem("subscription") === "true") {
    activateSubscription();
  }
};

checkSubscription();

subLink.addEventListener("click", activateSubscription);

//Annual Savings Feature
//Formula: 12 x (Monthly-Spending) x 0.03 = Annual-Savings
let spendings = document.getElementById("spendings");
let savings = document.getElementById("savings");

spendings.addEventListener("change", () => {
  //prettier-ignore
  let result = ((12 * parseFloat(spendings.value)) * 0.03);

  if (result >= 100 || result === 0) {
    result = result.toFixed(0);
  } else {
    result = result.toFixed(2);
  }

  savings.value = !isNaN(result) ? `$${result}` : "$0";
  savings.classList.add("textAnimate");
  setTimeout(() => {
    savings.classList.remove("textAnimate");
  }, 1000);
});
