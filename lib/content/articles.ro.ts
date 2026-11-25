import type { ArticlePage } from "./articles";

// Articolele în română. Faptele juridice trebuie verificate de jurist la fiecare modificare.
export const articlesRo: ArticlePage[] = [
    {
        slug: "cum-deschizi-un-srl-in-moldova",
        title: "Cum deschizi un SRL în Moldova: pași, acte și greșeli de evitat",
        metaTitle: "Cum deschizi un SRL în Moldova | JuristOnline.md",
        metaDescription:
            "Ghid pas cu pas pentru deschiderea unui SRL în Moldova: forma juridică, denumirea, asociații, statutul, depunerea la ASP și ce urmează după înregistrare.",
        summary:
            "Pașii pentru înregistrarea unui SRL la ASP, actele de care ai nevoie și greșelile care întârzie cel mai des o firmă nouă.",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        intro: [
            "Deschiderea unui SRL în Republica Moldova nu e complicată, dar cere câteva decizii pe care e greu să le schimbi mai târziu: cine sunt asociații, cum se împart părțile sociale și ce prevede statutul.",
            "Mai jos găsești pașii principali, în ordinea în care îi parcurgem de obicei cu clienții noștri, și greșelile pe care le vedem cel mai des.",
        ],
        sections: [
            {
                heading: "1. Alege forma juridică",
                paragraphs: [
                    "Înainte de orice, decide dacă ai nevoie de un SRL sau de o întreprindere individuală (ÎI). Diferența cea mai importantă ține de răspundere: la SRL, asociații răspund pentru obligațiile societății doar în limita părților sociale, iar la ÎI fondatorul răspunde cu tot patrimoniul său.",
                    "Dacă ai parteneri, încheii contracte mari sau activitatea are riscuri, SRL-ul este de obicei alegerea mai sigură.",
                ],
            },
            {
                heading: "2. Alege denumirea firmei",
                paragraphs: [
                    "Denumirea trebuie să se deosebească de cele ale firmelor deja înregistrate. Pregătește câteva variante, ca să nu pierzi timp dacă prima nu poate fi folosită. Dacă vrei să protejezi și marca sub care vei vinde, gândește-te din start la înregistrarea ei la AGEPI.",
                ],
            },
            {
                heading: "3. Stabilește asociații, administratorul și capitalul social",
                paragraphs: [
                    "Un SRL poate avea un singur asociat sau mai mulți. Capitalul social se împarte în părți sociale, iar mărimea fiecărei părți influențează drepturile asociaților, de exemplu la vot și la împărțirea profitului.",
                    "Stabilește și cine va fi administratorul – persoana care conduce firma și o reprezintă în relațiile cu terții.",
                ],
            },
            {
                heading: "4. Pregătește actele de constituire",
                paragraphs: [
                    "Actele de bază sunt cererea de înregistrare, statutul societății și decizia de fondare. ASP pune la dispoziție modele de statut, de exemplu pentru SRL cu asociat unic, dar un statut adaptat afacerii tale te ferește de multe probleme mai târziu.",
                ],
                bullets: [
                    "cum se iau deciziile și ce majoritate e necesară",
                    "ce se întâmplă dacă un asociat vrea să iasă sau să-și vândă partea",
                    "ce puteri are administratorul și ce decizii are nevoie de acordul asociaților",
                    "cum se împarte profitul",
                ],
            },
            {
                heading: "5. Depune actele la ASP",
                paragraphs: [
                    "Înregistrarea se face la Agenția Servicii Publice (ASP), la ghișeu sau online, cu semnătură electronică. La înregistrare, firma primește numărul de identificare de stat (IDNO).",
                    "Din experiența noastră, înregistrarea durează de obicei până la 3 zile lucrătoare, în funcție de complexitate și de documentele depuse.",
                ],
            },
            {
                heading: "6. Ce urmează după înregistrare",
                bullets: [
                    "deschiderea contului bancar al firmei",
                    "organizarea contabilității și a raportărilor fiscale",
                    "verificarea autorizațiilor necesare pentru genul tău de activitate",
                    "înregistrarea la ASP, în termen de 30 de zile, a oricăror modificări ale datelor din actele de constituire",
                ],
            },
            {
                heading: "Greșeli frecvente",
                bullets: [
                    "un statut copiat fără să fie adaptat, care nu reglementează conflictele dintre asociați",
                    "genuri de activitate alese prea restrâns, care cer modificări imediat după înregistrare",
                    "o împărțire a părților sociale care nu reflectă înțelegerea reală dintre asociați",
                    "termenul de 30 de zile pentru înregistrarea modificărilor, ratat din neatenție",
                ],
            },
        ],
        faq: [
            {
                question: "Pot deschide un SRL de unul singur?",
                answer: "Da. Un SRL poate avea un singur asociat, care poate fi și administrator.",
            },
            {
                question: "Trebuie să merg personal la ASP?",
                answer: "Nu neapărat. Actele se pot depune și online, cu semnătură electronică, sau prin reprezentant.",
            },
        ],
        relatedService: "inregistrare-srl",
    },
    {
        slug: "srl-sau-intreprindere-individuala",
        title: "SRL sau întreprindere individuală: ce formă juridică să alegi",
        metaTitle: "SRL sau ÎI în Moldova: ce să alegi | JuristOnline.md",
        metaDescription:
            "Care e diferența dintre SRL și întreprinderea individuală (ÎI) în Moldova: răspunderea pentru datorii, fondatorii, capitalul și când merită fiecare formă.",
        summary:
            "Diferențele reale dintre SRL și ÎI – răspunderea pentru datorii, fondatorii și capitalul – și cum alegi forma potrivită pentru afacerea ta.",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        intro: [
            "Una dintre primele întrebări la deschiderea unei afaceri în Moldova este dacă să înregistrezi un SRL sau o întreprindere individuală (ÎI). Ambele forme permit să faci afaceri legal, dar diferă mult atunci când apar datorii sau conflicte.",
        ],
        sections: [
            {
                heading: "Diferența principală: răspunderea pentru datorii",
                paragraphs: [
                    "La SRL, asociații răspund pentru obligațiile societății doar în limita valorii părților sociale pe care le dețin. Dacă afacerea are datorii, patrimoniul personal al asociaților este, ca regulă, protejat.",
                    "La întreprinderea individuală, fondatorul răspunde pentru obligațiile întreprinderii cu tot patrimoniul său. Dacă ÎI este fondată de membrii unei familii, aceștia răspund solidar și nelimitat.",
                ],
            },
            {
                heading: "Fondatorii și capitalul",
                paragraphs: [
                    "Un SRL poate avea unul sau mai mulți asociați, iar capitalul social se împarte în părți sociale. Asta permite intrarea de noi parteneri și vânzarea părților sociale.",
                    "Întreprinderea individuală este legată de persoana fondatorului (sau de membrii familiei sale) și nu are capital împărțit în părți sociale, deci nu poate primi asociați în același fel.",
                ],
            },
            {
                heading: "Când e mai potrivit SRL-ul",
                bullets: [
                    "ai unul sau mai mulți parteneri de afaceri",
                    "încheii contracte mari sau activitatea are riscuri financiare",
                    "vrei să atragi investitori sau să poți vinde afacerea mai târziu",
                    "vrei să-ți separi clar patrimoniul personal de cel al afacerii",
                ],
            },
            {
                heading: "Când poate fi suficientă o ÎI",
                bullets: [
                    "începi o activitate mică, singur sau cu familia",
                    "riscurile financiare sunt reduse",
                    "nu plănuiești să aduci parteneri sau investitori",
                ],
            },
            {
                heading: "Dar impozitele?",
                paragraphs: [
                    "Regimul fiscal diferă în funcție de formă și de activitate și se schimbă destul de des. De aceea, îl discutăm concret la consultație, împreună cu contabilul tău, înainte de înregistrare.",
                ],
            },
        ],
        faq: [
            {
                question: "Pot transforma mai târziu o ÎI în SRL?",
                answer: "O afacere poate trece de la ÎI la SRL, dar e nevoie de proceduri suplimentare. E mai simplu să alegi forma potrivită de la început; te ajutăm să analizezi situația înainte de înregistrare.",
            },
            {
                question: "Pot fi în același timp fondator de SRL și de ÎI?",
                answer: "Depinde de situația concretă și de regulile în vigoare. Verificăm cazul tău la consultație, înainte să înregistrezi a doua afacere.",
            },
        ],
        relatedService: "inregistrare-srl",
    },
    {
        slug: "divort-in-moldova",
        title: "Divorțul în Moldova: la Starea Civilă sau în instanță?",
        metaTitle: "Divorț în Moldova: Starea Civilă sau instanță",
        metaDescription:
            "Când se poate divorța la Starea Civilă și când doar în instanță în Moldova, ce se întâmplă cu copiii și bunurile comune și ce acte să pregătești.",
        summary:
            "Când divorțul se poate face prin acord la Starea Civilă, când ajunge în instanță și ce se întâmplă cu copiii și bunurile comune.",
        datePublished: "2026-11-25",
        dateModified: "2026-11-25",
        intro: [
            "În Republica Moldova, căsătoria poate fi desfăcută în două feluri: prin acord, la organul de stare civilă, sau în instanța de judecată. Calea depinde, în principal, de cât de bine se înțeleg soții privind divorțul, bunurile, întreținerea și copiii.",
        ],
        sections: [
            {
                heading: "Divorțul prin acord la Starea Civilă",
                paragraphs: [
                    "Soții pot divorța prin acord comun la organul de stare civilă atunci când amândoi vor divorțul și nu au neînțelegeri privind partajul bunurilor comune și întreținerea.",
                    "Din 1 iunie 2018, această cale este posibilă și pentru familiile cu copii minori, dacă soții nu au litigii privind bunurile sau întreținerea. Înainte, familiile cu copii minori puteau divorța doar în instanță.",
                ],
            },
            {
                heading: "Când divorțul se face în instanță",
                bullets: [
                    "unul dintre soți nu este de acord cu divorțul",
                    "soții nu se înțeleg privind partajul bunurilor comune",
                    "există neînțelegeri privind întreținerea",
                    "soții nu se înțeleg privind copiii: domiciliul, întreținerea sau educația lor",
                ],
            },
            {
                heading: "Ce se întâmplă cu copiii",
                paragraphs: [
                    "Dacă părinții nu se înțeleg, instanța stabilește cu care dintre ei va locui copilul, ținând cont în primul rând de interesul superior al copilului. Părinții pot ajunge și la un acord privind domiciliul copilului și programul de întâlniri cu celălalt părinte.",
                ],
            },
            {
                heading: "Termenul de împăcare și medierea",
                paragraphs: [
                    "În procesele de divorț în care soții au copii minori, instanța poate acorda un termen de împăcare de până la 6 luni. Pe parcurs, soții pot folosi și medierea pentru a ajunge la o înțelegere.",
                ],
            },
            {
                heading: "Ce acte să pregătești",
                paragraphs: ["Lista exactă depinde de cale și de situația familiei, dar de regulă vei avea nevoie de:"],
                bullets: [
                    "actele de identitate ale soților",
                    "certificatul de căsătorie",
                    "certificatele de naștere ale copiilor, dacă aveți copii minori",
                    "actele privind bunurile comune, dacă cereți și partajul",
                ],
            },
        ],
        faq: [
            {
                question: "Putem divorța la Starea Civilă dacă avem copii minori?",
                answer: "Da, dacă sunteți amândoi de acord cu divorțul și nu aveți neînțelegeri privind bunurile comune și întreținerea. Altfel, divorțul se face în instanță.",
            },
            {
                question: "Partajul bunurilor se face odată cu divorțul?",
                answer: "Poate fi rezolvat odată cu divorțul sau separat, prin acord sau în instanță. Îți explicăm ce variantă e mai potrivită în cazul tău.",
            },
        ],
        relatedService: "dreptul-familiei",
    },
];
