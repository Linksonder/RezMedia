# REZ Media — statische website

Eenvoudige versie van rezmedia.nl met uitsluitend HTML, CSS en lokale afbeeldingen. Geen installatie, WordPress of buildstap nodig. Ontwerp 2 gebruikt een klein JavaScript-bestand voor het starten en pauzeren van de YouTube-achtergrond.

## Bekijken en aanpassen

Open `index.html` in een browser. Alle teksten en de twaalf projecten staan in `index.html`; de vormgeving staat in `styles.css`. Afbeeldingen staan in `assets/images/`.

## GitHub Pages

1. Push deze bestanden naar je GitHub-repository.
2. Open **Settings → Pages**.
3. Kies **Deploy from a branch**, selecteer je branch en **/ (root)** en klik op **Save**.

Alle lokale paden zijn relatief, zodat de site ook onder een repositorypad werkt. Er is bewust geen CNAME ingesteld: het bestaande domein blijft bij WordPress totdat je het zelf omzet.

## Overgenomen inhoud

Bron: https://rezmedia.nl/, opgehaald op 3 november 2026. Logo, twaalf projectafbeeldingen, credits, videolinks, contactgegevens en socialmedia-links zijn overgenomen. De geel-blauwe huisstijl is behouden in een vereenvoudigde responsive opmaak.

De YouTube-achtergrond is vervangen door een vaste intro met een link naar dezelfde showreel. Video's en Google Maps openen via een link; er worden geen externe embeds of lettertypen geladen.

De overige gepubliceerde WordPress-pagina's (`about`, `services`, `contact` en `sample-page`) bevatten standaard voorbeeldinhoud en zijn niet overgenomen. De echte contactgegevens staan op de homepage.

## Tweede ontwerp

Open design-2.html voor het alternatieve donkere portfolio. De bijbehorende opmaak staat in design-2.css. Het aangeleverde brede logo staat lokaal in assets/images/rez-media-logo-wide.png. De eerste versie is ongewijzigd behouden.


Design 2 gebruikt nu dezelfde YouTube-showreel als de oorspronkelijke WordPress-site als grote videoachtergrond: autoplay, gedempt en op herhaling. Hiervoor wordt een externe YouTube-iframe geladen. De link PLAY REEL opent de video met geluid op YouTube.
