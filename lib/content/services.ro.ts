import type { ServicePage } from "./services";

// Textele paginilor de servicii în română. Faptele juridice trebuie verificate de jurist la fiecare modificare.
export const servicesRo: ServicePage[] = [
    {
        slug: "inregistrare-srl",
        title: "Înregistrare SRL și întreprindere individuală în Moldova",
        metaTitle: "Înregistrare SRL în Moldova | JuristOnline.md",
        metaDescription:
            "Deschidem firma ta (SRL sau ÎI) în Moldova: alegem forma juridică, pregătim statutul și actele, le depunem la ASP. De obicei, până la 3 zile lucrătoare.",
        summary:
            "Pregătim actele și înregistrăm SRL-ul sau întreprinderea individuală la ASP, de obicei în până la 3 zile lucrătoare.",
        intro: [
            "Vrei să-ți deschizi propria afacere, dar nu știi de unde să începi? Ne ocupăm de tot procesul de înregistrare a firmei – de la alegerea formei juridice potrivite până la primirea documentelor de înregistrare.",
            "Firmele se înregistrează la Agenția Servicii Publice (ASP). De obicei, procesul durează până la 3 zile lucrătoare, în funcție de complexitate și de documentele disponibile.",
        ],
        sections: [
            {
                heading: "Ce include serviciul",
                bullets: [
                    "consultație despre forma juridică potrivită: SRL sau întreprindere individuală (ÎI)",
                    "verificarea și alegerea denumirii firmei",
                    "redactarea statutului și a deciziei de fondare, adaptate activității tale",
                    "completarea cererii de înregistrare și depunerea actelor la ASP",
                    "explicarea pașilor de după înregistrare: contul bancar, contabilitatea și obligațiile fiscale",
                ],
            },
            {
                heading: "SRL sau întreprindere individuală?",
                paragraphs: [
                    "La SRL, asociații răspund pentru obligațiile societății doar în limita părților sociale pe care le dețin, așa că patrimoniul personal rămâne separat de cel al afacerii.",
                    "La întreprinderea individuală, fondatorul răspunde pentru obligațiile întreprinderii cu tot patrimoniul său. ÎI poate fi potrivită pentru activități mici, dar pentru parteneriate sau activități cu riscuri mai mari recomandăm de obicei SRL-ul.",
                ],
            },
            {
                heading: "De ce avem nevoie de la tine",
                paragraphs: [
                    "Lista exactă a actelor o stabilim la consultație, în funcție de situația ta. De regulă, pornim de la:",
                ],
                bullets: [
                    "actele de identitate ale fondatorilor și ale administratorului",
                    "denumirea dorită pentru firmă (ideal câteva variante)",
                    "adresa sediului",
                    "genurile de activitate pe care le vei desfășura",
                    "mărimea capitalului social și împărțirea părților sociale, dacă sunt mai mulți asociați",
                ],
            },
        ],
        steps: [
            {
                title: "Consultația inițială",
                text: "Discutăm despre afacerea ta și alegem forma juridică, structura asociaților și genurile de activitate.",
            },
            {
                title: "Pregătirea actelor",
                text: "Redactăm statutul, decizia de fondare și cererea de înregistrare, iar tu le verifici înainte de semnare.",
            },
            {
                title: "Depunerea la ASP",
                text: "Depunem dosarul la Agenția Servicii Publice și urmărim examinarea lui până la înregistrare.",
            },
            {
                title: "Firma e gata de lucru",
                text: "Primești documentele de înregistrare și pașii următori: contul bancar, contabilitatea și obligațiile fiscale.",
            },
        ],
        faq: [
            {
                question: "Cât durează înregistrarea unui SRL?",
                answer: "De obicei, până la 3 zile lucrătoare de la depunerea actelor, în funcție de complexitate și de documentele furnizate.",
            },
            {
                question: "Pot înregistra firma fără să merg personal la ASP?",
                answer: "Da. ASP permite și înregistrarea online, cu semnătură electronică. Te ajutăm să pregătești și să depui actele corect, pe calea cea mai comodă pentru tine.",
            },
            {
                question: "Ce fac dacă vreau să schimb ulterior datele firmei?",
                answer: "Modificările datelor din actele de constituire se înregistrează la ASP în termen de 30 de zile. Te ajutăm și cu aceste modificări.",
            },
            {
                question: "Mă ajutați și după înregistrare?",
                answer: "Da. Prin abonamentul juridic lunar sau anual te ajutăm în continuare cu contracte, relația cu instituțiile statului și consultanță la nevoie.",
            },
        ],
        related: ["lichidare-srl", "redactare-contracte", "abonament-juridic-firme"],
    },
    {
        slug: "lichidare-srl",
        title: "Lichidare SRL în Moldova",
        metaTitle: "Lichidare SRL în Moldova | JuristOnline.md",
        metaDescription:
            "Închidem firma ta legal și fără riscuri: decizia de lichidare, anunțul în Monitorul Oficial, relația cu creditorii, bilanțul de lichidare și radierea la ASP.",
        summary:
            "Te ghidăm prin toată procedura de lichidare a SRL-ului, de la decizia asociaților până la radierea din Registrul de stat.",
        intro: [
            "Închiderea unei firme nu înseamnă doar să oprești activitatea. Cât timp SRL-ul figurează în Registrul de stat, are în continuare obligații, iar o lichidare făcută greșit poate întârzia radierea sau poate aduce penalități.",
            "Ne ocupăm de întreaga procedură de lichidare voluntară, astfel încât firma să fie radiată din Registrul de stat al persoanelor juridice legal și fără surprize.",
        ],
        sections: [
            {
                heading: "Etapele lichidării unui SRL",
                bullets: [
                    "decizia asociaților privind lichidarea și desemnarea lichidatorului",
                    "înregistrarea deciziei de lichidare la Agenția Servicii Publice (ASP)",
                    "publicarea anunțului despre lichidare în Monitorul Oficial",
                    "informarea creditorilor cunoscuți și examinarea creanțelor depuse în termenul legal",
                    "stingerea datoriilor, inclusiv a celor față de buget, și întocmirea bilanțului de lichidare",
                    "depunerea cererii de radiere la ASP și radierea firmei din Registrul de stat",
                ],
            },
            {
                heading: "Cât durează lichidarea",
                paragraphs: [
                    "Lichidarea voluntară nu se face într-o singură zi: după publicarea anunțului în Monitorul Oficial, legea lasă creditorilor un termen în care își pot depune creanțele. Durata totală depinde de situația firmei – de datorii, bunuri și eventuale litigii.",
                    "Actele pentru fiecare etapă le pregătim rapid, iar la prima discuție îți spunem ce durată să aștepți pentru firma ta.",
                ],
            },
            {
                heading: "Ce verificăm înainte de a începe",
                bullets: [
                    "datoriile față de buget și față de alți creditori",
                    "conturile bancare și bunurile firmei",
                    "contractele în derulare și eventualele litigii",
                    "raportările fiscale și contabile restante",
                ],
            },
        ],
        steps: [
            {
                title: "Analiza situației firmei",
                text: "Verificăm actele, datoriile și bunurile SRL-ului și îți propunem cea mai sigură cale de închidere.",
            },
            {
                title: "Decizia de lichidare",
                text: "Pregătim decizia asociaților și actele pentru înregistrarea lichidării la ASP.",
            },
            {
                title: "Anunțul și creditorii",
                text: "Publicăm anunțul în Monitorul Oficial și gestionăm relația cu creditorii în termenul legal.",
            },
            {
                title: "Radierea firmei",
                text: "Întocmim bilanțul de lichidare și depunem cererea de radiere din Registrul de stat.",
            },
        ],
        faq: [
            {
                question: "Pot închide firma dacă are datorii?",
                answer: "Înainte de radiere, ASP verifică, printre altele, dacă firma nu are datorii față de buget. Datoriile trebuie stinse în cadrul lichidării, iar dacă bunurile firmei nu ajung pentru acoperirea lor, analizăm împreună ce procedură se aplică.",
            },
            {
                question: "Cine poate fi lichidator?",
                answer: "În lichidarea voluntară, lichidatorul este desemnat prin decizia asociaților. Îți explicăm ce responsabilități are și pregătim toate actele pe care trebuie să le întocmească.",
            },
            {
                question: "Ce se întâmplă dacă doar opresc activitatea, fără lichidare?",
                answer: "Firma rămâne înregistrată și are în continuare obligații, inclusiv de raportare. De aceea recomandăm închiderea ei corectă, prin lichidare și radiere.",
            },
        ],
        related: ["inregistrare-srl", "abonament-juridic-firme", "reprezentare-in-instanta"],
    },
    {
        slug: "redactare-contracte",
        title: "Redactare și revizuire contracte",
        metaTitle: "Redactare contracte în Moldova | JuristOnline.md",
        metaDescription:
            "Redactăm și verificăm contracte comerciale, de prestări servicii, vânzare-cumpărare, locațiune sau muncă, ca drepturile tale să fie protejate.",
        summary:
            "Contracte redactate de la zero sau verificate înainte de semnare, adaptate afacerii tale și legislației din Moldova.",
        intro: [
            "Un contract bine scris previne conflictele înainte să apară. Unul scris în grabă sau copiat de pe internet poate lăsa neacoperite tocmai situațiile care contează: întârzierile la plată, calitatea, răspunderea sau rezilierea.",
            "Redactăm contracte adaptate afacerii tale și verificăm contractele primite de la parteneri înainte să le semnezi, ca să știi exact ce îți asumi.",
        ],
        sections: [
            {
                heading: "Ce contracte redactăm",
                bullets: [
                    "contracte de prestări servicii și de antrepriză",
                    "contracte de vânzare-cumpărare și de furnizare",
                    "contracte de locațiune (chirie) și de comodat",
                    "contracte individuale de muncă și acorduri de confidențialitate",
                    "contracte de colaborare, parteneriat și împrumut",
                    "acte adiționale, procuri și notificări",
                ],
            },
            {
                heading: "Ce verificăm la un contract primit",
                bullets: [
                    "obligațiile reale ale fiecărei părți și termenele",
                    "prețul, modul de plată și penalitățile pentru întârziere",
                    "răspunderea pentru neexecutare și limitele ei",
                    "condițiile de reziliere și de ieșire din contract",
                    "clauzele dezavantajoase sau neclare, cu propuneri concrete de modificare",
                ],
            },
            {
                heading: "Pentru firme și persoane fizice",
                paragraphs: [
                    "Lucrăm atât cu companii, cât și cu persoane fizice. Pentru firmele care încheie des contracte putem pregăti modele standard pe care le folosești apoi singur, iar prin abonamentul juridic verificăm fiecare contract nou.",
                ],
            },
        ],
        steps: [
            {
                title: "Ne spui ce ai nevoie",
                text: "Ne descrii înțelegerea cu partenerul sau ne trimiți contractul primit.",
            },
            {
                title: "Analiză și redactare",
                text: "Redactăm contractul sau marcăm riscurile și propunem modificări concrete.",
            },
            {
                title: "Discutăm varianta finală",
                text: "Îți explicăm fiecare clauză importantă și ajustăm textul unde e nevoie.",
            },
            {
                title: "Semnezi în siguranță",
                text: "Primești contractul final, gata de semnare, și știi exact ce prevede.",
            },
        ],
        faq: [
            {
                question: "Cât durează redactarea unui contract?",
                answer: "Depinde de complexitate. Un contract standard îl pregătim de regulă rapid, iar pentru contractele complexe stabilim termenul împreună de la început.",
            },
            {
                question: "Pot folosi un model de contract găsit pe internet?",
                answer: "Poți, dar modelele generale nu țin cont de situația ta concretă și uneori nici de legislația din Moldova. Îl putem verifica și adapta înainte să-l semnezi.",
            },
            {
                question: "Verificați și contracte deja semnate?",
                answer: "Da. Analizăm contractul, îți explicăm ce drepturi și obligații ai și ce opțiuni există dacă partenerul nu își respectă obligațiile.",
            },
        ],
        related: ["abonament-juridic-firme", "inregistrare-srl", "reprezentare-in-instanta"],
    },
    {
        slug: "reprezentare-in-instanta",
        title: "Reprezentare în instanță",
        metaTitle: "Reprezentare în instanță în Moldova | JuristOnline.md",
        metaDescription:
            "Te reprezentăm în instanță și în fața instituțiilor statului: cauze civile, contravenționale și penale, mediere și pregătirea cererilor la CEDO.",
        summary:
            "Reprezentare în cauze civile, contravenționale și penale, mediere și sprijin pentru dosarele la CEDO.",
        intro: [
            "Un litigiu în instanță înseamnă termene stricte, acte procedurale și strategie. Te ajutăm să-ți aperi interesele de la prima analiză a cazului până la hotărârea finală.",
            "Analizăm situația, îți spunem sincer care sunt șansele și riscurile și alegem împreună calea potrivită: negociere, mediere sau proces.",
        ],
        sections: [
            {
                heading: "Cauze în care te putem ajuta",
                bullets: [
                    "litigii civile: datorii, contracte neexecutate, despăgubiri, conflicte cu partenerii",
                    "litigii de familie: divorț, partaj, întreținere, domiciliul copilului",
                    "cauze contravenționale: contestarea proceselor-verbale și a amenzilor",
                    "cauze penale",
                    "relația cu instituțiile statului: FISC, primării și alte autorități",
                    "pregătirea cererilor și a dosarelor pentru Curtea Europeană a Drepturilor Omului (CEDO)",
                ],
            },
            {
                heading: "Mediere și înțelegere amiabilă",
                paragraphs: [
                    "Nu orice conflict trebuie să ajungă în instanță. Acolo unde are sens, încercăm mai întâi negocierea sau medierea, care pot fi mai rapide și mai puțin costisitoare decât un proces.",
                ],
            },
            {
                heading: "Ce primești",
                bullets: [
                    "analiza documentelor și o evaluare sinceră a cazului",
                    "redactarea cererilor, a referințelor și a celorlalte acte procedurale",
                    "participarea la ședințe și urmărirea termenelor",
                    "informare constantă despre stadiul dosarului",
                ],
            },
        ],
        steps: [
            {
                title: "Analiza cazului",
                text: "Studiem actele și îți explicăm opțiunile, șansele și costurile probabile.",
            },
            {
                title: "Strategia",
                text: "Stabilim împreună obiectivul: înțelegere amiabilă, mediere sau proces.",
            },
            {
                title: "Actele procedurale",
                text: "Redactăm și depunem cererile și probele în termenele legale.",
            },
            {
                title: "Reprezentarea",
                text: "Îți susținem poziția și te ținem la curent cu fiecare etapă a dosarului.",
            },
        ],
        faq: [
            {
                question: "Cât costă reprezentarea în instanță?",
                answer: "Costul depinde de tipul cauzei, de complexitatea ei și de numărul de ședințe. După analiza actelor îți comunicăm o ofertă clară, înainte de a începe.",
            },
            {
                question: "Merită să contest o amendă contravențională?",
                answer: "Depinde de circumstanțe și de modul în care a fost întocmit procesul-verbal. Analizăm actele și îți spunem sincer dacă există temeiuri de contestare. Termenele de contestare sunt scurte, așa că e bine să ne contactezi cât mai repede.",
            },
            {
                question: "Mă puteți ajuta cu o cerere la CEDO?",
                answer: "Da. Verificăm dacă au fost epuizate căile de atac interne și dacă există temeiuri pentru o cerere, apoi te ajutăm să pregătești dosarul.",
            },
        ],
        related: ["dreptul-familiei", "redactare-contracte", "abonament-juridic-firme"],
    },
    {
        slug: "inregistrare-marca-agepi",
        title: "Înregistrare marcă la AGEPI",
        metaTitle: "Înregistrare marcă la AGEPI | JuristOnline.md",
        metaDescription:
            "Îți protejăm numele și logo-ul afacerii: verificăm marca, depunem cererea la AGEPI și urmărim procedura până la înregistrare. Plus drepturi de autor.",
        summary:
            "Protejăm numele, logo-ul și creațiile tale prin înregistrare la AGEPI și te ajutăm să-ți aperi drepturile de autor.",
        intro: [
            "Numele și logo-ul afacerii tale se numără printre cele mai valoroase lucruri pe care le ai. Fără o marcă înregistrată, îți este mult mai greu să le aperi dacă altcineva începe să le folosească.",
            "În Republica Moldova, mărcile se înregistrează la Agenția de Stat pentru Proprietatea Intelectuală (AGEPI). Te ajutăm cu întreaga procedură, de la verificarea inițială până la înregistrarea mărcii.",
        ],
        sections: [
            {
                heading: "Ce include serviciul",
                bullets: [
                    "verificarea preliminară, ca să vedem dacă există deja mărci identice sau asemănătoare",
                    "alegerea claselor de produse și servicii pentru care ceri protecție",
                    "pregătirea și depunerea cererii de înregistrare la AGEPI",
                    "urmărirea procedurii și răspunsul la eventualele obiecții sau opoziții",
                    "protecția drepturilor de autor și consultanță dacă marca îți este folosită fără drept",
                ],
            },
            {
                heading: "Cum decurge procedura la AGEPI",
                paragraphs: [
                    "După depunere, AGEPI verifică dacă cererea îndeplinește condițiile formale. Cererea este apoi publicată în Buletinul Oficial de Proprietate Intelectuală (BOPI), iar timp de 3 luni de la publicare terții pot depune opoziție.",
                    "Urmează examinarea de fond, la finalul căreia AGEPI decide dacă înregistrează marca. Dacă apar obiecții sau opoziții, pregătim argumentele și răspunsurile necesare.",
                ],
            },
            {
                heading: "De ce merită să-ți înregistrezi marca din timp",
                bullets: [
                    "îți asiguri dreptul exclusiv de a folosi numele și logo-ul pentru produsele și serviciile tale",
                    "poți opri concurenții care folosesc o denumire identică sau asemănătoare",
                    "marca devine un activ al afacerii, care poate fi cedat sau dat în licență",
                ],
            },
        ],
        steps: [
            {
                title: "Verificarea mărcii",
                text: "Căutăm mărci identice sau asemănătoare și îți spunem cât de sigură este înregistrarea.",
            },
            {
                title: "Clasele și cererea",
                text: "Stabilim clasele de produse și servicii și pregătim cererea pentru AGEPI.",
            },
            {
                title: "Depunerea și urmărirea",
                text: "Depunem cererea, urmărim publicarea în BOPI și perioada de opoziție.",
            },
            {
                title: "Înregistrarea",
                text: "Răspundem la eventualele obiecții până la decizia de înregistrare a mărcii.",
            },
        ],
        faq: [
            {
                question: "Cât durează înregistrarea unei mărci?",
                answer: "Procedura are mai multe etape obligatorii, inclusiv cele 3 luni pentru opoziții după publicarea cererii în BOPI, așa că durează câteva luni. La consultație îți spunem termenele estimative pentru cazul tău.",
            },
            {
                question: "Pot înregistra doar logo-ul sau doar numele?",
                answer: "Da. Poți înregistra o marcă verbală (doar denumirea), una figurativă (logo-ul) sau una combinată. Îți recomandăm varianta potrivită în funcție de cum folosești marca.",
            },
            {
                question: "Ce fac dacă cineva îmi folosește numele fără drept?",
                answer: "Analizăm situația și drepturile pe care le ai, apoi îți propunem pașii potriviți: notificare, negociere sau acțiune în instanță.",
            },
        ],
        related: ["inregistrare-srl", "redactare-contracte", "reprezentare-in-instanta"],
    },
    {
        slug: "abonament-juridic-firme",
        title: "Abonament juridic pentru firme",
        metaTitle: "Abonament juridic pentru firme | JuristOnline.md",
        metaDescription:
            "Jurist pentru firma ta fără angajat în plus: consultanță, contracte și relația cu instituțiile statului, cu tarif fix lunar și suport prioritar.",
        summary:
            "Suport juridic continuu pentru companie, cu tarif fix lunar și răspuns prioritar la întrebările tale.",
        intro: [
            "Nu orice firmă are nevoie de un jurist angajat cu normă întreagă, dar orice firmă are nevoie de cineva care să-i verifice contractele și să-i răspundă repede la întrebările juridice.",
            "Prin abonamentul juridic primești acces la serviciile noastre de bază la un tarif fix lunar. Încheiem un contract anual, plătești lunar și ai suport juridic continuu – fără griji și fără complicații.",
        ],
        sections: [
            {
                heading: "Ce include abonamentul",
                bullets: [
                    "consultanță juridică pentru întrebările curente ale firmei",
                    "redactarea și verificarea contractelor",
                    "redactarea actelor interne, a notificărilor și a scrisorilor oficiale",
                    "asistență în relația cu instituțiile statului (FISC, primării etc.)",
                    "sprijin la pregătirea pentru licitații, achiziții publice și granturi",
                    "răspuns prioritar la solicitările tale",
                ],
            },
            {
                heading: "Pentru cine e potrivit",
                paragraphs: [
                    "Abonamentul e potrivit pentru firmele mici și mijlocii care au nevoie constant de sprijin juridic, dar pentru care un jurist angajat ar fi prea costisitor: companii care încheie des contracte, lucrează cu instituții publice sau participă la achiziții.",
                ],
            },
            {
                heading: "Avantaje față de un jurist angajat",
                bullets: [
                    "un cost lunar fix și previzibil",
                    "fără cheltuieli cu salariul, concediile și instruirea unui angajat",
                    "peste 15 ani de experiență în domeniul juridic, din prima zi",
                    "continuitate: cunoaștem firma ta și istoricul ei",
                ],
            },
        ],
        steps: [
            {
                title: "Discuție despre firmă",
                text: "Aflăm cu ce se ocupă firma și de ce sprijin juridic are nevoie de obicei.",
            },
            {
                title: "Oferta",
                text: "Îți propunem pachetul potrivit și tariful fix lunar.",
            },
            {
                title: "Contractul",
                text: "Încheiem un contract anual, cu plată lunară.",
            },
            {
                title: "Suport continuu",
                text: "Ne scrii sau ne suni ori de câte ori ai o întrebare juridică.",
            },
        ],
        faq: [
            {
                question: "Ce presupune pachetul de abonament juridic lunar?",
                answer: "Pachetul îți oferă acces la toate serviciile noastre de bază – consultanță, redactare de acte, relația cu instituțiile publice – cu un tarif fix lunar și suport prioritar.",
            },
            {
                question: "Cât costă abonamentul?",
                answer: "Tariful depinde de volumul de lucru și de serviciile de care are nevoie firma. După o scurtă discuție îți propunem un tarif fix lunar.",
            },
            {
                question: "Pe ce perioadă se încheie contractul?",
                answer: "Contractul se încheie pe un an, iar plata se face lunar.",
            },
        ],
        related: ["redactare-contracte", "inregistrare-srl", "reprezentare-in-instanta"],
    },
    {
        slug: "dreptul-familiei",
        title: "Dreptul familiei: divorț, partaj și custodie",
        metaTitle: "Divorț, partaj și custodie în Moldova | JuristOnline.md",
        metaDescription:
            "Te ajutăm la divorț, partajul bunurilor, stabilirea domiciliului copilului și pensia de întreținere – prin acord la Starea Civilă sau în instanță.",
        summary:
            "Asistență juridică la divorț, partajul bunurilor, domiciliul copilului și pensia de întreținere.",
        intro: [
            "Problemele de familie sunt printre cele mai grele situații prin care trece cineva. Te ajutăm să le rezolvi cât mai liniștit, cu grijă pentru interesele copiilor și cu protecția drepturilor tale.",
            "Acolo unde se poate, căutăm o înțelegere între părți. Când acordul nu e posibil, te reprezentăm în instanță.",
        ],
        sections: [
            {
                heading: "Cu ce te putem ajuta",
                bullets: [
                    "divorț prin acord sau în instanță",
                    "partajul bunurilor comune ale soților",
                    "stabilirea domiciliului copilului și a programului de întâlniri cu celălalt părinte",
                    "pensia de întreținere pentru copii",
                    "acorduri între soți și redactarea actelor necesare",
                ],
            },
            {
                heading: "Divorț la Starea Civilă sau în instanță?",
                paragraphs: [
                    "Soții pot divorța prin acord comun la organul de stare civilă atunci când nu au neînțelegeri privind partajul bunurilor comune și întreținerea. Din 2018, această cale e posibilă și pentru familiile cu copii minori.",
                    "Dacă soții nu ajung la un acord – privind bunurile, întreținerea sau copiii – ori unul dintre ei nu este de acord cu divorțul, cazul se judecă în instanță. Îți explicăm ce cale se aplică în situația ta și ce acte sunt necesare.",
                ],
            },
            {
                heading: "Interesul copilului pe primul loc",
                paragraphs: [
                    "În cauzele care privesc copiii, instanța ține cont în primul rând de interesul superior al copilului. Te ajutăm să pregătești argumentele și actele care arată ce soluție e cea mai bună pentru copil.",
                ],
            },
        ],
        steps: [
            {
                title: "Discuție confidențială",
                text: "Ne povestești situația, iar noi îți explicăm drepturile și opțiunile pe care le ai.",
            },
            {
                title: "Calea potrivită",
                text: "Stabilim dacă se poate ajunge la un acord sau e nevoie de instanță.",
            },
            {
                title: "Actele",
                text: "Pregătim acordurile, cererile și documentele necesare.",
            },
            {
                title: "Rezolvarea",
                text: "Te ajutăm la Starea Civilă sau te reprezentăm în instanță până la soluția finală.",
            },
        ],
        faq: [
            {
                question: "Pot divorța la Starea Civilă dacă avem copii minori?",
                answer: "Da, dacă sunteți amândoi de acord cu divorțul și nu aveți neînțelegeri privind bunurile comune și întreținerea. Altfel, divorțul se face în instanță.",
            },
            {
                question: "Cât durează un divorț în instanță?",
                answer: "Depinde de complexitatea cazului și de disputele privind copiii sau bunurile. Dacă soții au copii minori, instanța poate acorda un termen de împăcare de până la 6 luni.",
            },
            {
                question: "Discuțiile cu voi sunt confidențiale?",
                answer: "Da. Tot ce ne povestești rămâne confidențial și e folosit doar ca să te ajutăm.",
            },
        ],
        related: ["reprezentare-in-instanta", "redactare-contracte", "inregistrare-srl"],
    },
];
