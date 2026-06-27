# Yoga Nidra Italia™

Sito ufficiale di **Yoga Nidra Italia™** — la pratica del sonno consapevole con Danilo Ratti.

🌐 Online: <https://yoganidraitalia.it> · Hosting: Netlify

## Cos'è questo repository

Sito statico (HTML/CSS/JS, nessun framework). Ogni pagina è un file `.html` autonomo.

### Pagine
| File | Pagina |
|------|--------|
| `index.html` | Home |
| `la-caverna.html` | La Caverna del Cuore (pratica gratuita) |
| `il-nidrista.html` | Il Nidrista™ (formazione insegnanti) |
| `il-sonno-dei-re.html` | Il Sonno dei Re™ |
| `audioyoga-studio.html` | AudioYoga Studio™ |
| `the-spiral.html` | The Spiral (percorso 1:1) |
| `pratica-del-giovedi.html` | Pratica del Giovedì |
| `ritiro-solstizio.html` | Ritiro del Solstizio |
| `privacy.html` · `cookies.html` | Note legali |

### Cartelle
- `images/` — immagini del sito
- `fonts/` — font self-hosted
- `assets/cookieconsent/` — gestione consenso cookie

## Sviluppo locale

È un sito statico: basta aprire i file in un browser, oppure servirli con un piccolo
server locale:

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Pubblicazione

Il deploy è gestito da Netlify. Una volta collegato questo repository, ogni push
sul branch principale pubblica automaticamente il sito.

---
© Danilo Ratti · Yoga Nidra Italia™ · P.IVA 04440360164
