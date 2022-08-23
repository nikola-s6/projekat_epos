# Opis

Sajt je osmisljen da predstavlja reklamnu stranicu i stranicu za kupovinu novog Razer Blade 15 laptopa.
Na pocetnoj stranici ([http://localhost:3000/start](http://localhost:3000/start)) se nalaze opšti podaci o laptopu koji prodajemo, njegov dizajn i cena. Početna stranica sadrži i kratak video snimak koji kupca bliže upućuje u sam proizvod. Ispod u tabeli se nalazi i komparacija novog Razer Blade 15 laptopa sa običnim modelom na više nivoa. Na kraju početne stranice se nalazi dugme **Order now** koje kupca sprovodi na stranicu za poručivanje laptopa ([http://localhost:3000/order](http://localhost:3000/order)). Na njoj se nalazi forma čija su sva polja obavezna i moraju se popuniti u skladu sa pravilima, u protivnom se pojavljuju greške. Ispod forme se nalaze dva dugmeta **Connect Wallet** i **Order Now**. Dugme **Order Now** ne možete kliknuti dok ne povežete novčanik tako da prvo to morate uraditi. Prilikom povezivanja novčanika Morate imati instaliranu Metamask ekstenziju na vašem pretraživaču. Nakon povezivanja novčanika možete kliknuti na dugme **Order Now**, tada se proveravaju podaci koje ste uneli prilikom popunjavanja forme i ako neko polje nije dobro popunjeno izbacuje grešku. Nakon ispravnog popnjavanja forme i klikom na dugme **Order Now** poručili ste naš proizvod po ceni od 0.3eth (Napomena: morate da sačekate malo dok se transakcija ne izvrsi tj. dok je neki "miner" ne obradi i verifikuje). Nakon uspesnog narucivanja, na mejl koji ste uneli prilikom popunjavanja forme stici ce potvrda o uspesnoj kupovini. (**Napomena**: ukoliko je kod kloniran sa github-a pogledati odeljak [dodavanje automatskog email servisa](#dodavanja-automatskog-email-servisa))

# Koriscene tehnologije

## Front-end

Za pravljenje frontend-a koristili smo **Next.js**.
Ovaj React framework nam je omogucio nesmetanu integraciju **html**-a, **css**-a i **JavaScript**-a.
Za komunikaciju izmedju front-end sa pametnim ugovorom koriscen je **web3.js**.

## Back-end

Kao framework za pametne ugovore koristili smo **truffle**.
Truffle koristi EVM (Ethereum Virtual Machine) i omogucava nam lakse pisanje pametnih ugovora u okruzenju koje je pogodno za testiranje i postavljanje na test mreze.

Obzirom da rad sa Ethereum Mainnet-om nije pogodan i siguran za razvoj aplikacija, koristili smo **Rinkeby Test Network** (RTN), blockchain mrezu koja je namenjena za sigurno testiranje i cija kriptovaluta nema vrednost.

Za povezivanje na RTN koristili smo sajt **Infura.io** ([link](https://infura.io/)) koji nam je dao link ka jednom od node-ova preko kojih pristupamo mrezi.

Kao Wallet za cuvanje naloga sa RTN kriptovalutama koristili smo **Metamask**. (**Napomena**: Metamask ekstenzija je obavezna prilikom koriscenja sajta radi upotrebe funkcije narucivanja i placanja)

Kako bismo dobili RTN kriptovalutu neophodnu za testiranje i cuvali je u nasem novcaniku koristili smo sajt **Rinkeby Faucet** ([link](https://faucet.rinkeby.io/)).
Za pisanje pametnog ugovora koriscen je programski jezik **Solidity**, a za njegovo kompajliranje koriscen je **solc** (solidity compailer).
Pametni ugovor je prvenstveno napisan i testiran na sajtu **Remix** ([link](https://remix.ethereum.org/)), jer on omogucava testiranje pre integracije na sajt.

Za integraciju servisa za slanje automatizovanih email-ova koristili smo **EmailJS** ([link](https://www.emailjs.com/)). Sajt omogucava pravnljenje servisa i prilagodjenih template-ova za slanje mejlova, kao i laku integraciju u kodu.

# Uputstvo za koriscenje

## Lokalna kopija i pokretanje sajta

Nakon kloniranja aplikacije iz github repository-a ([uputstvo za kloniranje](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)) potrebno je otvoriti terminal root foldera (projekat_epos).
Komandom `cd laptop_store` se prebacujemo u folder u kojem se nalazi Next.js aplikacija.
Kada prvi put pokrecemo aplikaciju potrebno je izvrsiti komandu `npm install` koja ce instalirati sve potrebne pakete i dependancy-e koji su potrebni za nesmetan rad sajta. (instalacija svih paketa moze potrajati par minuta)
Nakon zavrsetka instalacije iz istog foldera u terminalu pokrenuti komandu `npm run dev`. Ova komanda ce kompajlirati aplikaciju i pokrenuti lokalni server. Sada se na linku [http://localhost:3000/start](http://localhost:3000/start) nalazi pocetna stranica sajta.

### Dodavanje automatskog email servisa

Ukoliko zelite kompletnu funkionalnost sajta koja podrazumeva i potvrdu korisniku da je uspesno narucio laptop putem emaila kao i potvrdu prodavcu da je laptop narucen sa podacima kupca potrebno je izvrsiti neke izmene.
Ove izmene je neophodno izvrsiti jer smo delove koda izostavili radi zastite podataka jer sadrze nase sifre, vec se oni nalaze u .env fajlu koji je prisutan samo lokalno kod nas.

Na sajtu [EmailJS](https://www.emailjs.com/) je potrebno otvoriti besplatan nalog. Nakon toga iz menija pocetne stranice potrebno otici na **Email Services** (obelezeno zelenom na slici 1) i tamo napraviti novi gmail servis.
Nakon toga iz menija potrebno je otici na **Email Templates** (obelezeno crvenom na slici 1) i napraviti templejte mejlova za klijente i za prodavca. Primere naslih templejta mozete videti na slikama (slika 2- klijent; slika3 prodavac). (**Napomena**: prilikom pravljenja templejta potrebno je koristiti ista imena promenljivih kao sa slike jer se ti podaci ucitavaju iz postojeceg koda aplikacije)

![pocetna stranica](/laptop_store/public/EmailJS.png)
<sub>slika 1</sub>
![template klijent](/laptop_store/public/templejt_klijent.png)
<sub>slika 2</sub>
![template prodavac](/laptop_store/public/templejt_prodavac.png)
<sub>slika 3</sub>

Nakon kreiranja servisa i templejta potrebno je u folderu **laptop_store** napraviti faj po imenu **.env.local** i u njega upisati promenljive kao na slici 4 (neophodne je da promenljive imaju ista imena kao na slici). U polja prekrivena belom pozadinom upisati redom _javni kljuc_, _id servisa_, _id templejta korisnika_ i _id templejta prodavca_. (javni kljuc se moze naci u meniju odlaskom na Account, u tabu API Keys pod imenom Public Key)

![Environment Variables](/laptop_store/public/EnvironmentVariables.png)
<sub>slika 4</sub>
