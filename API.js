/* Name : Mohammed Almadani */
/* ID : 2140206 */
/* Assignment : 02 */

document
  .getElementsByClassName("buttons")[0]
  .addEventListener("click", gitInfo);

function gitInfo() {
  const crypto = document
    .getElementById("crypto-name")
    .value.trim()
    .split(" ")
    .join("")
    .toLowerCase();

  if (crypto.match("[a-z]+")) {
    const endPoint = "https://api.coincap.io/v2/assets/" + crypto;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endPoint);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const name = response.data.name;
        const nameEle = document.createElement("p");
        nameEle.textContent = "Name : " + name;

        const symbol = response.data.symbol;
        const symbolEle = document.createElement("p");
        symbolEle.textContent = "Symbol : " + symbol;

        const price = response.data.priceUsd;
        const priceEle = document.createElement("p");
        priceEle.textContent = "Price(USD) : " + price + " $";

        const change24h = response.data.changePercent24Hr;
        const change24hEle = document.createElement("p");
        change24hEle.textContent =
          "Percent Change Last 24h : " + change24h + "%";

        const volume24 = response.data.volumeUsd24Hr;
        const volume24Ele = document.createElement("p");
        volume24Ele.textContent = "Volume Last 24h : " + volume24;

        const rank = response.data.rank;
        const rankEle = document.createElement("p");
        rankEle.textContent = "Rank In Market : " + rank;

        const marketCap = response.data.marketCapUsd;
        const marketCapEle = document.createElement("p");
        marketCapEle.textContent = "Market Cap (USD) : " + marketCap + " $";

        const errMassege = document.getElementsByClassName("informations")[0];
        errMassege.textContent = "";
        errMassege.appendChild(nameEle);
        errMassege.appendChild(symbolEle);
        errMassege.appendChild(priceEle);
        errMassege.appendChild(marketCapEle);
        errMassege.appendChild(rankEle);
        errMassege.appendChild(change24hEle);
        errMassege.appendChild(volume24Ele);
      } else {
        err("An error occured while fetching Crypto data.");
      }
    };

    xhr.onerror = function () {
      err("An error occured while fetching Crypto data.");
    };

    xhr.send();
  } else {
    err("Make sure you have entered the correct value (Example:bitcoin)");
  }
}
function err(error) {
  const massege = document.createElement("p");

  massege.textContent = error;
  massege.classList.add("p");
  const errMassege = document.getElementsByClassName("informations")[0];
  errMassege.textContent = "";
  errMassege.appendChild(massege);
}
