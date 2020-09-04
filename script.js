async function fetchBitcoin(url) {
  try {
    const bitcoinResponse = await fetch(url)
    const bitcoinJSON = await bitcoinResponse.json()
  
    const btcPreco = document.querySelector('.btc-preco')
    
    btcPreco.innerText = `R$ ${(bitcoinJSON.BRL.last)}`
  } catch (erro) {
    console.log(erro);
  }
}

fetchBitcoin('https://blockchain.info/ticker')