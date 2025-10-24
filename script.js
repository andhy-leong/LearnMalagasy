const courseData = [
    {
        level: 1,
        title: "L'Alphabet",
        lesson: {
            title: "Leçon 1: L'alphabet malgache",
            prompts: [
                { type: 'text', content: "L'alphabet malgache est très similaire au français, mais plus simple !" },
                { type: 'text', content: "Il contient 21 lettres :<br><strong>A, B, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, V, Y, Z</strong>" },
                { type: 'text', content: "Les lettres <strong>C, Q, U, W, X</strong> n'existent pas dans l'alphabet officiel. C'est facile à retenir !" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 1",
            questions: [
                { prompt: "Parmi les lettres suivantes, lesquelles n'existent PAS dans l'alphabet malgache ?", options: ["A, B, C", "Q, U, W", "D, E, F", "X, Y, Z"], answer: "Q, U, W" },
                { prompt: "Quelle lettre fait partie de l'alphabet malgache ?", options: ["C", "W", "Q", "J"], answer: "J" },
                { prompt: "Quelle lettre n'est PAS dans l'alphabet malgache ?", options: ["A", "C", "D", "F"], answer: "C" },
                { prompt: "Quelle lettre fait partie de l'alphabet malgache ?", options: ["W", "X", "V", "Q"], answer: "V" },
                { prompt: "Combien de lettres y a-t-il dans l'alphabet malgache ?", options: ["26", "21", "25", "20"], answer: "21" },
                { prompt: "Laquelle de ces affirmations est vraie ?", options: ["L'alphabet malgache utilise la lettre W", "Il y a 26 lettres comme en français", "Les lettres C et Q sont absentes", "La lettre U est essentielle"], answer: "Les lettres C et Q sont absentes" }
            ]
        }
    },
    {
        level: 2,
        title: "Pronoms Personnels",
        lesson: {
            title: "Leçon 2: Les pronoms personnels",
            prompts: [
                { type: 'word', malagasy: "Izaho / Aho", french: "Je / Moi" },
                { type: 'word', malagasy: "Ianao", french: "Tu / Toi" },
                { type: 'word', malagasy: "Izy", french: "Il / Elle" },
                { type: 'word', malagasy: "Isika", french: "Nous (quand on inclut l'interlocuteur)" },
                { type: 'word', malagasy: "Izahay", french: "Nous (quand on exclut l'interlocuteur)" },
                { type: 'word', malagasy: "Ianareo", french: "Vous" },
                { type: 'word', malagasy: "Izy ireo", french: "Ils / Elles" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 2",
            questions: [
                { prompt: "Comment dit-on 'Je' ou 'Moi' ?", options: ["Ianao", "Izy", "Izaho", "Isika"], answer: "Izaho" },
                { prompt: "Que signifie 'Ianareo' ?", options: ["Ils / Elles", "Vous", "Nous", "Tu / Toi"], answer: "Vous" },
                { prompt: "Comment dit-on 'Il' ou 'Elle' ?", options: ["Ianao", "Izy", "Isika", "Izaho"], answer: "Izy" },
                { prompt: "Que signifie 'Ianao' ?", options: ["Moi", "Vous", "Il/Elle", "Toi"], answer: "Toi" },
                { prompt: "Pour dire 'Nous' (en incluant la personne à qui l'on parle), on utilise...", options: ["Izahay", "Izy ireo", "Isika", "Ianareo"], answer: "Isika" },
                { prompt: "Comment dit-on 'Ils' ou 'Elles' ?", options: ["Izaho", "Izahay", "Ianao", "Izy ireo"], answer: "Izy ireo" }
            ]
        }
    },
    {
        level: 3,
        title: "Salutations",
        lesson: {
            title: "Leçon 3: Formules de base",
            prompts: [
                { type: 'word', malagasy: "Manao ahoana", french: "Bonjour (Comment ça va ?)" },
                { type: 'word', malagasy: "Salama", french: "Salut (plus informel)" },
                { type: 'word', malagasy: "Veloma", french: "Au revoir" },
                { type: 'word', malagasy: "Misaotra", french: "Merci" },
                { type: 'word', malagasy: "Azafady", french: "S'il vous plaît / Excusez-moi" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 3",
            questions: [
                { prompt: "Pour dire 'Merci', on utilise...", options: ["Veloma", "Salama", "Azafady", "Misaotra"], answer: "Misaotra" },
                { prompt: "Que signifie 'Veloma' ?", options: ["Bonjour", "Au revoir", "S'il vous plaît", "Merci"], answer: "Au revoir" },
                { prompt: "La salutation la plus courante pour 'Bonjour' est...", options: ["Veloma", "Salama", "Manao ahoana", "Azafady"], answer: "Manao ahoana" },
                { prompt: "Que signifie 'Azafady' ?", options: ["Merci", "Au revoir", "Bonjour", "S'il vous plaît"], answer: "S'il vous plaît" },
                { prompt: "Quelle est la manière la plus informelle de dire 'Salut' ?", options: ["Manao ahoana", "Salama", "Veloma", "Misaotra"], answer: "Salama" },
                { prompt: "Si quelqu'un vous dit 'Manao ahoana', il vous dit...", options: ["Au revoir", "Merci", "S'il vous plaît", "Bonjour"], answer: "Bonjour" }
            ]
        }
    },
    {
        level: 4,
        title: "Verbes Essentiels",
        lesson: {
            title: "Leçon 4: Verbes d'action",
            prompts: [
                { type: 'word', malagasy: "Miasa", french: "Travailler" },
                { type: 'word', malagasy: "Mihinana", french: "Manger" },
                { type: 'word', malagasy: "Miteny", french: "Parler" },
                { type: 'word', malagasy: "Mandeha", french: "Aller / Marcher" },
                { type: 'word', malagasy: "Matory", french: "Dormir" },
                { type: 'word', malagasy: "Mifoha", french: "Se lever" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 4",
            questions: [
                { prompt: "Le verbe 'Manger' se dit...", options: ["Miasa", "Mihinana", "Matory", "Miteny"], answer: "Mihinana" },
                { prompt: "Que veut dire 'Mandeha' ?", options: ["Dormir", "Parler", "Travailler", "Aller / Marcher"], answer: "Aller / Marcher" },
                { prompt: "Comment dit-on 'Dormir' ?", options: ["Mifoha", "Miasa", "Matory", "Miteny"], answer: "Matory" },
                { prompt: "Que signifie 'Miasa' ?", options: ["Parler", "Se lever", "Travailler", "Manger"], answer: "Travailler" },
                { prompt: "Le contraire de 'Matory' (Dormir) est...", options: ["Miteny", "Mandeha", "Mifoha", "Miasa"], answer: "Mifoha" },
                { prompt: "Le verbe pour 'Parler' est...", options: ["Miteny", "Mihinana", "Mandeha", "Matory"], answer: "Miteny" }
            ]
        }
    },
    {
        level: 5,
        title: "Structure de Phrase",
        lesson: {
            title: "Leçon 5: Verbe-Objet-Sujet (VOS)",
            prompts: [
                { type: 'text', content: "La structure des phrases simples en malgache est souvent inversée par rapport au français." },
                { type: 'text', content: "En français : Sujet - Verbe - Objet (SVO)<br><strong>Je mange du riz.</strong>" },
                { type: 'text', content: "En malgache : Verbe - Objet - Sujet (VOS)<br><strong>Mihinana vary aho.</strong>" },
                { type: 'text', content: "Décortiquons :<br><strong>Mihinana</strong> (Verbe: Manger)<br><strong>vary</strong> (Objet: riz)<br><strong>aho</strong> (Sujet: je)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 5",
            questions: [
                { prompt: "Quelle est la structure de phrase la plus courante en malgache ?", options: ["Sujet-Verbe-Objet (SVO)", "Verbe-Objet-Sujet (VOS)", "Objet-Sujet-Verbe (OSV)"], answer: "Verbe-Objet-Sujet (VOS)" },
                { prompt: "Comment traduiriez-vous 'Le chien boit de l'eau' (Alika, Misotro, Rano) dans le bon ordre ?", options: ["Alika misotro rano", "Rano misotro alika", "Misotro rano ny alika"], answer: "Misotro rano ny alika" },
                { prompt: "Dans la phrase 'Mihinana vary aho', quel est le verbe ?", options: ["aho", "vary", "Mihinana", "Je"], answer: "Mihinana" },
                { prompt: "Dans la même phrase 'Mihinana vary aho', quel est le sujet ?", options: ["vary", "Mihinana", "aho", "riz"], answer: "aho" },
                { prompt: "Comment dire 'Je parle malgache' (Miteny, Malagasy, Aho) ?", options: ["Aho miteny malagasy", "Malagasy miteny aho", "Miteny malagasy aho", "Aho malagasy miteny"], answer: "Miteny malagasy aho" },
                { prompt: "La structure VOS signifie que le ______ vient en premier.", options: ["Sujet", "Objet", "Verbe", "Mot"], answer: "Verbe" }
            ]
        }
    },
    {
        level: 6,
        title: "Les Nombres",
        lesson: {
            title: "Leçon 6: Compter de 1 à 10",
            prompts: [
                { type: 'word', malagasy: "Iray", french: "Un (1)" }, { type: 'word', malagasy: "Roa", french: "Deux (2)" },
                { type: 'word', malagasy: "Telo", french: "Trois (3)" }, { type: 'word', malagasy: "Efatra", french: "Quatre (4)" },
                { type: 'word', malagasy: "Dimy", french: "Cinq (5)" }, { type: 'word', malagasy: "Enina", french: "Six (6)" },
                { type: 'word', malagasy: "Fito", french: "Sept (7)" }, { type: 'word', malagasy: "Valo", french: "Huit (8)" },
                { type: 'word', malagasy: "Sivy", french: "Neuf (9)" }, { type: 'word', malagasy: "Folo", french: "Dix (10)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 6",
            questions: [
                { prompt: "Comment dit-on 'Huit' ?", options: ["Fito", "Valo", "Sivy", "Folo"], answer: "Valo" },
                { prompt: "Que signifie 'Telo' ?", options: ["Un", "Deux", "Trois", "Quatre"], answer: "Trois" },
                { prompt: "Comment dit-on 'Cinq' ?", options: ["Efatra", "Dimy", "Enina", "Fito"], answer: "Dimy" },
                { prompt: "Que signifie 'Folo' ?", options: ["Neuf", "Dix", "Un", "Huit"], answer: "Dix" },
                { prompt: "Le chiffre '2' se dit...", options: ["Iray", "Roa", "Telo", "Efatra"], answer: "Roa" },
                { prompt: "Que signifie 'Fito' ?", options: ["Cinq", "Six", "Sept", "Huit"], answer: "Sept" }
            ]
        }
    },
    {
        level: 7,
        title: "Vocabulaire Quotidien",
        lesson: {
            title: "Leçon 7: Mots utiles",
            prompts: [
                { type: 'word', malagasy: "Anarana", french: "Nom" }, { type: 'word', malagasy: "Sekoly", french: "École" },
                { type: 'word', malagasy: "Tsena", french: "Marché" }, { type: 'word', malagasy: "Vola", french: "Argent" },
                { type: 'word', malagasy: "Boky", french: "Livre" }, { type: 'word', malagasy: "Tsy misy", french: "Il n'y a pas / De rien" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 7",
            questions: [
                { prompt: "Le mot pour 'Marché' est...", options: ["Sekoly", "Vola", "Tsena", "Boky"], answer: "Tsena" },
                { prompt: "Que veut dire 'Vola' ?", options: ["Livre", "Argent", "Nom", "École"], answer: "Argent" },
                { prompt: "Comment dit-on 'Livre' ?", options: ["Anarana", "Sekoly", "Boky", "Tsena"], answer: "Boky" },
                { prompt: "Que signifie 'Sekoly' ?", options: ["Argent", "Nom", "Marché", "École"], answer: "École" },
                { prompt: "'Anarana' est le mot pour...", options: ["Nom", "Livre", "De rien", "École"], answer: "Nom" },
                { prompt: "Pour dire 'Il n'y a pas' ou répondre 'De rien' à un merci, on peut utiliser...", options: ["Vola", "Tsena", "Tsy misy", "Anarana"], answer: "Tsy misy" }
            ]
        }
    },
    {
        level: 8,
        title: "Les Jours",
        lesson: {
            title: "Leçon 8: Les 7 jours de la semaine",
            prompts: [
                { type: 'word', malagasy: "Alatsinainy", french: "Lundi" }, { type: 'word', malagasy: "Talata", french: "Mardi" },
                { type: 'word', malagasy: "Alarobia", french: "Mercredi" }, { type: 'word', malagasy: "Alakamisy", french: "Jeudi" },
                { type: 'word', malagasy: "Zoma", french: "Vendredi" }, { type: 'word', malagasy: "Asabotsy", french: "Samedi" },
                { type: 'word', malagasy: "Alahady", french: "Dimanche" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 8",
            questions: [
                { prompt: "Comment dit-on 'Vendredi' ?", options: ["Alakamisy", "Zoma", "Asabotsy", "Alahady"], answer: "Zoma" },
                { prompt: "Que signifie 'Talata' ?", options: ["Lundi", "Mardi", "Mercredi", "Jeudi"], answer: "Mardi" },
                { prompt: "Comment dit-on 'Dimanche' ?", options: ["Zoma", "Asabotsy", "Alahady", "Alatsinainy"], answer: "Alahady" },
                { prompt: "Que signifie 'Alakamisy' ?", options: ["Lundi", "Mardi", "Mercredi", "Jeudi"], answer: "Jeudi" },
                { prompt: "Le premier jour de la semaine de travail est...", options: ["Alahady", "Asabotsy", "Talata", "Alatsinainy"], answer: "Alatsinainy" },
                { prompt: "Comment dit-on 'Mercredi' ?", options: ["Alarobia", "Talata", "Alakamisy", "Zoma"], answer: "Alarobia" }
            ]
        }
    },
    {level: 9,
        title: "Les Mois",
        lesson: {
            title: "Leçon 9: Les 12 mois de l'année",
            prompts: [
                { type: 'word', malagasy: "Janoary", french: "Janvier" }, { type: 'word', malagasy: "Febroary", french: "Février" },
                { type: 'word', malagasy: "Martsa", french: "Mars" }, { type: 'word', malagasy: "Aprily", french: "Avril" },
                { type: 'word', malagasy: "Mey", french: "Mai" }, { type: 'word', malagasy: "Jona", french: "Juin" },
                { type: 'word', malagasy: "Jolay", french: "Juillet" }, { type: 'word', malagasy: "Aogositra", french: "Août" },
                { type: 'word', malagasy: "Septambra", french: "Septembre" }, { type: 'word', malagasy: "Oktobra", french: "Octobre" },
                { type: 'word', malagasy: "Novambra", french: "Novembre" }, { type: 'word', malagasy: "Desambra", french: "Décembre" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 9",
            questions: [
                { prompt: "Comment dit-on 'Mars' ?", options: ["Mey", "Martsa", "Jona", "Jolay"], answer: "Martsa" },
                { prompt: "Que signifie 'Aogositra' ?", options: ["Juin", "Juillet", "Août", "Septembre"], answer: "Août" },
                { prompt: "Le premier mois de l'année est...", options: ["Desambra", "Janoary", "Febroary", "Martsa"], answer: "Janoary" },
                { prompt: "Que signifie 'Oktobra' ?", options: ["Septembre", "Octobre", "Novembre", "Décembre"], answer: "Octobre" },
                { prompt: "Comment dit-on 'Juin' ?", options: ["Mey", "Jona", "Jolay", "Aprily"], answer: "Jona" },
                { prompt: "Le dernier mois de l'année est...", options: ["Novambra", "Oktobra", "Septambra", "Desambra"], answer: "Desambra" }
            ]
        }
    },
    {
        level: 10,
        title: "Poser des Questions",
        lesson: {
            title: "Leçon 10: Mots Interrogatifs",
            prompts: [
                { type: 'word', malagasy: "Inona?", french: "Quoi / Quel ?" },
                { type: 'word', malagasy: "Iza?", french: "Qui ?" },
                { type: 'word', malagasy: "Aiza?", french: "Où ?" },
                { type: 'word', malagasy: "Oviana?", french: "Quand ?" },
                { type: 'text', content: "Exemple :<br><strong>Aiza ny tsena ?</strong><br>(Où est le marché ?)"}
            ]
        },
        quiz: {
            title: "Quiz du Niveau 10",
            questions: [
                { prompt: "Pour demander 'Où est l'école ?', on dirait...", options: ["Inona ny sekoly ?", "Iza ny sekoly ?", "Aiza ny sekoly ?", "Oviana ny sekoly ?"], answer: "Aiza ny sekoly ?" },
                { prompt: "Que signifie le mot 'Iza ?'", options: ["Quand ?", "Où ?", "Quoi ?", "Qui ?"], answer: "Qui ?" },
                { prompt: "Quel mot interrogatif utiliseriez-vous pour demander le nom de quelqu'un ?", options: ["Inona", "Iza", "Aiza", "Oviana"], answer: "Iza" },
                { prompt: "Comment demande-t-on 'Quand ?'", options: ["Oviana", "Aiza", "Iza", "Inona"], answer: "Oviana" },
                { prompt: "'Inona ity ?' signifie...", options: ["Qui est-ce ?", "Où est-ce ?", "Qu'est-ce que c'est ?", "Quand est-ce ?"], answer: "Qu'est-ce que c'est ?" }
            ]
        }
    },
    {
        level: 11,
        title: "Le Passé et le Futur",
        lesson: {
            title: "Leçon 11: Les temps des verbes",
            prompts: [
                { type: 'text', content: "En malgache, les temps se forment en changeant la première lettre du verbe." },
                { type: 'text', content: "Présent : commence par <strong>M-</strong><br>Exemple : <strong>M</strong>iasa (Travailler)" },
                { type: 'text', content: "Passé : remplace le M- par <strong>N-</strong><br>Exemple : <strong>N</strong>iasa (A travaillé)" },
                { type: 'text', content: "Futur : remplace le M- par <strong>H-</strong><br>Exemple : <strong>H</strong>iasa (Travaillera)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 11",
            questions: [
                { prompt: "La forme au futur du verbe 'Mihinana' (Manger) est...", options: ["Nihinana", "Hihinana", "Mihinana", "Ihinana"], answer: "Hihinana" },
                { prompt: "Le préfixe 'N-' au début d'un verbe indique...", options: ["Le présent", "Le passé", "Le futur", "L'impératif"], answer: "Le passé" },
                { prompt: "Que signifie 'Natory aho' ?", options: ["Je dors", "Je dormirai", "J'ai dormi", "Dors !"], answer: "J'ai dormi" },
                { prompt: "Comment dit-on 'Je parlerai' ?", options: ["Miteny aho", "Niteny aho", "Hiteny aho", "Teneny aho"], answer: "Hiteny aho" },
                { prompt: "Quel temps est indiqué par le préfixe 'M-' ?", options: ["Passé", "Futur", "Présent", "Conditionnel"], answer: "Présent" }
            ]
        }
    },
    {
        level: 12,
        title: "La Famille & Possession",
        lesson: {
            title: "Leçon 12: Famille et possessifs",
            prompts: [
                { type: 'word', malagasy: "Ray", french: "Père" }, { type: 'word', malagasy: "Reny", french: "Mère" },
                { type: 'word', malagasy: "Zanaka", french: "Enfant" },
                { type: 'text', content: "Pour indiquer la possession, on ajoute un suffixe au nom." },
                { type: 'text', content: "<strong>-ko</strong> = mon / ma<br><strong>-nao</strong> = ton / ta<br><strong>-ny</strong> = son / sa" },
                { type: 'text', content: "Exemple :<br>Ray + -ko = <strong>Raiko</strong> (Mon père)<br>Reny + -nao = <strong>Reninao</strong> (Ta mère)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 12",
            questions: [
                { prompt: "Comment dit-on 'Ma mère' ?", options: ["Reny", "Reniko", "Reninao", "Reniny"], answer: "Reniko" },
                { prompt: "Que signifie 'Zanakiny' ?", options: ["Mon enfant", "Ton enfant", "Son enfant", "L'enfant"], answer: "Son enfant" },
                { prompt: "Le mot pour 'Père' est...", options: ["Reny", "Ray", "Zanaka", "Ana"], answer: "Ray" },
                { prompt: "Le suffixe pour 'ton / ta' est...", options: ["-ko", "-nao", "-ny", "-tsika"], answer: "-nao" },
                { prompt: "Comment dit-on 'Ton père' ?", options: ["Raiko", "Rainao", "Rainy", "Ray"], answer: "Rainao" }
            ]
        }
    },
    {
        level: 13,
        title: "Au Marché",
        lesson: {
            title: "Leçon 13: Vocabulaire pratique",
            prompts: [
                { type: 'word', malagasy: "Vary", french: "Riz" }, { type: 'word', malagasy: "Hena", french: "Viande" },
                { type: 'word', malagasy: "Trondro", french: "Poisson" }, { type: 'word', malagasy: "Voankazo", french: "Fruits" },
                { type: 'text', content: "Phrase utile pour demander le prix :<br><strong>Ohatrinona ity?</strong><br>(Combien ça coûte ?)" },
                { type: 'text', content: "Phrase utile pour demander quelque chose :<br><strong>Mila ... aho.</strong><br>(J'ai besoin de...)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 13",
            questions: [
                { prompt: "Pour demander 'Combien ça coûte ?', on dit...", options: ["Mila vary aho", "Inona ity ?", "Ohatrinona ity ?", "Misaotra betsaka"], answer: "Ohatrinona ity ?" },
                { prompt: "Que signifie le mot 'Hena' ?", options: ["Riz", "Poisson", "Viande", "Fruits"], answer: "Viande" },
                { prompt: "Comment dit-on 'J'ai besoin de riz' ?", options: ["Mila vary aho", "Ohatrinona ny vary ?", "Hena sy vary", "Mihinana vary"], answer: "Mila vary aho" },
                { prompt: "Le mot malgache pour 'Fruits' est...", options: ["Trondro", "Hena", "Vary", "Voankazo"], answer: "Voankazo" },
                { prompt: "Que signifie 'Trondro' ?", options: ["Poisson", "Viande", "Fruits", "Argent"], answer: "Poisson" }
            ]
        }
    },
    {
        level: 14,
        title: "La Nourriture",
        lesson: {
            title: "Leçon 14: Parlons nourriture",
            prompts: [
                { type: 'word', malagasy: "Rano", french: "Eau" },
                { type: 'word', malagasy: "Kafe", french: "Café" },
                { type: 'word', malagasy: "Mofo", french: "Pain" },
                { type: 'word', malagasy: "Akoho", french: "Poulet" },
                { type: 'word', malagasy: "Legioma", french: "Légumes" },
                { type: 'text', content: "Phrase utile :<br><strong>Mangataka ... aho.</strong><br>(Je voudrais... / Je demande...)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 14",
            questions: [
                { prompt: "Comment dit-on 'Eau' en malgache ?", options: ["Kafe", "Rano", "Mofo", "Akoho"], answer: "Rano" },
                { prompt: "Que signifie 'Mofo' ?", options: ["Café", "Eau", "Pain", "Poulet"], answer: "Pain" },
                { prompt: "Pour demander poliment 'Je voudrais du café', vous diriez...", options: ["Mihinana kafe aho", "Kafe ity", "Mangataka kafe aho", "Ohatrinona ny kafe ?"], answer: "Mangataka kafe aho" },
                { prompt: "Le mot 'Akoho' désigne...", options: ["Les légumes", "Le poulet", "Le pain", "L'eau"], answer: "Le poulet" },
                { prompt: "Que signifie 'Legioma' ?", options: ["Viande", "Poisson", "Légumes", "Fruits"], answer: "Légumes" }
            ]
        }
    },
    {
        level: 15,
        title: "Adjectifs Communs",
        lesson: {
            title: "Leçon 15: Décrire les choses",
            prompts: [
                { type: 'text', content: "En malgache, l'adjectif se place généralement APRES le nom qu'il qualifie." },
                { type: 'word', malagasy: "Tsara", french: "Bon / Beau" },
                { type: 'word', malagasy: "Ratsy", french: "Mauvais" },
                { type: 'word', malagasy: "Lehibe", french: "Grand" },
                { type: 'word', malagasy: "Kely", french: "Petit" },
                { type: 'text', content: "Exemple :<br><strong>Boky tsara</strong><br>(Livre bon = Un bon livre)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 15",
            questions: [
                { prompt: "Comment dit-on 'Grand' ?", options: ["Kely", "Tsara", "Ratsy", "Lehibe"], answer: "Lehibe" },
                { prompt: "Pour dire 'Une petite maison' (Trano = maison), on dirait...", options: ["Kely trano", "Trano kely", "Lehibe trano", "Trano lehibe"], answer: "Trano kely" },
                { prompt: "Que signifie 'Tsara' ?", options: ["Mauvais", "Petit", "Bon / Beau", "Grand"], answer: "Bon / Beau" },
                { prompt: "Le contraire de 'Lehibe' est...", options: ["Ratsy", "Kely", "Tsara", "Mofo"], answer: "Kely" },
                { prompt: "Où se place généralement l'adjectif en malgache ?", options: ["Avant le nom", "Après le nom", "Ça dépend", "Au début de la phrase"], answer: "Après le nom" }
            ]
        }
    },
    {
        level: 16,
        title: "Les Couleurs",
        lesson: {
            title: "Leçon 16: Un monde en couleurs",
            prompts: [
                { type: 'word', malagasy: "Fotsy", french: "Blanc" },
                { type: 'word', malagasy: "Mainty", french: "Noir" },
                { type: 'word', malagasy: "Mena", french: "Rouge" },
                { type: 'word', malagasy: "Manga", french: "Bleu" },
                { type: 'word', malagasy: "Maitso", french: "Vert" },
                { type: 'word', malagasy: "Mavo", french: "Jaune" },
                { type: 'word', malagasy: "Volom-boasary", french: "Orange" },
                { type: 'word', malagasy: "Mavokely", french: "Rose" },
                { type: 'word', malagasy: "Volom-parasy", french: "Violet" },
                { type: 'word', malagasy: "Volon-tany", french: "Marron" },
                { type: 'word', malagasy: "Volon-davenona", french: "Gris" },
                { type: 'text', content: "Rappel : l'adjectif de couleur se place après le nom.<br>Exemple :<br><strong>Ny trano fotsy</strong><br>(La maison blanche)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 16",
            questions: [
                { prompt: "Comment dit-on 'Jaune' ?", options: ["Manga", "Mavo", "Mena", "Maitso"], answer: "Mavo" },
                { prompt: "Que signifie 'Volom-parasy' ?", options: ["Marron", "Rose", "Gris", "Violet"], answer: "Violet" },
                { prompt: "La couleur 'Orange' se dit...", options: ["Mavokely", "Volon-tany", "Volom-boasary", "Volon-davenona"], answer: "Volom-boasary" },
                { prompt: "Comment dirait-on 'Le chat noir' (saka = chat) ?", options: ["Ny mainty saka", "Ny saka mainty", "Ny saka manga", "Ny manga saka"], answer: "Ny saka mainty" },
                { prompt: "Quelle couleur est 'Mavokely' ?", options: ["Violet", "Rose", "Rouge", "Blanc"], answer: "Rose" },
                { prompt: "Que signifie 'Volon-davenona' ?", options: ["Marron", "Gris", "Noir", "Jaune"], answer: "Gris" }
            ]
        }
    },
    {
        level: 17,
        title: "Expressions Utiles",
        lesson: {
            title: "Leçon 17: Phrases de tous les jours",
            prompts: [
                { type: 'word', malagasy: "Eny", french: "Oui" },
                { type: 'word', malagasy: "Tsia", french: "Non" },
                { type: 'word', malagasy: "Angamba", french: "Peut-être" },
                { type: 'word', malagasy: "Tsy haiko", french: "Je ne sais pas" },
                { type: 'word', malagasy: "Tsy maninona", french: "Ce n'est pas grave / De rien" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 17",
            questions: [
                { prompt: "La manière la plus simple de dire 'Non' est...", options: ["Eny", "Tsia", "Angamba", "Tsy haiko"], answer: "Tsia" },
                { prompt: "Que signifie 'Tsy maninona' ?", options: ["Je ne sais pas", "Oui", "Ce n'est pas grave", "Peut-être"], answer: "Ce n'est pas grave" },
                { prompt: "Comment exprime-t-on l'incertitude avec 'Peut-être' ?", options: ["Eny", "Tsia", "Angamba", "Tsy haiko"], answer: "Angamba" },
                { prompt: "Que répondriez-vous si vous ne connaissez pas la réponse à une question ?", options: ["Tsy maninona", "Eny", "Tsia", "Tsy haiko"], answer: "Tsy haiko" },
                { prompt: "Le contraire de 'Tsia' est...", options: ["Angamba", "Tsy haiko", "Eny", "Misaotra"], answer: "Eny" }
            ]
        }
    },
    {
        level: 18,
        title: "Exprimer des sentiments",
        lesson: {
            title: "Leçon 18: Comment ça va ?",
            prompts: [
                { type: 'text', content: "Pour exprimer un état, on utilise souvent le mot '... aho'." },
                { type: 'word', malagasy: "Faly", french: "Content / Heureux" },
                { type: 'word', malagasy: "Malahelo", french: "Triste" },
                { type: 'word', malagasy: "Vizaka", french: "Fatigué" },
                { type: 'word', malagasy: "Noana", french: "Avoir faim" },
                { type: 'text', content: "Exemple :<br><strong>Faly aho.</strong><br>(Je suis content.)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 18",
            questions: [
                { prompt: "Comment dit-on 'Je suis fatigué' ?", options: ["Faly aho", "Malahelo aho", "Vizaka aho", "Noana aho"], answer: "Vizaka aho" },
                { prompt: "Que signifie 'Malahelo' ?", options: ["Content", "Triste", "Fatigué", "Avoir faim"], answer: "Triste" },
                { prompt: "Si vous n'avez pas mangé, vous diriez...", options: ["Faly aho", "Vizaka aho", "Malahelo aho", "Noana aho"], answer: "Noana aho" },
                { prompt: "Le mot pour 'Content' ou 'Heureux' est...", options: ["Malahelo", "Vizaka", "Noana", "Faly"], answer: "Faly" },
                { prompt: "Comment exprimer 'Je suis triste' ?", options: ["Malahelo aho", "Faly aho", "Vizaka aho", "Tsy haiko"], answer: "Malahelo aho" }
            ]
        }
    },
    {
        level: 19,
        title: "L'heure",
        lesson: {
            title: "Leçon 19: Quelle heure est-il ?",
            prompts: [
                { type: 'text', content: "Pour demander l'heure, on dit :<br><strong>Amin'ny firy izao?</strong><br>(littéralement: 'À combien maintenant ?')" },
                { type: 'word', malagasy: "Amin'ny fito", french: "À sept heures" },
                { type: 'word', malagasy: "Amin'ny valo sy fahefany", french: "À huit heures et quart" },
                { type: 'word', malagasy: "Amin'ny sivy sy sasany", french: "À neuf heures et demie" },
                { type: 'word', malagasy: "Latsaka fahefany amin'ny folo", french: "Dix heures moins le quart" },
                { type: 'text', content: "<strong>Sy</strong> = et (pour 'et quart', 'et demie')<br><strong>Latsaka</strong> = moins (pour 'moins le quart')" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 19",
            questions: [
                { prompt: "Comment demande-t-on l'heure ?", options: ["Aiza ny ora ?", "Oviana izao ?", "Amin'ny firy izao ?", "Inona ny fotoana ?"], answer: "Amin'ny firy izao ?" },
                { prompt: "Que signifie 'sy sasany' ?", options: ["Et quart", "Moins le quart", "Pile", "Et demie"], answer: "Et demie" },
                { prompt: "Comment dirait-on 'À deux heures et demie' ?", options: ["Amin'ny roa sy fahefany", "Latsaka amin'ny roa", "Amin'ny roa sy sasany", "Amin'ny roa"], answer: "Amin'ny roa sy sasany" },
                { prompt: "Que veut dire 'Latsaka fahefany amin'ny telo' ?", options: ["Trois heures et quart", "Trois heures moins le quart", "Deux heures et quart", "Quatre heures moins le quart"], answer: "Trois heures moins le quart" },
                { prompt: "Le mot 'Latsaka' est utilisé pour indiquer...", options: ["Les minutes après l'heure", "L'heure pile", "Les minutes avant l'heure", "La demie"], answer: "Les minutes avant l'heure" }
            ]
        }
    },
    {
        level: 20,
        title: "Directions",
        lesson: {
            title: "Leçon 20: Trouver son chemin",
            prompts: [
                { type: 'word', malagasy: "Ankavanana", french: "À droite" },
                { type: 'word', malagasy: "Ankavia", french: "À gauche" },
                { type: 'word', malagasy: "Mahitsy", french: "Tout droit" },
                { type: 'word', malagasy: "Ato", french: "Ici" },
                { type: 'word', malagasy: "Ao", french: "Là-bas" },
                { type: 'text', content: "Phrase utile :<br><strong>Aiza ny ... azafady?</strong><br>(Où est le/la ... s'il vous plaît ?)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 20",
            questions: [
                { prompt: "Comment dit-on 'À gauche' ?", options: ["Ankavanana", "Ankavia", "Mahitsy", "Ao"], answer: "Ankavia" },
                { prompt: "Pour indiquer 'Tout droit', on utilise le mot...", options: ["Ato", "Ao", "Mahitsy", "Ankavanana"], answer: "Mahitsy" },
                { prompt: "Que signifie 'Ankavanana' ?", options: ["À gauche", "Tout droit", "Ici", "À droite"], answer: "À droite" },
                { prompt: "Si quelque chose est loin, vous diriez que c'est...", options: ["Ato", "Ao", "Ankavia", "Mahitsy"], answer: "Ao" },
                { prompt: "Comment demanderiez-vous 'Où est le marché, s'il vous plaît ?'", options: ["Inona ny tsena azafady ?", "Aiza ny tsena azafady ?", "Manao ahoana ny tsena ?", "Mila tsena aho"], answer: "Aiza ny tsena azafady ?" }
            ]
        }
    },
    {
        level: 21,
        title: "La Santé",
        lesson: {
            title: "Leçon 21: Chez le docteur",
            prompts: [
                { type: 'text', content: "Pour exprimer une douleur, on utilise 'Marary ... aho'." },
                { type: 'word', malagasy: "Marary an-doha aho", french: "J'ai mal à la tête" },
                { type: 'word', malagasy: "Marary kibo aho", french: "J'ai mal au ventre" },
                { type: 'word', malagasy: "Marary tenda aho", french: "J'ai mal à la gorge" },
                { type: 'word', malagasy: "Dokotera", french: "Docteur" },
                { type: 'word', malagasy: "Fanafody", french: "Médicament" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 21",
            questions: [
                { prompt: "Comment dit-on 'J'ai mal au ventre' ?", options: ["Marary an-doha aho", "Marary tenda aho", "Marary kibo aho", "Marary aho"], answer: "Marary kibo aho" },
                { prompt: "Que signifie 'Fanafody' ?", options: ["Docteur", "Maladie", "Hôpital", "Médicament"], answer: "Médicament" },
                { prompt: "Si vous avez mal à la tête, vous dites...", options: ["Marary an-doha aho", "Marary kibo aho", "Vizaka aho", "Mila dokotera aho"], answer: "Marary an-doha aho" },
                { prompt: "Le mot 'Dokotera' est le mot malgache pour...", options: ["Infirmier", "Patient", "Docteur", "Pharmacie"], answer: "Docteur" },
                { prompt: "Que signifie 'Marary tenda aho' ?", options: ["J'ai mal aux dents", "J'ai mal à la gorge", "J'ai mal au dos", "J'ai de la fièvre"], answer: "J'ai mal à la gorge" }
            ]
        }
    },
    {
        level: 22,
        title: "La Météo",
        lesson: {
            title: "Leçon 22: Quel temps fait-il ?",
            prompts: [
                { type: 'word', malagasy: "Mafana ny andro", french: "Il fait chaud" },
                { type: 'word', malagasy: "Mangatsiaka ny andro", french: "Il fait froid" },
                { type: 'word', malagasy: "Misy masoandro", french: "Il y a du soleil" },
                { type: 'word', malagasy: "Milatsaka ny orana", french: "Il pleut" },
                { type: 'word', malagasy: "Misy rivotra", french: "Il y a du vent" },
                { type: 'text', content: "On utilise souvent 'ny andro' pour parler du temps qu'il fait." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 22",
            questions: [
                { prompt: "Pour dire 'Il fait froid', on utilise...", options: ["Mafana ny andro", "Mangatsiaka ny andro", "Misy masoandro", "Misy rivotra"], answer: "Mangatsiaka ny andro" },
                { prompt: "Que signifie 'Milatsaka ny orana' ?", options: ["Il fait chaud", "Il y a du vent", "Il pleut", "Il neige"], answer: "Il pleut" },
                { prompt: "Le contraire de 'Mafana' est...", options: ["Rivotra", "Orana", "Mangatsiaka", "Masoandro"], answer: "Mangatsiaka" },
                { prompt: "Comment dit-on 'Il y a du soleil' ?", options: ["Misy masoandro", "Misy rivotra", "Mafana ny andro", "Milatsaka ny orana"], answer: "Misy masoandro" },
                { prompt: "Le mot 'rivotra' désigne...", options: ["La pluie", "Le soleil", "La chaleur", "Le vent"], answer: "Le vent" }
            ]
        }
    },
    {
        level: 23,
        title: "Il y a / Il n'y a pas",
        lesson: {
            title: "Leçon 23: 'Misy' et 'Tsy misy'",
            prompts: [
                { type: 'text', content: "'Misy' est un mot très utile qui veut dire 'Il y a' ou 'Existe'." },
                { type: 'word', malagasy: "Misy olona ao.", french: "Il y a des gens là-bas." },
                { type: 'word', malagasy: "Misy rano?", french: "Y a-t-il de l'eau ?" },
                { type: 'text', content: "Son contraire est 'Tsy misy', qui veut dire 'Il n'y a pas'." },
                { type: 'word', malagasy: "Tsy misy olana.", french: "Il n'y a pas de problème." },
                { type: 'word', malagasy: "Tsy misy fanafody.", french: "Il n'y a pas de médicament." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 23",
            questions: [
                { prompt: "Comment dit-on 'Il n'y a pas' ?", options: ["Misy", "Misy ve ?", "Tsy misy", "Azafady"], answer: "Tsy misy" },
                { prompt: "Pour demander 'Y a-t-il du pain ?', on dirait...", options: ["Misy mofo ?", "Tsy misy mofo", "Mofo misy", "Mofo azafady"], answer: "Misy mofo ?" },
                { prompt: "L'expression très courante 'Pas de problème' se dit...", options: ["Misy olana", "Olana be", "Tsy misy olana", "Aiza ny olana ?"], answer: "Tsy misy olana" },
                { prompt: "Que signifie 'Misy dokotera ato' ?", options: ["Il n'y a pas de docteur", "Où est le docteur ?", "Je suis docteur", "Il y a un docteur ici"], answer: "Il y a un docteur ici" },
                { prompt: "Le contraire de 'Misy' est...", options: ["Tsy misy", "Misy be", "Kely", "Tsy haiko"], answer: "Tsy misy" }
            ]
        }
    },
    {
        level: 24,
        title: "Questions (Oui/Non)",
        lesson: {
            title: "Leçon 24: Poser une question avec 'Ve'",
            prompts: [
                { type: 'text', content: "Pour transformer une affirmation en question fermée (réponse oui/non), on ajoute souvent le mot 've' à la fin." },
                { type: 'text', content: "Affirmation :<br><strong>Mandeha ianao.</strong> (Tu pars.)" },
                { type: 'text', content: "Question :<br><strong>Mandeha ve ianao?</strong> (Est-ce que tu pars ?)" },
                { type: 'text', content: "Affirmation :<br><strong>Tsara ny andro.</strong> (Il fait beau.)" },
                { type: 'text', content: "Question :<br><strong>Tsara ve ny andro?</strong> (Est-ce qu'il fait beau ?)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 24",
            questions: [
                { prompt: "Quel mot ajoute-t-on souvent à la fin d'une phrase pour la transformer en question ?", options: ["Aho", "Ianao", "Ve", "Eny"], answer: "Ve" },
                { prompt: "Comment transformer 'Vizaka ianao' (Tu es fatigué) en question ?", options: ["Ianao vizaka ve ?", "Vizaka ianao ve ?", "Ve vizaka ianao ?", "Vizaka ianao."], answer: "Vizaka ianao ve ?" },
                { prompt: "Que signifie 'Mihinana trondro ve izy ?'", options: ["Il mange du poisson.", "Est-ce qu'il mange du poisson ?", "Il n'aime pas le poisson.", "Le poisson est bon."], answer: "Est-ce qu'il mange du poisson ?" },
                { prompt: "Quelle est la question pour 'Misy kafe' (Il y a du café) ?", options: ["Kafe misy ve ?", "Misy ve kafe ?", "Misy kafe ve ?", "Tsy misy kafe ?"], answer: "Misy kafe ve ?" },
                { prompt: "La réponse à une question avec 've' est généralement...", options: ["Un lieu", "Une personne", "Eny / Tsia", "Une heure"], answer: "Eny / Tsia" }
            ]
        }
    },
    {
        level: 25,
        title: "Aimer & Vouloir",
        lesson: {
            title: "Leçon 25: Exprimer ses désirs avec 'Tiako'",
            prompts: [
                { type: 'text', content: "Le mot 'Tia' exprime l'amour ou le fait d'aimer. Quand on dit 'Tiako', cela signifie 'J'aime' ou 'Je veux'." },
                { type: 'word', malagasy: "Tiako ianao.", french: "Je t'aime." },
                { type: 'word', malagasy: "Tiako ity boky ity.", french: "J'aime ce livre." },
                { type: 'text', content: "Pour dire ce que l'on ne veut pas, on utilise 'Tsy tiako'." },
                { type: 'word', malagasy: "Tsy tiako ny orana.", french: "Je n'aime pas la pluie." },
                { type: 'text', content: "On peut aussi l'utiliser pour dire 'vouloir' :<br><strong>Tiako ny handeha.</strong> (Je veux partir.)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 25",
            questions: [
                { prompt: "Comment dit-on 'J'aime' ou 'Je veux' ?", options: ["Haiko", "Aho", "Misy", "Tiako"], answer: "Tiako" },
                { prompt: "Comment exprimer 'Je n'aime pas les légumes (legioma)' ?", options: ["Tiako ny legioma.", "Tsy tiako ny legioma.", "Misy legioma.", "Legioma aho."], answer: "Tsy tiako ny legioma." },
                { prompt: "Que signifie 'Tiako ianao' ?", options: ["Je te déteste", "Je te vois", "Je t'aime", "Je pars"], answer: "Je t'aime" },
                { prompt: "Pour dire 'Je veux dormir', on peut dire...", options: ["Matory aho", "Tiako ny matory", "Tsy tiako ny matory", "Aza matory"], answer: "Tiako ny matory" },
                { prompt: "Le contraire de 'Tiako' est...", options: ["Tsy maninona", "Tsy haiko", "Tsy misy", "Tsy tiako"], answer: "Tsy tiako" }
            ]
        }
    },
    {
        level: 26,
        title: "Animaux",
        lesson: {
            title: "Leçon 26: Les animaux courants",
            prompts: [
                { type: 'word', malagasy: "Alika", french: "Chien" },
                { type: 'word', malagasy: "Saka", french: "Chat" },
                { type: 'word', malagasy: "Omby", french: "Vache / Zébu" },
                { type: 'word', malagasy: "Vorona", french: "Oiseau" },
                { type: 'word', malagasy: "Maki", french: "Lémurien" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 26",
            questions: [
                { prompt: "Comment s'appelle l'animal emblématique de Madagascar ?", options: ["Alika", "Saka", "Omby", "Maki"], answer: "Maki" },
                { prompt: "Que signifie 'Saka' ?", options: ["Chien", "Chat", "Vache", "Oiseau"], answer: "Chat" },
                { prompt: "Le mot pour 'Chien' est...", options: ["Saka", "Alika", "Omby", "Vorona"], answer: "Alika" },
                { prompt: "Que désigne le mot 'Vorona' ?", options: ["Un zébu", "Un lémurien", "Un oiseau", "Un chat"], answer: "Un oiseau" },
                { prompt: "'Omby' est le mot malgache pour...", options: ["Oiseau", "Chat", "Vache / Zébu", "Chien"], answer: "Vache / Zébu" }
            ]
        }
    },
    {
        level: 27,
        title: "A la Maison",
        lesson: {
            title: "Leçon 27: Vocabulaire de la maison",
            prompts: [
                { type: 'word', malagasy: "Trano", french: "Maison" },
                { type: 'word', malagasy: "Varavarana", french: "Porte" },
                { type: 'word', malagasy: "Latabatra", french: "Table" },
                { type: 'word', malagasy: "Seza", french: "Chaise" },
                { type: 'word', malagasy: "Efitra", french: "Chambre / Pièce" },
                { type: 'text', content: "Exemple: <br><strong>Misy seza efatra ao amin'ny efitra.</strong><br>(Il y a quatre chaises dans la pièce.)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 27",
            questions: [
                { prompt: "Comment dit-on 'Maison' ?", options: ["Efitra", "Trano", "Seza", "Latabatra"], answer: "Trano" },
                { prompt: "Que signifie 'Varavarana' ?", options: ["Fenêtre", "Porte", "Table", "Chaise"], answer: "Porte" },
                { prompt: "Sur quoi s'assied-on ?", options: ["Latabatra", "Seza", "Efitra", "Trano"], answer: "Seza" },
                { prompt: "Le mot 'Efitra' peut signifier...", options: ["Table", "Porte", "Cuisine", "Chambre / Pièce"], answer: "Chambre / Pièce" },
                { prompt: "Pour dire 'La table est grande', on dirait...", options: ["Lehibe ny latabatra", "Latabatra lehibe", "Ny latabatra lehibe", "Lehibe latabatra"], answer: "Lehibe ny latabatra" }
            ]
        }
    },
    {
        level: 28,
        title: "Capable de...",
        lesson: {
            title: "Leçon 28: Exprimer la capacité avec 'Mahay'",
            prompts: [
                { type: 'text', content: "Le mot 'Mahay' signifie 'savoir' ou 'être capable de'." },
                { type: 'word', malagasy: "Mahay miteny malagasy aho.", french: "Je sais parler malgache." },
                { type: 'word', malagasy: "Mahay mahandro sakafo ianao.", french: "Tu sais cuisiner." },
                { type: 'text', content: "Son contraire est 'Tsy mahay'." },
                { type: 'word', malagasy: "Tsy mahay milomano izy.", french: "Il/Elle ne sait pas nager." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 28",
            questions: [
                { prompt: "Quel mot utilise-t-on pour 'savoir' ou 'être capable de' ?", options: ["Mandeha", "Miasa", "Mahay", "Mihinana"], answer: "Mahay" },
                { prompt: "Comment dit-on 'Je ne sais pas' (dans le sens de ne pas avoir la compétence) ?", options: ["Tsy haiko", "Tsy mahay aho", "Tsy tiako", "Tsy misy"], answer: "Tsy mahay aho" },
                { prompt: "Que signifie 'Mahay mihira ve ianao ?'", options: ["Tu aimes chanter ?", "Sais-tu chanter ?", "Tu chantes bien.", "Tu ne chantes pas."], answer: "Sais-tu chanter ?" },
                { prompt: "Pour dire 'Il sait travailler', on dirait...", options: ["Miasa izy", "Tsy mahay miasa izy", "Mahay miasa izy", "Tiako ny miasa"], answer: "Mahay miasa izy" },
                { prompt: "Le contraire de 'Mahay' est...", options: ["Tsy tsara", "Tsy hainao", "Tsy mahay", "Kely"], answer: "Tsy mahay" }
            ]
        }
    },
    {
        level: 29,
        title: "Donner des Ordres",
        lesson: {
            title: "Leçon 29: L'impératif",
            prompts: [
                { type: 'text', content: "Pour donner un ordre ou une instruction simple, on enlève souvent le 'M-' du début du verbe au présent." },
                { type: 'word', malagasy: "Mandeha -> Ndeha!", french: "Aller -> Va!" },
                { type: 'word', malagasy: "Mihinana -> Hinàna!", french: "Manger -> Mange!" },
                { type: 'word', malagasy: "Matory -> Matoria!", french: "Dormir -> Dors!" },
                { type: 'text', content: "Pour la forme négative (ne fais pas...), on utilise 'Aza' + le verbe au présent." },
                { type: 'word', malagasy: "Aza mandeha!", french: "Ne pars pas !" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 29",
            questions: [
                { prompt: "Comment donner l'ordre 'Parle !' à partir du verbe 'Miteny' ?", options: ["Mitenena !", "Aza miteny !", "Miteny ve ?", "Teny !"], answer: "Mitenena !" },
                { prompt: "Que signifie 'Aza matahotra !' ?", options: ["Aie peur !", "N'aie pas peur !", "As-tu peur ?", "J'ai peur."], answer: "N'aie pas peur !" },
                { prompt: "Quel mot précède un verbe pour donner un ordre négatif ?", options: ["Tsy", "Aza", "Ve", "Ndeha"], answer: "Aza" },
                { prompt: "L'impératif de 'Miasa' (Travailler) est...", options: ["Aza miasa !", "Miasà !", "Miasa ve ?", "Niasa"], answer: "Miasà !" },
                { prompt: "Que veut dire 'Ankavia !' ?", options: ["Va à gauche !", "Ne va pas à gauche !", "C'est à gauche ?", "C'est à gauche."], answer: "Va à gauche !" }
            ]
        }
    },
    {
        level: 30,
        title: "Mots de Liaison",
        lesson: {
            title: "Leçon 30: Connecter ses idées",
            prompts: [
                { type: 'word', malagasy: "Sy", french: "Et (pour lier des noms)" },
                { type: 'word', malagasy: "Ary", french: "Et (pour commencer une phrase ou lier des phrases)" },
                { type: 'word', malagasy: "Nefa", french: "Mais" },
                { type: 'word', malagasy: "Satria", french: "Parce que" },
                { type: 'text', content: "Exemple :<br><strong>Tiako ny vary sy hena.</strong> (J'aime le riz et la viande.)" },
                { type: 'text', content: "Exemple 2 :<br><strong>Vizaka aho, nefa faly.</strong> (Je suis fatigué, mais content.)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 30",
            questions: [
                { prompt: "Quel mot utilise-t-on pour 'parce que' ?", options: ["Sy", "Ary", "Nefa", "Satria"], answer: "Satria" },
                { prompt: "Comment dit-on 'mais' ?", options: ["Nefa", "Satria", "Sy", "Ary"], answer: "Nefa" },
                { prompt: "Dans la phrase 'Mihinana mofo __ kafe aho', quel mot manque ?", options: ["ary", "nefa", "sy", "satria"], answer: "sy" },
                { prompt: "Que signifie la phrase 'Tsy handeha aho satria marary' ?", options: ["Je ne pars pas et je suis malade", "Je ne pars pas mais je suis malade", "Je ne pars pas parce que je suis malade", "Je ne pars pas ou je suis malade"], answer: "Je ne pars pas parce que je suis malade" },
                { prompt: "Quel mot est le plus approprié pour commencer une nouvelle phrase en disant 'Et...' ?", options: ["Sy", "Nefa", "Ary", "Satria"], answer: "Ary" }
            ]
        }
    },
    {
        level: 31,
        title: "Phrases Complexes",
        lesson: {
            title: "Leçon 31: Révision et construction",
            prompts: [
                { type: 'text', content: "Mettons tout ensemble ! Observez comment les concepts s'assemblent." },
                { type: 'text', content: "<strong>Tsy nihinana aho omaly satria tsy nisy sakafo.</strong><br>(Je n'ai pas mangé hier parce qu'il n'y avait pas de nourriture.)" },
                { type: 'text', content: "<strong>Handeha hividy boky vaovao ve ianao rahampitso?</strong><br>(Iras-tu acheter un nouveau livre demain ?)" },
                { type: 'text', content: "<strong>Mahay miteny malagasy kely aho, nefa tiako ny mianatra bebe kokoa.</strong><br>(Je sais parler un peu malgache, mais je veux apprendre plus.)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 31",
            questions: [
                { prompt: "Que signifie 'rahampitso' dans la 2ème phrase d'exemple ?", options: ["Hier", "Aujourd'hui", "Demain", "Maintenant"], answer: "Demain" },
                { prompt: "Le mot 'omaly' signifie...", options: ["Demain", "Hier", "Matin", "Soir"], answer: "Hier" },
                { prompt: "Que veut dire 'kely' dans la phrase 'miteny malagasy kely aho' ?", options: ["Bien", "Rapidement", "Un peu", "Beaucoup"], answer: "Un peu" },
                { prompt: "Dans la première phrase, 'tsy nihinana' est au...", options: ["Présent", "Futur", "Passé", "Impératif"], answer: "Passé" },
                { prompt: "Que signifie 'hividy' ?", options: ["Vendre", "Acheter", "Prendre", "Donner"], answer: "Acheter" }
            ]
        }
    },
    {
        level: 32,
        title: "Comparaisons",
        lesson: {
            title: "Leçon 32: Plus grand, meilleur, plus rapide",
            prompts: [
                { type: 'text', content: "Pour comparer deux choses, on utilise la structure :<br><strong>Adjectif + kokoa noho ny...</strong> (plus ... que le/la...)" },
                { type: 'word', malagasy: "Lehibe kokoa noho ny tranoko ny tranonao.", french: "Ta maison est plus grande que ma maison." },
                { type: 'text', content: "Pour le superlatif (le/la plus...), on utilise <strong>'indrindra'</strong> après l'adjectif." },
                { type: 'word', malagasy: "Izy no haingana indrindra.", french: "C'est lui/elle le/la plus rapide." },
                { type: 'word', malagasy: "Inona no sakafo tsara indrindra eto?", french: "Quel est le meilleur plat ici ?" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 32",
            questions: [
                { prompt: "Comment dit-on 'plus ... que' ?", options: ["indrindra", "kokoa noho", "satria", "kely"], answer: "kokoa noho" },
                { prompt: "Pour dire 'Le plus grand', on dirait...", options: ["Lehibe kokoa", "Lehibe kely", "Lehibe indrindra", "Lehibe noho"], answer: "Lehibe indrindra" },
                { prompt: "Que signifie 'Tsara kokoa noho ity io' ?", options: ["Ceci est mieux que cela", "Cela est mieux que ceci", "Ceci est le meilleur", "Cela est mauvais"], answer: "Cela est mieux que ceci" },
                { prompt: "Comment demanderiez-vous 'Qui est le plus âgé (antitra)' ?", options: ["Iza no antitra kokoa ?", "Iza no antitra indrindra ?", "Antitra ve ianao ?", "Antitra noho izy aho"], answer: "Iza no antitra indrindra ?" },
                { prompt: "Le mot 'indrindra' exprime...", options: ["La comparaison", "La négation", "Le superlatif", "La possession"], answer: "Le superlatif" }
            ]
        }
    },
    {
        level: 33,
        title: "Les Métiers",
        lesson: {
            title: "Leçon 33: Les professions",
            prompts: [
                { type: 'word', malagasy: "Mpampianatra", french: "Enseignant(e)" },
                { type: 'word', malagasy: "Mpianatra", french: "Étudiant(e)" },
                { type: 'word', malagasy: "Mpamboly", french: "Agriculteur / Paysan" },
                { type: 'word', malagasy: "Mpamily", french: "Chauffeur" },
                { type: 'word', malagasy: "Mpisitrika", french: "Pêcheur" },
                { type: 'text', content: "Le préfixe <strong>'Mp-'</strong> ou <strong>'Mpan-'</strong> indique souvent la personne qui fait l'action." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 33",
            questions: [
                { prompt: "Comment appelle-t-on un 'étudiant' ?", options: ["Mpampianatra", "Mpianatra", "Mpamboly", "Mpamily"], answer: "Mpianatra" },
                { prompt: "Que fait un 'mpamboly' ?", options: ["Il conduit", "Il enseigne", "Il cultive la terre", "Il pêche"], answer: "Il cultive la terre" },
                { prompt: "Le mot pour 'chauffeur' est...", options: ["Mpisitrika", "Mpamily", "Mpianatra", "Dokotera"], answer: "Mpamily" },
                { prompt: "Quel est le métier d'un 'mpampianatra' ?", options: ["Étudiant", "Pêcheur", "Enseignant", "Docteur"], answer: "Enseignant" },
                { prompt: "Le préfixe 'Mp-' devant un verbe désigne souvent...", options: ["L'action", "Le lieu", "La personne qui fait l'action", "Le temps (passé/futur)"], answer: "La personne qui fait l'action" }
            ]
        }
    },
    {
        level: 34,
        title: "Les Transports",
        lesson: {
            title: "Leçon 34: Comment se déplacer",
            prompts: [
                { type: 'word', malagasy: "Fiara", french: "Voiture" },
                { type: 'word', malagasy: "Fiaramanidina", french: "Avion" },
                { type: 'word', malagasy: "Bisikileta", french: "Vélo" },
                { type: 'word', malagasy: "Sarety", french: "Charrette" },
                { type: 'word', malagasy: "Taxi-be", french: "Taxi-brousse / Minibus" },
                { type: 'text', content: "Phrase utile :<br><strong>Mandeha ... aho.</strong><br>(Je vais en... / Je prends...)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 34",
            questions: [
                { prompt: "Comment dit-on 'Avion' ?", options: ["Fiara", "Sarety", "Fiaramanidina", "Taxi-be"], answer: "Fiaramanidina" },
                { prompt: "Le 'taxi-be' est un moyen de transport très courant qui correspond à un...", options: ["Vélo", "Avion", "Minibus", "Bateau"], answer: "Minibus" },
                { prompt: "Que signifie 'fiara' ?", options: ["Avion", "Voiture", "Vélo", "Charrette"], answer: "Voiture" },
                { prompt: "Pour dire 'Je vais en voiture', vous diriez...", options: ["Mandeha fiara aho", "Fiara aho", "Misy fiara", "Tiako ny fiara"], answer: "Mandeha fiara aho" },
                { prompt: "Le mot 'Sarety' désigne...", options: ["Une voiture", "Un vélo", "Une charrette", "Un avion"], answer: "Une charrette" }
            ]
        }
    },
    {
        level: 35,
        title: "Nature et Paysages",
        lesson: {
            title: "Leçon 35: Décrire l'environnement",
            prompts: [
                { type: 'word', malagasy: "Tendrombohitra", french: "Montagne" },
                { type: 'word', malagasy: "Ranomasina", french: "La mer / L'océan" },
                { type: 'word', malagasy: "Renirano", french: "Rivière / Fleuve" },
                { type: 'word', malagasy: "Ala", french: "Forêt" },
                { type: 'word', malagasy: "Tanimbary", french: "Rizière" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 35",
            questions: [
                { prompt: "Comment appelle-t-on une 'montagne' ?", options: ["Ranomasina", "Renirano", "Tendrombohitra", "Ala"], answer: "Tendrombohitra" },
                { prompt: "Le mot 'Ala' signifie...", options: ["Mer", "Forêt", "Rivière", "Rizière"], answer: "Forêt" },
                { prompt: "Où cultive-t-on le riz ?", options: ["Ao an'ala", "Any an-tendrombohitra", "Ao anaty ranomasina", "Any an-tanimbary"], answer: "Any an-tanimbary" },
                { prompt: "Que signifie 'ranomasina' ?", options: ["Rivière", "Montagne", "Forêt", "La mer"], answer: "La mer" },
                { prompt: "Le mot pour 'rivière' ou 'fleuve' est...", options: ["Renirano", "Tendrombohitra", "Ala", "Tanimbary"], answer: "Renirano" }
            ]
        }
    },
    {
        level: 36,
        title: "Expressions de Politesse",
        lesson: {
            title: "Leçon 36: Aller plus loin",
            prompts: [
                { type: 'word', malagasy: "Misaotra betsaka", french: "Merci beaucoup" },
                { type: 'word', malagasy: "Tsy misy fisaorana", french: "De rien (formel)" },
                { type: 'word', malagasy: "Mifona aho", french: "Je m'excuse / Je suis désolé(e)" },
                { type: 'word', malagasy: "Mahazoa sitraka", french: "S'il vous plaît (très formel, pour une demande)" },
                { type: 'text', content: "Le mot <strong>'Tompoko'</strong> est un terme de respect ajouté à la fin des phrases pour s'adresser à quelqu'un avec déférence.<br>Ex: Veloma, tompoko." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 36",
            questions: [
                { prompt: "Pour dire 'Merci beaucoup', on renforce 'Misaotra' avec...", options: ["kely", "be", "betsaka", "tsara"], answer: "betsaka" },
                { prompt: "Que signifie 'Mifona aho' ?", options: ["S'il vous plaît", "Je suis désolé(e)", "Au revoir", "Merci"], answer: "Je suis désolé(e)" },
                { prompt: "Quelle est une manière formelle de dire 'De rien' ?", options: ["Tsy misy olana", "Tsy maninona", "Eny", "Tsy misy fisaorana"], answer: "Tsy misy fisaorana" },
                { prompt: "Le mot 'Tompoko' est utilisé pour montrer...", options: ["La colère", "La tristesse", "Le respect", "La faim"], answer: "Le respect" },
                { prompt: "L'expression 'Mahazoa sitraka' est une version très formelle de...", options: ["Merci", "S'il vous plaît", "Bonjour", "Au revoir"], answer: "S'il vous plaît" }
            ]
        }
    },
        {
        level: 37,
        title: "Parties du Corps",
        lesson: {
            title: "Leçon 37: Connaître son corps",
            prompts: [
                { type: 'word', malagasy: "Loha", french: "Tête" },
                { type: 'word', malagasy: "Volo", french: "Cheveux" },
                { type: 'word', malagasy: "Maso", french: "Œil / Yeux" },
                { type: 'word', malagasy: "Sofina", french: "Oreille(s)" },
                { type: 'word', malagasy: "Orona", french: "Nez" },
                { type: 'word', malagasy: "Vava", french: "Bouche" },
                { type: 'word', malagasy: "Nify", french: "Dent(s)" },
                { type: 'word', malagasy: "Lela", french: "Langue" },
                { type: 'word', malagasy: "Vozona", french: "Cou" },
                { type: 'word', malagasy: "Soroka", french: "Épaule(s)" },
                { type: 'word', malagasy: "Tratra", french: "Poitrine" },
                { type: 'word', malagasy: "Lamosina", french: "Dos" },
                { type: 'word', malagasy: "Kibo", french: "Ventre" },
                { type: 'word', malagasy: "Sandry", french: "Bras" },
                { type: 'word', malagasy: "Tanana", french: "Main" },
                { type: 'word', malagasy: "Rantsan-tanana", french: "Doigt(s)" },
                { type: 'word', malagasy: "Fe", french: "Cuisse(s)" },
                { type: 'word', malagasy: "Lohalika", french: "Genou(x)" },
                { type: 'word', malagasy: "Ranjo", french: "Jambe(s)" },
                { type: 'word', malagasy: "Tongotra", french: "Pied(s)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 37",
            questions: [
                { prompt: "Comment dit-on 'Genou' ?", options: ["Loha", "Lohalika", "Vava", "Tanana"], answer: "Lohalika" },
                { prompt: "Que signifie 'lamosina' ?", options: ["Poitrine", "Dos", "Ventre", "Épaule"], answer: "Dos" },
                { prompt: "Pour parler de vos 'doigts', vous utilisez le mot...", options: ["Rantsan-tanana", "Tongotra", "Sandry", "Nify"], answer: "Rantsan-tanana" },
                { prompt: "Le mot pour 'Nez' est...", options: ["Tanana", "Orona", "Vava", "Maso"], answer: "Orona" },
                { prompt: "Que désigne le mot 'sofina' ?", options: ["La tête", "Les yeux", "La bouche", "Les oreilles"], answer: "Les oreilles" },
                { prompt: "Comment dit-on 'Cheveux' ?", options: ["Vava", "Volo", "Loha", "Soroka"], answer: "Volo" }
            ]
        }
    },
    {
        level: 38,
        title: "Avoir (Possession)",
        lesson: {
            title: "Leçon 38: Exprimer la possession avec 'Manana'",
            prompts: [
                { type: 'text', content: "Pour dire 'avoir' dans le sens de posséder, on utilise le verbe <strong>'manana'</strong>." },
                { type: 'text', content: "La structure est simple :<br><strong>Manana + [objet] + [sujet]</strong>" },
                { type: 'word', malagasy: "Manana fiara aho.", french: "J'ai une voiture." },
                { type: 'word', malagasy: "Manana saka kely izy.", french: "Il/Elle a un petit chat." },
                { type: 'word', malagasy: "Tsy manana vola izahay.", french: "Nous n'avons pas d'argent." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 38",
            questions: [
                { prompt: "Quel verbe utilise-t-on pour dire 'avoir' (posséder) ?", options: ["Misy", "Mahay", "Manana", "Mandeha"], answer: "Manana" },
                { prompt: "Comment dirait-on 'J'ai un livre' ?", options: ["Boky aho", "Misy boky", "Manana boky aho", "Tiako ny boky"], answer: "Manana boky aho" },
                { prompt: "Que signifie 'Manana alika ve ianao ?'", options: ["Aimes-tu les chiens ?", "Où est ton chien ?", "As-tu un chien ?", "C'est un chien ?"], answer: "As-tu un chien ?" },
                { prompt: "Pour dire 'Il n'a pas de maison', on dirait...", options: ["Tsy trano izy", "Tsy manana trano izy", "Trano tsy misy", "Izy sy ny trano"], answer: "Tsy manana trano izy" },
                { prompt: "La phrase 'Manana asa tsara aho' signifie...", options: ["J'aime mon travail", "Je travaille bien", "J'ai un bon travail", "Je cherche un travail"], answer: "J'ai un bon travail" }
            ]
        }
    },
    {
        level: 39,
        title: "Les Vêtements",
        lesson: {
            title: "Leçon 39: Comment s'habiller",
            prompts: [
                { type: 'word', malagasy: "Akanjo", french: "Vêtement / Robe" },
                { type: 'word', malagasy: "Pataloha", french: "Pantalon" },
                { type: 'word', malagasy: "Kiraro", french: "Chaussures" },
                { type: 'word', malagasy: "Satroka", french: "Chapeau" },
                { type: 'text', content: "Exemple combiné :<br><strong>Tiako ny akanjonao mena.</strong><br>(J'aime ta robe rouge.)" }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 39",
            questions: [
                { prompt: "Le mot général pour 'vêtement' est...", options: ["Pataloha", "Kiraro", "Satroka", "Akanjo"], answer: "Akanjo" },
                { prompt: "Que met-on sur sa tête ?", options: ["Kiraro", "Akanjo", "Pataloha", "Satroka"], answer: "Satroka" },
                { prompt: "Comment dit-on 'chaussures' ?", options: ["Satroka", "Kiraro", "Akanjo", "Tongotra"], answer: "Kiraro" },
                { prompt: "Pour dire 'J'ai besoin d'un nouveau pantalon', on dirait...", options: ["Mila pataloha vaovao aho", "Pataloha vaovao aho", "Manana pataloha aho", "Tsara ny pataloha"], answer: "Mila pataloha vaovao aho" },
                { prompt: "Que signifie 'Ohatrinona ity akanjo ity ?'", options: ["Aimes-tu ce vêtement ?", "Ce vêtement est grand.", "Où est mon vêtement ?", "Combien coûte ce vêtement ?"], answer: "Combien coûte ce vêtement ?" }
            ]
        }
    },
    {
        level: 40,
        title: "Révision Finale",
        lesson: {
            title: "Leçon 40: Mettre les connaissances en pratique",
            prompts: [
                { type: 'text', content: "<strong>Félicitations !</strong> Vous avez parcouru un long chemin. Voyons quelques phrases qui combinent tout ce que vous avez appris." },
                { type: 'text', content: "<strong>Nandeha tany an-tsena niaraka tamin'ny reniko aho omaly, nefa tsy nividy na inona na inona satria tsy nanana vola.</strong><br>(Je suis allé(e) au marché avec ma mère hier, mais je n'ai rien acheté parce que je n'avais pas d'argent.)" },
                { type: 'text', content: "<strong>Raha mafana ny andro rahampitso, handeha hilomano any amin'ny ranomasina isika.</strong><br>(S'il fait chaud demain, nous irons nager à la mer.)" },
                { type: 'text', content: "<strong>Ny fiara manga no haingana indrindra, nefa ny fiara mena no tiako kokoa.</strong><br>(La voiture bleue est la plus rapide, mais je préfère la voiture rouge.)" }
            ]
        },
        quiz: {
            title: "Quiz Final",
            questions: [
                { prompt: "Dans la 1ère phrase, 'niaraka tamin'ny' signifie...", options: ["après", "avant", "sans", "avec"], answer: "avec" },
                { prompt: "Que signifie 'raha' au début de la 2ème phrase ?", options: ["Parce que", "Mais", "Si (condition)", "Où"], answer: "Si (condition)" },
                { prompt: "Le verbe 'hilomano' (nager) est conjugué au...", options: ["Passé", "Présent", "Futur", "Impératif"], answer: "Futur" },
                { prompt: "Dans la 3ème phrase, que veut dire 'no tiako kokoa' ?", options: ["est la meilleure", "est ce que j'aime le moins", "est ce que je préfère", "est ce que je déteste"], answer: "est ce que je préfère" },
                { prompt: "Que signifie 'tsy nividy na inona na inona' ?", options: ["j'ai tout acheté", "je n'ai rien acheté", "j'ai acheté quelque chose", "j'achèterai plus tard"], answer: "je n'ai rien acheté" }
            ]
        }
    },
        {
        level: 41,
        title: "Challenge Phrase 1",
        lesson: {
            title: "Leçon 41: Passé et Négation",
            prompts: [
                { type: 'text', content: "Mettez vos connaissances à l'épreuve en reconstruisant une phrase complexe qui combine le temps passé, une conjonction de coordination ('mais') et une négation." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 41",
            questions: [
                {
                    type: 'sentence',
                    prompt: "Traduisez la phrase :<br><strong>Je suis allé au marché hier, mais je n'ai pas acheté de poisson.</strong>",
                    bank: ["Nandeha", "tsy", "aho", "omaly", "nefa", "nividy", "trondro", "tany", "an-tsena"],
                    answer: "Nandeha tany an-tsena aho omaly nefa tsy nividy trondro"
                }
            ]
        }
    },
    {
        level: 42,
        title: "Challenge Phrase 2",
        lesson: {
            title: "Leçon 42: Condition et Futur",
            prompts: [
                { type: 'text', content: "Construisez une phrase qui utilise une condition ('si') et un verbe au futur. Faites bien attention à l'ordre des pronoms sujets." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 42",
            questions: [
                {
                    type: 'sentence',
                    prompt: "Traduisez la phrase :<br><strong>Si tu sais parler malgache, nous irons à Madagascar.</strong>",
                    bank: ["Raha", "mahay", "isika", "any", "miteny", "malagasy", "handeha", "Madagasikara", "ianao"],
                    answer: "Raha mahay miteny malagasy ianao handeha any Madagasikara isika"
                }
            ]
        }
    },
    {
        level: 43,
        title: "Challenge Phrase 3",
        lesson: {
            title: "Leçon 43: Possession et Cause",
            prompts: [
                { type: 'text', content: "Cette phrase combine la possession ('mon père'), un adjectif, et une relation de cause ('parce que')." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 43",
            questions: [
                {
                    type: 'sentence',
                    prompt: "Traduisez la phrase :<br><strong>Mon père a une grande maison parce qu'il travaille beaucoup.</strong>",
                    bank: ["ny", "raiko", "lehibe", "be", "manana", "trano", "satria", "miasa", "izy"],
                    answer: "Manana trano lehibe ny raiko satria miasa be izy"
                }
            ]
        }
    },
    {
        level: 44,
        title: "Challenge Phrase 4",
        lesson: {
            title: "Leçon 44: Adjectifs et Négation",
            prompts: [
                { type: 'text', content: "Faites attention à l'ordre des mots ! En malgache, l'adjectif se place après le nom qu'il qualifie." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 44",
            questions: [
                {
                    type: 'sentence',
                    prompt: "Traduisez la phrase :<br><strong>Le petit chat n'aime pas l'eau froide.</strong>",
                    // Pour ce niveau, j'utilise la version grammaticalement correcte pour un meilleur apprentissage
                    bank: ["mangatsiaka", "ny", "rano", "saka", "kely", "Tsy", "tiany", "ilay"],
                    answer: "Tsy tiany ilay saka kely ny rano mangatsiaka"
                }
            ]
        }
    },
    {
        level: 45,
        title: "Challenge Phrase 5",
        lesson: {
            title: "Leçon 45: Futur et Compléments",
            prompts: [
                { type: 'text', content: "Assemblez une phrase au futur en plaçant correctement les compléments de lieu ('au marché') et de temps ('demain')." }
            ]
        },
        quiz: {
            title: "Quiz du Niveau 45",
            questions: [
                {
                    type: 'sentence',
                    prompt: "Traduisez la phrase :<br><strong>Ma mère achètera des fruits demain au marché.</strong>",
                    bank: ["rahampitso", "hividy", "voankazo", "reniko", "any", "an-tsena", "ny"],
                    answer: "Hividy voankazo any an-tsena ny reniko rahampitso"
                }
            ]
        }
    }
];

courseData[4].quiz.questions.push({
    type: 'sentence',
    prompt: "Traduisez la phrase :<br><strong>Je mange du riz.</strong>",
    bank: ["vary", "aho", "Mihinana"], 
    answer: "Mihinana vary aho"
});

courseData[12].quiz.questions.push({
    type: 'sentence',
    prompt: "Traduisez la phrase :<br><strong>J'ai besoin de viande.</strong>",
    bank: ["Mila", "aho", "hena"],
    answer: "Mila hena aho"
});

courseData[24].quiz.questions.push({
    type: 'sentence',
    prompt: "Traduisez la phrase :<br><strong>Je veux partir.</strong>",
    bank: ["Tiako", "handeha", "ny"],
    answer: "Tiako ny handeha"
});


const contentTitle = document.getElementById('content-title');
const contentBody = document.getElementById('content-body');
const levelsNav = document.getElementById('levels-nav');
const quizFeedback = document.getElementById('quiz-feedback');
const lessonNavigation = document.getElementById('lesson-navigation');

let userProgress = { unlockedLevel: 1, currentQuizScore: 0, answeredQuestions: 0 };
let currentPromptIndex = 0;

function displayLesson(levelData) {
    contentTitle.innerText = levelData.lesson.title;
    quizFeedback.innerHTML = '';
    currentPromptIndex = 0;
    showCurrentPrompt(levelData);
}

function showCurrentPrompt(levelData) {
    const prompts = levelData.lesson.prompts;
    const prompt = prompts[currentPromptIndex];

    contentBody.innerHTML = '';
    if (prompt.type === 'text') {
        contentBody.innerHTML = `<div class="lesson-text">${prompt.content}</div>`;
    } else if (prompt.type === 'word') {
        contentBody.innerHTML = `<div class="word-card">
                                    <p style="font-size: 1.5rem; font-weight: bold;">${prompt.malagasy}</p>
                                    <p>${prompt.french}</p>
                                 </div>`;
    }

    lessonNavigation.innerHTML = '';
    if (currentPromptIndex < prompts.length - 1) {
        const comprisBtn = document.createElement('button');
        comprisBtn.innerText = 'Compris';
        comprisBtn.className = 'lesson-nav-btn btn-primary';
        comprisBtn.onclick = () => {
            currentPromptIndex++;
            showCurrentPrompt(levelData);
        };
        lessonNavigation.appendChild(comprisBtn);
    } else {
        const previousBtn = document.createElement('button');
        previousBtn.innerText = 'Revoir la leçon';
        previousBtn.className = 'lesson-nav-btn btn-secondary';
        previousBtn.onclick = () => displayLesson(levelData);
        lessonNavigation.appendChild(previousBtn);
        
        const validateBtn = document.createElement('button');
        validateBtn.innerText = 'Passer au Quiz';
        validateBtn.className = 'lesson-nav-btn btn-main-action';
        validateBtn.onclick = () => displayQuiz(levelData);
        lessonNavigation.appendChild(validateBtn);
    }
}


function displayQuiz(levelData) {
    userProgress.currentQuizScore = 0;
    userProgress.answeredQuestions = 0; 
    contentTitle.innerText = levelData.quiz.title;
    contentBody.innerHTML = '';
    quizFeedback.innerHTML = '';
    lessonNavigation.innerHTML = '';

    levelData.quiz.questions.forEach((question, index) => {
        if (question.type === 'sentence') {
            renderSentenceQuestion(question, index, levelData);
        } else { 
            renderMCQQuestion(question, index, levelData);
        }
    });
}

function renderSentenceQuestion(question, index, levelData) {
    const questionContainer = document.createElement('div');
    questionContainer.className = 'sentence-question-container';

    questionContainer.innerHTML = `
        <p class="sentence-prompt"><strong>Question ${index + 1}:</strong> ${question.prompt}</p>
        <div class="answer-area" id="answer-area-${index}"></div>
        <div class="word-bank" id="word-bank-${index}"></div>
        <div class="sentence-controls" id="sentence-controls-${index}"></div>
    `;

    const wordBank = questionContainer.querySelector(`#word-bank-${index}`);
    const answerArea = questionContainer.querySelector(`#answer-area-${index}`);
    const controls = questionContainer.querySelector(`#sentence-controls-${index}`);
    
    const shuffledBank = [...question.bank].sort(() => Math.random() - 0.5);

    shuffledBank.forEach(word => {
        const wordTag = document.createElement('div');
        wordTag.className = 'word-tag';
        wordTag.innerText = word;
        wordTag.onclick = () => {
            answerArea.appendChild(wordTag);
            wordTag.onclick = () => {
                wordBank.appendChild(wordTag);
                wordTag.onclick = arguments.callee; 
            };
        };
        wordBank.appendChild(wordTag);
    });

    const checkBtn = document.createElement('button');
    checkBtn.innerText = 'Vérifier';
    checkBtn.className = 'lesson-nav-btn btn-primary';
    checkBtn.onclick = () => checkSentence(question.answer, answerArea, wordBank, controls, levelData);
    controls.appendChild(checkBtn);
    
    contentBody.appendChild(questionContainer);
}

function renderMCQQuestion(question, index, levelData) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    const prompt = document.createElement('p');
    prompt.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.prompt}`;
    questionDiv.appendChild(prompt);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';

    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.onclick = (event) => checkMCQAnswer(event, option, question.answer, levelData);
        optionsDiv.appendChild(btn);
    });

    questionDiv.appendChild(optionsDiv);
    contentBody.appendChild(questionDiv);
}

function checkSentence(correctAnswer, answerArea, wordBank, controls, levelData) {
    const words = Array.from(answerArea.children).map(tag => tag.innerText);
    const userAnswer = words.join(' ');

    Array.from(wordBank.children).forEach(tag => tag.onclick = null);
    Array.from(answerArea.children).forEach(tag => tag.onclick = null);
    controls.innerHTML = '';

    if (userAnswer === correctAnswer) {
        userProgress.currentQuizScore++;
        answerArea.classList.add('correct');
    } else {
        answerArea.classList.add('incorrect');
        const correctAnswerDiv = document.createElement('p');
        correctAnswerDiv.innerHTML = `Bonne réponse : <strong>${correctAnswer}</strong>`;
        answerArea.parentElement.appendChild(correctAnswerDiv);
    }
    
    userProgress.answeredQuestions++;
    if (userProgress.answeredQuestions >= levelData.quiz.questions.length) {
        showQuizResult(levelData);
    }
}


function checkMCQAnswer(event, selectedOption, correctAnswer, levelData) {
    const questionButtons = event.target.parentElement.querySelectorAll('button');
    questionButtons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        userProgress.currentQuizScore++;
        event.target.style.backgroundColor = '#2ecc71';
        event.target.style.color = 'white';
    } else {
        event.target.style.backgroundColor = '#e74c3c';
        event.target.style.color = 'white';
        questionButtons.forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.style.backgroundColor = '#2ecc71';
                btn.style.color = 'white';
            }
        });
    }
    
    userProgress.answeredQuestions++;
    if (userProgress.answeredQuestions >= levelData.quiz.questions.length) {
        showQuizResult(levelData);
    }
}

function showQuizResult(levelData) {
    const totalQuestions = levelData.quiz.questions.length;
    const score = userProgress.currentQuizScore;
    const requiredScore = Math.ceil(totalQuestions * 0.7);

    lessonNavigation.innerHTML = '';

    if (score >= requiredScore) {
        quizFeedback.className = 'feedback-correct';
        quizFeedback.innerHTML = `Félicitations ! Vous avez obtenu ${score}/${totalQuestions}. Niveau suivant débloqué !`;
        
        if (userProgress.unlockedLevel === levelData.level) {
            userProgress.unlockedLevel++;
            saveProgress();
        }

        const nextLevelId = levelData.level + 1;
        const nextLevelData = courseData.find(level => level.level === nextLevelId);

        if (nextLevelData) {
            const nextLevelBtn = document.createElement('button');
            nextLevelBtn.innerText = 'Passer au Niveau Suivant';
            nextLevelBtn.className = 'lesson-nav-btn btn-main-action';
            nextLevelBtn.onclick = () => displayLesson(nextLevelData);
            
            lessonNavigation.appendChild(nextLevelBtn);
        }
        
    } else {
        quizFeedback.className = 'feedback-incorrect';
        quizFeedback.innerHTML = `Dommage, vous avez obtenu ${score}/${totalQuestions}. Le score requis est de ${requiredScore}.`;

        const retryBtn = document.createElement('button');
        retryBtn.innerText = 'Réessayer le quiz';
        retryBtn.className = 'lesson-nav-btn btn-primary';
        retryBtn.onclick = () => displayQuiz(levelData);
        
        lessonNavigation.appendChild(retryBtn);
    }

    renderLevelButtons();
}

function saveProgress() {
    localStorage.setItem('malagasyAppProgress', JSON.stringify(userProgress));
}

function loadProgress() {
    const savedData = localStorage.getItem('malagasyAppProgress');
    if (savedData) {
        userProgress = JSON.parse(savedData);
    }
}

function renderLevelButtons() {
    levelsNav.innerHTML = '';
    courseData.forEach(level => {
        const btn = document.createElement('button');
        btn.className = 'level-btn';

        if (level.level <= userProgress.unlockedLevel) {
            btn.innerText = `${level.level}. ${level.title}`;
            btn.onclick = () => displayLesson(level);
        } else {
            btn.innerText = level.level;
            btn.classList.add('locked');
            btn.disabled = true;
        }
        levelsNav.appendChild(btn);
    });
}

window.onload = () => {
    loadProgress();
    renderLevelButtons();
    if (document.getElementById('content-body').innerText.includes('Sélectionnez un niveau')) {
        displayLesson(courseData[0]);
    }
};