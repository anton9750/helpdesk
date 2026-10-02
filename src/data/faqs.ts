export interface Faq {
  id: string
  category: string
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    id: 'glemt-kode',
    category: 'Log ind og koder',
    question: 'Jeg kan ikke huske min adgangskode',
    answer:
      'Det er helt almindeligt. Tryk på "Glemt adgangskode" på hjemmesiden, og følg vejledningen. Kommer du ikke videre, så ring til os, så guider vi dig igennem trin for trin.',
  },
  {
    id: 'mitid-app',
    category: 'Log ind og koder',
    question: 'MitID-appen vil ikke åbne eller godkende',
    answer:
      'Prøv at lukke appen helt og åbne den igen. Tjek, at telefonen har internet. Virker det stadig ikke, så ring til os – giv aldrig din kode til en, der ringer til dig.',
  },
  {
    id: 'eboks-besked',
    category: 'Log ind og koder',
    question: 'Hvordan finder jeg et brev i e-Boks?',
    answer:
      'Log ind på e-Boks, og tryk på "Indbakke". Nyeste brev ligger øverst. Tryk på brevet for at åbne det. Vi kan også hjælpe dig over telefon eller video.',
  },
  {
    id: 'langsom-pc',
    category: 'Computer og internet',
    question: 'Min computer er blevet langsom',
    answer:
      'Luk alle åbne vinduer, og start computeren forfra. Hjælper det ikke, kan vi se med over video og finde ud af, hvad der er galt.',
  },
  {
    id: 'ingen-internet',
    category: 'Computer og internet',
    question: 'Jeg har ikke internet',
    answer:
      'Tjek, at routeren (den lille kasse med lamper) har lys. Træk strømmen ud i 30 sekunder, og sæt den i igen. Vent et par minutter. Ring til os, hvis det ikke hjælper.',
  },
  {
    id: 'svindel-mail',
    category: 'Tryghed og svindel',
    question: 'Jeg har fået en mærkelig besked eller mail',
    answer:
      'Klik ikke på links, og giv ikke koder eller kontonumre til nogen. Ring til os, så kigger vi på beskeden sammen. Det er altid bedre at spørge en gang for meget.',
  },
  {
    id: 'svindel-opkald',
    category: 'Tryghed og svindel',
    question: 'Nogen ringer og siger, de er fra banken',
    answer:
      'Læg på. Banken, politiet og det offentlige beder aldrig om din MitID-kode over telefonen. Ring selv til banken på det nummer, der står på dit betalingskort.',
  },
  {
    id: 'netflix',
    category: 'Film og musik',
    question: 'Jeg kan ikke logge ind på Netflix',
    answer:
      'Tjek, at du skriver den rigtige e-mailadresse og adgangskode. Tryk på "Glemt adgangskode", hvis du er i tvivl. Vi hjælper gerne over telefonen.',
  },
]
