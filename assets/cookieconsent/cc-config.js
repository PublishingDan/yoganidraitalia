/* ============================================================
   CookieConsent v3 — configurazione
   Yoga Nidra Italia™
   ============================================================ */
window.addEventListener('DOMContentLoaded', function () {

  /* --- Google Analytics (si attiva solo col consenso "analytics") --- */
  var GA_MEASUREMENT_ID = 'G-L1X5WKBBH2';
  var gaInitialized = false;
  function loadGoogleAnalytics() {
    if (gaInitialized) return;
    gaInitialized = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }
  function syncAnalyticsConsent() {
    if (CookieConsent.acceptedCategory('analytics')) loadGoogleAnalytics();
  }

  CookieConsent.run({
    onFirstConsent: syncAnalyticsConsent,
    onConsent: syncAnalyticsConsent,
    onChange: syncAnalyticsConsent,
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom right',
        equalWeightButtons: false,
        flipButtons: false
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: false,
        flipButtons: false
      }
    },
    categories: {
      necessary: {
        readOnly: true,
        enabled: true
      },
      analytics: {
        enabled: false
      },
      marketing: {
        enabled: false
      }
    },
    language: {
      default: 'it',
      translations: {
        it: {
          consentModal: {
            title: 'Cookie',
            description: 'Questo sito usa cookie tecnici essenziali. Con il tuo consenso, anche cookie di analisi e marketing per migliorare l\'esperienza. <a href="/cookies">Dettagli</a>',
            acceptAllBtn: 'Accetta',
            acceptNecessaryBtn: 'Solo essenziali',
            showPreferencesBtn: 'Personalizza',
            footer: '<a href="/privacy">Privacy</a> · <a href="/cookies">Cookie</a>'
          },
          preferencesModal: {
            title: 'Preferenze cookie',
            acceptAllBtn: 'Accetta tutto',
            acceptNecessaryBtn: 'Solo essenziali',
            savePreferencesBtn: 'Salva preferenze',
            closeIconLabel: 'Chiudi',
            sections: [
              {
                title: 'Le tue preferenze',
                description: 'Puoi scegliere quali cookie attivare. I cookie essenziali sono sempre attivi perché servono al funzionamento del sito.'
              },
              {
                title: 'Cookie strettamente necessari',
                description: 'Indispensabili al funzionamento del sito (navigazione, sicurezza, preferenze sui cookie). Non puoi disattivarli.',
                linkedCategory: 'necessary'
              },
              {
                title: 'Cookie di analisi',
                description: 'Ci aiutano a capire come viene usato il sito (pagine viste, percorsi di navigazione) in forma aggregata e anonima. Niente di personale.',
                linkedCategory: 'analytics'
              },
              {
                title: 'Cookie di marketing',
                description: 'Permettono di mostrare contenuti più rilevanti e di misurare l\'efficacia delle campagne pubblicitarie sui social.',
                linkedCategory: 'marketing'
              },
              {
                title: 'Maggiori informazioni',
                description: 'Per ogni dettaglio leggi la <a href="/cookies">Cookie Policy</a> e la <a href="/privacy">Privacy Policy</a>.'
              }
            ]
          }
        }
      }
    }
  });
});
