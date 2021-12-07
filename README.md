# Lit Demo

kleine applicatie bestaande uit 3 pagina's, te weten een profielform pagina, een gehaalde vakken pagina en een dashboard pagina.

Het idee is dat je op de profielform pagina iets je profiel (naam, adres, tel, email en image) kunt invullen.
Deze data slaan we via de profielService op.
 
Op de behaalde vakken pagina dien je voor elk vak dat je behaald hebt aan te geven wat de vakcode van het vak is, in welk blok (selectie via radiobuttons) en in welk jaar (dropdown) je dat vak behaald hebt en hoeveel ECTS het vak groot is.
En ook hier zal een vakkenService ervoor moeten zorgen dat de data opgeslagen wordt.

De dashboard dient uiteindelijk de data van die twee pagina's weer te geven. Hierbij zal de image van je profiel inderdaad als image weergeven moeten worden, en het adres zal op een kaart toont moeten worden.
De behaalde vakken zullen via een **burn-down** chart weergegeven worden, die begint bij 180 ECTS.

In principe maken we hier gebruik van een MVC pattern. Waarbij de model directory de domein klassen bevat, de services ervoor zorgen dat de data voldoet aan de business rules en zorgt voor de opslag (in dit geval via de sessionstorage), en de view is verantwoordelijk voor de weergave, waarbij we hier gebruik maken van Lit die wederom gebruik maakt van externe bestaande web components zoals bijvoorbeeld Material Design Web Componenten.

Opdracht voor de volgende les.
Maak een pagina voor de behaalde vakken.

# Installeren van dit project:
installeer alle benodigdheden via met
`npm install`

start het project met
`npm run start`