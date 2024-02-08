async function conectaAPI() {
  const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
  const conectaTraduzido = await conecta.json();
  console.log(conectaTraduzido);
}

setInterval(() => conectaAPI(), 5000);