const url = 'https://currency.irahe.com.br/';

fetch(url)
.then(function(res){
  return res.json()
})
.then(function(data){
  const usd = data.currency.USD;
  const cad = data.currency.CAD;
  const eur = data.currency.EUR;
  const aud = data.currency.AUD;
  const ars = data.currency.ARS;
  const jpy = data.currency.JPY;
  const gbp = data.currency.GBP;
  const sek = data.currency.SEK;
  const cny = data.currency.CNY;
  const btc = data.currency.BTC;
  const eth = data.currency.ETH;
  const ltc = data.currency.LTC;


  document.getElementById('title-usd').innerHTML = usd.name;
  document.getElementById('usdmaxvalue').innerHTML = usd.high;
  document.getElementById('usdminvalue').innerHTML = usd.low;
  document.getElementById('usdbuyvalue').innerHTML = usd.buy;
  document.getElementById('usdsellvalue').innerHTML = usd.sell;

  document.getElementById('title-cad').innerHTML = cad.name;
  document.getElementById('cadmaxvalue').innerHTML = cad.high;
  document.getElementById('cadminvalue').innerHTML = cad.low;
  document.getElementById('cadbuyvalue').innerHTML = cad.buy;
  document.getElementById('cadsellvalue').innerHTML = cad.sell;

  document.getElementById('title-eur').innerHTML = eur.name;
  document.getElementById('eurmaxvalue').innerHTML = eur.high;
  document.getElementById('eurminvalue').innerHTML = eur.low;
  document.getElementById('eurbuyvalue').innerHTML = eur.buy;
  document.getElementById('eursellvalue').innerHTML = eur.sell;

  document.getElementById('title-aud').innerHTML = aud.name;
  document.getElementById('audmaxvalue').innerHTML = aud.high;
  document.getElementById('audminvalue').innerHTML = aud.low;
  document.getElementById('audbuyvalue').innerHTML = aud.buy;
  document.getElementById('audsellvalue').innerHTML = aud.sell;

  document.getElementById('title-ars').innerHTML = ars.name;
  document.getElementById('arsmaxvalue').innerHTML = ars.high;
  document.getElementById('arsminvalue').innerHTML = ars.low;
  document.getElementById('arsbuyvalue').innerHTML = ars.buy;
  document.getElementById('arssellvalue').innerHTML = ars.sell;

  document.getElementById('title-jpy').innerHTML = jpy.name;
  document.getElementById('jpymaxvalue').innerHTML = jpy.high;
  document.getElementById('jpyminvalue').innerHTML = jpy.low;
  document.getElementById('jpybuyvalue').innerHTML = jpy.buy;
  document.getElementById('jpysellvalue').innerHTML = jpy.sell;

  document.getElementById('title-gbp').innerHTML = gbp.name;
  document.getElementById('gbpmaxvalue').innerHTML = gbp.high;
  document.getElementById('gbpminvalue').innerHTML = gbp.low;
  document.getElementById('gbpbuyvalue').innerHTML = gbp.buy;
  document.getElementById('gbpsellvalue').innerHTML = gbp.sell;

  document.getElementById('title-sek').innerHTML = sek.name;
  document.getElementById('sekmaxvalue').innerHTML = sek.high;
  document.getElementById('sekminvalue').innerHTML = sek.low;
  document.getElementById('sekbuyvalue').innerHTML = sek.buy;
  document.getElementById('seksellvalue').innerHTML = sek.sell;

  document.getElementById('title-cny').innerHTML = cny.name;
  document.getElementById('cnymaxvalue').innerHTML = cny.high;
  document.getElementById('cnyminvalue').innerHTML = cny.low;
  document.getElementById('cnybuyvalue').innerHTML = cny.buy;
  document.getElementById('cnysellvalue').innerHTML = cny.sell;

});