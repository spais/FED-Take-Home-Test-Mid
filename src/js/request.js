//Fetching JSON data from index.json
const getOffer = async () => {
  const response = await fetch("./src/data/index.json");

  if (!response.ok) {
    throw new Error("An error occurred with fetch");
  }

  const data = await response.json();

  return data;
};

getOffer()
  .then((data) => {
    const offerPrice = document.querySelectorAll("span.jsOfferPrice");
    const offerActive = "139";
    const offerInactive = "119";

    for (const prop in data) {
      if (!data[prop]) {
        for (let i = 0; i < offerPrice.length; i++) {
          offerPrice[i].innerText = offerInactive;
        }
      } else {
        for (let i = 0; i < offerPrice.length; i++) {
          offerPrice[i].innerText = offerActive;
        }
      }
    }
  })
  .catch((error) => console.log("Error Message:", error.message));
