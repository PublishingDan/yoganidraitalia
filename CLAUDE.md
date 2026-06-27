# CLAUDE.md — Note per le sessioni di lavoro

## Come rivolgersi all'utente
- L'utente è **Danilo Ratti**. Va chiamato **"Capo"**. Sempre. Con rispetto, mai prenderlo in giro.
- Rispondere in **italiano**, con tono semplice e chiaro (l'utente non è tecnico).

## Il progetto
Sito statico di **Yoga Nidra Italia™** (HTML/CSS/JS, nessun framework). Una pagina = un file `.html`.

## Come va online (importante)
- Hosting: **Netlify** (progetto "yoganidra", siteId `04b0e42c-3d3c-48b4-88d7-051bd41b79c5`).
- Netlify è **collegato a GitHub** e pubblica automaticamente dal branch **`main`**.
- Quindi: ogni `git push` su `main` → il sito si aggiorna da solo in ~1 minuto.
- Sviluppo sul branch `claude/ai-work-business-help-uebum9`, poi push anche su `main` per pubblicare.

## Cosa è già fatto
- Sito importato e versionato; performance ottimizzate; anteprime social (Open Graph);
  SEO (sitemap.xml, robots.txt, dati strutturati schema.org).
- **Modulo contatti** (nome, email, telefono, messaggio) su tutte le pagine, via **Netlify Forms**
  (form `contatti`), con pagina `grazie.html`. Notifica email a danilo@yoganidraitalia.it.
- Sito su Google (indicizzato), sitemap inviata a Search Console.

## Da fare (per priorità)
1. **Statistiche visite** (analytics, rispettando il cookie consent già presente).
2. Newsletter / lista contatti (systeme.io).
3. Prenotazioni online.
4. Recensioni strutturate (stelline su Google).
5. Ottimizzare le 2 foto pesanti del Ritiro (ritiro-ayas-*.jpg).

## Note tecniche
- Cookie consent già presente in `assets/cookieconsent/`.
- Stili del modulo condivisi in `assets/contact-form.css`.
