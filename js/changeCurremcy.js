export default async function initChangeCurrency() {
  const currencySelector = document.getElementById("currency");
  const priceElements = document.querySelectorAll(".prices__item-price");

  const pricesUSD = Array.from(priceElements).map((element) => {
    const priceText = element.textContent.trim();
    return parseFloat(priceText.replace("$", ""));
  });

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  const rateProperties = {
    EUR: "eur",
    GBP: "gbp",
  };

  async function fetchExchangeRates() {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
    );
    const data = await response.json();
    return data.usd;
  }

  async function updatePrices(currency) {
    try {
      const rates = await fetchExchangeRates();
      priceElements.forEach((element, index) => {
        const usdPrice = pricesUSD[index];
        const rateProperty = rateProperties[currency];
        const convertedPrice = rateProperty ? (usdPrice * rates[rateProperty]).toFixed(2) : usdPrice.toFixed(2);
        element.textContent = `${currencySymbols[currency]}  ${convertedPrice}`;
      });
    } catch (error) {
      console.error("Error al obtener o procesar los tipos de cambio:", error);
    }
  }

  currencySelector.addEventListener("change", () =>
    updatePrices(currencySelector.value)
  );
  await updatePrices(currencySelector.value);
}
