function laskeUlosotto(nettopalkka) { // Huomio! Huomaa että laskuun tarvitaan nettopalkka eikä bruttopalkka
  const suojaraja = 922.5; // suojaraja ilman korotuksia.
  const perhekorotus = 269.7; // korotus jokaisesta huollettavasta henkilöstä (yleensä lapsi)

  let ulosotto = 0;
  if (nettopalkka > suojaraja) {
    ulosotto = (nettopalkka - suojaraja) * 0.3;
  }
  return ulosotto;
}

// esimerkki(suunnilleen keskituloisen suomalaisen nettopalkka)
const nettopalkka = 2600; // käyttäjän syöttämä nettopalkka
const ulosotto = laskeUlosotto(nettopalkka);
console.log(`Ulosotto vie nettopalkasta ${ulosotto.toFixed(2)} euroa.`);
