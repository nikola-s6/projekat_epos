# Koriscene tehnologije

## Front-end

Za pravljenje frontend-a koristili smo **Next.js**.
Ovaj React framework nam je omogucio nesmetanu integraciju **html**-a, **css**-a i **JavaScript**-a.
Za komunikaciju izmedju front-end sa pametnim ugovorom koriscen je **web3.js**.

## Back-end

Kao framework za pametne ugovore koristili smo **truffle**.
Truffle koristi EVM (Ethereum Virtual Machine) i omogucava nam lakse pisanje pametnih ugovora u okruzenju koje je pogodno za testiranje i postavljanje na test mreze.

Obzirom da rad sa Ethereum Mainnet-om nije pogodan i siguran za razvoj aplikacija, koristili smo **Rinkeby Test Network**(RTN), blockchain mrezu koja je namenjena za sigurno testiranje i cija kriptovaluta nema vrednost.

Za povezivanje na RTN koristili smo sajt **Infura.io** ([infura](https://infura.io/)) koji nam je dao link ka jednom od node-ova preko kojih pristupamo mrezi.

Kao Wallet za cuvanje naloga sa RTN kriptovalutama koristili smo **Metamask**.(Napomena: Metamask ekstenzija je obavezna prilikom koriscenja sajta radi upotrebe funkcije narucivanja i placanja)

Kako bismo dobili RTN kriptovalutu neophodnu za testiranje i cuvali je u nasem novcaniku koristili smo sajt [rinkeby faucet](https://faucet.rinkeby.io/).
Za pisanje pametnog ugovora koriscen je programski jezik **Solidity**, a za njegovo kompajliranje koriscen je **solc**(solidity compailer).
Pametni ugovor je prvenstveno napisan i testiran na sajtu **Remix** [remix](https://remix.ethereum.org/), jer on omogucava testiranje pre integracije na sajt.

Za integraciju servisa za slanje automatizovanih email-ova koristili smo **EmailJS** [emailjs](https://www.emailjs.com/). Sajt omogucava pravnljenje servisa i prilagodjenih template-ova za slanje mejlova, kao i laku integraciju u kodu.
