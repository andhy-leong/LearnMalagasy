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
    }   
];

const contentTitle = document.getElementById('content-title');
const contentBody = document.getElementById('content-body');
const levelsNav = document.getElementById('levels-nav');
const quizFeedback = document.getElementById('quiz-feedback');
const lessonNavigation = document.getElementById('lesson-navigation');

let userProgress = { unlockedLevel: 1, currentQuizScore: 0 };
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
    contentTitle.innerText = levelData.quiz.title;
    contentBody.innerHTML = '';
    quizFeedback.innerHTML = '';
    lessonNavigation.innerHTML = '';

    levelData.quiz.questions.forEach((question, index) => {
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
            btn.onclick = (event) => checkAnswer(event, option, question.answer, levelData);
            optionsDiv.appendChild(btn);
        });

        questionDiv.appendChild(optionsDiv);
        contentBody.appendChild(questionDiv);
    });
}

function checkAnswer(event, selectedOption, correctAnswer, levelData) {
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
    
    const totalQuestions = levelData.quiz.questions.length;
    const answeredQuestions = document.querySelectorAll('.quiz-options button:disabled').length / levelData.quiz.questions[0].options.length;
    
    if (answeredQuestions >= totalQuestions) {
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
};