// =========================================================================
        // 1. LANGUAGE CONFIGURATION (ENGLISH DEFAULT + SERBIAN OPTION)
        // =========================================================================
        const LANG_STORAGE_KEY = 'astralis_lang_v1';
        let currentLang = 'en';
        let currentActiveView = 'daily';
        let dailyExample = true;
        let synastryExample = true;

        const UI_STRINGS = {
            en: {
                profileStorageNote: "Your birth details are saved on this device only if you choose Save in this browser.",
                synPrivacyNote: "Both sets of details stay in this open page and are never saved by the comparison tool.",
                btnClearProfile: "Clear saved data",
                profileDayTitle: "Your daily profile",
                birthEditorTitle: "Birth details",
                showBirthDetails: "Birth details",
                hideBirthDetails: "Close birth details",
                readingToday: "Today ·",
                readingFor: "Reading for",
                profileWheelLink: "See natal wheel",
                savedProfileNotice: "Check the saved birth date and choose a city from the list. Save the updated details to restore your daily profile.",
                dailyResultExample: "Example using sample birth details",
                dailyResultLive: "Illustrative reading using your inputs",
                synResultExample: "Example using sample birth details",
                synResultLive: "Illustration using the entered details",
                toastCleared: "Saved data cleared from this browser.",
                toastStorageError: "Could not change the saved data in this browser.",
                toastSynReady: "Illustrative comparison ready.",
                cityError: "Choose a city from the list. This simulator searches its built-in list only.",
                pageTitle: 'Astralis — Daily Horoscope, Natal Chart, History & Astrology Encyclopedia',
                headerSubtitle: 'Astrology & Natal Portal',
                tabDailyDesktop: '🔮 Daily & Natal Wheel',
                tabSynastryDesktop: '💞 Synastry (Couples)',
                tabHistoryDesktop: '🏛️ History & Roots',
                tabCuriositiesDesktop: '🔭 Facts & Curiosities',
                tabBooksDesktop: '📚 Learn & Books',
                tabMerchDesktop: '👕 Merch',
                tabDailyMobile: '🔮 Natal',
                tabSynastryMobile: '💞 Couples',
                tabHistoryMobile: '🏛️ History',
                tabCuriositiesMobile: '🔭 Facts',
                tabBooksMobile: '📚 Books',
                tabMerchMobile: '👕 Merch',
                heroTitle: "<span class=\"gold-gradient-text\">Daily Horoscope</span> & Natal Chart Simulator",
                heroDesc: "Try a symbolic reading using a birth date, time and listed city. The wheel and scores use simplified formulas for illustration. They do not show real planetary positions or predict events.",
                lblUserName: 'Your Name (optional)',
                placeholderUserName: 'e.g. Alex',
                lblBirthCity: "Birthplace (choose from the list)",
                placeholderBirthCity: "Start typing a listed city",
                lblBirthDate: 'Birth Date *',
                lblBirthTime: 'Birth Time',
                lblUnknownTime: 'Unknown time',
                lblTargetDate: "Reading Date",
                btnSaveProfile: "Save in this browser",
                btnCalcHoroscope: "Show reading",
                profileGreetingDefault: "Illustrative Astrology Profile",
                profileGreetingNamed: (name) => `Illustrative Profile • ${name}`,
                elementPrefix: 'Element',
                lblRising: "Sample rising sign",
                lblMoon: "Sample Moon",
                unknownHourValue: 'Unknown time',
                lblOverallCosmic: "Symbolic daily score",
                verdictHigh: "Theme: initiative",
                verdictMed: "Theme: focus",
                verdictLow: "Theme: reflection",
                lblLuckyNumbers: "Sample Numbers",
                lblLuckyColor: "Color Prompt",
                lblLuckyHours: "Sample Time Window",
                secFavorabilityTitle: "Reading by theme",
                secFavorabilitySub: "Explore four prompts for this date. The scores and example aspects are illustrative.",
                keyTransitPrefix: "Example aspect",
                cardWorkTitle: "Work & Projects",
                cardWorkFooter: "Example score",
                cardLoveTitle: "Relationships",
                cardLoveFooter: "Example score",
                cardHealthTitle: "Wellbeing & Rest",
                cardHealthFooter: "Example score",
                cardLuckTitle: "Curiosity & Intuition",
                cardLuckFooter: "Example score",
                badgeHigh: 'High',
                badgeMod: 'Moderate',
                badgeStrong: 'Strong',
                badgeSteady: 'Steady',
                badgeExc: 'Excellent',
                badgeGood: 'Good',
                badgePronounced: 'Pronounced',
                wheelTitle: "Illustrative Natal Wheel",
                wheelSub: "A diagram of sample placements and 12 equal visual sectors. No house system or ephemeris is calculated.",
                wheelSystemBadge: "Simulator",
                legendTrine: 'Trine / Sextile',
                legendSquare: 'Square / Opposition',
                legendPlanets: "Sample Placements",
                detailedDailyTitle: "Sample Daily Reading",
                btnCopy: 'Copy',
                vipDailyTitle: "Reading Prompts",
                karmicNodeHeading: "☊ North Node as a Symbol",
                seventhHouseHeading: "7th House as a Symbol",
                secAllSignsTitle: 'Quick Overview of All 12 Zodiac Signs',
                secAllSignsSub: "Choose a sign to load an example birth date in the simulator.",
                synHeroPill: "💞 Synastry simulator",
                synHeroTitle: "<span class=\"gold-gradient-text\">Synastry</span> Chart for Two",
                synHeroDesc: "Compare the modeled positions in two charts. The simulator checks the shortest angles between selected pairs and uses traditional meanings as conversation prompts.",
                synWheelSub: "Inner ring: Person A · Outer ring: Person B. Aspect lines inside this wheel show examples for Person A.",
                synAspectCountLabel: "Matched pairs",
                synMethodTitle: "How to read the angles",
                synMethodDescription: "We compare 21 selected cross-chart pairs using the shortest angular separation. Each aspect has a maximum allowed deviation: conjunction 0° ±7°, sextile 60° ±5°, square 90° ±6°, trine 120° ±7°, and opposition 180° ±7°.",
                synMethodLimit: "Angles come from the simulator’s modeled positions. The traditional interpretations are prompts, and the aspect count does not measure compatibility.",
                synNoTime: "For a missing birth time, the simulator uses noon as a reference. This can change the sample placements and which aspects are listed.",
                synDetailTitle: "What the aspects can prompt you to discuss",
                synAngle: "Separation",
                synDeviation: "Deviation",
                synOrb: "Allowed",
                synNearest: "Nearest tested pair",
                synNoMatch: "No tested pair in this theme met the listed tolerances.",
                synTopic: "In astrological symbolism",
                synBodies: {"SO": ["Sun", "identity and personal direction"], "MO": ["Moon", "comfort and emotional habits"], "ME": ["Mercury", "words and ways of thinking"], "VE": ["Venus", "affection and preferences"], "MA": ["Mars", "initiative and assertiveness"], "JU": ["Jupiter", "openness and expansion"], "SA": ["Saturn", "limits and commitments"]},
                synAspects: {"conjunction": "Conjunction", "sextile": "Sextile", "square": "Square", "trine": "Trine", "opposition": "Opposition"},
                synThemes: {"emotion": {"title": "Emotional needs", "fallback": "When you are upset, do you usually want someone to listen, give you space, or help solve the problem?", "conjunction": "If both of you reach for the same kind of reassurance, compare the timing. Would a quiet check-in help both people immediately, or would one prefer it later?", "sextile": "One person might show care by offering a practical gesture, while the other mostly needs to be asked how they feel. Try asking which form of support is wanted first.", "square": "Imagine that one person wants to talk through a difficult evening and the other recovers best with solitude. Agree on a time to reconnect so a pause can be understood as care.", "trine": "Think of a moment when one of you noticed the other needed support without being told. Say what made the gesture work so it can be offered again.", "opposition": "Words of reassurance can feel warm to one person while the other trusts concrete help. Name one example of each and ask which would feel more supportive this week."}, "passion": {"title": "Attraction and shared interests", "fallback": "Name something you enjoy together and something you prefer to do separately. Put room for both in your next plan.", "conjunction": "A shared enthusiasm can get a plan started. Take turns choosing a detail such as the activity, place, or pace, so excitement makes room for both voices.", "sextile": "Try an activity where one person gets the ball rolling and the other adds a personal touch. Pick something small, such as making a playlist or preparing dinner together.", "square": "One person might enjoy spontaneous invitations while the other prefers notice. Agree when a surprise is welcome and when to ask first.", "trine": "Compare how you each picture an enjoyable evening. Use one preference you share as the starting point, then each add a different detail.", "opposition": "If one person wants a lively outing and the other wants a quiet evening, suggest two short plans or alternate who sets the pace."}, "comm": {"title": "Communication", "fallback": "After an important conversation, each person can summarize what they heard in one sentence and give the other a chance to correct it.", "conjunction": "You may recognize an idea quickly when it is phrased in a familiar way. Before agreeing, each give a concrete example to check whether you mean the same thing.", "sextile": "Let one person speak first and the other ask a neutral follow-up question. For a practical plan, use questions such as when, where, and what each person needs.", "square": "If a direct suggestion sounds like criticism, first ask whether the other person wants feedback. Then repeat the problem as you understand it before suggesting a fix.", "trine": "When a conversation feels easy, check which things were left implicit. If you decide on a time or place, say it out loud and confirm that it suits both of you.", "opposition": "If one person starts with the big picture and the other with the details, give each approach a turn. Then write down the one decision you both understood."}, "karma": {"title": "Shared plans", "fallback": "Choose one modest plan you can test this week and agree when you will revisit it together.", "conjunction": "If you both bring similar expectations about commitments, check that each person has the same definition of ‘done’. Give a task an owner and a date.", "sextile": "Try pairing one person’s idea with the other’s practical next step. Agree on the smallest version you could do before a bigger commitment.", "square": "If one person wants to start soon and the other wants more planning, agree on a low-effort trial and a date to review what happened.", "trine": "If responsibilities fall into place easily, check that the division still feels fair. Ask who will step in if the usual plan stops working.", "opposition": "When one person focuses on what might be possible and the other on time or effort, write down a shared minimum and decide together what would justify expanding it."}},
                synPersonALabel: '☀️ Person A (Inner Ring)',
                btnUseMyData: 'Use my details',
                lblSynName1: 'Person A Name',
                lblSynCity: "Birthplace (choose from the list)",
                lblSynDate: 'Birth Date *',
                lblSynTime: 'Birth Time',
                synPersonBLabel: '🌙 Person B (Outer Ring)',
                synPartnerHint: "Use a nickname",
                lblSynName2: 'Person B Name',
                btnCalcSynastry: "Show comparison",
                synWheelTitle: "Illustrative Synastry Wheel",
                histPill: '🏛️ Historical Origins & Cultural Heritage',
                histBackBtn: '← Back to Natal Calculator',
                histMainTitle: 'The <span class="gold-gradient-text">History & Ancient Roots</span> of Astrology',
                histMainDesc: 'For more than four thousand years, human civilizations have observed the cycles of the Sun, Moon, and wandering stars to structure calendars, navigate oceans, and interpret the relationship between celestial patterns and human life. The overview includes reading links for each period.',
                curPill: '🔭 Celestial Mechanics, Literature & Curiosities',
                curBackBtn: '← Back to Natal Calculator',
                curMainTitle: 'Fascinating <span class="gold-gradient-text">Astrology Facts & Astronomical Curiosities</span>',
                curMainDesc: 'Discover how real celestial mechanics, ancient bronze computers, literary masterpieces, and global cultural traditions connect to the symbols you see inside your birth chart.',
                booksPill: '📚 Astralis Reading List & Study Guide',
                booksBackBtn: '← Back to Natal Calculator',
                booksMainTitle: 'Learn Something New: <span class="gold-gradient-text">Essential Astrology Books</span>',
                booksMainDesc: "Explore ten books on the history and language of Western astrology. The descriptions explain what each covers. Follow the external links to find editions and reviews.",
                merchPill: '👕 Astralis Cosmic Collection • Limited Drops',
                merchBackBtn: '← Back to Natal Calculator',
                merchMainTitle: 'Wear Your Sign: <span class="gold-gradient-text">Astralis Apparel, Mugs & Car Stickers</span>',
                merchMainDesc: 'Express your cosmic humor and zodiac pride with our collection of organic cotton T-shirts, embroidered dad caps, ceramic astrology mugs, and weatherproof vinyl car decals. Select your sign and reserve your favorite design!',
                merchSignFilterLbl: 'Customize with your Zodiac Sign:',
                merchSlogansTitle: '✨ Viral Slogan Vault (Available on Any Tee, Mug, Cap or Car Decal)',
                merchSlogansSub: 'Click any slogan to copy it or order a custom print via Instagram (@astralis.astro) or email.',
                merchOrderBtn: 'Order / Pre-Order',
                merchOrderToast: (item) => `Selected "${item}"! Send us a DM on @astralis.astro or email contact@astralis.rs to confirm your size & shipping.`,
                edPill: '📚 Astralis Astrological Knowledge Base',
                edMainTitle: 'Complete Guide to <span class="gold-gradient-text">Natal Astrology, Houses & Zodiac Signs</span>',
                edMainDesc: 'Learn how astrological texts describe the zodiac, houses and aspects. These concepts form a symbolic language that can be studied in its historical and cultural context.',
                art1Title: 'The Big Three: Sun, Moon & Rising Sign',
                art1P1: 'In natal astrology, your <strong>Sun sign</strong> represents your core vitality, conscious purpose, and creative drive. It is determined by the calendar date of your birth as the Sun travels through the twelve constellations of the ecliptic.',
                art1P2: 'Your <strong>Moon sign</strong> reflects your emotional inner world, instincts, and what makes you feel safe, while your <strong>Rising sign (Ascendant)</strong>—calculated from your exact birth hour and birthplace—shapes your outward demeanor and the structure of your twelve astrological houses.',
                art2Title: 'Understanding the 12 Astrological Houses',
                art2P1: 'A natal wheel is divided into twelve sectors called <strong>houses</strong>, each governing a specific domain of human experience. The <strong>1st House</strong> rules identity and new beginnings, the <strong>2nd House</strong> governs personal values and finances, and the <strong>4th House (IC)</strong> anchors home and family roots.',
                art2P2: 'Relationships and marriage center on the <strong>7th House (Descendant)</strong>, public reputation and career peak at the <strong>10th House (Midheaven / MC)</strong>, and long-term aspirations unfold through the <strong>11th and 12th Houses</strong>.',
                art3Title: 'How Synastry & Planetary Aspects Work',
                art3P1: '<strong>Synastry</strong> is the art of overlaying two birth charts to examine how one person\'s planets interact with another\'s. Harmonious aspects such as <strong>Trines (120°)</strong> and <strong>Sextiles (60°)</strong> indicate natural flow, shared humor, and mutual encouragement.',
                art3P2: 'Dynamic aspects like <strong>Squares (90°)</strong> and <strong>Oppositions (180°)</strong> generate magnetic attraction and growth opportunities, showing where partners challenge one another to evolve beyond old habits.',
                encyclopediaSignsTitle: 'The 12 Zodiac Signs: Elements, Rulers & Core Traits',
                encyclopediaSignsSub: 'Explore the foundational characteristics of every sign across the four classical elements: Fire, Earth, Air, and Water.',
                faqSectionTitle: 'Frequently Asked Questions (FAQ)',
                footerTagline: '• Astrology Portal, Natal Wheel & Historical Encyclopedia',
                footerDisclaimer: "Astralis explores astrology as cultural history, symbolism and entertainment. Simulator scores, positions and texts are illustrative, and cannot predict outcomes or guide medical, financial, legal or personal decisions.",
                narrativeP1: (sun, ruler) => `This reading uses <strong class="text-amber-300">${sun}</strong> and its traditional planetary ruler, <strong>${ruler}</strong>, as a starting point for the symbols in the chart.`,
                narrativeP2: (moon) => `The modeled Moon appears in <strong class="text-indigo-300">${moon}</strong>. The aspect examples below illustrate how astrologers read angles between two points and offer a way to reflect on each example.`,
                synSubtitle: (el1, el2, asc1, asc2) => `Sample elements: ${el1} & ${el2} • sample rising signs: ${asc1} & ${asc2}`,
                toastCalcSuccess: (sign) => `Illustrative reading for ${sign} ready.`,
                toastSavedBrowser: "Birth details saved in this browser.",
                toastCopied: 'Daily horoscope copied to clipboard!',
                toastDataTransferred: 'Your details were copied to Person A.',
            },
            sr: {
                profileStorageNote: "Podaci o rođenju ostaju na ovom uređaju samo ako izaberete Sačuvaj u ovom pregledaču.",
                synPrivacyNote: "Podaci obe osobe ostaju na otvorenoj stranici i alat za poređenje ih ne čuva.",
                btnClearProfile: "Obriši podatke",
                profileDayTitle: "Tvoj dnevni profil",
                birthEditorTitle: "Podaci o rođenju",
                showBirthDetails: "Podaci o rođenju",
                hideBirthDetails: "Zatvori podatke",
                readingToday: "Danas ·",
                readingFor: "Tumačenje za",
                profileWheelLink: "Pogledaj natalni krug",
                savedProfileNotice: "Proveri sačuvani datum rođenja i izaberi grad sa liste. Sačuvaj ažurirane podatke da bi se dnevni profil ponovo prikazivao.",
                dailyResultExample: "Primer sa probnim podacima o rođenju",
                dailyResultLive: "Ilustrativno tumačenje na osnovu unosa",
                synResultExample: "Primer sa probnim podacima o rođenju",
                synResultLive: "Ilustracija na osnovu unetih podataka",
                toastCleared: "Sačuvani podaci su obrisani iz ovog pregledača.",
                toastStorageError: "Nije bilo moguće promeniti sačuvane podatke u ovom pregledaču.",
                toastSynReady: "Ilustrativno poređenje je spremno.",
                cityError: "Izaberite grad sa liste. Simulator pretražuje samo ugrađenu listu.",
                pageTitle: 'Astralis — Dnevni Horoskop, Natalna Karta, Istorija i Astrološke Zanimljivosti',
                headerSubtitle: 'Astrologija & Natalni Portal',
                tabDailyDesktop: '🔮 Dnevni & Natalni Krug',
                tabSynastryDesktop: '💞 Uporedni Horoskop',
                tabHistoryDesktop: '🏛️ Istorija i Koreni',
                tabCuriositiesDesktop: '🔭 Zanimljivosti',
                tabBooksDesktop: '📚 Naučite i Knjige',
                tabMerchDesktop: '👕 Merch',
                tabDailyMobile: '🔮 Natalni',
                tabSynastryMobile: '💞 Za Dvoje',
                tabHistoryMobile: '🏛️ Istorija',
                tabCuriositiesMobile: '🔭 Činjenice',
                tabBooksMobile: '📚 Knjige',
                tabMerchMobile: '👕 Merch',
                heroTitle: "<span class=\"gold-gradient-text\">Dnevni horoskop</span> i simulator natalne karte",
                heroDesc: "Isprobajte simbolično tumačenje uz datum, vreme i grad rođenja sa liste. Krug i bodovi koriste pojednostavljene formule. Ne prikazuju stvarne položaje planeta i ne predviđaju događaje.",
                lblUserName: 'Vaše ime (opciono)',
                placeholderUserName: 'npr. Nikola',
                lblBirthCity: "Mesto rođenja (izaberite sa liste)",
                placeholderBirthCity: "Počnite da kucate grad sa liste",
                lblBirthDate: 'Datum rođenja *',
                lblBirthTime: 'Vreme rođenja',
                lblUnknownTime: 'Ne znam sat',
                lblTargetDate: "Datum tumačenja",
                btnSaveProfile: "Sačuvaj u ovom pregledaču",
                btnCalcHoroscope: "Prikaži tumačenje",
                profileGreetingDefault: "Ilustrativni astrološki profil",
                profileGreetingNamed: (name) => `Ilustrativni profil • ${name}`,
                elementPrefix: 'Element',
                lblRising: "Modelovani podznak",
                lblMoon: "Modelovani Mesec",
                unknownHourValue: 'Nepoznat sat',
                lblOverallCosmic: "Simbolični dnevni rezultat",
                verdictHigh: "Tema: inicijativa",
                verdictMed: "Tema: usredsređenost",
                verdictLow: "Tema: razmišljanje",
                lblLuckyNumbers: "Brojevi iz primera",
                lblLuckyColor: "Boja kao inspiracija",
                lblLuckyHours: "Vremenski okvir iz primera",
                secFavorabilityTitle: "Tumačenje po temama",
                secFavorabilitySub: "Četiri teme za izabrani datum. Bodovi i primeri aspekata su ilustrativni.",
                keyTransitPrefix: "Primer aspekta",
                cardWorkTitle: "Posao i projekti",
                cardWorkFooter: "Rezultat primera",
                cardLoveTitle: "Odnosi",
                cardLoveFooter: "Rezultat primera",
                cardHealthTitle: "Zdravlje i odmor",
                cardHealthFooter: "Rezultat primera",
                cardLuckTitle: "Radoznalost i intuicija",
                cardLuckFooter: "Rezultat primera",
                badgeHigh: 'Visoka',
                badgeMod: 'Umerena',
                badgeStrong: 'Snažan',
                badgeSteady: 'Stabilan',
                badgeExc: 'Odlična',
                badgeGood: 'Dobra',
                badgePronounced: 'Izražen',
                wheelTitle: "Ilustrativni natalni krug",
                wheelSub: "Dijagram modelovanih položaja i 12 jednakih sektora. Ne izračunava sistem kuća niti efemeride.",
                wheelSystemBadge: "Simulator",
                legendTrine: 'Trigon / Sekstil',
                legendSquare: 'Kvadrat / Opozicija',
                legendPlanets: "Modelovani položaji",
                detailedDailyTitle: "Primer dnevnog tumačenja",
                btnCopy: 'Kopiraj',
                vipDailyTitle: "Pitanja za razmišljanje",
                karmicNodeHeading: "☊ Severni čvor kao simbol",
                seventhHouseHeading: "7. kuća kao simbol",
                secAllSignsTitle: 'Brzi Pregled Svih 12 Znakova Zodijaka',
                secAllSignsSub: "Izaberite znak da učitate primer datuma rođenja u simulatoru.",
                synHeroPill: "💞 Simulator sinastrije",
                synHeroTitle: "<span class=\"gold-gradient-text\">Sinastrija</span> za dvoje",
                synHeroDesc: "Uporedite modelovane položaje u dve karte. Simulator proverava najkraće uglove između izabranih parova, a tradicionalna tumačenja služe kao povod za razgovor.",
                synWheelSub: "Unutrašnji prsten: osoba A · Spoljašnji prsten: osoba B. Linije aspekata u krugu prikazuju primere za osobu A.",
                synAspectCountLabel: "Parovi sa aspektom",
                synMethodTitle: "Kako se čitaju uglovi",
                synMethodDescription: "Poredimo 21 izabrani par iz dve karte prema najkraćem uglu. Svaki aspekt ima dozvoljeno odstupanje: konjunkcija 0° ±7°, sekstil 60° ±5°, kvadrat 90° ±6°, trigon 120° ±7° i opozicija 180° ±7°.",
                synMethodLimit: "Uglovi se računaju iz modelovanih položaja. Tradicionalna tumačenja služe za razgovor, a broj aspekata ne meri slaganje.",
                synNoTime: "Ako vreme rođenja nije uneto, simulator koristi podne. Zbog toga položaji u primeru i prikazani aspekti mogu da se promene.",
                synDetailTitle: "Kako da iskoristite aspekte za razgovor",
                synAngle: "Ugao",
                synDeviation: "Odstupanje",
                synOrb: "Dozvoljeno",
                synNearest: "Najbliži provereni par",
                synNoMatch: "Nijedan provereni par u ovoj temi ne ulazi u zadate granice.",
                synTopic: "U astrološkoj simbolici",
                synBodies: {"SO": ["Sunce", "identitet i lični pravac"], "MO": ["Mesec", "uteha i emotivne navike"], "ME": ["Merkur", "reči i način razmišljanja"], "VE": ["Venera", "nežnost i sklonosti"], "MA": ["Mars", "inicijativa i odlučnost"], "JU": ["Jupiter", "otvorenost i širenje mogućnosti"], "SA": ["Saturn", "granice i obaveze"]},
                synAspects: {"conjunction": "Konjunkcija", "sextile": "Sekstil", "square": "Kvadrat", "trine": "Trigon", "opposition": "Opozicija"},
                synThemes: {"emotion": {"title": "Emotivne potrebe", "fallback": "Kada ste uznemireni, da li vam više prija da vas neko sasluša, ostavi vam prostora ili pomogne da rešite problem?", "conjunction": "Ako vam oboma prija isti oblik utehe, uporedite kada vam je potreban. Da li vam razgovor prija odmah ili je jednoj osobi lakše kad prođe malo vremena?", "sextile": "Jedna osoba možda pokazuje brigu konkretnom pomoći, dok drugoj više znači da je pitate kako se oseća. Pitajte šta bi joj u tom trenutku prijalo.", "square": "Zamislite da jedna osoba želi da razgovara o teškom danu, a drugoj je potreban mir. Dogovorite se kada ćete se ponovo čuti kako pauza ne bi delovala kao odbijanje.", "trine": "Setite se kada je jedno od vas primetilo da je drugom potrebna podrška bez posebne molbe. Recite šta je tada pomoglo, da biste to mogli da ponovite.", "opposition": "Nekome prijaju reči utehe, a nekome konkretna pomoć. Navedite po jedan primer i pitajte šta bi vam više značilo ove nedelje."}, "passion": {"title": "Privlačnost i zajednička interesovanja", "fallback": "Navedite nešto u čemu uživate zajedno i nešto što radije radite odvojeno. Ostavite prostora za oboje u sledećem dogovoru.", "conjunction": "Zajedničko interesovanje može pokrenuti dogovor. Neka naizmenično svako od vas izabere detalj, recimo aktivnost, mesto ili tempo.", "sextile": "Probajte nešto gde jedna osoba započinje, a druga dodaje svoj detalj. Krenite od sitnice, poput zajedničke liste pesama ili pripreme večere.", "square": "Jedna osoba može uživati u spontanim pozivima, dok drugoj više prija najava. Dogovorite kada je iznenađenje dobrodošlo i kada prvo treba pitati.", "trine": "Uporedite kako zamišljate prijatno veče. Krenite od onoga što oboma prija, pa neka svako predloži po jedan svoj detalj.", "opposition": "Ako jedna osoba želi živahan izlazak, a druga mirno veče, predložite dva kraća plana ili se smenjujte u izboru tempa."}, "comm": {"title": "Komunikacija", "fallback": "Posle važnog razgovora svako može da sažme u jednoj rečenici šta je čuo, a drugoj osobi da priliku da ga ispravi.", "conjunction": "Poznata formulacija može da stvori utisak da ste se odmah razumeli. Pre nego što se saglasite, navedite po jedan konkretan primer da proverite da mislite na isto.", "sextile": "Neka jedna osoba prva kaže šta misli, a druga postavi neutralno potpitanje. Kod praktičnog dogovora pitajte kada, gde i šta kome treba.", "square": "Ako direktan predlog zazvuči kao kritika, prvo pitajte da li druga osoba želi povratnu informaciju. Ponovite kako ste razumeli problem, pa tek onda predložite rešenje.", "trine": "Kada razgovor ide lako, proverite šta je ostalo neizrečeno. Ako ste izabrali vreme ili mesto, ponovite dogovor i proverite da li odgovara oboma.", "opposition": "Ako jedna osoba prvo govori o široj slici, a druga kreće od detalja, saslušajte oba pristupa. Zatim zapišite jednu odluku koju ste oboje isto razumeli."}, "karma": {"title": "Zajednički planovi", "fallback": "Izaberite jedan mali plan koji možete da isprobate ove nedelje i dogovorite kada ćete razgovarati o tome kako je prošao.", "conjunction": "Ako slično pristupate obavezama, proverite da li oboje isto razumete kad je nešto završeno. Odredite ko radi zadatak i do kada.", "sextile": "Povežite ideju jedne osobe sa praktičnim korakom druge. Dogovorite šta je najmanje što možete da isprobate pre veće obaveze.", "square": "Ako jedna osoba želi da krene odmah, a druga traži više vremena za pripremu, dogovorite probu koja traži mali napor i datum kada ćete je zajedno oceniti.", "trine": "Ako se obaveze podele bez mnogo dogovaranja, proverite da li raspodela i dalje deluje pravedno. Pitajte ko može da uskoči kad uobičajeni plan ne uspe.", "opposition": "Kada se jedna osoba usredsredi na mogućnosti, a druga na vreme i trud, zapišite šta je minimum koji je prihvatljiv oboma. Dogovorite kada ima smisla proširiti plan."}},
                synPersonALabel: '☀️ Osoba A (Unutrašnji prsten)',
                btnUseMyData: 'Preuzmi moje podatke',
                lblSynName1: 'Ime Osobe A',
                lblSynCity: "Mesto rođenja (izaberite sa liste)",
                lblSynDate: 'Datum rođenja *',
                lblSynTime: 'Vreme rođenja',
                synPersonBLabel: '🌙 Osoba B (Spoljašnji prsten)',
                synPartnerHint: "Koristite nadimak",
                lblSynName2: 'Ime Osobe B',
                btnCalcSynastry: "Prikaži poređenje",
                synWheelTitle: "Ilustrativni uporedni krug",
                histPill: '🏛️ Istorijski Koreni i Kulturno Nasleđe',
                histBackBtn: '← Nazad na Natalni Kalkulator',
                histMainTitle: 'Istorija i <span class="gold-gradient-text">Drevni Koreni</span> Astrologije',
                histMainDesc: 'Više od četiri hiljade godina ljudske civilizacije posmatraju cikluse Sunca, Meseca i planeta kako bi merile vreme, navigirale morima i tumačile vezu između nebeskih pojava i ljudskog života. Ispod se nalazi istorijski pregled sa proverenim enciklopedijskim izvorima.',
                curPill: '🔭 Nebeska Mehanika, Književnost i Zanimljivosti',
                curBackBtn: '← Nazad na Natalni Kalkulator',
                curMainTitle: 'Fascinantne <span class="gold-gradient-text">Astrološke Činjenice i Zanimljivosti</span>',
                curMainDesc: 'Otkrijte kako stvarna astronomska kretanja, drevni bronzani mehanizmi, književna remek-dela i svetske tradicije oblikuju simbole koje vidite u svojoj natalnoj karti.',
                booksPill: '📚 Astralis Biblioteka i Vodič za Učenje',
                booksBackBtn: '← Nazad na Natalni Kalkulator',
                booksMainTitle: 'Naučite Nešto Novo: <span class="gold-gradient-text">Najbolje Knjige o Astrologiji</span>',
                booksMainDesc: "Istražite deset knjiga o istoriji i jeziku zapadne astrologije. Opisi navode šta koja knjiga obrađuje. Spoljni linkovi vode do pretrage izdanja i recenzija.",
                merchPill: '👕 Astralis Kosmička Kolekcija • Majice, Kape, Šolje i Nalepnice',
                merchBackBtn: '← Nazad na Natalni Kalkulator',
                merchMainTitle: 'Ponesi Svoj Znak: <span class="gold-gradient-text">Majice, Kape, Šolje i Nalepnice za Auto</span>',
                merchMainDesc: 'Pokažite svoj kosmički humor i horoskopski znak uz našu kolekciju pamučnih majica, vezenih kačketa, keramičkih šolja i vodootpornih nalepnica za automobil. Izaberite svoj znak i poručite svoj omiljeni dizajn!',
                merchSignFilterLbl: 'Prilagodi svom horoskopskom znaku:',
                merchSlogansTitle: '✨ Kolekcija Duhovitih Slogana (Dostupno na Majici, Šolji, Kapi ili Nalepnici za Auto)',
                merchSlogansSub: 'Kliknite na bilo koji slogan da ga kopirate ili poručite štampu putem Instagrama (@astralis.astro) ili e-maila.',
                merchOrderBtn: 'Poruči / Rezerviši',
                merchOrderToast: (item) => `Izabrali ste „${item}“! Pošaljite nam poruku na @astralis.astro ili na contact@astralis.rs za veličinu i slanje.`,
                edPill: '📚 Astralis Astrološka Baza Znanja',
                edMainTitle: 'Kompletan Vodič za <span class="gold-gradient-text">Natalnu Astrologiju, Kuće i Znakove Zodijaka</span>',
                edMainDesc: 'Saznajte kako astrološki tekstovi opisuju zodijak, kuće i aspekte. Ti pojmovi čine simbolički jezik koji se može proučavati u istorijskom i kulturnom kontekstu.',
                art1Title: 'Velika Trojka: Sunce, Mesec i Podznak (Ascendent)',
                art1P1: 'U natalnoj astrologiji, vaš <strong>Sunčev znak</strong> predstavlja osnovnu životnu energiju, svesnu svrhu i kreativni pokretač. Određen je kalendarskim datumom rođenja dok Sunce prolazi kroz dvanaest sazvežđa ekliptike.',
                art1P2: 'Vaš <strong>Mesečev znak</strong> oslikava unutrašnji emotivni svet, instinkte i potrebu za sigurnošću, dok vaš <strong>Podznak (Ascendent)</strong> — izračunat na osnovu tačnog sata i mesta rođenja — oblikuje prvi utisak i raspored svih dvanaest astroloških kuća.',
                art2Title: 'Razumevanje 12 Astroloških Kuća',
                art2P1: 'Natalni krug podeljen je na dvanaest polja (<strong>kuća</strong>), od kojih svaka vlada određenom oblašću života. <strong>1. kuća</strong> predstavlja lični identitet i nove početke, <strong>2. kuća</strong> finansije i lične vrednosti, dok <strong>4. kuća (IC)</strong> simbolizuje dom i porodične korene.',
                art2P2: 'Partnerstva i brak nalaze se u <strong>7. kući (Descendent)</strong>, karijera i javni ugled u <strong>10. kući (Zenit / MC)</strong>, dok se dugoročni ciljevi i duhovni razvoj odvijaju kroz <strong>11. i 12. kuću</strong>.',
                art3Title: 'Kako Funkcionišu Sinastrija i Planetarni Aspekti',
                art3P1: '<strong>Sinastrija</strong> je tehnika preklapanja dve natalne karte radi analize međusobnog uticaja planeta. Harmonični aspekti poput <strong>Trigona (120°)</strong> i <strong>Sekstila (60°)</strong> donose prirodan sklad, razumevanje i međusobnu podršku.',
                art3P2: 'Dinamični aspekti kao što su <strong>Kvadrati (90°)</strong> i <strong>Opozicije (180°)</strong> stvaraju snažnu privlačnost i podstiču lični razvoj kroz zajedničko prevazilaženje razlika.',
                encyclopediaSignsTitle: 'Svih 12 Znakova Zodijaka: Elementi, Vladari i Osobine',
                encyclopediaSignsSub: 'Upoznajte osnovne karakteristike svakog znaka kroz četiri klasična elementa: Vatru, Zemlju, Vazduh i Vodu.',
                faqSectionTitle: 'Često Postavljana Pitanja (FAQ)',
                footerTagline: '• Astrološki Portal, Natalni Krug i Istorijska Enciklopedija',
                footerDisclaimer: "Astralis obrađuje astrologiju kao kulturnu istoriju, simboliku i zabavu. Bodovi, položaji i tekstovi u simulatorima su ilustrativni i ne mogu predvideti ishode ili usmeravati medicinske, finansijske, pravne ili lične odluke.",
                narrativeP1: (sun, ruler) => `Ovo tumačenje polazi od znaka <strong class="text-amber-300">${sun}</strong> i njegovog tradicionalnog planetarnog vladara, <strong>${ruler}</strong>, da bi objasnilo simbole na karti.`,
                narrativeP2: (moon) => `U simulaciji je Mesec u znaku <strong class="text-indigo-300">${moon}</strong>. Primeri ispod pokazuju kako astrolozi tumače ugao između dve tačke i daju povod za razmišljanje o svakom primeru.`,
                synSubtitle: (el1, el2, asc1, asc2) => `Primer elemenata: ${el1} i ${el2} • modelovani podznaci: ${asc1} i ${asc2}`,
                toastCalcSuccess: (sign) => `Ilustrativno tumačenje za znak ${sign} je spremno.`,
                toastSavedBrowser: "Podaci o rođenju su sačuvani u ovom pregledaču.",
                toastCopied: 'Dnevni horoskop je kopiran!',
                toastDataTransferred: 'Vaši podaci su preneti u Osobu A.',
            }
        };

        // =========================================================================
        // 2. HISTORY & CURIOSITIES BILINGUAL CONTENT DATASETS
        // =========================================================================
        const HISTORY_ARTICLES_DATA = {
            en: [
                {
                    era: 'c. 1800 BCE – 500 BCE',
                    icon: '🏺',
                    title: '1. Mesopotamia & The Babylonian Zodiac',
                    p1: 'The earliest organized records of celestial omens originated in ancient Mesopotamia. Babylonian priest-astronomers compiled clay tablet series such as <strong>Enuma Anu Enlil</strong> and the astronomical compendium <strong>MUL.APIN</strong>, systematically tracking eclipses, lunar phases, and planetary movements of Venus, Jupiter, and Mars.',
                    p2: 'Around the 5th century BCE, Babylonian scholars divided the ecliptic path of the Sun into <strong>twelve equal 30-degree sectors</strong>, establishing the twelve zodiacal constellations still used today and casting the earliest known individual birth charts (circa 410 BCE).',
                    links: [
                        { label: '↗ Wikipedia: Babylonian Astrology', url: 'https://en.wikipedia.org/wiki/Babylonian_astrology' },
                        { label: '↗ Wikipedia: MUL.APIN Tablets', url: 'https://en.wikipedia.org/wiki/MUL.APIN' }
                    ]
                },
                {
                    era: '3rd Century BCE – 2nd Century CE',
                    icon: '📜',
                    title: '2. Hellenistic Egypt, Alexandria & Ptolemy\'s Tetrabiblos',
                    p1: 'Following Alexander the Great\'s conquests, Babylonian celestial mathematics merged with Egyptian decan star-lore and Greek geometry in <strong>Alexandria, Egypt</strong>. This synthesis gave birth to <strong>horoscopic astrology</strong>—the practice of calculating the exact Eastern horizon (the <em>Ascendant</em> or Rising sign) and the twelve astrological houses for a specific moment and location of birth.',
                    p2: 'In the 2nd century CE, the Alexandrian mathematician and astronomer <strong>Claudius Ptolemy</strong> authored the <em>Tetrabiblos</em>, a four-volume treatise that codified planetary aspects, elemental qualities, and house significations for over fifteen centuries.',
                    links: [
                        { label: '↗ Wikipedia: Hellenistic Astrology', url: 'https://en.wikipedia.org/wiki/Hellenistic_astrology' },
                        { label: '↗ Wikipedia: Ptolemy\'s Tetrabiblos', url: 'https://en.wikipedia.org/wiki/Tetrabiblos' }
                    ]
                },
                {
                    era: '8th – 16th Century CE',
                    icon: '🧭',
                    title: '3. The Islamic Golden Age & European Universities',
                    p1: 'During the Islamic Golden Age in Baghdad and Damascus, scholars such as <strong>Albumasar (Abu Ma\'shar)</strong> and <strong>Al-Biruni</strong> translated Greek and Persian astrological manuscripts into Arabic, refining spherical trigonometry, planetary tables (<em>Zij</em>), and astrolabe instruments.',
                    p2: 'When these texts were translated into Latin in 12th-century Spain and Italy, astrology became an integral part of the university curriculum alongside medicine and mathematics at institutions like the University of Bologna and Padua.',
                    links: [
                        { label: '↗ Wikipedia: Medieval Islamic Astrology', url: 'https://en.wikipedia.org/wiki/Astrology_in_the_medieval_Islamic_world' },
                        { label: '↗ Wikipedia: History of Astrology', url: 'https://en.wikipedia.org/wiki/History_of_astrology' }
                    ]
                },
                {
                    era: '17th Century – Modern Era',
                    icon: '🌌',
                    title: '4. Kepler, Galileo & Modern Psychological Astrology',
                    p1: 'Until the Scientific Revolution, astronomy and astrology were practiced together as sister disciplines. Pioneers such as <strong>Tycho Brahe</strong>, <strong>Galileo Galilei</strong>, and <strong>Johannes Kepler</strong> all cast natal charts while discovering the laws of planetary motion.',
                    p2: 'In the 20th century, thinkers including psychologist <strong>Carl Jung</strong> and astrologers Dane Rudhyar and Liz Greene reframed natal astrology as a symbolic language of archetypes, personal growth, and self-reflection.',
                    links: [
                        { label: '↗ Wikipedia: Johannes Kepler', url: 'https://en.wikipedia.org/wiki/Johannes_Kepler' },
                        { label: '↗ Britannica: Astrology Overview', url: 'https://www.britannica.com/topic/astrology' }
                    ]
                }
            ],
            sr: [
                {
                    era: 'oko 1800. p.n.e. – 500. p.n.e.',
                    icon: '🏺',
                    title: '1. Mesopotamija i Vavilonski Zodijak',
                    p1: 'Najstariji sistematski zapisi o nebeskim pojavama nastali su u drevnoj Mesopotamiji. Vavilonski sveštenici-astronomi sastavili su serije glinenih pločica poput <strong>Enuma Anu Enlil</strong> i astronomskog kataloga <strong>MUL.APIN</strong>, precizno beležeći pomračenja, mesečeve mene i kretanje Venere, Jupitera i Marsa.',
                    p2: 'Oko 5. veka pre nove ere, vavilonski učenjaci podelili su ekliptiku na <strong>dvanaest jednakih delova od po 30 stepeni</strong>, čime je nastao zodijak kakav danas poznajemo, kao i najstarije sačuvane lične natalne karte (oko 410. p.n.e.).',
                    links: [
                        { label: '↗ Wikipedia: Vavilonska astrologija (EN)', url: 'https://en.wikipedia.org/wiki/Babylonian_astrology' },
                        { label: '↗ Wikipedia: MUL.APIN pločice (EN)', url: 'https://en.wikipedia.org/wiki/MUL.APIN' }
                    ]
                },
                {
                    era: '3. vek p.n.e. – 2. vek n.e.',
                    icon: '📜',
                    title: '2. Helenistički Egipat, Aleksandrija i Ptolemejev Tetrabiblos',
                    p1: 'Nakon osvajanja Aleksandra Velikog, vavilonska nebeska matematika spojila se sa egipatskim dekanima i grčkom geometrijom u <strong>Aleksandriji</strong>. Iz te sinteze nastala je <strong>horoskopska astrologija</strong> — proračun tačnog istočnog horizonta (<em>Ascendenta</em> ili Podznaka) i dvanaest kuća za tačan sat i mesto rođenja.',
                    p2: 'U 2. veku nove ere, aleksandrijski matematičar i astronom <strong>Klaudije Ptolemej</strong> napisao je delo <em>Tetrabiblos</em>, koje je definisalo planetarne aspekte, elemente i značenja kuća za narednih petnaest vekova.',
                    links: [
                        { label: '↗ Wikipedia: Helenistička astrologija (EN)', url: 'https://en.wikipedia.org/wiki/Hellenistic_astrology' },
                        { label: '↗ Wikipedia: Klaudije Ptolemej (SR)', url: 'https://sr.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B0%D1%83%D0%B4%D0%B8%D1%98%D0%B5_%D0%9F%D1%82%D0%BE%D0%BB%D0%B5%D0%BC%D0%B5%D1%98' }
                    ]
                },
                {
                    era: '8. – 16. vek n.e.',
                    icon: '🧭',
                    title: '3. Zlatno Doba Islama i Evropski Univerziteti',
                    p1: 'Tokom zlatnog doba nauke u Bagdadu i Damasku, učenjaci poput <strong>Albumazara (Abu Mašara)</strong> i <strong>Al-Birunija</strong> preveli su grčke i persijske rukopise na arapski jezik, usavršavajući sfernu trigonometriju, astronomske tablice (<em>Zidž</em>) i astrolabe.',
                    p2: 'Kada su ovi spisi prevedeni na latinski jezik u 12. veku u Španiji i Italiji, astrologija je postala redovan deo nastave uz medicinu i matematiku na univerzitetima u Bolonji i Padovi.',
                    links: [
                        { label: '↗ Wikipedia: Astrologija (SR)', url: 'https://sr.wikipedia.org/wiki/%D0%90%D1%81%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%98%D0%B0' },
                        { label: '↗ Wikipedia: Istorija astrologije (EN)', url: 'https://en.wikipedia.org/wiki/History_of_astrology' }
                    ]
                },
                {
                    era: '17. vek – Savremeno doba',
                    icon: '🌌',
                    title: '4. Kepler, Galilej i Savremena Psihološka Astrologija',
                    p1: 'Sve do naučne revolucije, astronomija i astrologija su se proučavale zajedno kao srodne discipline. Velikani poput <strong>Tiha Brahea</strong>, <strong>Galilea Galileja</strong> i <strong>Johana Keplera</strong> izrađivali su natalne karte uporedo sa otkrivanjem zakona kretanja planeta.',
                    p2: 'U 20. veku, psiholog <strong>Karl Gustav Jung</strong> i savremeni autori posmatrali su natalnu kartu kao simbolički jezik arhetipova, ličnog razvoja i dublje introspekcije.',
                    links: [
                        { label: '↗ Wikipedia: Johan Kepler (SR)', url: 'https://sr.wikipedia.org/wiki/%D0%88%D0%BE%D1%85%D0%B0%D0%BD_%D0%9A%D0%B5%D0%BF%D0%BB%D0%B5%D1%80' },
                        { label: '↗ Britannica: Astrologija (EN)', url: 'https://www.britannica.com/topic/astrology' }
                    ]
                }
            ]
        };

        const CURIOSITIES_DATA = {
            en: [
                {
                    icon: '⚙️',
                    title: 'The Antikythera Mechanism (100 BCE)',
                    desc: 'Recovered from a Greek shipwreck in 1901, the <strong>Antikythera mechanism</strong> is an ancient bronze geared analog computer used to predict eclipses, lunar phases, and the exact positions of the Sun and Moon across the zodiac dial.',
                    linkLabel: '↗ Read on Wikipedia: Antikythera Mechanism',
                    linkUrl: 'https://en.wikipedia.org/wiki/Antikythera_mechanism'
                },
                {
                    icon: '🌍',
                    title: 'Tropical vs. Sidereal Zodiac & Precession',
                    desc: 'Because Earth\'s rotational axis slowly wobbles over a <strong>25,772-year cycle</strong> (discovered by Hipparchus around 130 BCE), Western <em>Tropical astrology</em> anchors 0° Aries to the March Vernal Equinox, whereas Vedic <em>Sidereal astrology</em> aligns with fixed background star constellations.',
                    linkLabel: '↗ Read on Wikipedia: Axial Precession',
                    linkUrl: 'https://en.wikipedia.org/wiki/Axial_precession'
                },
                {
                    icon: '🔄',
                    title: 'Why Planets Appear "Retrograde"',
                    desc: 'During <strong>Mercury Retrograde</strong>, the planet does not actually reverse its orbit around the Sun. Instead, it is an optical perspective effect—similar to passing a slower car on a highway—when Earth overtakes or is overtaken by another planet.',
                    linkLabel: '↗ Read on Wikipedia: Apparent Retrograde Motion',
                    linkUrl: 'https://en.wikipedia.org/wiki/Apparent_retrograde_motion'
                },
                {
                    icon: '🎭',
                    title: 'Shakespeare & Dante\'s Celestial Imagery',
                    desc: 'William Shakespeare referenced astrology over a hundred times—coining the phrase <em>"star-crossed lovers"</em> in <em>Romeo and Juliet</em>—while Dante Alighieri structured his <em>Paradiso</em> around the concentric spheres of the seven classical planets.',
                    linkLabel: '↗ Read on Wikipedia: Star-crossed in Literature',
                    linkUrl: 'https://en.wikipedia.org/wiki/Star-crossed'
                },
                {
                    icon: '📅',
                    title: 'The Seven Classical Planets & Days of the Week',
                    desc: 'Every day of our modern 7-day week is named after one of the seven visible classical celestial bodies: <strong>Sunday</strong> (Sun), <strong>Monday</strong> (Moon), <strong>Tuesday</strong> (Mars/Tiw), <strong>Wednesday</strong> (Mercury/Woden), <strong>Thursday</strong> (Jupiter/Thor), <strong>Friday</strong> (Venus/Frigg), and <strong>Saturday</strong> (Saturn).',
                    linkLabel: '↗ Read on Wikipedia: Planetary Days of the Week',
                    linkUrl: 'https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week'
                },
                {
                    icon: '✨',
                    title: 'What Is the 13th Constellation (Ophiuchus)?',
                    desc: 'Astronomically, the Sun passes in front of 13 IAU constellations along the ecliptic, including <strong>Ophiuchus</strong>. However, the 12-sign zodiac is a mathematical division of 360° into twelve 30° seasonal segments rather than unequal star boundaries.',
                    linkLabel: '↗ Read on Wikipedia: Ophiuchus & The Zodiac',
                    linkUrl: 'https://en.wikipedia.org/wiki/Ophiuchus_(astrology)'
                }
            ],
            sr: [
                {
                    icon: '⚙️',
                    title: 'Mehanizam sa Antikitere (100. p.n.e.)',
                    desc: 'Pronađen u olupini antičkog broda 1901. godine, <strong>Mehanizam sa Antikitere</strong> je drevni bronzani analogni računar sa zupčanicima koji je predviđao pomračenja, mesečeve mene i tačan položaj Sunca i Meseca u zodijačkom krugu.',
                    linkLabel: '↗ Pročitaj na Wikipediji: Mehanizam sa Antikitere',
                    linkUrl: 'https://sr.wikipedia.org/wiki/%D0%9C%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D0%BC_%D1%81%D0%B0_%D0%90%D0%BD%D1%82%D0%B8%D0%BA%D0%B8%D1%82%D0%B5%D1%80%D0%B5'
                },
                {
                    icon: '🌍',
                    title: 'Tropski vs. Sideralni Zodijak i Precesija',
                    desc: 'Zbog laganog kolebanja Zemljine ose u ciklusu od <strong>25.772 godine</strong> (koje je otkrio Hiparh oko 130. p.n.e.), zapadna <em>tropska astrologija</em> vezuje 0° Ovna za prolećnu ravnodnevicu, dok se vedska <em>sideralna astrologija</em> ravna prema fiksnim sazvežđima.',
                    linkLabel: '↗ Pročitaj na Wikipediji: Precesija ekvinocija',
                    linkUrl: 'https://sr.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D1%86%D0%B5%D1%81%D0%B8%D1%98%D0%B0_%D0%B5%D0%BA%D0%B2%D0%B8%D0%BD%D0%BE%D1%86%D0%B8%D1%98%D0%B0'
                },
                {
                    icon: '🔄',
                    title: 'Zašto Planete Deluju „Retrogradno“?',
                    desc: 'Tokom <strong>retrogradnog Merkura</strong> planeta zapravo ne menja smer svoje orbite oko Sunca. Reč je o optičkoj pojavi perspektive — slično kao kada na auto-putu pretičete sporiji automobil — dok Zemlja prolazi pored druge planete.',
                    linkLabel: '↗ Pročitaj na Wikipediji: Retrogradno kretanje',
                    linkUrl: 'https://en.wikipedia.org/wiki/Apparent_retrograde_motion'
                },
                {
                    icon: '🎭',
                    title: 'Šekspir i Danteova Nebeska Simbolika',
                    desc: 'Vilijam Šekspir je pomenuo astrologiju više od stotinu puta u svojim dramama (uključujući čuveni izraz <em>„star-crossed lovers“</em> u <em>Romeu i Juliji</em>), dok je Dante Aligijeri svoj <em>Raj</em> u <em>Božanstvenoj komediji</em> strukturirao kroz sfere sedam klasičnih planeta.',
                    linkLabel: '↗ Pročitaj na Wikipediji: Božanstvena komedija',
                    linkUrl: 'https://sr.wikipedia.org/wiki/%D0%91%D0%BE%D0%B6%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%B0_%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%98%D0%B0'
                },
                {
                    icon: '📅',
                    title: 'Sedam Klasičnih Planeta i Dani u Nedelji',
                    desc: 'Svaki dan u nedelji dobio je naziv po jednom od sedam vidljivih nebeskih tela antike: <strong>Nedelja</strong> (Sunce - Sunday), <strong>Ponedeljak</strong> (Mesec - Monday), <strong>Utorak</strong> (Mars), <strong>Sreda</strong> (Merkur), <strong>Četvrtak</strong> (Jupiter), <strong>Petak</strong> (Venera) i <strong>Subota</strong> (Saturn).',
                    linkLabel: '↗ Pročitaj na Wikipediji: Nazivi dana u nedelji',
                    linkUrl: 'https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week'
                },
                {
                    icon: '✨',
                    title: 'Šta je 13. Sazvežđe (Zmijonoša / Ophiuchus)?',
                    desc: 'Astronomski posmatrano, Sunce na ekliptici prolazi ispred 13 sazvežđa, uključujući <strong>Zmijonošu (Ophiuchus)</strong>. Međutim, zodijak od 12 znakova predstavlja matematičku podelu kruga od 360° na dvanaest jednakih sezonskih segmenata od po 30°.',
                    linkLabel: '↗ Pročitaj na Wikipediji: Zmijonoša (sazvežđe)',
                    linkUrl: 'https://sr.wikipedia.org/wiki/%D0%97%D0%BC%D0%B8%D1%98%D0%BE%D0%BD%D0%BE%D1%88%D0%B0_(%D1%81%D0%B0%D0%B7%D0%B2%D0%B5%D0%B6%D1%92%D0%B5)'
                }
            ]
        };

        // =========================================================================
        // 2B. RECOMMENDED ASTROLOGY BOOKS (10 CURATED TITLES + READER REVIEWS)
        // =========================================================================
        const ASTROLOGY_BOOKS_DATA = [
            {
                num: '01',
                title: 'The Only Astrology Book You\'ll Ever Need',
                author: 'Joanna Martine Woolfolk',
                level: { en: 'Beginner Classic', sr: 'Klasik za početnike' },
                desc: {
                    en: 'One of the most accessible introductions to Sun, Moon, Rising signs, planetary aspects, and basic natal chart interpretation.',
                    sr: 'Jedan od najpristupačnijih uvoda u Sunčeve, Mesečeve i podznake, planetarne aspekte i osnove tumačenja natalne karte.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=The+Only+Astrology+Book+You%27ll+Ever+Need+Joanna+Martine+Woolfolk',
                goodreadsUrl: 'https://www.goodreads.com/search?q=The+Only+Astrology+Book+You%27ll+Ever+Need'
            },
            {
                num: '02',
                title: 'The Inner Sky: How to Make Wiser Choices for a More Fulfilling Life',
                author: 'Steven Forrest',
                level: { en: 'Evolutionary Astrology', sr: 'Evoluciona astrologija' },
                desc: {
                    en: 'A poetic yet deeply practical guide to reading planets, signs, and houses as tools for free will and personal growth.',
                    sr: 'Poetičan i izuzetno praktičan vodič za razumevanje planeta, znakova i kuća kao alata za lični razvoj i slobodnu volju.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=The+Inner+Sky+Steven+Forrest',
                goodreadsUrl: 'https://www.goodreads.com/search?q=The+Inner+Sky+Steven+Forrest'
            },
            {
                num: '03',
                title: 'Astrology for the Soul',
                author: 'Jan Spiller',
                level: { en: 'Lunar Nodes & Karma', sr: 'Mesečevi čvorovi i karma' },
                desc: {
                    en: 'The definitive guide to the North and South Lunar Nodes, revealing karmic habits, hidden talents, and life direction.',
                    sr: 'Najpoznatiji vodič za Severni i Južni Mesečev čvor, koji otkriva karmičke navike, skrivene talente i životni pravac.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Astrology+for+the+Soul+Jan+Spiller',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Astrology+for+the+Soul+Jan+Spiller'
            },
            {
                num: '04',
                title: 'Planets in Transit: Life Cycles for Living',
                author: 'Robert Hand',
                level: { en: 'Transits & Timing', sr: 'Tranziti i predikcije' },
                desc: {
                    en: 'An indispensable reference encyclopedia explaining every planetary transit over natal planets and houses in clear detail.',
                    sr: 'Nezaobilazna enciklopedija koja detaljno objašnjava svaki planetarni tranzit preko natalnih planeta i kuća.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Planets+in+Transit+Robert+Hand',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Planets+in+Transit+Robert+Hand'
            },
            {
                num: '05',
                title: 'Parkers\' Astrology: The Definitive Guide to Using Astrology in Every Aspect of Your Life',
                author: 'Julia & Derek Parker',
                level: { en: 'Visual Encyclopedia', sr: 'Vizuelna enciklopedija' },
                desc: {
                    en: 'Richly illustrated step-by-step handbook covering chart calculation, aspects, synastry compatibility, and historical background.',
                    sr: 'Bogato ilustrovan priručnik korak-po-korak koji pokriva izradu karte, aspekte, sinastriju i istorijski razvoj.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Parkers+Astrology+Julia+Derek+Parker',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Parkers+Astrology'
            },
            {
                num: '06',
                title: 'Aspects in Astrology: A Guide to Understanding Planetary Relationships in the Horoscope',
                author: 'Sue Tompkins',
                level: { en: 'Planetary Aspects', sr: 'Planetarni aspekti' },
                desc: {
                    en: 'Deeply insightful exploration of conjunctions, squares, trines, sextiles, and oppositions between every pair of planets.',
                    sr: 'Duboka analiza konjunkcija, kvadrata, trigona, sekstila i opozicija između svakog para planeta u horoskopu.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Aspects+in+Astrology+Sue+Tompkins',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Aspects+in+Astrology+Sue+Tompkins'
            },
            {
                num: '07',
                title: 'The Twelve Houses: Exploring the Areas of Life',
                author: 'Howard Sasportas',
                level: { en: 'Astrological Houses', sr: 'Astrološke kuće' },
                desc: {
                    en: 'A psychological classic unpacking the meaning of all twelve houses and what happens when each planet occupies them.',
                    sr: 'Psihološki klasik koji detaljno objašnjava značenje svih dvanaest kuća i položaj svake planete u njima.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=The+Twelve+Houses+Howard+Sasportas',
                goodreadsUrl: 'https://www.goodreads.com/search?q=The+Twelve+Houses+Howard+Sasportas'
            },
            {
                num: '08',
                title: 'Synastry: Understanding Human Relations Through Astrology',
                author: 'Ronald C. Davison',
                level: { en: 'Couples & Synastry', sr: 'Sinastrija i partnerstva' },
                desc: {
                    en: 'Foundational guide to relationship astrology, chart comparison, composite charts, and inter-chart planetary dynamics.',
                    sr: 'Temeljni vodič za astrologiju odnosa, upoređivanje dve natalne karte, kompozitne karte i međusobne aspekte.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Synastry+Ronald+Davison',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Synastry+Ronald+Davison'
            },
            {
                num: '09',
                title: 'Hellenistic Astrology: The Study of Fate and Fortune',
                author: 'Chris Brennan',
                level: { en: 'Ancient Traditions', sr: 'Antička tradicija' },
                desc: {
                    en: 'Comprehensive historical and technical textbook on ancient Greco-Egyptian astrology, whole-sign houses, and classical techniques.',
                    sr: 'Sveobuhvatan istorijski i tehnički udžbenik o antičkoj grčko-egipatskoj astrologiji, kućama celih znakova i klasičnim tehnikama.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Hellenistic+Astrology+Chris+Brennan',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Hellenistic+Astrology+Chris+Brennan'
            },
            {
                num: '10',
                title: 'Cosmos and Psyche: Intimations of a New World View',
                author: 'Richard Tarnas',
                level: { en: 'History & Philosophy', sr: 'Istorija i filozofija' },
                desc: {
                    en: 'A monumental cultural and historical study examining planetary alignments alongside major turning points in world history and art.',
                    sr: 'Monumentalna kulturno-istorijska studija koja povezuje planetarne cikluse sa ključnim prekretnicama u svetskoj istoriji i umetnosti.'
                },
                amazonUrl: 'https://www.amazon.com/s?k=Cosmos+and+Psyche+Richard+Tarnas',
                goodreadsUrl: 'https://www.goodreads.com/search?q=Cosmos+and+Psyche+Richard+Tarnas'
            }
        ];

        // =========================================================================
        // 2C. ASTRALIS MERCH ITEMS & VIRAL SLOGANS
        // =========================================================================
        const MERCH_PRODUCTS_DATA = [
            {
                id: 'tee-jupiter',
                icon: '👕',
                badge: { en: 'Bestseller Tee', sr: 'Najprodavanija Majica' },
                category: { en: 'Organic Cotton T-Shirt', sr: '100% Pamučna Majica' },
                title: {
                    en: '“Help, my Jupiter is in Venus!” Cosmic Tee',
                    sr: 'Majica „Help, my Jupiter is in Venus!“'
                },
                desc: {
                    en: 'Heavyweight midnight-navy cotton tee with metallic gold celestial print & custom zodiac glyph on the sleeve.',
                    sr: 'Kvalitetna teget pamučna majica sa zlatnom kosmičkom štampom i vašim horoskopskim znakom na rukavu.'
                },
                price: '€24 / 2.800 RSD'
            },
            {
                id: 'mug-fullmoon',
                icon: '☕',
                badge: { en: 'Morning Ritual', sr: 'Jutarnji Ritual' },
                category: { en: 'Ceramic Mug (330ml)', sr: 'Keramička Šolja (330ml)' },
                title: {
                    en: '“Help, it is Full Moon and I am a {SIGN}!” Mug',
                    sr: 'Šolja „Help, it is Full Moon and I am a {SIGN}!“'
                },
                desc: {
                    en: 'Glossy black & gold rim ceramic coffee mug personalized with your Sun, Moon, and Rising sign constellation.',
                    sr: 'Crna keramička šolja sa zlatnim detaljima personalizovana vašim Sunčevim znakom, Mesecom i Podznakom.'
                },
                price: '€14 / 1.600 RSD'
            },
            {
                id: 'sticker-retrograde',
                icon: '🚗',
                badge: { en: 'Weatherproof Vinyl', sr: 'Vodootporna Folija' },
                category: { en: 'Car Decal & Laptop Sticker Pack', sr: 'Nalepnica za Auto (UV & Vodootporna)' },
                title: {
                    en: '“Sorry for Driving Like Mercury Is in Retrograde” Car Sticker',
                    sr: 'Auto-nalepnica „Sorry, Mercury Is in Retrograde“'
                },
                desc: {
                    en: 'UV-resistant outdoor vinyl car bumper/window decal + mini zodiac constellation stickers for laptops and bottles.',
                    sr: 'Otporna spoljašnja vinyl nalepnica za staklo ili branik automobila + mini set zodijačkih nalepnica.'
                },
                price: '€7 / 800 RSD'
            },
            {
                id: 'cap-rising',
                icon: '🧢',
                badge: { en: 'Gold Embroidery', sr: 'Zlatni Vez' },
                category: { en: 'Embroidered Dad Cap', sr: 'Vezeni Kačket' },
                title: {
                    en: '“{SIGN} Energy Only” Embroidered Cosmic Cap',
                    sr: 'Kačket sa zlatnim vezom „{SIGN} Energy Only“'
                },
                desc: {
                    en: 'Brushed cotton adjustable cap in deep cosmic navy with high-density gold zodiac symbol embroidery.',
                    sr: 'Podesivi pamučni kačket u tamno-teget boji sa preciznim zlatnim vezom simbola vašeg znaka.'
                },
                price: '€19 / 2.200 RSD'
            },
            {
                id: 'tee-chart',
                icon: '🌌',
                badge: { en: 'Custom Print', sr: 'Po Vašoj Karti' },
                category: { en: 'Custom Birth Chart Tee / Hoodie', sr: 'Duks / Majica sa Vašim Natalnim Krugom' },
                title: {
                    en: 'Your Personal Natal Wheel Back-Print T-Shirt',
                    sr: 'Majica sa Štampom Vašeg Ličnog Natalnog Kruga'
                },
                desc: {
                    en: 'We print your exact Astralis natal wheel diagram, birth coordinates, and Big Three signs on the back!',
                    sr: 'Štampamo vaš tačan Astralis natalni krug, koordinate rođenja i Veliku Trojku na leđima majice!'
                },
                price: '€29 / 3.400 RSD'
            },
            {
                id: 'sticker-pack',
                icon: '✨',
                badge: { en: 'Gift Bundle', sr: 'Poklon Set' },
                category: { en: 'Holographic Zodiac Sticker Set (12 pcs)', sr: 'Holografski Set Nalepnica (12 kom)' },
                title: {
                    en: '“Don’t Blame Me, Blame My {SIGN} Moon” Decal Pack',
                    sr: 'Set Nalepnica „Ne krivi mene, krivi moj Mesec u znaku {SIGN}“'
                },
                desc: {
                    en: 'Gold-foil & holographic stickers for cars, phone cases, journals, and tumblers featuring all 12 signs.',
                    sr: 'Zlatne i holografske nalepnice za auto, masku telefona i planer sa duhovitim astrološkim porukama.'
                },
                price: '€9 / 1.000 RSD'
            }
        ];

        const VIRAL_MERCH_SLOGANS = [
            '“Help, my Jupiter is in Venus!”',
            '“Help, it is Full Moon and I am a Virgo!”',
            '“Sorry I’m late, Mercury is in Retrograde.”',
            '“My Sun says chill, my Rising says chaos.”',
            '“Warning: Unfiltered Scorpio / Aries Energy”',
            '“Ask me about my Birth Chart (I dare you).”',
            '“Powered by Coffee & Chaotic Planetary Transits”',
            '“7th House Seeking Soulmate — Apply Within”',
            '“Not stubborn, just a Taurus.”'
        ];

        // =========================================================================
        // 3. LOCAL CITIES & BILINGUAL ASTROLOGY CONTENT
        // =========================================================================
        function t() {
            return UI_STRINGS[currentLang] || UI_STRINGS.en;
        }


        const CITIES_DATA = [
            { name: { en: 'Belgrade, Serbia', sr: 'Beograd, Srbija' }, lat: 44.79, lng: 20.45 },
            { name: { en: 'Kruševac, Serbia', sr: 'Kruševac, Srbija' }, lat: 43.58, lng: 21.33 },
            { name: { en: 'Novi Sad, Serbia', sr: 'Novi Sad, Srbija' }, lat: 45.27, lng: 19.83 },
            { name: { en: 'Niš, Serbia', sr: 'Niš, Srbija' }, lat: 43.32, lng: 21.90 },
            { name: { en: 'Kragujevac, Serbia', sr: 'Kragujevac, Srbija' }, lat: 44.01, lng: 20.91 },
            { name: { en: 'Subotica, Serbia', sr: 'Subotica, Srbija' }, lat: 46.10, lng: 19.67 },
            { name: { en: 'Zagreb, Croatia', sr: 'Zagreb, Hrvatska' }, lat: 45.81, lng: 15.98 },
            { name: { en: 'Split, Croatia', sr: 'Split, Hrvatska' }, lat: 43.51, lng: 16.44 },
            { name: { en: 'Sarajevo, Bosnia & Herzegovina', sr: 'Sarajevo, Bosna i Hercegovina' }, lat: 43.86, lng: 18.41 },
            { name: { en: 'Banja Luka, Bosnia & Herzegovina', sr: 'Banja Luka, Bosna i Hercegovina' }, lat: 44.77, lng: 17.19 },
            { name: { en: 'Podgorica, Montenegro', sr: 'Podgorica, Crna Gora' }, lat: 42.43, lng: 19.26 },
            { name: { en: 'Ljubljana, Slovenia', sr: 'Ljubljana, Slovenija' }, lat: 46.06, lng: 14.51 },
            { name: { en: 'Skopje, North Macedonia', sr: 'Skoplje, Severna Makedonija' }, lat: 41.99, lng: 21.43 },
            { name: { en: 'Vienna, Austria', sr: 'Beč, Austrija' }, lat: 48.21, lng: 16.37 },
            { name: { en: 'Zurich, Switzerland', sr: 'Cirih, Švajcarska' }, lat: 47.38, lng: 8.54 },
            { name: { en: 'Berlin, Germany', sr: 'Berlin, Nemačka' }, lat: 52.52, lng: 13.40 },
            { name: { en: 'Munich, Germany', sr: 'Minhen, Nemačka' }, lat: 48.14, lng: 11.58 },
            { name: { en: 'Paris, France', sr: 'Pariz, Francuska' }, lat: 48.86, lng: 2.35 },
            { name: { en: 'London, United Kingdom', sr: 'London, Velika Britanija' }, lat: 51.51, lng: -0.13 },
            { name: { en: 'Madrid, Spain', sr: 'Madrid, Španija' }, lat: 40.42, lng: -3.70 },
            { name: { en: 'Rome, Italy', sr: 'Rim, Italija' }, lat: 41.90, lng: 12.50 },
            { name: { en: 'Milan, Italy', sr: 'Milano, Italija' }, lat: 45.46, lng: 9.19 },
            { name: { en: 'Amsterdam, Netherlands', sr: 'Amsterdam, Holandija' }, lat: 52.37, lng: 4.90 },
            { name: { en: 'Stockholm, Sweden', sr: 'Stokholm, Švedska' }, lat: 59.33, lng: 18.07 },
            { name: { en: 'Athens, Greece', sr: 'Atina, Grčka' }, lat: 37.98, lng: 23.73 },
            { name: { en: 'Istanbul, Turkey', sr: 'Istanbul, Turska' }, lat: 41.01, lng: 28.98 },
            { name: { en: 'Moscow, Russia', sr: 'Moskva, Rusija' }, lat: 55.76, lng: 37.62 },
            { name: { en: 'Dubai, UAE', sr: 'Dubai, UAE' }, lat: 25.20, lng: 55.27 },
            { name: { en: 'Tokyo, Japan', sr: 'Tokio, Japan' }, lat: 35.68, lng: 139.65 },
            { name: { en: 'Seoul, South Korea', sr: 'Seul, Južna Koreja' }, lat: 37.57, lng: 126.98 },
            { name: { en: 'Singapore, Singapore', sr: 'Singapur, Singapur' }, lat: 1.35, lng: 103.82 },
            { name: { en: 'Sydney, Australia', sr: 'Sidnej, Australija' }, lat: -33.87, lng: 151.21 },
            { name: { en: 'Melbourne, Australia', sr: 'Melburn, Australija' }, lat: -37.81, lng: 144.96 },
            { name: { en: 'New York, USA', sr: 'Njujork, SAD' }, lat: 40.71, lng: -74.01 },
            { name: { en: 'Los Angeles, USA', sr: 'Los Anđeles, SAD' }, lat: 34.05, lng: -118.24 },
            { name: { en: 'Chicago, USA', sr: 'Čikago, SAD' }, lat: 41.88, lng: -87.63 },
            { name: { en: 'Miami, USA', sr: 'Majami, SAD' }, lat: 25.76, lng: -80.19 },
            { name: { en: 'San Francisco, USA', sr: 'San Francisko, SAD' }, lat: 37.77, lng: -122.42 },
            { name: { en: 'Toronto, Canada', sr: 'Toronto, Kanada' }, lat: 43.65, lng: -79.38 },
            { name: { en: 'Vancouver, Canada', sr: 'Vankuver, Kanada' }, lat: 49.28, lng: -123.12 },
            { name: { en: 'São Paulo, Brazil', sr: 'Sao Paulo, Brazil' }, lat: -23.55, lng: -46.63 },
            { name: { en: 'Buenos Aires, Argentina', sr: 'Buenos Ajres, Argentina' }, lat: -34.60, lng: -58.38 },
            { name: { en: 'Prague, Czechia', sr: 'Prag, Češka' }, lat: 50.08, lng: 14.44 }
        ];

        const selectedLocations = {
            main: { label: 'Belgrade, Serbia', lat: 44.79, lng: 20.45 },
            syn1: { label: 'Belgrade, Serbia', lat: 44.79, lng: 20.45 },
            syn2: { label: 'Prague, Czechia', lat: 50.08, lng: 14.44 }
        };

        const cityFieldIds = { main: 'birth-city-input', syn1: 'syn-city-input-1', syn2: 'syn-city-input-2' };

        function normalizeCityName(text) {
            return text.trim().normalize('NFD').replace(/\p{M}/gu, '')
                .toLowerCase().replace(/đ/g, 'dj').replace(/\s*,\s*/g, ', ');
        }

        function updateCityHintUI() {
            const hint = document.getElementById('birth-city-coords-hint');
            const { lat, lng } = selectedLocations.main;
            const latDir = lat >= 0 ? 'N' : 'S';
            const lngDir = lng >= 0 ? 'E' : 'W';
            hint.textContent = `${Math.abs(lat).toFixed(2)}°${latDir}, ${Math.abs(lng).toFixed(2)}°${lngDir}`;
        }

        function selectCity(targetKey, reportError = false) {
            const input = document.getElementById(cityFieldIds[targetKey]);
            const name = normalizeCityName(input.value);
            const city = CITIES_DATA.find(item => Object.values(item.name).some(label => {
                const fullName = normalizeCityName(label);
                return fullName === name || fullName.split(',')[0] === name;
            }));
            input.setCustomValidity(city ? '' : t().cityError);
            if (!city) {
                if (targetKey === 'main') {
                    document.getElementById('birth-city-coords-hint').textContent = t().cityError;
                }
                if (reportError) input.reportValidity();
                return false;
            }
            selectedLocations[targetKey] = { label: city.name[currentLang], lat: city.lat, lng: city.lng };
            if (targetKey === 'main') updateCityHintUI();
            return true;
        }

        const ZODIAC_SIGNS = [
            { id: 0, symbol: '♈', startMonth: 3, startDay: 21, name: { en: 'Aries', sr: 'Ovan' }, dates: { en: 'March 21 – April 19', sr: '21. mart – 19. april' }, element: { en: 'Fire', sr: 'Vatra' }, ruler: { en: 'Mars', sr: 'Mars' }, color: { en: 'Crimson Red', sr: 'Grimizno crvena' } },
            { id: 1, symbol: '♉', startMonth: 4, startDay: 20, name: { en: 'Taurus', sr: 'Bik' }, dates: { en: 'April 20 – May 20', sr: '20. april – 20. maj' }, element: { en: 'Earth', sr: 'Zemlja' }, ruler: { en: 'Venus', sr: 'Venera' }, color: { en: 'Emerald Green', sr: 'Smaragdno zelena' } },
            { id: 2, symbol: '♊', startMonth: 5, startDay: 21, name: { en: 'Gemini', sr: 'Blizanci' }, dates: { en: 'May 21 – June 20', sr: '21. maj – 20. jun' }, element: { en: 'Air', sr: 'Vazduh' }, ruler: { en: 'Mercury', sr: 'Merkur' }, color: { en: 'Saffron Yellow', sr: 'Šafran žuta' } },
            { id: 3, symbol: '♋', startMonth: 6, startDay: 21, name: { en: 'Cancer', sr: 'Rak' }, dates: { en: 'June 21 – July 22', sr: '21. jun – 22. jul' }, element: { en: 'Water', sr: 'Voda' }, ruler: { en: 'Moon', sr: 'Mesec' }, color: { en: 'Pearl Silver', sr: 'Biserno srebrna' } },
            { id: 4, symbol: '♌', startMonth: 7, startDay: 23, name: { en: 'Leo', sr: 'Lav' }, dates: { en: 'July 23 – August 22', sr: '23. jul – 22. avgust' }, element: { en: 'Fire', sr: 'Vatra' }, ruler: { en: 'Sun', sr: 'Sunce' }, color: { en: 'Royal Gold', sr: 'Kraljevsko zlatna' } },
            { id: 5, symbol: '♍', startMonth: 8, startDay: 23, name: { en: 'Virgo', sr: 'Devica' }, dates: { en: 'August 23 – September 22', sr: '23. avgust – 22. septembar' }, element: { en: 'Earth', sr: 'Zemlja' }, ruler: { en: 'Mercury', sr: 'Merkur' }, color: { en: 'Forest Moss', sr: 'Šumsko zelena' } },
            { id: 6, symbol: '♎', startMonth: 9, startDay: 23, name: { en: 'Libra', sr: 'Vaga' }, dates: { en: 'September 23 – October 22', sr: '23. septembar – 22. oktobar' }, element: { en: 'Air', sr: 'Vazduh' }, ruler: { en: 'Venus', sr: 'Venera' }, color: { en: 'Rose Quartz', sr: 'Roze kvarc' } },
            { id: 7, symbol: '♏', startMonth: 10, startDay: 23, name: { en: 'Scorpio', sr: 'Škorpija' }, dates: { en: 'October 23 – November 21', sr: '23. oktobar – 21. novembar' }, element: { en: 'Water', sr: 'Voda' }, ruler: { en: 'Pluto & Mars', sr: 'Pluton i Mars' }, color: { en: 'Obsidian Wine', sr: 'Tamno bordo' } },
            { id: 8, symbol: '♐', startMonth: 11, startDay: 22, name: { en: 'Sagittarius', sr: 'Strelac' }, dates: { en: 'November 22 – December 21', sr: '22. novembar – 21. decembar' }, element: { en: 'Fire', sr: 'Vatra' }, ruler: { en: 'Jupiter', sr: 'Jupiter' }, color: { en: 'Royal Purple', sr: 'Kraljevsko ljubičasta' } },
            { id: 9, symbol: '♑', startMonth: 12, startDay: 22, name: { en: 'Capricorn', sr: 'Jarac' }, dates: { en: 'December 22 – January 19', sr: '22. decembar – 19. januar' }, element: { en: 'Earth', sr: 'Zemlja' }, ruler: { en: 'Saturn', sr: 'Saturn' }, color: { en: 'Slate Charcoal', sr: 'Grafitno siva' } },
            { id: 10, symbol: '♒', startMonth: 1, startDay: 20, name: { en: 'Aquarius', sr: 'Vodolija' }, dates: { en: 'January 20 – February 18', sr: '20. januar – 18. februar' }, element: { en: 'Air', sr: 'Vazduh' }, ruler: { en: 'Uranus & Saturn', sr: 'Uran i Saturn' }, color: { en: 'Electric Cobalt', sr: 'Električno plava' } },
            { id: 11, symbol: '♓', startMonth: 2, startDay: 19, name: { en: 'Pisces', sr: 'Ribe' }, dates: { en: 'February 19 – March 20', sr: '19. februar – 20. mart' }, element: { en: 'Water', sr: 'Voda' }, ruler: { en: 'Neptune & Jupiter', sr: 'Neptun i Jupiter' }, color: { en: 'Seafoam Teal', sr: 'Morsko tirkizna' } }
        ];

        const ASPECTS_POOL = {
            "en": [
                {
                    "title": "Sun trine Jupiter",
                    "type": "Trine 120°",
                    "desc": "The Sun and Jupiter make a good example of how astrologers describe confidence and generosity. In practice, those two ideas can pull in different directions. Think of a situation where offering one specific resource would be more useful than promising broad support."
                },
                {
                    "title": "Venus sextile Moon",
                    "type": "Sextile 60°",
                    "desc": "Astrologers often associate Venus with how someone shows affection and the Moon with what they find familiar or comforting. The two can look different in everyday life. Ask someone close to you what gesture makes them feel welcome after a difficult day."
                },
                {
                    "title": "Mercury trine Saturn",
                    "type": "Trine 120°",
                    "desc": "Mercury and Saturn make a common symbolic pairing for putting an idea into a workable structure. Try the distinction with one stalled task. Tell a colleague what you are trying to do in one sentence, then check if both of you can name the next step."
                },
                {
                    "title": "Mars sextile Sun",
                    "type": "Sextile 60°",
                    "desc": "This pairing is often used to illustrate the difference between having a direction and acting on it. Think of a plan you have been discussing for a while. What is the smallest part you can finish before you ask anyone else to commit?"
                },
                {
                    "title": "Moon conjunct Venus",
                    "type": "Conjunction 0°",
                    "desc": "A conjunction brings two points close together on the chart. Here the symbolic focus is affection expressed through an ordinary habit. Notice who makes a recurring task easier for you, and thank them for the specific part they take care of."
                },
                {
                    "title": "Jupiter sextile Mercury",
                    "type": "Sextile 60°",
                    "desc": "Jupiter and Mercury often appear together in symbolic examples about learning. Before you look something up, write down what you expect the answer to be. The most interesting part of the search is often the one detail that upsets your first explanation."
                },
                {
                    "title": "Mercury square Mars",
                    "type": "Square 90°",
                    "desc": "In this example, a square is a way to talk about the friction between getting a point across and getting an answer quickly. Before sending a sharp reply, turn the first sentence into a question that the other person can actually answer."
                },
                {
                    "title": "Sun opposite Moon",
                    "type": "Opposition 180°",
                    "desc": "An opposition puts two points across from each other. In this example, an obligation and a quieter personal need can both deserve attention. Try naming a time for each instead of leaving the quieter one to fit into whatever remains."
                },
                {
                    "title": "Venus trine Saturn",
                    "type": "Trine 120°",
                    "desc": "Venus and Saturn can symbolize the connection between affection and reliability. An ordinary example is remembering a commitment without waiting to be asked. Choose one small agreement you can make easier to keep and decide with the other person who does what."
                },
                {
                    "title": "Moon square Jupiter",
                    "type": "Square 90°",
                    "desc": "This square offers a way to think about the tension between wanting more activity and saving room for rest. Look at the next invitation or task you feel ready to accept. Check whether a smaller commitment would let you enjoy it and still have time to yourself."
                },
                {
                    "title": "Mercury conjunct Venus",
                    "type": "Conjunction 0°",
                    "desc": "Mercury and Venus offer a symbolic prompt about the difference between politeness and warmth. If you want to praise someone, mention the exact decision or detail you appreciated. A sentence about what they did often means more than a general compliment."
                },
                {
                    "title": "Mars opposite Saturn",
                    "type": "Opposition 180°",
                    "desc": "In astrology this pair is often used to illustrate momentum encountering a limit. Think about something you are pushing to finish. Which constraint is fixed, and which one could change if you asked sooner or offered a smaller version of the plan?"
                },
                {
                    "title": "Jupiter trine Moon",
                    "type": "Trine 120°",
                    "desc": "In this example, expansion is pictured as making room for another person to join an existing routine. Invite someone into a habit you already value, such as a walk or a regular meal. Give them a clear choice about when and how to take part."
                }
            ],
            "sr": [
                {
                    "title": "Sunce u trigonu s Jupiterom",
                    "type": "Trigon 120°",
                    "desc": "Sunce i Jupiter se u astrološkoj simbolici povezuju sa samopouzdanjem i velikodušnošću. Te dve osobine u praksi ne idu uvek zajedno. Seti se situacije u kojoj bi ponuda konkretne pomoći vredela više od obećanja da ćeš biti tu za sve."
                },
                {
                    "title": "Venera u sekstilu s Mesecom",
                    "type": "Sekstil 60°",
                    "desc": "U astrologiji se Venera često vezuje za način pokazivanja naklonosti, a Mesec za ono što nam pruža utehu. To se u svakodnevici može razlikovati od osobe do osobe. Pitaj nekoga bliskog šta mu najviše prija kad iza sebe ima naporan dan."
                },
                {
                    "title": "Merkur u trigonu sa Saturnom",
                    "type": "Trigon 120°",
                    "desc": "Merkur i Saturn u astrološkim primerima često služe da pokažu kako ideja dobija upotrebljiv oblik. Isprobaj to na zadatku koji je stao. Reci kolegi u jednoj rečenici šta pokušavaš da uradiš, pa proverite da li isto razumete sledeći korak."
                },
                {
                    "title": "Mars u sekstilu sa Suncem",
                    "type": "Sekstil 60°",
                    "desc": "Ovaj spoj se često koristi kao primer razlike između namere i postupka. Seti se plana o kojem već dugo razgovaraš. Koji njegov najmanji deo možeš da završiš pre nego što zatražiš da se još neko uključi?"
                },
                {
                    "title": "Mesec u konjunkciji s Venerom",
                    "type": "Konjunkcija 0°",
                    "desc": "Konjunkcija približava dve tačke na karti. Ovde je tema naklonost koja se pokazuje kroz obične navike. Obrati pažnju na to ko ti olakšava neki posao koji stalno iskrsava i zahvali mu za konkretan deo koji obavlja."
                },
                {
                    "title": "Jupiter u sekstilu s Merkurom",
                    "type": "Sekstil 60°",
                    "desc": "Jupiter i Merkur se često pojavljuju u astrološkim primerima o učenju. Pre nego što potražiš odgovor, zapiši šta očekuješ da ćeš naći. Najzanimljiviji deo pretrage često je detalj koji poremeti tvoje prvo objašnjenje."
                },
                {
                    "title": "Merkur u kvadratu s Marsom",
                    "type": "Kvadrat 90°",
                    "desc": "U ovom primeru kvadrat opisuje napetost između želje da se kaže važno i potrebe da odgovor stigne odmah. Pre nego što pošalješ oštru poruku, pretvori prvu rečenicu u pitanje na koje druga osoba zaista može da odgovori."
                },
                {
                    "title": "Sunce u opoziciji s Mesecom",
                    "type": "Opozicija 180°",
                    "desc": "U opoziciji su dve tačke na suprotnim stranama karte. U ovom primeru i obaveza i lična potreba mogu da zaslužuju pažnju. Pokušaj da za svaku odrediš vreme, umesto da onu manje hitnu ostaviš samo za trenutak koji preostane."
                },
                {
                    "title": "Venera u trigonu sa Saturnom",
                    "type": "Trigon 120°",
                    "desc": "Venera i Saturn mogu da predstavljaju vezu između naklonosti i pouzdanosti. Običan primer je ispuniti dogovor bez podsećanja. Izaberi mali dogovor koji se teško održava i proveri s drugom osobom kako biste jasnije podelili obaveze."
                },
                {
                    "title": "Mesec u kvadratu s Jupiterom",
                    "type": "Kvadrat 90°",
                    "desc": "Ovaj kvadrat služi kao primer napetosti između želje za više aktivnosti i potrebe da ostane vremena za odmor. Pogledaj sledeći poziv ili obavezu koju nameravaš da prihvatiš. Proveri da li bi manja obaveza ostavila prostora i za uživanje i za vreme za sebe."
                },
                {
                    "title": "Merkur u konjunkciji s Venerom",
                    "type": "Konjunkcija 0°",
                    "desc": "Merkur i Venera nude simboličan primer razlike između ljubaznosti i topline. Ako želiš nekoga da pohvališ, spomeni tačan postupak ili detalj koji ti je značio. Jedna rečenica o onome što je uradio često vredi više od opšteg komplimenta."
                },
                {
                    "title": "Mars u opoziciji sa Saturnom",
                    "type": "Opozicija 180°",
                    "desc": "Ovaj par se u astrologiji često koristi za situaciju u kojoj elan naiđe na ograničenje. Seti se nečega što pokušavaš da završiš. Koje ograničenje stvarno važi, a koje bi moglo da se promeni ako na vreme postaviš pitanje ili ponudiš manju verziju plana?"
                },
                {
                    "title": "Jupiter u trigonu s Mesecom",
                    "type": "Trigon 120°",
                    "desc": "U ovom primeru širenje znači napraviti mesta da se neko pridruži postojećoj navici. Pozovi nekoga da ti se pridruži u šetnji ili na redovnom ručku. Ostavi mu izbor kada i na koji način želi da se uključi."
                }
            ]
        };

        const DAILY_THEME_DESCRIPTIONS = {
            "work": [
                {
                    "en": "Pick one task whose finish line keeps moving and write down what you can deliver today. For a draft, that might mean three complete sections and a list of open points, so the next person knows what is ready to review.",
                    "sr": "Izaberite zadatak čiji se kraj stalno pomera i zapišite šta danas možete da završite. Ako radite na nacrtu, to mogu biti tri gotova odeljka i spisak otvorenih pitanja, da bi osoba koja preuzima posao znala šta je spremno za pregled."
                },
                {
                    "en": "Notice which interruptions break your concentration and which genuinely need a quick reply. If a few messages can wait, try answering them together after one focused stretch and leave a short note about where to resume if something urgent comes up.",
                    "sr": "Obratite pažnju na to koji vam prekidi remete koncentraciju, a koji zaista traže brz odgovor. Ako nekoliko poruka može da sačeka, odgovorite na njih kada završite taj deo posla. Za slučaj hitnog prekida zabeležite gde bi trebalo da nastavite."
                },
                {
                    "en": "When you ask someone to review your work, give them one question they can answer on the first pass. Ask where the instructions became unclear or which example should come first, then use their answer to make one targeted revision.",
                    "sr": "Kada zamolite nekoga da pregleda vaš rad, postavite jedno pitanje na koje može da odgovori već pri prvom čitanju. Pitajte na kom mestu uputstvo postaje nejasno ili koji primer treba da bude prvi, pa na osnovu odgovora napravite konkretnu izmenu."
                },
                {
                    "en": "Before a handoff, look at the project as someone opening the folder for the first time. Share the latest version, name the next decision, and point to the exact place to continue so your collaborator can get started without searching through old messages.",
                    "sr": "Pre predaje posla pogledajte projekat očima nekoga ko prvi put otvara fasciklu. Pošaljite najnoviju verziju, navedite koja odluka predstoji i označite tačno mesto za nastavak. Tako će saradnik imati sve što mu treba da započne svoj deo posla."
                },
                {
                    "en": "If a deadline feels hard to estimate, separate your work from the things you are waiting for. Put the earliest useful check-in on your calendar and decide which part can move while a reply, approval, or missing file is still pending.",
                    "sr": "Ako vam je teško da procenite rok, odvojite svoj deo posla od onoga što zavisi od drugih. Zabeležite kada ima smisla da prvi put proverite stanje i odlučite šta možete da uradite dok čekate odgovor, odobrenje ili dokument."
                },
                {
                    "en": "Choose a recurring step that takes more effort than it should and watch yourself do it once. If most of the time goes into finding the right information, put that information where you begin the task and see how the next attempt feels.",
                    "sr": "Izaberite korak koji često ponavljate i obratite pažnju na to gde vam odlazi najviše vremena. Ako se zadržavate tražeći određeni podatak, stavite ga tamo gde započinjete zadatak, pa sledeći put proverite da li ste posao lakše obavili."
                },
                {
                    "en": "Before your next meeting, write down one decision you would like the group to make. If the conversation drifts toward background details, return to the decision and ask what information the group still needs to make it with confidence.",
                    "sr": "Pre sledećeg sastanka zapišite jednu odluku koju biste želeli da grupa donese. Ako se razgovor zadrži na pojedinostima koje su svima već poznate, vratite se na odluku i pitajte koji podatak još nedostaje da biste mogli da je donesete."
                },
                {
                    "en": "If you feel stuck on a large task, try describing the difficulty in one specific sentence. The next step is easier to choose once you know whether you are missing an example, waiting for a decision, or unsure what the finished version should contain.",
                    "sr": "Ako ste zastali na velikom zadatku, pokušajte da opišete prepreku jednom konkretnom rečenicom. Lakše je odabrati sledeći korak kada znate da li vam nedostaje primer, čekate da neko donese odluku ili vam je nejasno šta završna verzija treba da sadrži."
                },
                {
                    "en": "Give an idea a rough first draft before you judge how polished it is. Sketch two ways to explain it, read both aloud, and keep the parts that make the main point easiest for someone else to follow.",
                    "sr": "Pre nego što ocenite koliko je ideja razrađena, zabeležite je u grubom nacrtu. Isprobajte dva načina da je objasnite, pročitajte oba naglas i zadržite one delove koji bi drugoj osobi olakšali da razume ono što želite da kažete."
                },
                {
                    "en": "If you are comparing two versions of something, change a single detail and pay attention to what happens. Keeping the rest steady makes it easier to tell whether a shorter opening, a clearer heading, or a better example helped the reader.",
                    "sr": "Ako poredite dve verzije, promenite jednu pojedinost i pogledajte kakav je rezultat. Kada ostatak teksta ostane isti, lakše ćete videti da li je čitaocu pomogao kraći uvod, jasniji naslov ili primer koji bolje objašnjava ono što želite da prenesete."
                },
                {
                    "en": "Think of a small work decision you have been putting off because several options look reasonable. If you can easily revise the choice, try one option on a small part of the project and decide in advance what would make you reconsider.",
                    "sr": "Setite se manje odluke na poslu koju odlažete jer vam nekoliko mogućnosti deluje razumno. Ako odluku možete lako da promenite, isprobajte jednu mogućnost na malom delu projekta i unapred odredite šta bi vas navelo da ponovo razmotrite izbor."
                },
                {
                    "en": "At the end of a work session, note one step that took less effort than you expected and one that took more. Use those details to choose where to start next time and to give yourself a more realistic amount of time.",
                    "sr": "Na kraju rada zabeležite koji vam je korak bio lakši nego što ste očekivali i koji je tražio više truda. Iskoristite to da odlučite odakle ćete početi sledeći put i da odvojite onoliko vremena koliko vam zaista treba."
                }
            ],
            "love": [
                {
                    "en": "A short reply is easy to read in the wrong tone, especially if you were expecting more detail. If the message matters, ask a straightforward question about the point you need clarified and give the person room to answer in their own time.",
                    "sr": "Kratkoj poruci lako je pripisati pogrešan ton, naročito kad ste očekivali više detalja. Ako vam je razgovor važan, postavite jasno pitanje o onome što je ostalo nejasno i ostavite sagovorniku dovoljno vremena da odgovori svojim rečima."
                },
                {
                    "en": "Think of a favor you still remember, even if the person who did it has already moved on. Tell them what they did and why it stayed with you. A specific thank-you gives them a clearer picture of the moment you appreciated.",
                    "sr": "Setite se usluge koju pamtite iako je osoba koja vam je pomogla možda već zaboravila na nju. Recite joj šta je uradila i zašto vam je taj trenutak ostao u sećanju. Tako će znati koji ste gest posebno cenili."
                },
                {
                    "en": "If a shared plan feels too vague, make the next invitation easy to answer. Suggest a date, a place and a rough time, and ask what would make it easier to join. The response may show which part of the plan needs adjusting.",
                    "sr": "Ako je zajednički plan ostao neodređen, olakšajte odgovor na sledeći poziv. Predložite datum, mesto i okvirno vreme, pa pitajte šta bi drugoj osobi olakšalo da dođe. Iz odgovora možete saznati koji deo dogovora vredi prilagoditi i kada."
                },
                {
                    "en": "An extra request can be a small task for one person and the last item in an already full day for another. Before agreeing, check what you can actually offer. A definite time or a smaller commitment is useful information for both of you.",
                    "sr": "Dodatna molba nekome je sitnica, a nekome poslednja stavka u već punom danu. Pre nego što pristanete, proverite šta zaista možete da ponudite. Ako navedete termin ili preuzmete manji deo posla, oboje ćete znati na šta možete da računate."
                },
                {
                    "en": "If you missed a plan you had agreed to, acknowledge the specific inconvenience before offering a replacement. A friend who waited outside needs a different response from someone whose afternoon was still free. Let their experience guide the way you make amends.",
                    "sr": "Ako ste propustili dogovor, prvo pomenite konkretnu neprijatnost koju je to izazvalo, pa ponudite novi termin. Prijatelj koji vas je čekao ispred zgrade i osoba kojoj je popodne još bilo slobodno različito su to doživeli. Uzmite to u obzir kad pokušate da ispravite stvar."
                },
                {
                    "en": "Someone telling a difficult story may want ideas, company, or simply time to finish the thought. Try asking what would help before offering a solution. If they want to talk it through, repeat the part you understood and let them fill in anything you missed.",
                    "sr": "Kad vam neko priča o teškoj situaciji, možda želi predlog, društvo ili vreme da dovrši misao. Pitajte šta bi toj osobi pomoglo pre nego što predložite rešenje. Ako želi razgovor, ukratko ponovite šta ste razumeli i ostavite joj prostora da dopuni detalje."
                },
                {
                    "en": "When a recurring household task keeps landing on the same person, look at the whole job. Grocery shopping, for example, can also involve checking supplies and making a list. Discuss how to divide up the preparation, the errand and the follow-through.",
                    "sr": "Kada se ista kućna obaveza stalno vraća jednoj osobi, pogledajte šta sve taj posao obuhvata. Odlazak u nabavku uključuje i proveru zaliha i pravljenje spiska. Dogovorite se kako ćete podeliti pripremu, odlazak u prodavnicu i raspremanje po povratku."
                },
                {
                    "en": "If you want to get to know someone you keep meeting in passing, build on one detail they already shared. Ask how the book, recipe, or repair turned out. A simple follow-up carries the conversation forward while letting them decide how much to share.",
                    "sr": "Ako želite bolje da upoznate nekoga koga često srećete u prolazu, nadovežite se na detalj koji je već pomenuo. Pitajte kakva je bila knjiga, kako je ispao recept ili da li je popravka uspela. Tako razgovor može da se nastavi tempom koji toj osobi prija."
                },
                {
                    "en": "A disagreement can gather up several old topics before either person sees it happening. Name the latest issue in one sentence and ask whether you can deal with that first. Make a separate time to discuss an earlier concern if it still needs attention.",
                    "sr": "U raspravu se lako uvuku stare teme pre nego što to iko primeti. U jednoj rečenici opišite pitanje oko kojeg ste se upravo razišli i predložite da prvo razgovarate o njemu. Ako ranija tema i dalje traži pažnju, dogovorite posebno vreme za nju."
                },
                {
                    "en": "A reunion can feel awkward when the last conversation was months ago. If you would like to reconnect, mention a shared memory and offer something easy to decline, such as a short walk. The invitation can stay simple while you see whether the timing suits both of you.",
                    "sr": "Ponovni susret može delovati neprijatno kada je od poslednjeg razgovora prošlo nekoliko meseci. Ako želite da obnovite kontakt, pomenite zajedničku uspomenu i predložite nešto jednostavno, poput kratke šetnje. Poziv može biti nenametljiv i ostaviti prostora da vidite da li vam oboma odgovara."
                },
                {
                    "en": "People sometimes enjoy company most when their hands are occupied. Make a cup of tea, sort a stack of photos, or walk to a nearby shop together. Notice whether the activity gives each of you a comfortable chance to speak or stay quiet.",
                    "sr": "Nekad je najprijatnije biti zajedno dok su ruke zauzete. Skuvajte čaj, prelistajte stare fotografije ili zajedno prošetajte do obližnje prodavnice. Obratite pažnju da li vam ta aktivnost oboma daje priliku da razgovarate ili ćutite, kako vam u trenutku prija."
                },
                {
                    "en": "Think of a time someone changed their mind after you explained your point of view. What helped the conversation move along? Bring one detail from that memory into a current conversation, such as choosing a quieter moment or explaining what the decision means to you.",
                    "sr": "Setite se razgovora posle kog je neko promenio mišljenje jer je bolje razumeo vaše gledište. Šta je tada pomoglo? Donesite jedan detalj iz tog iskustva u sadašnji razgovor, recimo mirniji trenutak za razgovor ili objašnjenje šta vam ta odluka znači."
                }
            ],
            "health": [
                {
                    "en": "The end of a busy stretch can pass without a clear break. Try a small closing routine today, such as writing down the next task and putting away the materials you used. Notice whether the following part of the day feels easier to begin.",
                    "sr": "Posle niza obaveza ponekad izostane jasna pauza. Probajte danas mali završni ritual, recimo da zapišete sledeći zadatak i sklonite stvari koje ste koristili. Obratite pažnju na to da li vam posle tog trenutka lakše počinje naredni deo dana."
                },
                {
                    "en": "Look at the first few things you do after getting home. If you spend most of that time looking for somewhere to put keys, bags, or mail, try giving one of those things a regular spot. See how the arrangement works on the next ordinary day.",
                    "sr": "Pogledajte šta prvo radite kad stignete kući. Ako tada uglavnom tražite gde ćete ostaviti ključeve, torbu ili poštu, odredite jedno stalno mesto za nešto od toga. Proverite sledećeg običnog dana da li vam taj mali raspored odgovara."
                },
                {
                    "en": "A spare ten minutes often gets absorbed into the next task. If an unclaimed moment appears, decide deliberately how to spend it. Sit by a window, have your tea while it is still warm, or look out for the first lights coming on outside.",
                    "sr": "Slobodnih deset minuta često zauzme sledeća obaveza. Ako se pojavi trenutak s kojim još nemate plan, izaberite kako želite da ga provedete. Sedite kraj prozora, popijte čaj dok je topao ili posmatrajte kako se napolju pale prva svetla."
                },
                {
                    "en": "Walk through tomorrow morning in your head and identify the point where the routine usually gets crowded. Setting out a bag, finding your transit card, or writing down the first stop may make that moment simpler. Pick the preparation that fits the morning you actually have.",
                    "sr": "Zamislite sutrašnje jutro i pronađite trenutak u kome obično nastane gužva. Možda ćete taj deo olakšati ako pripremite torbu, pronađete karticu za prevoz ili zapišete gde prvo idete. Izaberite pripremu koja odgovara jutru kakvo vas stvarno čeka."
                },
                {
                    "en": "If a free evening has turned into several separate errands, group the stops on a map or rethink one deadline. You may find that two belong on the same route and another can wait. Decide how much of the evening you want to keep open.",
                    "sr": "Ako se slobodno veče pretvorilo u niz odlazaka, pogledajte na mapi gde se sve zaustavljate i proverite rokove. Možda su dve obaveze na istom putu, a treća može da sačeka. Odlučite koliko vremena želite da ostavite otvorenim za sebe."
                },
                {
                    "en": "Pay attention to the first thing that pulls you toward your phone during an otherwise quiet moment. It might be a message, a schedule check, or simple habit. Try an interval with the phone in a different place and see what you choose to do with the time.",
                    "sr": "Primetićete možda da u mirnom trenutku prvo posegnete za telefonom zbog poruke, provere rasporeda ili iz navike. Obratite pažnju koji je povod kod vas. Ostavite telefon kratko na drugom mestu i pogledajte šta birate da uradite s tim vremenom."
                },
                {
                    "en": "When a routine falls apart on a crowded day, it helps to know its smallest useful form. If tidying the room is too much, put the things you need tomorrow in one place. The smaller version can fit days when a full reset is impractical.",
                    "sr": "Kad se u pretrpanom danu poremeti rutina, vredi znati njen najmanji koristan oblik. Ako je sređivanje cele sobe previše, stavite na jedno mesto stvari koje su vam potrebne sutra. Ta kratka verzija može da stane u dane kada nemate vremena za veliko sređivanje."
                },
                {
                    "en": "Compare two places where you spend time at home. Which has the kind of light, sound, or seating you want for a short break? Move one small object there, such as a book or a coaster, to make it easier to use that spot.",
                    "sr": "Uporedite dva mesta na kojima provodite vreme kod kuće. Gde vam svetlo, zvuk ili mesto za sedenje više odgovaraju za kratku pauzu? Prenesite na to mesto sitnicu, recimo knjigu ili podmetač, kako bi vam bilo pri ruci kada tamo sednete."
                },
                {
                    "en": "A transition between two commitments can look spacious on a calendar and feel rushed in practice. Include the time it takes to travel, pack, or switch rooms when you look at the gap. See how much time is really available before adding something else.",
                    "sr": "Prelaz između dve obaveze na kalendaru može delovati komotno, a u stvarnosti proći u žurbi. Uračunajte koliko vam treba za put, pakovanje ili prelazak u drugu prostoriju. Tek tada pogledajte koliko je vremena zaista slobodno pre nego što dodate još nešto."
                },
                {
                    "en": "Describe the best part of an ordinary morning last week in concrete terms. Perhaps you had time to open a window, finish breakfast, or listen to the end of a song. Consider whether one of those details can be repeated with the schedule you have today.",
                    "sr": "Opišite najbolji deo jednog običnog jutra prošle nedelje što konkretnije. Možda ste stigli da otvorite prozor, dovršite doručak ili poslušate pesmu do kraja. Razmislite da li neki od tih malih trenutaka možete da ponovite uz raspored koji imate danas."
                },
                {
                    "en": "If several small reminders are running through your mind at once, write them in one place and mark the time-sensitive ones. Leave the list where you can find it later. Notice which items still feel important when you look at it with a little distance.",
                    "sr": "Ako vam se nekoliko sitnih podsetnika istovremeno vrti po glavi, zapišite ih na jedno mesto i označite one koji imaju rok. Ostavite spisak tamo gde ćete ga lako naći. Primetite koje vam stavke i dalje deluju važno kad ga malo kasnije pogledate."
                },
                {
                    "en": "Pick one routine you tend to repeat in the same order. Change something minor, such as when you start a playlist or where you leave a reusable bag. Give the change a few ordinary days and see whether it earns a place in the routine.",
                    "sr": "Izaberite jednu rutinu koju obično ponavljate istim redosledom. Promenite sitnicu, recimo kada puštate muziku ili gde ostavljate platnenu torbu. Dajte promeni nekoliko običnih dana i proverite koliko vam odgovara kada je isprobate u različitim okolnostima tokom nedelje."
                }
            ],
            "luck": [
                {
                    "en": "The next time you pass a familiar building, look above street level. A date, painted sign, or unusual window can give you a question about the place. Write it down and see what a local archive or an older map can tell you.",
                    "sr": "Kad sledeći put prođete kraj poznate zgrade, pogledajte iznad visine ulice. Godina, oslikani natpis ili neobičan prozor mogu da vam daju pitanje o tom mestu. Zabeležite ga i pogledajte šta možete da saznate iz lokalnog arhiva ili starije mape."
                },
                {
                    "en": "A strong first impression can contain several observations crowded into one feeling. Write down two things you actually noticed and one thing you inferred. If the distinction matters to a decision, look for another piece of information before deciding how much weight to give the feeling.",
                    "sr": "Snažan prvi utisak može da objedini više zapažanja u jedan osećaj. Zapišite dve stvari koje ste primetili i jedan zaključak koji ste iz toga izveli. Ako je ta razlika važna za odluku, potražite još jedan podatak pre nego što se oslonite na utisak."
                },
                {
                    "en": "Choose an everyday object whose shape you rarely think about. Look at the handle, the material, or the way it fits next to similar objects. Sketch one possible change and imagine what would happen when you used the object in a familiar task.",
                    "sr": "Izaberite svakodnevni predmet o čijem obliku retko razmišljate. Pogledajte dršku, materijal ili način na koji se uklapa pored sličnih predmeta. Nacrtajte jednu moguću izmenu i zamislite šta bi se desilo kad biste ga koristili za zadatak koji često radite."
                },
                {
                    "en": "If the evening sky is visible, choose one fixed landmark and note where the Moon or a bright patch of cloud appears beside it. Look from the same spot at another time when you can. Compare the two observations and record what was different, including visibility.",
                    "sr": "Ako je večernje nebo vidljivo, izaberite nepomičan orijentir i zabeležite gde se pored njega vidi Mesec ili svetao oblak. Pogledajte sa istog mesta u drugom trenutku, kad budete mogli. Uporedite zapažanja i zapišite šta se promenilo, uključujući i vidljivost."
                },
                {
                    "en": "Pick a detail from a song, film, or story that has stayed with you. See what happens when you listen or look again specifically for it. The scene around the detail may turn out to be as interesting as the part you remembered.",
                    "sr": "Izaberite detalj iz pesme, filma ili priče koji vam se zadržao u sećanju. Ponovo poslušajte ili pogledajte delo i obratite pažnju baš na taj trenutak. Možda se pokaže da je ono što ga okružuje podjednako zanimljivo kao i deo koji pamtite."
                },
                {
                    "en": "A familiar recipe or craft can be a quiet experiment. Pick one step and look for the moment when you decide it is ready. Write down the cue you use, then ask someone else what they watch for when they do the same thing.",
                    "sr": "Poznat recept ili rad rukama može da posluži kao mali eksperiment. Izaberite jedan korak i primetite trenutak kada procenite da je gotov. Zapišite po čemu to zaključujete, pa pitajte nekoga drugog koji znak prati kada radi istu stvar."
                },
                {
                    "en": "Make a low-stakes estimate and test it. Guess how long a familiar route takes, how many pages you can read in ten minutes, or how many steps separate two doors. Compare your estimate with what you measured and consider which detail you overlooked.",
                    "sr": "Proverite jednu procenu kod koje nije važno da odmah pogodite. Ocenite koliko traje poznat put, koliko stranica pročitate za deset minuta ili koliko koraka ima između dvoja vrata. Uporedite procenu s merenjem i razmislite koji vam je detalj promakao."
                },
                {
                    "en": "During a conversation, notice the point where you would normally add your own similar story. Ask how the other person's story turned out first. One extra question can send the exchange in a direction you would have missed if you followed the usual rhythm.",
                    "sr": "U razgovoru primetite trenutak u kom biste obično dodali svoju sličnu priču. Najpre pitajte kako se završila priča osobe koja govori. Jedno dodatno pitanje može da otvori deo razgovora koji biste propustili da ste nastavili uobičajenim ritmom."
                },
                {
                    "en": "Save one of those questions that occurs to you while washing dishes or waiting in line. Give it a little time later and see how far you get with a book, a map, or a search. Write down the new question the answer raises.",
                    "sr": "Sačuvajte pitanje koje vam padne na pamet dok perete sudove ili čekate u redu. Kasnije mu posvetite malo vremena i proverite dokle možete da stignete uz knjigu, mapu ili pretragu. Zapišite i novo pitanje koje vam odgovor otvori."
                },
                {
                    "en": "If you are choosing between two simple options, imagine spending an ordinary afternoon with each choice already made. Which detail creates the strongest reaction? Check the practical reason behind it, such as the time involved, who would join you, or how easily plans could change.",
                    "sr": "Ako birate između dve jednostavne mogućnosti, zamislite kako biste proveli obično popodne posle svake odluke. Koji detalj vam najviše privlači pažnju? Proverite praktičan razlog iza toga, recimo koliko vremena treba, ko bi vam se pridružio ili koliko se lako plan može promeniti."
                },
                {
                    "en": "Look for a symbol you have seen in two different settings, perhaps a crescent shape on a calendar and on a piece of jewelry. Describe what it does in each setting. You may come away with a better question about how people give images their meaning.",
                    "sr": "Potražite simbol koji ste videli na dva različita mesta, recimo polumesec na kalendaru i na komadu nakita. Opišite čemu služi u svakom od tih okruženja. Možda ćete tako doći do preciznijeg pitanja o tome kako ljudi slikama daju značenje."
                },
                {
                    "en": "Revisit a skill you were curious about before you knew what it actually involved. Spend a short session on the simplest version you can find, such as drawing a single letter or folding one paper shape. Note which part you would happily try a second time.",
                    "sr": "Vratite se veštini koja vas je privlačila pre nego što ste znali šta sve podrazumeva. Pokušajte najjednostavniju varijantu, recimo crtanje jednog slova ili savijanje jednog oblika od papira. Zabeležite koji deo biste rado ponovili kad opet budete imali vremena."
                }
            ]
        };

        const KARMIC_NODE_VARIANTS = {
            "en": [
                "What kind of unfamiliar experience would you like to try?",
                "Which skill would you like to practice this year?",
                "When does asking for help make collaboration easier?"
            ],
            "sr": [
                "Kakvo novo iskustvo biste želeli da probate?",
                "Koju veštinu biste želeli da vežbate ove godine?",
                "Kada traženje pomoći olakšava saradnju?"
            ]
        };

        const SEVENTH_HOUSE_VARIANTS = {
            "en": [
                "What makes a shared commitment work for you?",
                "How do you prefer to work through a disagreement?",
                "Which responsibilities would you like to share more evenly?"
            ],
            "sr": [
                "Šta vam pomaže u zajedničkim obavezama?",
                "Kako najradije rešavate neslaganja?",
                "Koju biste odgovornost želeli ravnomernije da podelite?"
            ]
        };

        const ENCYCLOPEDIA_SIGNS_DATA = {
            en: [
                { title: '♈ Aries (March 21 – April 19) • Fire', desc: 'Ruled by Mars, Aries is the pioneer of the zodiac—courageous, direct, and energized by fresh challenges. Aries thrives when leading new initiatives and expressing authentic passion.' },
                { title: '♉ Taurus (April 20 – May 20) • Earth', desc: 'Ruled by Venus, Taurus values stability, sensory beauty, loyalty, and steady material growth. Patient and grounded, Taurus builds lasting foundations in both career and love.' },
                { title: '♊ Gemini (May 21 – June 20) • Air', desc: 'Ruled by Mercury, Gemini is curious, articulate, and adaptable. Drawn to ideas, storytelling, and social exchange, Gemini connects people and perspectives effortlessly.' },
                { title: '♋ Cancer (June 21 – July 22) • Water', desc: 'Ruled by the Moon, Cancer is deeply intuitive, protective, and emotionally perceptive. Home, family heritage, and heartfelt loyalty sit at the center of Cancer\'s world.' },
                { title: '♌ Leo (July 23 – August 22) • Fire', desc: 'Ruled by the Sun, Leo radiates warmth, generosity, creative self-expression, and natural leadership. Leo inspires confidence and loyalty in everyone around them.' },
                { title: '♍ Virgo (August 23 – September 22) • Earth', desc: 'Ruled by Mercury, Virgo blends analytical precision with practical service and mindfulness. Detail-oriented and reliable, Virgo excels at bringing clarity to complex systems.' },
                { title: '♎ Libra (September 23 – October 22) • Air', desc: 'Ruled by Venus, Libra seeks balance, fairness, aesthetic harmony, and meaningful partnership. Diplomatic and charming, Libra brings grace to interpersonal dynamics.' },
                { title: '♏ Scorpio (October 23 – November 21) • Water', desc: 'Ruled by Pluto and Mars, Scorpio embodies emotional depth, resilience, psychological insight, and transformation. Scorpio values complete honesty and profound trust.' },
                { title: '♐ Sagittarius (November 22 – December 21) • Fire', desc: 'Ruled by Jupiter, Sagittarius is philosophical, adventurous, and optimistic. Driven by a quest for truth, travel, and higher wisdom, Sagittarius expands horizons.' },
                { title: '♑ Capricorn (December 22 – January 19) • Earth', desc: 'Ruled by Saturn, Capricorn is disciplined, strategic, ambitious, and dependable. Masters of long-term vision, Capricorns turn patient effort into enduring achievement.' },
                { title: '♒ Aquarius (January 20 – February 18) • Air', desc: 'Ruled by Uranus and Saturn, Aquarius is innovative, independent, humanitarian, and forward-thinking. Aquarius champions originality and progressive community ideas.' },
                { title: '♓ Pisces (February 19 – March 20) • Water', desc: 'Ruled by Neptune and Jupiter, Pisces is compassionate, imaginative, artistic, and spiritually attuned. Pisces bridges intuition and empathy with effortless creativity.' }
            ],
            sr: [
                { title: '♈ Ovan (21. mart – 19. april) • Vatra', desc: 'Pod vladavinom Marsa, Ovan je pionir zodijaka — hrabar, direktan i pun energije za nove izazove. Najbolje se oseća kada predvodi nove poduhvate.' },
                { title: '♉ Bik (20. april – 20. maj) • Zemlja', desc: 'Pod vladavinom Venere, Bik ceni stabilnost, estetiku, odanost i postepen materijalni napredak. Strpljiv i prizemljen, gradi trajne temelje u poslu i ljubavi.' },
                { title: '♊ Blizanci (21. maj – 20. jun) • Vazduh', desc: 'Pod vladavinom Merkura, Blizanci su radoznali, elokventni i prilagodljivi. Privlače ih ideje, komunikacija i povezivanje ljudi.' },
                { title: '♋ Rak (21. jun – 22. jul) • Voda', desc: 'Pod vladavinom Meseca, Rak je duboko intuitivan, zaštitnički nastrojen i emotivno pronicljiv. Dom, porodica i iskrena odanost su u centru njegovog sveta.' },
                { title: '♌ Lav (23. jul – 22. avgust) • Vatra', desc: 'Pod vladavinom Sunca, Lav zrači toplinom, velikodušnošću, kreativnošću i prirodnim autoritetom. Inspiriše samopouzdanje kod ljudi oko sebe.' },
                { title: '♍ Devica (23. avgust – 22. septembar) • Zemlja', desc: 'Pod vladavinom Merkura, Devica spaja analitičku preciznost sa praktičnošću i posvećenošću. Pouzdana i sistematična, unosi red u svaki projekat.' },
                { title: '♎ Vaga (23. septembar – 22. oktobar) • Vazduh', desc: 'Pod vladavinom Venere, Vaga teži ravnoteži, pravednosti, harmoniji i skladnim partnerstvima. Diplomatična i šarmantna, donosi mir u odnose.' },
                { title: '♏ Škorpija (23. oktobar – 21. novembar) • Voda', desc: 'Pod vladavinom Plutona i Marsa, Škorpija simbolizuje emotivnu dubinu, snagu volje, intuiciju i transformaciju. Ceni potpunu iskrenost i poverenje.' },
                { title: '♐ Strelac (22. novembar – 21. decembar) • Vatra', desc: 'Pod vladavinom Jupitera, Strelac je filozofski nastrojen, avanturističkog duha i optimističan. Vođen potragom za znanjem i putovanjima, širi vidike.' },
                { title: '♑ Jarac (22. decembar – 19. januar) • Zemlja', desc: 'Pod vladavinom Saturna, Jarac je disciplinovan, strateški orijentisan, ambiciozan i pouzdan. Strpljivim radom ostvaruje velike dugoročne ciljeve.' },
                { title: '♒ Vodolija (20. januar – 18. februar) • Vazduh', desc: 'Pod vladavinom Urana i Saturna, Vodolija je inovativna, nezavisna i okrenuta budućnosti. Donosi originalne ideje i human pristup zajednici.' },
                { title: '♓ Ribe (19. februar – 20. mart) • Voda', desc: 'Pod vladavinom Neptuna i Jupitera, Ribe su saosećajne, maštovite, umetnički nadarene i intuitivne. Spajaju empatiju sa bogatom kreativnošću.' }
            ]
        };

        const FAQ_DATA = {
            "en": [
                {
                    "q": "Does Astralis calculate real positions?",
                    "a": "No. The simulator uses simple formulas and calendar date ranges. Its planets and houses illustrate the shape of a chart without calculating an ephemeris or time-zone history."
                },
                {
                    "q": "What if I do not know my birth time?",
                    "a": "Use Unknown time to hide the displayed rising sign. The diagram uses noon as a reference for the illustration."
                },
                {
                    "q": "What do the scores mean?",
                    "a": "The simulator uses repeatable numbers from your inputs to select written prompts and aspect examples. A score of 80/100 is a display value. It does not represent a probability or measure compatibility."
                },
                {
                    "q": "Can I use the tools for free?",
                    "a": "Yes. The simulators and guides are open without an account. Saving your own birth details on the device is optional."
                }
            ],
            "sr": [
                {
                    "q": "Da li Astralis računa stvarne položaje planeta?",
                    "a": "Simulator koristi jednostavne formule i uobičajene datumske raspone. Planete i kuće služe kao prikaz oblika karte, bez efemerida i istorije vremenskih zona."
                },
                {
                    "q": "Šta ako ne znam vreme rođenja?",
                    "a": "Izaberite opciju Ne znam sat da sakrijete prikaz podznaka. Krug koristi podne kao referencu za ilustraciju."
                },
                {
                    "q": "Šta znače bodovi?",
                    "a": "Simulator od unetih podataka pravi ponovljive brojeve kojima bira pitanja i primere aspekata. Rezultat 80/100 je vrednost za prikaz. Ne predstavlja verovatnoću i ne meri kompatibilnost."
                },
                {
                    "q": "Da li je korišćenje besplatno?",
                    "a": "Da. Simulatori i vodiči su dostupni bez naloga. Čuvanje sopstvenih podataka o rođenju na uređaju je opciono."
                }
            ]
        };

        function switchMainView(targetView, { updateUrl = true, scroll = true } = {}) {
            const validViews = ['daily', 'synastry', 'history', 'curiosities', 'books', 'merch'];
            currentActiveView = validViews.includes(targetView) ? targetView : 'daily';

            validViews.forEach(v => {
                const el = document.getElementById(`view-${v}`);
                if (el) el.classList.toggle('hidden', v !== currentActiveView);
            });

            document.querySelectorAll('.nav-tab-btn').forEach(b => {
                const isActive = b.getAttribute('data-view') === currentActiveView;
                if (isActive) b.setAttribute('aria-current', 'location');
                else b.removeAttribute('aria-current');
                const isMobile = b.id.endsWith('-mobile');
                if (isMobile) {
                    b.className = isActive
                        ? 'nav-tab-btn py-1.5 px-1 rounded-lg text-[10px] sm:text-[11px] font-semibold bg-amber-500 text-cosmic-950 text-center truncate'
                        : 'nav-tab-btn py-1.5 px-1 rounded-lg text-[10px] sm:text-[11px] font-semibold text-slate-300 bg-white/5 text-center truncate';
                } else {
                    b.className = isActive
                        ? 'nav-tab-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-cosmic-950 shadow transition'
                        : 'nav-tab-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition';
                }
            });

            const hash = currentActiveView === 'daily' ? '' : `#view-${currentActiveView}`;
            if (updateUrl && window.location.hash !== hash) {
                window.history.pushState(null, '', `${window.location.pathname}${window.location.search}${hash}`);
            }
            if (scroll) window.scrollTo({ top: 0, behavior: 'instant' });
        }

        function renderHistoryAndCuriosities() {
            const s = t();
            document.getElementById('hist-pill').textContent = s.histPill;
            document.getElementById('hist-back-btn').textContent = s.histBackBtn;
            document.getElementById('hist-main-title').innerHTML = s.histMainTitle;
            document.getElementById('hist-main-desc').textContent = s.histMainDesc;

            const histGrid = document.getElementById('history-articles-grid');
            if (histGrid) {
                histGrid.innerHTML = HISTORY_ARTICLES_DATA[currentLang].map(art => `
                    <article class="glass-card rounded-2xl p-6 space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold uppercase tracking-wider text-amber-300">${art.era}</span>
                            <span class="text-xl">${art.icon}</span>
                        </div>
                        <h3 class="font-serif text-lg sm:text-xl font-bold text-white">${art.title}</h3>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${art.p1}</p>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${art.p2}</p>
                        <div class="pt-2 border-t border-white/10 flex flex-wrap gap-3 text-xs">
                            ${art.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="text-amber-300 hover:text-amber-200 underline underline-offset-4">${l.label}</a>`).join('')}
                        </div>
                    </article>
                `).join('');
            }

            document.getElementById('cur-pill').textContent = s.curPill;
            document.getElementById('cur-back-btn').textContent = s.curBackBtn;
            document.getElementById('cur-main-title').innerHTML = s.curMainTitle;
            document.getElementById('cur-main-desc').textContent = s.curMainDesc;

            const curGrid = document.getElementById('curiosities-grid');
            if (curGrid) {
                curGrid.innerHTML = CURIOSITIES_DATA[currentLang].map(item => `
                    <article class="glass-card rounded-2xl p-5 sm:p-6 space-y-3">
                        <div class="text-2xl">${item.icon}</div>
                        <h3 class="font-serif text-base sm:text-lg font-bold text-white">${item.title}</h3>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${item.desc}</p>
                        <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer" class="inline-block text-xs text-amber-300 hover:underline underline-offset-4">${item.linkLabel}</a>
                    </article>
                `).join('');
            }
        }

        function renderBooksAndMerch() {
            const s = t();
            document.getElementById('books-pill').textContent = s.booksPill;
            document.getElementById('books-back-btn').textContent = s.booksBackBtn;
            document.getElementById('books-main-title').innerHTML = s.booksMainTitle;
            document.getElementById('books-main-desc').textContent = s.booksMainDesc;

            const booksGrid = document.getElementById('books-grid');
            if (booksGrid) {
                booksGrid.innerHTML = ASTROLOGY_BOOKS_DATA.map(book => `
                    <article class="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-3">
                        <div class="space-y-2.5">
                            <div class="flex items-center justify-between gap-2">
                                <span class="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-bold">#${book.level[currentLang]}</span>
                                <span class="text-lg">📖</span>
                            </div>
                            <h3 class="font-serif text-base sm:text-lg font-bold text-white leading-snug">${book.title}</h3>
                            <p class="text-xs font-semibold text-indigo-300">by ${book.author}</p>
                            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${book.desc[currentLang]}</p>
                        </div>
                        <div class="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-semibold">
                            <a href="${book.amazonUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-300 transition">
                                ↗ Amazon
                            </a>
                            <a href="${book.goodreadsUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 transition">
                                ↗ Goodreads
                            </a>
                        </div>
                    </article>
                `).join('');
            }

            renderMerchSection();
        }

        function renderMerchSection() {
            const s = t();
            document.getElementById('merch-pill').textContent = s.merchPill;
            document.getElementById('merch-back-btn').textContent = s.merchBackBtn;
            document.getElementById('merch-main-title').innerHTML = s.merchMainTitle;
            document.getElementById('merch-main-desc').textContent = s.merchMainDesc;
            document.getElementById('merch-sign-filter-lbl').textContent = s.merchSignFilterLbl;
            document.getElementById('merch-slogans-title').textContent = s.merchSlogansTitle;
            document.getElementById('merch-slogans-sub').textContent = s.merchSlogansSub;

            const selectedSign = document.getElementById('merch-zodiac-select')?.value || 'Virgo';
            const merchGrid = document.getElementById('merch-grid');
            if (merchGrid) {
                merchGrid.innerHTML = MERCH_PRODUCTS_DATA.map(item => {
                    const resolvedTitle = item.title[currentLang].replace('{SIGN}', selectedSign);
                    return `
                        <article class="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
                            <div class="space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="px-2.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-400/30 text-pink-200 text-[11px] font-semibold">${item.badge[currentLang]}</span>
                                    <span class="text-3xl">${item.icon}</span>
                                </div>
                                <span class="text-[11px] uppercase tracking-wider text-slate-400 block">${item.category[currentLang]}</span>
                                <h3 class="font-serif text-base sm:text-lg font-bold text-white leading-snug">${resolvedTitle}</h3>
                                <p class="text-xs text-slate-300 leading-relaxed">${item.desc[currentLang]}</p>
                            </div>
                            <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                                <span class="text-sm font-bold gold-gradient-text">${item.price}</span>
                                <button type="button" onclick="handleMerchInquiry(${JSON.stringify(resolvedTitle).replace(/"/g, '&quot;')})" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500 hover:opacity-95 text-white font-bold text-xs shadow transition">
                                    🛍️ ${s.merchOrderBtn}
                                </button>
                            </div>
                        </article>
                    `;
                }).join('');
            }

            const slogansGrid = document.getElementById('merch-slogans-grid');
            if (slogansGrid) {
                slogansGrid.innerHTML = VIRAL_MERCH_SLOGANS.map(slogan => `
                    <button type="button" onclick="copyMerchSlogan(${JSON.stringify(slogan).replace(/"/g, '&quot;')})" class="p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-left flex items-center justify-between gap-2 transition group">
                        <span class="text-xs sm:text-sm font-medium text-amber-200">${slogan}</span>
                        <span class="text-xs text-slate-400 group-hover:text-amber-300 shrink-0">📋</span>
                    </button>
                `).join('');
            }
        }

        function handleMerchInquiry(productTitle) {
            showToast(t().merchOrderToast(productTitle), 'success');
        }

        function copyMerchSlogan(slogan) {
            const ta = document.createElement('textarea');
            ta.value = slogan;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast(`Copied slogan: ${slogan}`, 'info');
        }

        function renderEditorialSections() {
            const s = t();
            document.getElementById('ed-pill').textContent = s.edPill;
            document.getElementById('ed-main-title').innerHTML = s.edMainTitle;
            document.getElementById('ed-main-desc').textContent = s.edMainDesc;

            document.getElementById('art-1-title').textContent = s.art1Title;
            document.getElementById('art-1-p1').innerHTML = s.art1P1;
            document.getElementById('art-1-p2').innerHTML = s.art1P2;

            document.getElementById('art-2-title').textContent = s.art2Title;
            document.getElementById('art-2-p1').innerHTML = s.art2P1;
            document.getElementById('art-2-p2').innerHTML = s.art2P2;

            document.getElementById('art-3-title').textContent = s.art3Title;
            document.getElementById('art-3-p1').innerHTML = s.art3P1;
            document.getElementById('art-3-p2').innerHTML = s.art3P2;

            document.getElementById('encyclopedia-signs-title').textContent = s.encyclopediaSignsTitle;
            document.getElementById('encyclopedia-signs-sub').textContent = s.encyclopediaSignsSub;

            const encGrid = document.getElementById('encyclopedia-signs-grid');
            if (encGrid) {
                encGrid.innerHTML = ENCYCLOPEDIA_SIGNS_DATA[currentLang].map(item => `
                    <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                        <h4 class="font-serif font-bold text-amber-300">${item.title}</h4>
                        <p class="text-slate-300 leading-relaxed">${item.desc}</p>
                    </div>
                `).join('');
            }

            document.getElementById('faq-section-title').textContent = s.faqSectionTitle;
            const faqList = document.getElementById('faq-list');
            if (faqList) {
                faqList.innerHTML = FAQ_DATA[currentLang].map(item => `
                    <div class="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                        <h4 class="font-semibold text-amber-300">${item.q}</h4>
                        <p class="text-slate-300 leading-relaxed">${item.a}</p>
                    </div>
                `).join('');
            }
        }

        function setLanguage(lang, persist = true) {
            currentLang = (lang === 'sr') ? 'sr' : 'en';
            document.documentElement.lang = currentLang;
            document.title = t().pageTitle;

            if (persist) {
                try { localStorage.setItem(LANG_STORAGE_KEY, currentLang); } catch (e) {}
            }

            const btnEn = document.getElementById('lang-btn-en');
            const btnSr = document.getElementById('lang-btn-sr');
            if (btnEn && btnSr) {
                btnEn.className = currentLang === 'en'
                    ? 'px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-amber-500 text-cosmic-950 transition'
                    : 'px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-300 hover:text-white transition';
                btnSr.className = currentLang === 'sr'
                    ? 'px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-amber-500 text-cosmic-950 transition'
                    : 'px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-300 hover:text-white transition';
            }

            const s = t();
            document.getElementById('header-subtitle').textContent = s.headerSubtitle;
            document.getElementById('profile-wheel-link').textContent = s.profileWheelLink;
            document.getElementById('tab-daily-desktop').textContent = s.tabDailyDesktop;
            document.getElementById('tab-synastry-desktop').textContent = s.tabSynastryDesktop;
            document.getElementById('tab-history-desktop').textContent = s.tabHistoryDesktop;
            document.getElementById('tab-curiosities-desktop').textContent = s.tabCuriositiesDesktop;
            document.getElementById('tab-books-desktop').textContent = s.tabBooksDesktop;
            document.getElementById('tab-merch-desktop').textContent = s.tabMerchDesktop;

            document.getElementById('tab-daily-mobile').textContent = s.tabDailyMobile;
            document.getElementById('tab-synastry-mobile').textContent = s.tabSynastryMobile;
            document.getElementById('tab-history-mobile').textContent = s.tabHistoryMobile;
            document.getElementById('tab-curiosities-mobile').textContent = s.tabCuriositiesMobile;
            document.getElementById('tab-books-mobile').textContent = s.tabBooksMobile;
            document.getElementById('tab-merch-mobile').textContent = s.tabMerchMobile;

            document.getElementById('birth-editor-title').textContent = s.birthEditorTitle;
            document.getElementById('hero-desc').textContent = s.heroDesc;
            document.getElementById('lbl-user-name').textContent = s.lblUserName;
            document.getElementById('user-name').placeholder = s.placeholderUserName;
            document.getElementById('lbl-birth-city').textContent = s.lblBirthCity;
            document.getElementById('lbl-birth-date').textContent = s.lblBirthDate;
            document.getElementById('lbl-birth-time').textContent = s.lblBirthTime;
            document.getElementById('lbl-unknown-time').textContent = s.lblUnknownTime;
            document.getElementById('lbl-target-date').textContent = s.lblTargetDate;
            document.getElementById('btn-save-profile-text').textContent = s.btnSaveProfile;
            document.getElementById('btn-calc-horoscope-text').textContent = s.btnCalcHoroscope;

            document.getElementById('lbl-rising').textContent = s.lblRising;
            document.getElementById('lbl-moon').textContent = s.lblMoon;
            document.getElementById('lbl-overall-cosmic').textContent = s.lblOverallCosmic;
            document.getElementById('lbl-lucky-numbers').textContent = s.lblLuckyNumbers;
            document.getElementById('lbl-lucky-color').textContent = s.lblLuckyColor;
            document.getElementById('lbl-lucky-hours').textContent = s.lblLuckyHours;

            document.getElementById('sec-favorability-title').textContent = s.secFavorabilityTitle;
            document.getElementById('sec-favorability-sub').textContent = s.secFavorabilitySub;
            document.getElementById('card-work-title').textContent = s.cardWorkTitle;
            document.getElementById('card-work-footer').textContent = s.cardWorkFooter;
            document.getElementById('card-love-title').textContent = s.cardLoveTitle;
            document.getElementById('card-love-footer').textContent = s.cardLoveFooter;
            document.getElementById('card-health-title').textContent = s.cardHealthTitle;
            document.getElementById('card-health-footer').textContent = s.cardHealthFooter;
            document.getElementById('card-luck-title').textContent = s.cardLuckTitle;
            document.getElementById('card-luck-footer').textContent = s.cardLuckFooter;

            document.getElementById('wheel-title').textContent = s.wheelTitle;
            document.getElementById('wheel-sub').textContent = s.wheelSub;
            document.getElementById('wheel-system-badge').textContent = s.wheelSystemBadge;
            document.getElementById('legend-trine').textContent = s.legendTrine;
            document.getElementById('legend-square').textContent = s.legendSquare;
            document.getElementById('legend-planets').textContent = s.legendPlanets;

            document.getElementById('detailed-daily-title').textContent = s.detailedDailyTitle;
            document.getElementById('btn-copy-text').textContent = s.btnCopy;
            document.getElementById('vip-daily-title').textContent = s.vipDailyTitle;
            document.getElementById('karmic-node-heading').textContent = s.karmicNodeHeading;
            document.getElementById('seventh-house-heading').textContent = s.seventhHouseHeading;

            document.getElementById('sec-all-signs-title').textContent = s.secAllSignsTitle;
            document.getElementById('sec-all-signs-sub').textContent = s.secAllSignsSub;

            document.getElementById('syn-hero-pill').textContent = s.synHeroPill;
            document.getElementById('syn-hero-title').innerHTML = s.synHeroTitle;
            document.getElementById('syn-hero-desc').textContent = s.synHeroDesc;
            document.getElementById('syn-person-a-label').textContent = s.synPersonALabel;
            document.getElementById('btn-copy-my-data-to-synastry').textContent = s.btnUseMyData;
            document.getElementById('lbl-syn-name-1').textContent = s.lblSynName1;
            document.getElementById('lbl-syn-city-1').textContent = s.lblSynCity;
            document.getElementById('lbl-syn-date-1').textContent = s.lblSynDate;
            document.getElementById('lbl-syn-time-1').textContent = s.lblSynTime;
            document.getElementById('syn-person-b-label').textContent = s.synPersonBLabel;
            document.getElementById('syn-partner-hint').textContent = s.synPartnerHint;
            document.getElementById('lbl-syn-name-2').textContent = s.lblSynName2;
            document.getElementById('lbl-syn-city-2').textContent = s.lblSynCity;
            document.getElementById('lbl-syn-date-2').textContent = s.lblSynDate;
            document.getElementById('lbl-syn-time-2').textContent = s.lblSynTime;
            document.getElementById('btn-calc-synastry-text').textContent = s.btnCalcSynastry;

            document.getElementById('syn-wheel-title').textContent = s.synWheelTitle;
            document.getElementById('syn-wheel-sub').textContent = s.synWheelSub;
            document.getElementById('syn-aspect-count-label').textContent = s.synAspectCountLabel;
            document.getElementById('syn-method-title').textContent = s.synMethodTitle;
            document.getElementById('syn-method-description').textContent = s.synMethodDescription;
            document.getElementById('syn-method-limit').textContent = s.synMethodLimit;
            document.getElementById('syn-detail-title').textContent = s.synDetailTitle;
            document.getElementById('syn-no-time').textContent = s.synNoTime;

            document.getElementById('footer-tagline').textContent = s.footerTagline;
            document.getElementById('footer-link-history').textContent = s.tabHistoryDesktop.replace(/^[^\w\s]+\s*/, '');
            document.getElementById('footer-link-curiosities').textContent = s.tabCuriositiesDesktop.replace(/^[^\w\s]+\s*/, '');
            document.getElementById('footer-link-books').textContent = s.tabBooksDesktop.replace(/^[^\w\s]+\s*/, '');
            document.getElementById('footer-link-merch').textContent = s.tabMerchDesktop.replace(/^[^\w\s]+\s*/, '');
            document.getElementById('footer-disclaimer').textContent = s.footerDisclaimer;

            renderHistoryAndCuriosities();
            renderBooksAndMerch();
            renderEditorialSections();
            populateCitySelects();
            document.getElementById('birth-city-input').placeholder = s.placeholderBirthCity;
            document.getElementById('syn-city-input-1').placeholder = s.placeholderBirthCity;
            document.getElementById('syn-city-input-2').placeholder = s.placeholderBirthCity;
            document.getElementById('btn-clear-profile').textContent = s.btnClearProfile;
            document.getElementById('profile-storage-note').textContent = s.profileStorageNote;
            document.getElementById('syn-privacy-note').textContent = s.synPrivacyNote;
            document.getElementById('syn-result-kind').textContent = synastryExample ? s.synResultExample : s.synResultLive;
            document.getElementById('daily-result-kind').textContent = dailyExample ? s.dailyResultExample : s.dailyResultLive;
            initZodiacGrid();
            updateBirthEditor();
            calculateDailyReading();
            calculateSynastryReading();
        }

        function populateCitySelects() {
            const datalist = document.getElementById('cities-datalist');
            if (datalist) {
                datalist.innerHTML = CITIES_DATA.map(c => `<option value="${c.name[currentLang]}"></option>`).join('');
            }
            const mainInput = document.getElementById('birth-city-input');
            if (mainInput && !mainInput.value) {
                mainInput.value = CITIES_DATA[0].name[currentLang];
                selectedLocations.main = { label: mainInput.value, lat: CITIES_DATA[0].lat, lng: CITIES_DATA[0].lng };
            }
            const syn1Input = document.getElementById('syn-city-input-1');
            if (syn1Input && !syn1Input.value) {
                syn1Input.value = CITIES_DATA[0].name[currentLang];
                selectedLocations.syn1 = { label: syn1Input.value, lat: CITIES_DATA[0].lat, lng: CITIES_DATA[0].lng };
            }
            const syn2Input = document.getElementById('syn-city-input-2');
            if (syn2Input && !syn2Input.value) {
                const defaultSecond = CITIES_DATA.find(city => city.name.en === 'Prague, Czechia');
                syn2Input.value = defaultSecond.name[currentLang];
                selectedLocations.syn2 = { label: syn2Input.value, lat: defaultSecond.lat, lng: defaultSecond.lng };
            }
        }

        const PROFILE_STORAGE_KEY = 'astralis_user_profile_v1';
        let savedBirthProfile = null;
        let savedProfileUsable = false;
        let birthEditorOpen = true;
        const legacyProfileKeys = [
            'astralis_auth_state_v1',
            'astralis_profiles_by_email_v1',
            'astralis_google_client_id'
        ];

        function getLocalDay() {
            const date = new Date();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${date.getFullYear()}-${month}-${day}`;
        }

        function readingCalendarDate(isoDate) {
            const [year, month, day] = isoDate.split('-').map(Number);
            const date = new Date(0);
            date.setUTCFullYear(year, month - 1, day);
            return date;
        }

        function restoreBirthProfile() {
            try {
                const profile = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || 'null');
                if (!profile || typeof profile !== 'object' || Array.isArray(profile)) return;
                savedBirthProfile = profile;
                applyBirthProfile(profile);
                savedProfileUsable = Boolean(profile.birthDate && profile.cityText &&
                    document.getElementById('birth-date').value && selectCity('main'));
                birthEditorOpen = !savedProfileUsable;
                dailyExample = !savedProfileUsable;
            } catch (e) {}
        }

        function applyBirthProfile(profile) {
            const inputs = {
                'user-name': profile.name,
                'birth-date': profile.birthDate,
                'birth-time': profile.birthTime,
                'birth-city-input': profile.cityText
            };
            for (const [id, value] of Object.entries(inputs)) {
                const input = document.getElementById(id);
                input.value = typeof value === 'string' ? value : input.defaultValue;
            }
            document.getElementById('unknown-time').checked = profile.unknownTime === true;
            document.getElementById('birth-time').disabled = profile.unknownTime === true;
        }

        function updateBirthEditor() {
            const s = t();
            const title = document.getElementById('hero-title');
            if (savedProfileUsable) title.textContent = s.profileDayTitle;
            else title.innerHTML = s.heroTitle;

            const details = document.getElementById('btn-profile-details');
            details.textContent = birthEditorOpen ? s.hideBirthDetails : s.showBirthDetails;
            details.setAttribute('aria-expanded', String(birthEditorOpen));
            details.hidden = !savedProfileUsable;
            document.getElementById('daily-profile-actions').hidden = !savedBirthProfile;
            document.getElementById('birth-form-card').hidden = !birthEditorOpen;
            document.getElementById('hero-profile-grid').classList.toggle('profile-focused', !birthEditorOpen);

            const notice = document.getElementById('saved-profile-notice');
            notice.textContent = s.savedProfileNotice;
            notice.hidden = !savedBirthProfile || savedProfileUsable;
        }

        function updateReadingDate(targetDay) {
            const s = t();
            const date = document.getElementById('profile-reading-date');
            const formatter = new Intl.DateTimeFormat(currentLang === 'sr' ? 'sr-Latn-RS' : 'en-GB', { dateStyle: 'full', timeZone: 'UTC' });
            date.dateTime = targetDay;
            const calendarDate = readingCalendarDate(targetDay);
            date.textContent = Number.isFinite(calendarDate.getTime()) ? formatter.format(calendarDate) : targetDay;
            document.getElementById('reading-date-prefix').textContent = targetDay === getLocalDay() ? s.readingToday : s.readingFor;
        }

        function showSavedProfileToday(moveFocus = false) {
            applyBirthProfile(savedBirthProfile);
            document.getElementById('target-date').value = getLocalDay();
            dailyExample = false;
            birthEditorOpen = false;
            updateBirthEditor();
            calculateDailyReading();
            if (moveFocus) {
                document.getElementById('daily-page-header').scrollIntoView();
                document.getElementById('btn-profile-details').focus({ preventScroll: true });
            }
        }

        function toggleBirthEditor() {
            if (!savedProfileUsable) return;
            if (birthEditorOpen) {
                showSavedProfileToday(true);
            } else {
                birthEditorOpen = true;
                updateBirthEditor();
                document.getElementById('birth-form-card').scrollIntoView();
                document.getElementById('birth-editor-title').focus({ preventScroll: true });
            }
        }

        function saveBirthProfile() {
            if (!selectCity('main', true) || !document.getElementById('natal-form').reportValidity()) return;
            const profile = {
                name: document.getElementById('user-name').value.trim(),
                birthDate: document.getElementById('birth-date').value,
                birthTime: document.getElementById('birth-time').value,
                cityText: selectedLocations.main.label,
                unknownTime: document.getElementById('unknown-time').checked
            };

            try {
                localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
            } catch (e) {
                showToast(t().toastStorageError, 'error');
                return;
            }
            savedBirthProfile = profile;
            savedProfileUsable = true;
            showSavedProfileToday(true);
            showToast(t().toastSavedBrowser, 'success');
        }

        function clearBirthProfile() {
            try {
                localStorage.removeItem(PROFILE_STORAGE_KEY);
                for (const key of legacyProfileKeys) localStorage.removeItem(key);
            } catch (e) {
                showToast(t().toastStorageError, 'error');
                return;
            }

            document.getElementById('natal-form').reset();
            document.getElementById('synastry-form').reset();
            document.getElementById('birth-time').disabled = false;
            document.getElementById('target-date').value = getLocalDay();
            savedBirthProfile = null;
            savedProfileUsable = false;
            birthEditorOpen = true;
            populateCitySelects();
            dailyExample = true;
            synastryExample = true;
            updateBirthEditor();
            calculateDailyReading();
            calculateSynastryReading();
            document.getElementById('birth-form-card').scrollIntoView();
            document.getElementById('birth-editor-title').focus({ preventScroll: true });
            showToast(t().toastCleared, 'success');
        }

        function calculateDailyReading(reportError = false) {
            updateReadingDate(document.getElementById('target-date').value || getLocalDay());
            if (!selectCity('main', reportError) || !document.getElementById('birth-date').value) return false;
            runCalculation(reportError);
            return true;
        }

        function calculateSynastryReading(reportError = false) {
            if (!selectCity('syn1', reportError) || !selectCity('syn2', reportError)) return false;
            if (!document.getElementById('syn-date-1').value || !document.getElementById('syn-date-2').value) return false;
            computeAndRenderSynastry();
            return true;
        }
        // =========================================================================
        // 6. ASTROLOGICAL CALCULATIONS (SIGN, RISING, PLANETS, TRANSITS, SYNASTRY)
        // =========================================================================
        function seededRandom(seed) {
            let x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        }

        function pickVariant(arr, seed) {
            if (!arr || !arr.length) return '';
            const idx = Math.floor(seededRandom(seed) * arr.length);
            return arr[idx];
        }

        function getSunSign(month, day) {
            if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return ZODIAC_SIGNS[0];
            if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return ZODIAC_SIGNS[1];
            if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return ZODIAC_SIGNS[2];
            if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return ZODIAC_SIGNS[3];
            if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return ZODIAC_SIGNS[4];
            if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return ZODIAC_SIGNS[5];
            if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return ZODIAC_SIGNS[6];
            if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return ZODIAC_SIGNS[7];
            if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return ZODIAC_SIGNS[8];
            if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return ZODIAC_SIGNS[9];
            if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return ZODIAC_SIGNS[10];
            return ZODIAC_SIGNS[11];
        }

        function calculateNatalChart(birthDateStr, birthTimeStr, cityObj, unknownTime = false) {
            const [y, m, d] = birthDateStr.split('-').map(Number);
            const sunSign = getSunSign(m, d);

            let hours = 12, mins = 0;
            if (!unknownTime && birthTimeStr) {
                [hours, mins] = birthTimeStr.split(':').map(Number);
            }
            const decimalHour = hours + mins / 60;
            const lngOffset = (cityObj ? cityObj.lng : 20.45) / 15;

            const ascIndex = Math.floor(((sunSign.id + Math.floor((decimalHour + lngOffset) / 2)) % 12 + 12) % 12);
            const ascSign = ZODIAC_SIGNS[ascIndex];

            const daySeed = y * 365 + m * 31 + d;
            const moonIndex = Math.floor((daySeed * 13 + Math.floor(decimalHour)) % 12);
            const moonSign = ZODIAC_SIGNS[moonIndex];

            const baseDeg = sunSign.id * 30 + (d % 29);
            const ascDeg = ascSign.id * 30 + ((hours * 15 + mins) % 30);

            const planets = [
                { key: 'SO', symbol: '☉', deg: baseDeg % 360, color: '#fbbf24' },
                { key: 'MO', symbol: '☽', deg: (moonIndex * 30 + ((d * 7 + hours) % 30)) % 360, color: '#e2e8f0' },
                { key: 'ME', symbol: '☿', deg: (baseDeg + 14) % 360, color: '#38bdf8' },
                { key: 'VE', symbol: '♀', deg: (baseDeg + 335) % 360, color: '#f472b6' },
                { key: 'MA', symbol: '♂', deg: ((daySeed * 19) % 360), color: '#fb7185' },
                { key: 'JU', symbol: '♃', deg: ((y * 30 + m * 5) % 360), color: '#a78bfa' },
                { key: 'SA', symbol: '♄', deg: ((y * 12 + d * 3) % 360), color: '#94a3b8' }
            ];

            return {
                sunSign,
                ascSign,
                moonSign,
                ascDeg,
                planets,
                unknownTime,
                birthSeed: daySeed + hours * 7 + mins
            };
        }

        function computeDailyForecast(natal, targetDateStr) {
            const [ty, tm, td] = targetDateStr.split('-').map(Number);
            const targetSeed = ty * 10000 + tm * 100 + td + natal.sunSign.id * 37 + natal.ascSign.id * 13 + (natal.moonSign.id * 5);

            const work = Math.round(58 + seededRandom(targetSeed + 1) * 39);
            const love = Math.round(55 + seededRandom(targetSeed + 2) * 42);
            const health = Math.round(62 + seededRandom(targetSeed + 3) * 35);
            const luck = Math.round(52 + seededRandom(targetSeed + 4) * 45);
            const overall = Math.round((work + love + health + luck) / 4);

            const n1 = Math.floor(seededRandom(targetSeed + 11) * 9) + 1;
            const n2 = Math.floor(seededRandom(targetSeed + 12) * 18) + 10;
            const n3 = Math.floor(seededRandom(targetSeed + 13) * 20) + 28;

            const startHour = 9 + Math.floor(seededRandom(targetSeed + 14) * 9);
            const pool = ASPECTS_POOL[currentLang];
            const calendarDay = readingCalendarDate(targetDateStr).getTime();
            const ordinal = Number.isFinite(calendarDay) ? calendarDay / 86400000 : 0;
            const repeatedProfileSeed = natal.birthSeed + natal.ascSign.id * 31;
            const rotationIndex = (length, topicOffset) => {
                const startingIndex = Math.floor(seededRandom(repeatedProfileSeed + topicOffset) * length);
                return ((ordinal + startingIndex) % length + length) % length;
            };
            const themeText = (category, offset) => {
                const entries = DAILY_THEME_DESCRIPTIONS[category];
                return entries[rotationIndex(entries.length, offset)][currentLang];
            };
            const idx1 = rotationIndex(pool.length, 15);
            const idx2 = (idx1 + Math.floor(pool.length / 2)) % pool.length;

            return {
                work, love, health, luck, overall,
                workText: themeText('work', 101),
                loveText: themeText('love', 202),
                healthText: themeText('health', 303),
                luckText: themeText('luck', 404),
                karmicNodeAdvice: pickVariant(KARMIC_NODE_VARIANTS[currentLang], natal.birthSeed + 707),
                seventhHouseAdvice: pickVariant(SEVENTH_HOUSE_VARIANTS[currentLang], natal.birthSeed + 808),
                luckyNumbers: `${n1}, ${n2}, ${n3}`,
                luckyHours: `${String(startHour).padStart(2, '0')}:00 – ${String(startHour + 3).padStart(2, '0')}:00`,
                aspects: [pool[idx1], pool[idx2]]
            };
        }

        // =========================================================================
        // 7. RENDER VISUAL NATAL WHEEL (SVG)
        // =========================================================================
        function renderNatalWheelSVG(svgId, natalA, natalB = null) {
            const svg = document.getElementById(svgId);
            if (!svg) return;

            const cx = 250, cy = 250;
            const rOuter = 230, rZodiacInner = 192, rHouseInner = 115, rCenter = 52;
            const rotationOffset = 180 - natalA.ascDeg;

            let html = `
                <defs>
                    <radialGradient id="wheelBg_${svgId}" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.9"/>
                        <stop offset="100%" stop-color="#070913" stop-opacity="0.98"/>
                    </radialGradient>
                </defs>
                <circle cx="${cx}" cy="${cy}" r="${rOuter}" fill="url(#wheelBg_${svgId})" stroke="#f59e0b" stroke-width="2" stroke-opacity="0.6"/>
                <circle cx="${cx}" cy="${cy}" r="${rZodiacInner}" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.18"/>
                <circle cx="${cx}" cy="${cy}" r="${rHouseInner}" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.15"/>
                <circle cx="${cx}" cy="${cy}" r="${rCenter}" fill="#0d1126" stroke="#fbbf24" stroke-width="1.2" stroke-opacity="0.4"/>
            `;

            for (let i = 0; i < 12; i++) {
                const startDeg = (i * 30 + rotationOffset) % 360;
                const midDeg = (startDeg + 15) % 360;
                const rad1 = (startDeg * Math.PI) / 180;
                const radMid = (midDeg * Math.PI) / 180;

                const x1 = cx + rZodiacInner * Math.cos(rad1);
                const y1 = cy - rZodiacInner * Math.sin(rad1);
                const x2 = cx + rOuter * Math.cos(rad1);
                const y2 = cy - rOuter * Math.sin(rad1);

                html += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#fbbf24" stroke-opacity="0.3" stroke-width="1"/>`;

                const tx = cx + ((rOuter + rZodiacInner) / 2) * Math.cos(radMid);
                const ty = cy - ((rOuter + rZodiacInner) / 2) * Math.sin(radMid);
                html += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" fill="#fde68a" font-size="16" text-anchor="middle" dominant-baseline="central">${ZODIAC_SIGNS[i].symbol}</text>`;
            }

            for (let h = 0; h < 12; h++) {
                const houseDeg = 180 + h * 30;
                const rad = (houseDeg * Math.PI) / 180;
                const x1 = cx + rCenter * Math.cos(rad);
                const y1 = cy - rCenter * Math.sin(rad);
                const x2 = cx + rZodiacInner * Math.cos(rad);
                const y2 = cy - rZodiacInner * Math.sin(rad);
                const isMainAxis = (h === 0 || h === 3 || h === 6 || h === 9);

                html += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${isMainAxis ? '#fbbf24' : '#94a3b8'}" stroke-opacity="${isMainAxis ? '0.65' : '0.2'}" stroke-width="${isMainAxis ? '1.6' : '0.9'}"/>`;

                const midRad = ((houseDeg + 15) * Math.PI) / 180;
                const hx = cx + ((rHouseInner + rCenter) / 2) * Math.cos(midRad);
                const hy = cy - ((rHouseInner + rCenter) / 2) * Math.sin(midRad);
                html += `<text x="${hx.toFixed(1)}" y="${hy.toFixed(1)}" fill="#64748b" font-size="10" text-anchor="middle" dominant-baseline="central">${h + 1}</text>`;
            }

            html += `
                <text x="${cx - rZodiacInner + 14}" y="${cy - 6}" fill="#fbbf24" font-size="10" font-weight="bold">AC</text>
                <text x="${cx + rZodiacInner - 26}" y="${cy - 6}" fill="#fbbf24" font-size="10" font-weight="bold">DC</text>
                <text x="${cx + 5}" y="${cy - rZodiacInner + 16}" fill="#fbbf24" font-size="10" font-weight="bold">MC</text>
                <text x="${cx + 5}" y="${cy + rZodiacInner - 10}" fill="#fbbf24" font-size="10" font-weight="bold">IC</text>
            `;

            const coordsA = natalA.planets.map(p => {
                const a = ((p.deg + rotationOffset) * Math.PI) / 180;
                const rP = natalB ? 132 : 154;
                return {
                    ...p,
                    x: cx + rP * Math.cos(a),
                    y: cy - rP * Math.sin(a)
                };
            });

            for (let i = 0; i < coordsA.length; i++) {
                for (let j = i + 1; j < coordsA.length; j++) {
                    const diff = Math.abs(coordsA[i].deg - coordsA[j].deg) % 360;
                    const angle = diff > 180 ? 360 - diff : diff;
                    if (Math.abs(angle - 120) < 12 || Math.abs(angle - 60) < 10) {
                        html += `<line x1="${coordsA[i].x.toFixed(1)}" y1="${coordsA[i].y.toFixed(1)}" x2="${coordsA[j].x.toFixed(1)}" y2="${coordsA[j].y.toFixed(1)}" stroke="#34d399" stroke-opacity="0.35" stroke-width="1.1"/>`;
                    } else if (Math.abs(angle - 90) < 10 || Math.abs(angle - 180) < 12) {
                        html += `<line x1="${coordsA[i].x.toFixed(1)}" y1="${coordsA[i].y.toFixed(1)}" x2="${coordsA[j].x.toFixed(1)}" y2="${coordsA[j].y.toFixed(1)}" stroke="#fb7185" stroke-opacity="0.35" stroke-width="1.1" stroke-dasharray="3 3"/>`;
                    }
                }
            }

            coordsA.forEach(p => {
                html += `
                    <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="12" fill="#0d1126" stroke="${p.color}" stroke-width="1.5"/>
                    <text x="${p.x.toFixed(1)}" y="${p.y.toFixed(1)}" fill="${p.color}" font-size="13" text-anchor="middle" dominant-baseline="central">${p.symbol}</text>
                `;
            });

            if (natalB) {
                natalB.planets.forEach(p => {
                    const a = ((p.deg + rotationOffset) * Math.PI) / 180;
                    const rB = 172;
                    const bx = cx + rB * Math.cos(a);
                    const by = cy - rB * Math.sin(a);
                    html += `
                        <circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="11" fill="#2a0f24" stroke="#f472b6" stroke-width="1.4"/>
                        <text x="${bx.toFixed(1)}" y="${by.toFixed(1)}" fill="#f9a8d4" font-size="12" text-anchor="middle" dominant-baseline="central">${p.symbol}</text>
                    `;
                });
            }

            html += `<text x="${cx}" y="${cy}" fill="#fbbf24" font-size="16" text-anchor="middle" dominant-baseline="central">✦</text>`;

            svg.innerHTML = html;
        }

        // =========================================================================
        // 8. RENDER DAILY HOROSCOPE & SYNASTRY
        // =========================================================================
        function runCalculation(showNotification = false) {
            const s = t();
            const nameVal = document.getElementById('user-name').value.trim();
            const birthDate = document.getElementById('birth-date').value || '1990-05-15';
            const birthTime = document.getElementById('birth-time').value || '12:00';
            const unknownTime = document.getElementById('unknown-time').checked;
            const targetDate = document.getElementById('target-date').value || getLocalDay();
            const cityObj = selectedLocations.main;

            const natal = calculateNatalChart(birthDate, birthTime, cityObj, unknownTime);
            const forecast = computeDailyForecast(natal, targetDate);

            const sunName = natal.sunSign.name[currentLang];
            const ascName = natal.ascSign.name[currentLang];
            const moonName = natal.moonSign.name[currentLang];

            document.getElementById('daily-result-kind').textContent = dailyExample ? s.dailyResultExample : s.dailyResultLive;
            document.getElementById('profile-greeting').textContent = nameVal
                ? s.profileGreetingNamed(nameVal)
                : s.profileGreetingDefault;
            document.getElementById('zodiac-element-badge').textContent = `${s.elementPrefix}: ${natal.sunSign.element[currentLang]}`;
            document.getElementById('sun-sign-symbol').textContent = natal.sunSign.symbol;
            document.getElementById('sun-sign-title').textContent = sunName;
            document.getElementById('sun-sign-dates').textContent = natal.sunSign.dates[currentLang];
            document.getElementById('ascendant-value').textContent = unknownTime
                ? s.unknownHourValue
                : `${ascName} ${natal.ascSign.symbol}`;
            document.getElementById('natal-moon-value').textContent = `${moonName} ${natal.moonSign.symbol}`;

            document.getElementById('overall-score').textContent = `${forecast.overall}/100`;
            document.getElementById('overall-bar').style.width = `${forecast.overall}%`;
            document.getElementById('overall-verdict').textContent = forecast.overall >= 80
                ? s.verdictHigh
                : (forecast.overall >= 68 ? s.verdictMed : s.verdictLow);
            document.getElementById('lucky-numbers').textContent = forecast.luckyNumbers;
            document.getElementById('lucky-color').textContent = natal.sunSign.color[currentLang].split(' ')[0];
            document.getElementById('lucky-hours').textContent = forecast.luckyHours;

            document.getElementById('score-work').textContent = `${forecast.work}/100`;
            document.getElementById('bar-work').style.width = `${forecast.work}%`;
            document.getElementById('text-work').textContent = forecast.workText;
            document.getElementById('badge-work').textContent = forecast.work >= 75 ? s.badgeHigh : s.badgeMod;

            document.getElementById('score-love').textContent = `${forecast.love}/100`;
            document.getElementById('bar-love').style.width = `${forecast.love}%`;
            document.getElementById('text-love').textContent = forecast.loveText;
            document.getElementById('badge-love').textContent = forecast.love >= 75 ? s.badgeStrong : s.badgeSteady;

            document.getElementById('score-health').textContent = `${forecast.health}/100`;
            document.getElementById('bar-health').style.width = `${forecast.health}%`;
            document.getElementById('text-health').textContent = forecast.healthText;
            document.getElementById('badge-health').textContent = forecast.health >= 75 ? s.badgeExc : s.badgeGood;

            document.getElementById('score-luck').textContent = `${forecast.luck}/100`;
            document.getElementById('bar-luck').style.width = `${forecast.luck}%`;
            document.getElementById('text-luck').textContent = forecast.luckText;
            document.getElementById('badge-luck').textContent = forecast.luck >= 75 ? s.badgePronounced : s.badgeMod;

            document.getElementById('transit-summary-pill').textContent = `${s.keyTransitPrefix}: ${forecast.aspects[0].title}`;
            document.getElementById('detailed-daily-narrative').innerHTML = `
                <p>${s.narrativeP1(sunName, natal.sunSign.ruler[currentLang])}</p>
                <p>${s.narrativeP2(moonName)}</p>
            `;

            document.getElementById('active-aspects-list').innerHTML = forecast.aspects.map(a => `
                <div class="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <div class="flex items-center justify-between mb-1">
                        <span class="daily-aspect-title text-xs font-bold text-amber-300">${a.title}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">${a.type}</span>
                    </div>
                    <p class="text-[11px] text-slate-300">${a.desc}</p>
                </div>
            `).join('');

            document.getElementById('karmic-node-text').textContent = forecast.karmicNodeAdvice;
            document.getElementById('seventh-house-text').textContent = forecast.seventhHouseAdvice;

            renderNatalWheelSVG('natal-wheel-svg', natal);

            if (showNotification) {
                showToast(s.toastCalcSuccess(sunName), 'success');
            }
        }

        const synastryAspectTypes = [
            { key: 'conjunction', angle: 0, orb: 7 },
            { key: 'sextile', angle: 60, orb: 5 },
            { key: 'square', angle: 90, orb: 6 },
            { key: 'trine', angle: 120, orb: 7 },
            { key: 'opposition', angle: 180, orb: 7 }
        ];

        // Each ordered pair compares the first person's body with the second person's body.
        const synastryPairs = {
            emotion: [['MO', 'MO'], ['MO', 'VE'], ['VE', 'MO'], ['MO', 'SA'], ['SA', 'MO']],
            passion: [['VE', 'VE'], ['VE', 'MA'], ['MA', 'VE'], ['VE', 'JU'], ['JU', 'VE']],
            comm: [['ME', 'ME'], ['ME', 'SO'], ['SO', 'ME'], ['ME', 'MA'], ['MA', 'ME']],
            karma: [['SA', 'SA'], ['JU', 'JU'], ['JU', 'SA'], ['SA', 'JU'], ['SO', 'SA'], ['SA', 'SO']]
        };

        function compareSynastryPairs(natal1, natal2) {
            const positionsA = new Map(natal1.planets.map(body => [body.key, body.deg]));
            const positionsB = new Map(natal2.planets.map(body => [body.key, body.deg]));

            return Object.entries(synastryPairs).map(([theme, pairs]) => {
                const comparisons = pairs.map(([bodyA, bodyB]) => {
                    const distance = Math.abs(positionsA.get(bodyA) - positionsB.get(bodyB)) % 360;
                    const separation = Math.min(distance, 360 - distance);
                    const type = synastryAspectTypes.reduce((nearest, candidate) => (
                        Math.abs(separation - candidate.angle) < Math.abs(separation - nearest.angle)
                            ? candidate
                            : nearest
                    ));
                    const deviation = Math.abs(separation - type.angle);
                    return { bodyA, bodyB, separation, type, deviation };
                });
                const matches = comparisons.filter(pair => pair.deviation <= pair.type.orb);
                matches.sort((a, b) => a.deviation - b.deviation);
                const nearest = comparisons.reduce((a, b) => (
                    (a.deviation - a.type.orb) <= (b.deviation - b.type.orb) ? a : b
                ));
                return { theme, matches, nearest };
            });
        }

        function synastryText(tag, classes, text) {
            const item = document.createElement(tag);
            item.className = classes;
            item.textContent = text;
            return item;
        }

        function renderSynastryPair(pair) {
            const s = t();
            const [nameA, meaningA] = s.synBodies[pair.bodyA];
            const [nameB, meaningB] = s.synBodies[pair.bodyB];
            const row = document.createElement('li');
            row.className = 'p-3 rounded-lg bg-white/5 border border-white/10 space-y-1';
            row.append(
                synastryText('p', 'font-semibold text-pink-200', `A: ${nameA} ↔ B: ${nameB}`),
                synastryText('p', 'text-xs text-slate-300',
                    `${s.synAngle} ${pair.separation}° · ${s.synDeviation} ${pair.deviation}° · ${s.synOrb} ±${pair.type.orb}°`),
                synastryText('p', 'text-xs text-slate-300',
                    `${s.synTopic} — ${nameA}: ${meaningA} · ${nameB}: ${meaningB}`)
            );
            return row;
        }

        function renderSynastryDetails(natal1, natal2) {
            const s = t();
            const comparisons = compareSynastryPairs(natal1, natal2);
            const total = comparisons.reduce((count, group) => count + group.matches.length, 0);
            document.getElementById('syn-aspect-count').textContent = String(total);
            document.getElementById('syn-no-time').hidden = !natal1.unknownTime && !natal2.unknownTime;

            const cards = comparisons.map(({ theme, matches, nearest }) => {
                const copy = s.synThemes[theme];
                const card = document.createElement('article');
                card.className = 'glass-card rounded-2xl p-4 sm:p-5 space-y-3 text-sm text-slate-200 leading-relaxed';
                card.append(synastryText('h4', 'font-serif text-lg font-bold text-white', copy.title));

                if (!matches.length) {
                    const pairList = document.createElement('ul');
                    pairList.append(renderSynastryPair(nearest));
                    card.append(
                        synastryText('p', 'text-slate-300', s.synNoMatch),
                        synastryText('h5', 'text-sm font-semibold text-white',
                            `${s.synNearest} · ${s.synAspects[nearest.type.key]} (${nearest.type.angle}°)`),
                        pairList,
                        synastryText('p', 'text-slate-200', copy.fallback)
                    );
                    return card;
                }

                const byType = new Map();
                for (const match of matches) {
                    const type = match.type.key;
                    if (!byType.has(type)) byType.set(type, []);
                    byType.get(type).push(match);
                }
                for (const [type, pairs] of byType) {
                    const block = document.createElement('div');
                    block.className = 'space-y-2 pt-3 border-t border-white/10';
                    const pairList = document.createElement('ul');
                    pairList.className = 'space-y-2';
                    pairList.append(...pairs.map(renderSynastryPair));
                    block.append(
                        synastryText('h5', 'text-sm font-semibold text-white',
                            `${s.synAspects[type]} (${pairs[0].type.angle}°)`),
                        pairList,
                        synastryText('p', 'text-slate-200', copy[type])
                    );
                    card.append(block);
                }
                return card;
            });
            document.getElementById('syn-aspect-groups').replaceChildren(...cards);
        }

        function computeAndRenderSynastry() {
            const s = t();
            const name1 = document.getElementById('syn-name-1').value.trim() || (currentLang === 'en' ? 'Person A' : 'Osoba A');
            const date1 = document.getElementById('syn-date-1').value || '1990-05-15';
            const time1 = document.getElementById('syn-time-1').value;
            const city1 = selectedLocations.syn1;

            const name2 = document.getElementById('syn-name-2').value.trim() || (currentLang === 'en' ? 'Person B' : 'Osoba B');
            const date2 = document.getElementById('syn-date-2').value || '1992-09-21';
            const time2 = document.getElementById('syn-time-2').value;
            const city2 = selectedLocations.syn2;

            const natal1 = calculateNatalChart(date1, time1, city1, !time1);
            const natal2 = calculateNatalChart(date2, time2, city2, !time2);


            const s1 = natal1.sunSign.name[currentLang];
            const s2 = natal2.sunSign.name[currentLang];

            document.getElementById('syn-result-kind').textContent = synastryExample ? s.synResultExample : s.synResultLive;
            document.getElementById('synastry-pair-title').textContent = `${name1} (${s1} ${natal1.sunSign.symbol}) & ${name2} (${s2} ${natal2.sunSign.symbol})`;
            document.getElementById('synastry-pair-subtitle').textContent = s.synSubtitle(
                natal1.sunSign.element[currentLang],
                natal2.sunSign.element[currentLang],
                time1 ? natal1.ascSign.name[currentLang] : s.unknownHourValue,
                time2 ? natal2.ascSign.name[currentLang] : s.unknownHourValue
            );
            renderSynastryDetails(natal1, natal2);

            renderNatalWheelSVG('synastry-wheel-svg', natal1, natal2);
        }

        function initZodiacGrid() {
            const grid = document.getElementById('zodiac-grid');
            if (!grid) return;
            const today = new Date();
            const daySeed = today.getFullYear() * 1000 + (today.getMonth() + 1) * 40 + today.getDate();

            grid.innerHTML = ZODIAC_SIGNS.map(sign => {
                const score = Math.round(64 + seededRandom(daySeed + sign.id * 19) * 32);
                return `
                    <button type="button" onclick="selectQuickSign(${sign.id})" class="glass-card glass-card-hover rounded-xl p-3 sm:p-3.5 text-left flex flex-col justify-between group">
                        <div class="flex items-center justify-between">
                            <span class="text-xl sm:text-2xl group-hover:scale-110 transition">${sign.symbol}</span>
                            <span class="text-xs font-bold text-amber-300">${score}/100</span>
                        </div>
                        <div class="mt-2">
                            <span class="font-semibold text-xs sm:text-sm text-white block">${sign.name[currentLang]}</span>
                            <span class="text-[10px] text-slate-400 block">${sign.dates[currentLang]}</span>
                        </div>
                    </button>
                `;
            }).join('');
        }

        function selectQuickSign(signId) {
            const sign = ZODIAC_SIGNS[signId];
            if (!sign) return;
            const m = String(sign.startMonth).padStart(2, '0');
            const d = String(sign.startDay + 2).padStart(2, '0');
            document.getElementById('birth-date').value = `1992-${m}-${d}`;
            dailyExample = true;
            birthEditorOpen = true;
            updateBirthEditor();
            calculateDailyReading(true);
            switchMainView('daily');
        }

        function showToast(message, type = 'info') {
            const container = document.getElementById('toast-container');
            if (!container) return;
            const colors = {
                success: 'border-emerald-500/40 bg-cosmic-900/95 text-emerald-200',
                error: 'border-rose-500/40 bg-cosmic-900/95 text-rose-200',
                info: 'border-amber-500/40 bg-cosmic-900/95 text-amber-200'
            };
            const toast = document.createElement('div');
            toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
            toast.className = `pointer-events-auto px-4 py-3 rounded-xl border text-xs font-medium shadow-xl transition-all duration-300 ${colors[type] || colors.info}`;
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3400);
        }

        // =========================================================================
        // 9. INITIALIZATION
        // =========================================================================
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('current-year').textContent = new Date().getFullYear();

            try {
                const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
                if (savedLang === 'sr' || savedLang === 'en') {
                    currentLang = savedLang;
                }
            } catch (e) {}

            populateCitySelects();
            document.getElementById('target-date').value = getLocalDay();
            restoreBirthProfile();

            document.getElementById('unknown-time')?.addEventListener('change', (e) => {
                document.getElementById('birth-time').disabled = e.target.checked;
            });

            document.getElementById('natal-form').addEventListener('submit', (event) => {
                event.preventDefault();
                dailyExample = false;
                calculateDailyReading(true);
            });

            for (const [target, id] of Object.entries(cityFieldIds)) {
                document.getElementById(id).addEventListener('input', () => selectCity(target));
            }
            document.getElementById('btn-save-profile').addEventListener('click', saveBirthProfile);
            document.getElementById('btn-clear-profile').addEventListener('click', clearBirthProfile);
            document.getElementById('btn-profile-details').addEventListener('click', toggleBirthEditor);
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden && savedProfileUsable && !birthEditorOpen &&
                    document.getElementById('target-date').value !== getLocalDay()) showSavedProfileToday();
            });

            document.getElementById('btn-copy-horoscope').addEventListener('click', () => {
                const title = document.getElementById('sun-sign-title').textContent;
                const score = document.getElementById('overall-score').textContent;
                const text = document.getElementById('detailed-daily-narrative').innerText;
                const date = document.getElementById('profile-reading-date').textContent;
                const themes = ['work', 'love', 'health', 'luck'].map((key) =>
                    `${document.getElementById(`card-${key}-title`).textContent}\n${document.getElementById(`text-${key}`).textContent}`);
                const fullText = [`ASTRALIS — ${title} (${score})`, date, ...themes, text].join('\n\n');
                const ta = document.createElement('textarea');
                ta.value = fullText;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                showToast(t().toastCopied, 'success');
            });


            document.getElementById('synastry-form').addEventListener('submit', (event) => {
                event.preventDefault();
                synastryExample = false;
                if (calculateSynastryReading(true)) showToast(t().toastSynReady, 'success');
            });

            document.getElementById('btn-copy-my-data-to-synastry').addEventListener('click', () => {
                if (!selectCity('main')) {
                    showToast(t().cityError, 'error');
                    return;
                }

                document.getElementById('syn-name-1').value = document.getElementById('user-name').value;
                document.getElementById('syn-date-1').value = document.getElementById('birth-date').value;
                document.getElementById('syn-time-1').value = document.getElementById('unknown-time').checked
                    ? ''
                    : document.getElementById('birth-time').value;
                document.getElementById('syn-city-input-1').value = selectedLocations.main.label;
                synastryExample = dailyExample;
                calculateSynastryReading();
                showToast(t().toastDataTransferred, 'info');
            });

            setLanguage(currentLang, false);
        });
