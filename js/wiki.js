// Wiki JavaScript - Infomaatje Gebruikershandleiding

// Content database - alle wiki pagina's
const wikiPages = {
    home: {
        title: "Welkom bij de Infomaatje Wiki",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a>
            </div>
            <h2>Welkom bij de Infomaatje Wiki</h2>
            <p>Deze wiki bevat de complete gebruikershandleiding voor het Infomaatje systeem. Gebruik het menu aan de linkerkant om door de verschillende onderwerpen te navigeren, of gebruik de zoekfunctie om snel informatie te vinden.</p>
            
            <div class="info-box">
                <h4>📚 Over Infomaatje</h4>
                <p>Infomaatje is een dossiermanagementsysteem voor het beheren van kind- en vrijwilligersdossiers. Het systeem automatiseert workflows via checklijsten, taken en parkeerplaatsen.</p>
            </div>

            <h3>Snelle links</h3>
            <ul>
                <li><a href="#" class="wiki-link" data-page="inleiding">Aan de slag met Infomaatje</a></li>
                <li><a href="#" class="wiki-link" data-page="parkeerplaatsen">Werken met parkeerplaatsen</a></li>
                <li><a href="#" class="wiki-link" data-page="dossier">Dossiers beheren</a></li>
                <li><a href="#" class="wiki-link" data-page="checklijsten">Taken en checklijsten</a></li>
            </ul>

            <h3>Contact</h3>
            <p>Voor vragen kunt u contact opnemen met Anan6 Services:</p>
            <ul>
                <li>E-mail: info@anan6.com</li>
                <li>Telefoon: 088 243 6499</li>
            </ul>
        `
    },

    inleiding: {
        title: "Inleiding",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Inleiding
            </div>
            <h2>Inleiding</h2>
            <p>Zodra een kind óf vrijwilliger wordt aangemeld via de website komt deze automatisch in het Infomaatje systeem te staan. Bij een nieuwe aanmelding wordt er een <strong>dossier aangemaakt</strong> en in dat dossier wordt er gelijk een eerste <a href="#" class="wiki-link" data-page="checklijsten">checklijst</a> aangemaakt met taken die uitgevoerd moeten worden bij een nieuwe aanmelding.</p>
            
            <p>Zolang er in deze checklijst een taak staat die nog niet behandeld is zal deze zichtbaar zijn in de desbetreffende <a href="#" class="wiki-link" data-page="parkeerplaatsen">parkeerplaats</a> op de welkomstpagina. Via deze parkeerplaatsen kan je in één oogopslag zien welke taken openstaan. Een klik op een taak opent de checklijst voor het desbetreffende dossier.</p>

            <div class="info-box">
                <h4>💡 Workflow</h4>
                <p>Het Infomaatje systeem werkt op basis van een geautomatiseerde workflow: aanmeldingen genereren automatisch dossiers met bijbehorende taken die in parkeerplaatsen verschijnen voor opvolging.</p>
            </div>
        `
    },

    knoppen: {
        title: "Knoppen",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Knoppen
            </div>
            <h2>Knoppen</h2>
            <p>De onderstaande knoppen zijn op alle pagina's zichtbaar en dienen voor de volgende functies:</p>
            
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th>Icoon</th>
                        <th>Functie</th>
                        <th>Beschrijving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>📊</td>
                        <td>Werklijsten</td>
                        <td>Via deze knop kun je de werklijsten opvragen.</td>
                    </tr>
                    <tr>
                        <td>📝</td>
                        <td>Notitie toevoegen</td>
                        <td>Hiermee is het mogelijk om een <a href="#" class="wiki-link" data-page="notities">notitie</a> toe te voegen aan een Dossier.</td>
                    </tr>
                    <tr>
                        <td>⚙️</td>
                        <td>Admin paneel</td>
                        <td>Toegang tot het Admin paneel waar vragen, vragenlijsten, taken, checklijsten, parkeerplaatsen en medewerkers onderhouden worden. Geeft ook toegang tot Rapportages.</td>
                    </tr>
                    <tr>
                        <td>🚪</td>
                        <td>Uitloggen</td>
                        <td>Met deze knop log je uit van Infomaatje.</td>
                    </tr>
                    <tr>
                        <td>❓</td>
                        <td>Help</td>
                        <td>Het vraagteken geeft toegang tot de gebruikershandleiding.</td>
                    </tr>
                </tbody>
            </table>

            <h3>Zoekfunctie</h3>
            <p>Onder de rij met menuknoppen is een <strong>zoekveld</strong> zichtbaar. Deze wordt gebruikt om te zoeken naar alle dossiers, zowel die van kinderen/vrijwilligers én koppels.</p>
            
            <p>Je kan zoeken op:</p>
            <ul>
                <li>Naam van het kind</li>
                <li>Naam van de vrijwilliger</li>
                <li>Naam van de casemanager</li>
                <li>Aanmaakdatum</li>
                <li>Dossiercode (direct zoeken)</li>
            </ul>
        `
    },

    parkeerplaatsen: {
        title: "Parkeerplaatsen",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Parkeerplaatsen
            </div>
            <h2>Parkeerplaatsen</h2>
            <p>De eerste pagina die je ziet na het inloggen in het Infomaatje Systeem is de pagina <strong>Parkeerplaatsen</strong>. Op deze pagina is een overzicht te zien van:</p>
            <ul>
                <li>Inkomende mails die niet automatisch bij een dossier geplaatst zijn</li>
                <li>De zogenaamde "Parkeerplaatsen" met openstaande taken</li>
            </ul>

            <p>Zoals eerder genoemd wanneer een <a href="#" class="wiki-link" data-page="checklijsten">checklijst</a> een taak heeft die nog niet behandeld is wordt deze checklijst zichtbaar in 1 van de parkeerplaatsen. Dit laat zien dat er dus nog een actie ondernomen moet worden.</p>

            <div class="info-box">
                <h4>💡 Filteren op casemanager</h4>
                <p>Als casemanager kan je alle openstaande taken in de lijst zien, maar door 1 druk op de knop "Alle" kan je alleen de openstaande taken laten zien die gekoppeld zijn aan dossiers die bij jou horen.</p>
            </div>

            <p>Wanneer je klikt op 1 van de openstaande taken kom je automatisch terecht in het dossier waar het bij hoort.</p>

            <h3>Inkomende mail</h3>
            <p>Aan de linkerkant zie je de Inkomende mail staan. Infomaatje heeft een eigen email adres. Door naar dit email adres te mailen komt de mail in dit vak terecht, <strong>tenzij</strong> wanneer je in het onderwerp van de mail een Dossiercode zet met een # ervoor op deze manier: <span class="inline-code">#VW015017</span>. Dan wordt de mail automatisch in het goede dossier verwerkt.</p>

            <p>Als hier wel een mail in staat kan je er 3 dingen mee doen:</p>
            <ol>
                <li><strong>Handmatig koppelen</strong> aan een dossier (folder icoon)</li>
                <li><strong>Verwijderen</strong> uit het systeem (prullenbak icoon)</li>
                <li><strong>De mail openen</strong> (klik op onderwerp)</li>
            </ol>

            <p>Wanneer je op het onderwerp van de mail drukt wordt deze automatisch geopend in Outlook.</p>
        `
    },

    dossier: {
        title: "Dossier",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Dossier
            </div>
            <h2>Dossier</h2>
            <p>Het dossier kent meerdere pagina's met op elke pagina informatie die aan te passen is. Wanneer een dossier geopend wordt kom je standaard op de pagina "Kind", "Vrijwilliger" of "Koppel".</p>

            <h3>Dossiergegevens</h3>
            <p>Op de eerste pagina zijn de persoonsgegevens te zien van het betreffende persoon en deze zijn te bewerken:</p>
            <ul>
                <li>Bij een <strong>kind</strong>: gegevens van het kind, de moeder, vader én andere huisgenoten</li>
                <li>Bij een <strong>vrijwilliger</strong>: persoonlijke gegevens van de vrijwilliger</li>
                <li>Bij een <strong>koppel</strong>: gegevens van de koppeling</li>
            </ul>

            <p>Ook kan je hier een aantal dossiergegevens aanpassen zoals:</p>
            <ul>
                <li>Dossiercode</li>
                <li>Case Manager</li>
                <li>Status van het dossier</li>
                <li>Contact frequentie</li>
                <li>Contact toekomst</li>
            </ul>

            <h3>Beschikbare tabbladen</h3>
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th>Tabblad</th>
                        <th>Beschrijving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="#" class="wiki-link" data-page="instanties">Instanties</a></td>
                        <td>Schoolgegevens en andere instanties (alleen bij kinddossier)</td>
                    </tr>
                    <tr>
                        <td><a href="#" class="wiki-link" data-page="vragenlijsten">Vragenlijsten</a></td>
                        <td>Ingevulde en beschikbare vragenlijsten</td>
                    </tr>
                    <tr>
                        <td><a href="#" class="wiki-link" data-page="checklijsten">Checklijsten</a></td>
                        <td>Taken en checklijsten voor het dossier</td>
                    </tr>
                    <tr>
                        <td><a href="#" class="wiki-link" data-page="koppels">Koppels</a></td>
                        <td>Overzicht van koppelingen</td>
                    </tr>
                    <tr>
                        <td><a href="#" class="wiki-link" data-page="correspondentie">Correspondentie</a></td>
                        <td>Alle communicatie gekoppeld aan het dossier</td>
                    </tr>
                </tbody>
            </table>
        `
    },

    instanties: {
        title: "Instanties",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › <a href="#" data-page="dossier">Dossier</a> › Instanties
            </div>
            <h2>Instanties</h2>
            <p>De pagina met Instanties is <strong>alleen zichtbaar voor het kind dossier</strong>. Op deze pagina staan de gegevens van:</p>
            <ul>
                <li>De school van het kind</li>
                <li>De aanmeldende instantie</li>
                <li>Eventuele andere instanties waar het kind mee te maken heeft</li>
            </ul>

            <p>Alle gegevens op deze pagina zijn ook te bewerken.</p>

            <div class="info-box">
                <h4>📝 Tip</h4>
                <p>Zorg dat de instantiegegevens up-to-date zijn voor een compleet beeld van het netwerk rondom het kind.</p>
            </div>
        `
    },

    vragenlijsten: {
        title: "Vragenlijsten",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › <a href="#" data-page="dossier">Dossier</a> › Vragenlijsten
            </div>
            <h2>Vragenlijsten</h2>
            <p>De vragenlijsten zijn voor elk dossier zichtbaar. Bij het aanmelden van een kind of vrijwilliger worden al een aantal vragenlijsten ingevuld. Elk nieuw dossier van een kind óf vrijwilliger heeft daarom standaard al een aantal vragenlijsten staan.</p>

            <h3>Vragenlijst toevoegen</h3>
            <p>Onder de kop vragenlijsten zie je een aantal titels van vragenlijsten staan en zodra je erop klikt wordt de vragenlijst zichtbaar. Er is een knop met "Vragenlijst toevoegen":</p>
            <ol>
                <li>Klik op "Vragenlijst toevoegen"</li>
                <li>Er wordt een plek zichtbaar waar je 1 van de vragenlijsten kan toevoegen</li>
                <li>Kies een vragenlijst uit de lijst</li>
                <li>Druk op "Toevoegen"</li>
                <li>De vragenlijst is nu zichtbaar op de pagina</li>
            </ol>

            <h3>Doelgroep instellen</h3>
            <p>Je kun aangeven voor wie de vragenlijst bedoeld is:</p>
            <ul>
                <li><strong>Vrijwilliger</strong>: Als de vrijwilliger inloggegevens heeft op de Infomaatje website, kan hij na inloggen alle vragenlijsten invullen die voor 'vrijwilliger' zijn ingesteld.</li>
                <li><strong>Casemanager</strong>: Alleen de casemanager kan de vragenlijst invullen.</li>
            </ul>

            <div class="info-box">
                <h4>📋 Beheer</h4>
                <p>Voor het aanmaken en beheren van vragenlijsten, zie <a href="#" class="wiki-link" data-page="admin-vragenlijsten">Vragenlijsten Beheer</a> in de Admin sectie.</p>
            </div>
        `
    },

    checklijsten: {
        title: "Checklijsten",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › <a href="#" data-page="dossier">Dossier</a> › Checklijsten
            </div>
            <h2>Checklijsten</h2>
            <p>Deze module toont de checklijsten welke voor het dossier zijn aangemaakt. Een lijst met titels van checklijsten geeft toegang tot de taken gekoppeld aan de lijst.</p>

            <h3>Taken afvinken</h3>
            <p>Deze taken kan je aanvinken met:</p>
            <ul>
                <li><strong>NVT</strong> (Niet van toepassing)</li>
                <li><strong>VT</strong> (Van toepassing)</li>
            </ul>

            <p>Bij elke taak is ook zichtbaar:</p>
            <ul>
                <li>Wie er iets mee gedaan heeft</li>
                <li>Wanneer iemand er iets mee gedaan heeft</li>
            </ul>

            <div class="warning-box">
                <h4>⚠️ Belangrijk</h4>
                <p>Zolang 1 van deze taken nog niet is aangevinkt blijft deze zichtbaar in een <a href="#" class="wiki-link" data-page="parkeerplaatsen">parkeerplaats</a>.</p>
            </div>

            <h3>Parkeerplaats toewijzing</h3>
            <p>Aangezien er meerdere parkeerplaatsen zijn is het mogelijk dat de checklijst zichtbaar wordt in een andere parkeerplaats nadat een bepaalde taak voltooid is.</p>
            <p><strong>Voorbeeld:</strong> Stel dat de eerst volgende taak die op de lijst staat "Verstuur brief" is, kan deze zichtbaar worden in een parkeerplaats genaamd "Brieven". Deze mogelijkheid is er om het zo overzichtelijk mogelijk te houden.</p>

            <h3>Checklijst toevoegen</h3>
            <p>Een checklijst toevoegen aan een dossier gaat op precies dezelfde manier als hoe een <a href="#" class="wiki-link" data-page="vragenlijsten">vragenlijst</a> toegevoegd wordt.</p>

            <h3>Taak uitvoeren</h3>
            <p>Het is mogelijk dat er aan een taak een actie gekoppeld is. Dan is aan het einde van de regel een icoontje zichtbaar dat aanduidt wat voor taak het betreft:</p>
            <ul>
                <li><strong>📄 Print-actie</strong>: Opent de tekstverwerker (bijv. Word)</li>
                <li><strong>📧 E-mailactie</strong>: Opent de mailclient (bijv. GMail)</li>
            </ul>

            <div class="info-box">
                <h4>🔐 Autorisatie vereist</h4>
                <p>Heb je GMail dan dien je Infomaatje eerst te <a href="#" class="wiki-link" data-page="autorisatie">autoriseren</a> voor het gebruik van GMail.</p>
            </div>

            <h3>Het aanvullen van dossiers</h3>
            <p>Het verzoek tot het aanvullen van een dossier geschiedt via het versturen van een e-mail aan de vrijwilliger dan wel de aanmelder van een kind. Hiervoor zijn speciale taken aangemaakt:</p>
            <ul>
                <li>Mail: Aanvullen dossier kind</li>
                <li>Mail: Aanvullen dossier vrijwilliger</li>
            </ul>

            <p><strong>Procedure:</strong></p>
            <ol>
                <li>Autoriseer Infomaatje voor toegang tot je GMail account</li>
                <li>Zet de status van het kind/vrijwilliger dossier op "aanvullen"</li>
                <li>Voeg de desbetreffende checklijst toe</li>
                <li>Voer de taak 'Mail: Aanvullen ..' uit door op het e-mail icoon te klikken</li>
                <li>Het e-mail concept wordt aangemaakt en GMail wordt geopend</li>
                <li>Verstuur de e-mail</li>
            </ol>
        `
    },

    agenda: {
        title: "Agenda Taak",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › <a href="#" data-page="dossier">Dossier</a> › Agenda
            </div>
            <h2>Agenda Taak</h2>
            <p>Met behulp van de agenda taak kunnen afspraken vastgelegd worden in Outlook vanuit Infomaatje. We kunnen ook bestaande afspraken in Outlook koppelen met Infomaatje.</p>

            <div class="warning-box">
                <h4>⚠️ Vereisten</h4>
                <p>Voordat we hier mee aan de slag kunnen gaan moeten we wel ingelogd zijn bij Outlook en, eenmaal aangekomen bij een checklijst, de Outlook agenda kiezen waarin we de afspraken willen opslaan.</p>
            </div>

            <h3>Agenda kiezen</h3>
            <p>Eenmaal ingelogd in Outlook dan kun je bij de checklijst module van het dossier jouw afspraken agenda kiezen:</p>
            <ol>
                <li>Klik op de knop [Kies uw afspraken agenda]</li>
                <li>Heb je maar één agenda, dan wordt deze ingesteld</li>
                <li>Heb je meerdere agenda's, dan kun je een keuze maken</li>
            </ol>
            <p>De keuze die je maakt wordt opgeslagen. Je kunt deze later altijd aanpassen door op de knop [Agenda] te klikken.</p>

            <h3>Het vastleggen van een afspraak</h3>
            <p>Het vastleggen van een afspraak doe je door in een agenda-veld de datum en tijd van je afspraak in te voeren.</p>
            <p>Terwijl je deze datum invoert toont Infomaatje eventuele afspraken die na dat tijdstip zijn vastgelegd in Outlook. Dit maakt het mogelijk een bestaande afspraak te koppelen door op de titel van de afspraak te klikken.</p>

            <h4>Nieuwe afspraak</h4>
            <p>Wil je een nieuwe afspraak vastleggen:</p>
            <ol>
                <li>Klik op het Outlook icoontje</li>
                <li>Het afspraak-dialoogvenster van Outlook opent</li>
                <li>Plan en leg de afspraak vast</li>
                <li>Eventuele aanpassingen zullen door Infomaatje worden opgepakt</li>
            </ol>

            <div class="info-box">
                <h4>💡 Automatisch ingevuld</h4>
                <p>Bij het aanmaken van een afspraak geeft Infomaatje de titel van de afspraak mee aangevuld met het dossier. Ook geeft Infomaatje het adres mee van de betrokken persoon. (In geval van het koppeldossier is dat het adres van de mentee)</p>
            </div>

            <h4>Afspraak loskoppelen</h4>
            <p>Wil je een afspraak loskoppelen van het dossier? Klik dan op het rode <strong>X</strong> wat verschijnt zodra je met de cursor over het datumveld beweegt. Ook hiervoor geldt dat het wel een afspraak betreft welke jij hebt vastgelegd.</p>
        `
    },

    koppels: {
        title: "Koppels",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › <a href="#" data-page="dossier">Dossier</a> › Koppels
            </div>
            <h2>Koppels</h2>
            <p>Via deze pagina is het mogelijk om te zien aan wie iemand al gekoppeld is én om een koppeling te maken.</p>

            <h3>Overzicht</h3>
            <p>In het overzicht is duidelijk te zien:</p>
            <ul>
                <li>Wie met wie gekoppeld is</li>
                <li>Wie de casemanager is die erbij hoort</li>
                <li>De huidige status van de koppeling (aan het eind van elke regel)</li>
            </ul>

            <h3>Nieuwe koppeling maken</h3>
            <p>Het aanmaken van een nieuwe koppeling gaat bijna hetzelfde als het toevoegen van een nieuwe vragenlijst óf checklijst. Het verschil is dat er nu 2 dingen geselecteerd moeten worden:</p>
            <ol>
                <li>Als eerst selecteer je het <strong>kind óf vrijwilliger</strong> aan wie je wilt koppelen</li>
                <li>Het tweede wie de <strong>casemanager</strong> moet worden</li>
            </ol>
        `
    },

    correspondentie: {
        title: "Correspondentie",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › <a href="#" data-page="dossier">Dossier</a> › Correspondentie
            </div>
            <h2>Correspondentiedossier</h2>
            <p>Op de correspondentie pagina is alle correspondentie zichtbaar die aan het dossier gekoppeld is. Dit is inclusief:</p>
            <ul>
                <li>Notities die je via de knop bovenaan de pagina kan toevoegen</li>
                <li>Alle inkomende mails die gekoppeld zijn aan het dossiercode</li>
                <li>De mails die verstuurd zijn</li>
                <li>Alle documenten die via een taak geopend zijn</li>
            </ul>

            <p>Zo is in 1 lijst zichtbaar welk soort contact er geweest is met een persoon.</p>

            <h3>Correspondentie Overzicht</h3>
            <p>Op de pagina Correspondentie (via het menu) is alle correspondentie te zien van <strong>alle dossiers</strong> én ook die niet gekoppeld zijn aan een dossier.</p>
            <p>Een duidelijke lijst met de gegevens van wie het komt en waar het naartoe gaat. Ook is er de mogelijkheid om iets te kunnen verwijderen mocht het er dubbel in staan of hoort het hier niet thuis.</p>

            <div class="info-box">
                <h4>🔍 Zoekfunctie</h4>
                <p>Links boven de lijst is een zoekveld zichtbaar waarmee je kan zoeken in de correspondentie. Tijdens het typen wordt dit automatisch bijgewerkt op de pagina.</p>
            </div>
        `
    },

    notities: {
        title: "Notities",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Notities
            </div>
            <h2>Notitie toevoegen</h2>
            <p>Zoals aangegeven onder het kopje <a href="#" class="wiki-link" data-page="knoppen">knoppen</a> kan je een notitie toevoegen aan 1 of meerdere dossiers.</p>

            <h3>Procedure</h3>
            <ol>
                <li>Klik op de knop "Notitie toevoegen"</li>
                <li>Er komt een venster tevoorschijn</li>
                <li>Vul een <strong>Onderwerp</strong> in</li>
                <li>Vul de <strong>Notitie</strong> in</li>
                <li>Selecteer de dossiers</li>
            </ol>

            <h3>Dossiers selecteren</h3>
            <p>Bij het veld Dossiers werkt het als volgt:</p>
            <ul>
                <li>Typ de naam óf dossiercode van het dossier</li>
                <li>Er komt automatisch een lijst met resultaten op basis van wat je getypt hebt</li>
                <li>Typ je direct een Dossiercode dan kan er maar 1 resultaat zichtbaar zijn</li>
                <li>Typ je bijv. de naam "Remy" kunnen dat meerdere zijn</li>
                <li>Klik op het gewenste resultaat</li>
                <li>Het Dossiercode staat automatisch in het veld</li>
            </ul>

            <div class="info-box">
                <h4>💡 Meerdere dossiers</h4>
                <p>Meerdere dossier codes kunnen worden ingevoerd gescheiden door een komma.</p>
            </div>
        `
    },

    "admin-vragenlijsten": {
        title: "Vragenlijsten Beheer",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Admin › Vragenlijsten Beheer
            </div>
            <h2>Vragenlijsten Beheer</h2>
            
            <h3>Algemeen</h3>
            <p>Vragenlijsten zijn opgesplitst in 2 soorten:</p>
            <ul>
                <li><strong>Korte vragenlijst</strong>: Bestaat uit alleen vragen</li>
                <li><strong>Hoofdvragenlijsten</strong>: Een grotere vragenlijst opgesplitst in één of meerdere thema vragenlijsten</li>
            </ul>

            <h3>Aanmaken van een vragenlijst met vragen</h3>
            <p>Na het klikken op de menukeuze 'vragenlijsten' verschijnt er een overzicht van alle reeds aangemaakte vragenlijsten. Je hebt hier de volgende opties:</p>
            <ul>
                <li><strong>[Nieuwe hoofdvragenlijst]</strong>: Open het formulier om een nieuwe hoofdvragenlijst aan te maken</li>
                <li><strong>[Nieuwe vragenlijst]</strong>: Open het formulier om een nieuwe vragenlijst aan te maken</li>
                <li><strong>Klik op titel</strong>: Open het formulier om de vragenlijst te bewerken</li>
                <li><strong>Excel knop</strong>: Geeft een overzicht van de vragenlijst met de ingevulde antwoorden</li>
                <li><strong>[X] knop</strong>: Verwijderd de vragenlijst</li>
            </ul>

            <h3>Vastleggen van vragenlijst gegevens</h3>
            <p>Bij het aanmaken van een vragenlijst leggen we de volgende gegevens vast:</p>
            
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th>Veld</th>
                        <th>Beschrijving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Omschrijving</td>
                        <td>De titel van de vragenlijst zoals hij in de verschillende overzichten wordt getoond</td>
                    </tr>
                    <tr>
                        <td>Toelichting</td>
                        <td>Extra toelichting voor het beantwoorden van de vragen</td>
                    </tr>
                    <tr>
                        <td>Voor (respondent)</td>
                        <td>Aan wie is de vragenlijst gericht: Jongere/Kind/Little, Leerling, Big/Maatje/Vrijwilliger, Mentor, Ouder</td>
                    </tr>
                    <tr>
                        <td>Verval na</td>
                        <td>Hier kun je aangeven na hoeveel tijd de vragenlijst actief wordt</td>
                    </tr>
                    <tr>
                        <td>Vragen</td>
                        <td>Kies uit vooraf aangemaakte vragen of maak een nieuwe vraag aan</td>
                    </tr>
                </tbody>
            </table>

            <h3>Aanmaken van een vraag</h3>
            <p>Bij het aanmaken van een vraag leggen we de volgende gegevens vast:</p>
            <ul>
                <li><strong>Omschrijving</strong>: Titel van de vraag</li>
                <li><strong>Toelichting</strong>: Extra uitleg ten behoeve van het antwoorden</li>
                <li><strong>Type</strong>: Het soort vraag</li>
                <li><strong>Toelichting antwoord</strong>: Of men een toelichting kan geven bij een meerkeuze antwoord</li>
            </ul>

            <h4>Vraagtypen</h4>
            <ul>
                <li>Vrijetekst box</li>
                <li>Datumveld</li>
                <li>Getallenveld</li>
                <li>▾ Keuzelijst, één antwoord mogelijk</li>
                <li>✓ Keuzeveld, meerdere antwoorden mogelijk (bijv. hobbies)</li>
                <li>⊙ Keuzeveld één antwoord mogelijk (bijv. M of V)</li>
                <li>⊙ Enquêtevraag, één antwoord mogelijk (bijv. volledig oneens tot helemaal eens)</li>
            </ul>

            <div class="info-box">
                <h4>💡 Meerkeuze antwoorden</h4>
                <p>Bij meerkeuze vragen geef je de mogelijke antwoorden in door ze te scheiden met een komma (,). Gebruik 'anders' als optie om de respondent zelf een antwoord te laten invullen.</p>
            </div>
        `
    },

    "admin-taken": {
        title: "Taken Beheer",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Admin › Taken Beheer
            </div>
            <h2>Taken Beheer</h2>
            
            <h3>Algemeen</h3>
            <p>Taken die we afvinken bij een checklijst gekoppeld aan een dossier definiëren we in de admin omgeving. Na het klikken op de titel Taken verschijnt er een overzicht van alle bestaande taken.</p>

            <p>Voor iedere taak wordt weergeven:</p>
            <ul>
                <li>De titel (klik om het taken-onderhoudsscherm te openen)</li>
                <li>Eventueel een icoontje (mail- of document-taak)</li>
                <li>Eventueel een X om de taak te verwijderen (alleen niet gekoppelde taken)</li>
            </ul>

            <h3>Taakformulier</h3>
            <p>In het taakformulier vind je de volgende velden:</p>

            <h4>Omschrijving</h4>
            <p>De titel van de taak zoals deze verschijnt in het checklijst overzicht.</p>

            <h4>Actie</h4>
            <p>Ieder taak heeft een actie. De volgende acties zijn bekend:</p>
            <table class="wiki-table">
                <thead>
                    <tr>
                        <th>Actie</th>
                        <th>Beschrijving</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agenda</td>
                        <td>Maak een agenda item aan in jouw Agenda (Outlook)</td>
                    </tr>
                    <tr>
                        <td>AppVragenlijst</td>
                        <td>Koppel een vragenlijst aan het dossier</td>
                    </tr>
                    <tr>
                        <td>Check</td>
                        <td>Alleen aanvinken dat de taak is uitgevoerd</td>
                    </tr>
                    <tr>
                        <td>Checklijst</td>
                        <td>Koppel een andere checklijst (wordt toegevoegd bij afvinken)</td>
                    </tr>
                    <tr>
                        <td>Mail</td>
                        <td>Maak een mail aan voor mentor, mentee, ouders, etc.</td>
                    </tr>
                    <tr>
                        <td>MailVragenlijst</td>
                        <td>Verstuur vragenlijst per mail</td>
                    </tr>
                    <tr>
                        <td>Module</td>
                        <td>Specifieke module actie</td>
                    </tr>
                    <tr>
                        <td>Print</td>
                        <td>Open een print document</td>
                    </tr>
                    <tr>
                        <td>Veld</td>
                        <td>Veldactie</td>
                    </tr>
                </tbody>
            </table>

            <h4>Overige velden</h4>
            <ul>
                <li><strong>Handleiding</strong>: Voeg een instructie PDF toe (? icoon in checklijst)</li>
                <li><strong>Mailsjabloon</strong>: De mailtekst met variabelen uit de Woordenlijst</li>
                <li><strong>Ontvanger mail</strong>: Email variabele van de ontvanger</li>
                <li><strong>Mail onderwerp</strong>: Onderwerp (Infomaatje voegt #dossiernummer toe)</li>
                <li><strong>Parkeerplaats</strong>: In welk parkeervak de taak verschijnt</li>
                <li><strong>Status dossier na verwerking</strong>: Automatisch status bijwerken na voltooiing</li>
                <li><strong>Vervalt na</strong>: Na hoeveel dagen/weken/maanden de taak vervalt</li>
                <li><strong>Herhaal taak iedere</strong>: Frequentie voor terugkerende taken</li>
            </ul>

            <div class="info-box">
                <h4>📝 Woordenlijst</h4>
                <p>Variabelen voor gebruik in mailteksten en taken vind je in de Woordenlijst onder het menu 'Taken'. Bijvoorbeeld: <span class="inline-code">@vw_voornaam@</span> voor de voornaam van de vrijwilliger.</p>
            </div>
        `
    },

    weeklies: {
        title: "Weeklies",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Weeklies
            </div>
            <h2>Weeklies</h2>
            
            <h3>Inleiding</h3>
            <p>Voor het invullen van de Weeklies (en andere vragenlijsten) is een webapp ontwikkeld. Met deze APP kan de Big alle binnen Infomaatje voor hem/haar aangemaakte vragenlijsten beantwoorden.</p>

            <p>Hiervoor zijn één vragenlijst en twee taken aangemaakt:</p>
            <ol>
                <li><strong>Vragenlijst</strong>: Weekly|Week @weeknummer@: van @week_start@ t/m @week_eind@</li>
                <li><strong>Taak</strong>: Big: Mail voor het installeren van de Weekly App</li>
                <li><strong>Taak</strong>: Weekly versturen</li>
            </ol>

            <h3>Vragenlijst variabelen</h3>
            <p>Om vragenlijsten onderling te onderscheiden zijn er variabelen opgenomen in de omschrijving:</p>
            <ul>
                <li><span class="inline-code">@weeknummer@</span> - Jaar en weeknummer (bij aanmaak)</li>
                <li><span class="inline-code">@week_start@</span> - Startdatum van de betreffende week</li>
                <li><span class="inline-code">@week_eind@</span> - Einddatum van de betreffende week</li>
            </ul>

            <h3>Big: Mail voor het installeren van de Weekly App</h3>
            <p>Dit is een gewone mail taak met een link waarmee de Big de APP kan installeren. De link wordt gezet met de variabele <span class="inline-code">@vw_app@</span>.</p>
            <p>Deze link is gepersonaliseerd en bevat een token welke de Big toegang verleent tot zijn of haar vragenlijsten. Iedere Big krijgt zijn eigen mail.</p>

            <h3>Weekly versturen</h3>
            <p>Voor het versturen of klaarzetten van de Weeklies voor de Big is een aparte taak aangemaakt. De belangrijke instellingen:</p>
            <ul>
                <li><strong>Actie</strong>: AppVragenlijst (bij verwerking wordt vragenlijst aangemaakt)</li>
                <li><strong>Vragenlijst</strong>: Geeft aan welke vragenlijst wordt aangemaakt</li>
                <li><strong>Herhaal taak iedere</strong>: Welke dag van de week/maand de vragenlijst klaar staat</li>
            </ul>

            <h3>Weekly activeren voor Big</h3>
            <p>Beide taken zijn toegevoegd aan de checklijst 'SBM: APP en vragenlijst voor weekly'. Het idee is dat je de checklijst toevoegt aan een koppel dossier.</p>

            <div class="warning-box">
                <h4>⚠️ Belangrijk</h4>
                <p>De Weeklies worden pas klaar gezet bij de Big zodra je de taak 'Weekly versturen' activeert, dat wil zeggen VT aanvinkt. Wil je de taak eerder of tijdelijk stopzetten, vink dan NVT aan.</p>
            </div>
        `
    },

    autorisatie: {
        title: "Autorisatie",
        content: `
            <div class="breadcrumbs">
                <a href="#" data-page="home">Home</a> › Autorisatie
            </div>
            <h2>Autorisatie</h2>
            
            <h3>Autoriseren van Infomaatje voor Outlook WEB</h3>
            <ol>
                <li>Open je browser</li>
                <li>Ga naar Infomaatje</li>
                <li>Open een dossier vanuit een parkeerplaats</li>
                <li>Klik op de knop 'Autoriseren Outlook'</li>
            </ol>

            <h3>Autoriseren van Infomaatje voor GMail</h3>
            <ol>
                <li>Open Chrome</li>
                <li>Ga naar Infomaatje</li>
                <li>Open een openstaande taak vanuit een parkeerplaats</li>
                <li>De bijbehorende checklijst opent</li>
                <li>Verschijnt de button [GMail OK], klik hier dan op voor autorisatie</li>
                <li>GMail vraagt je in te loggen (als dat nog niet het geval is)</li>
                <li>Er verschijnt: "Infomaatje GMail composer wil graag: ..." - Klik op toestaan</li>
                <li>Het taakoverzicht verschijnt weer in beeld</li>
                <li>Klik dan op een E-mail icoon bij een taak</li>
                <li>Infomaatje genereert nu een concept e-mail</li>
                <li>GMail opent met de net aangemaakte e-mail</li>
            </ol>

            <div class="info-box">
                <h4>💡 Eenmalige autorisatie</h4>
                <p>Deze autorisatie hoef je maar één keer uit te voeren.</p>
            </div>

            <div class="warning-box">
                <h4>⚠️ Let op</h4>
                <p>Let even op dat 'popups' zijn toegestaan in je browser.</p>
            </div>

            <h3>Verzenden met info@infomaatje.nl adres</h3>
            <p>Als je de e-mail wil verzenden met het info@infomaatje.nl adres, dan dien je dat eerst in te stellen bij GMail. Zie: <a href="https://support.google.com/mail/answer/22370?hl=nl" target="_blank">GMail ondersteuning</a></p>
        `
    }
};

// DOM Elements
const contentArea = document.getElementById('content-area');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const navLinks = document.querySelectorAll('.nav-list a');

// Load page content
function loadPage(pageName) {
    const page = wikiPages[pageName];
    if (page) {
        contentArea.innerHTML = page.content;
        contentArea.classList.remove('fade-in');
        void contentArea.offsetWidth; // Trigger reflow
        contentArea.classList.add('fade-in');
        
        // Update active nav
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        // Update URL hash
        window.location.hash = pageName;

        // Re-attach click handlers for internal links
        attachWikiLinks();
    }
}

// Attach click handlers to wiki links
function attachWikiLinks() {
    const wikiLinks = document.querySelectorAll('.wiki-link, .breadcrumbs a');
    wikiLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) {
                loadPage(page);
            }
        });
    });
}

// Search functionality
function searchWiki(query) {
    if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }

    const results = [];
    const lowerQuery = query.toLowerCase();

    for (const [key, page] of Object.entries(wikiPages)) {
        const titleMatch = page.title.toLowerCase().includes(lowerQuery);
        const contentText = page.content.replace(/<[^>]*>/g, '').toLowerCase();
        const contentMatch = contentText.includes(lowerQuery);

        if (titleMatch || contentMatch) {
            let excerpt = '';
            if (contentMatch) {
                const index = contentText.indexOf(lowerQuery);
                const start = Math.max(0, index - 50);
                const end = Math.min(contentText.length, index + 100);
                excerpt = '...' + contentText.substring(start, end) + '...';
            }
            results.push({
                key: key,
                title: page.title,
                excerpt: excerpt
            });
        }
    }

    displaySearchResults(results);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Geen resultaten gevonden</div>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" data-page="${result.key}">
                <div class="search-result-title">${result.title}</div>
                ${result.excerpt ? `<div class="search-result-excerpt">${result.excerpt}</div>` : ''}
            </div>
        `).join('');

        // Add click handlers
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                loadPage(item.dataset.page);
                searchResults.classList.remove('active');
                searchInput.value = '';
            });
        });
    }
    searchResults.classList.add('active');
}

// Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage(link.dataset.page);
    });
});

searchInput.addEventListener('input', (e) => {
    searchWiki(e.target.value);
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        searchResults.classList.remove('active');
    }, 200);
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.length >= 2) {
        searchWiki(searchInput.value);
    }
});

// Handle browser back/forward
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash && wikiPages[hash]) {
        loadPage(hash);
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash && wikiPages[hash]) {
        loadPage(hash);
    } else {
        loadPage('home');
    }
});
