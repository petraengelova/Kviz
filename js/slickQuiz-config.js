// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Testíček",
        "main":    "<p>Ahooj!</p>",
        "results": "",
        "level1":  "Výborně! Všechno dobře!",
        "level2":  "Jedno blbě.",
        "level3":  "Nic moc teda.",
        "level4":  "Jen jedno dobře?!",
        "level5":  "Seš debil." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Je pondělí?",
            "a": [
                {"option": "Ne",      "correct": true},
                {"option": "Vůbec",     "correct": false},
                {"option": "Vskutku",      "correct": false},
                {"option": "Možná",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Výborně!</span>Dnes není pondělí</p>",
            "incorrect": "<p><span>Ne.</span>Správná odpověď je ANO.</p>" // no comma here
        },
        { // Question 2
            "q": "Co jsem měla ke snídani?",
            "a": [
                {"option": "Slaninu",               "correct": false},
                {"option": "Nic",   "correct": true},
                {"option": "Pizzu",               "correct": false},
                {"option": "Špagety", "correct": false} // no comma here
            ],
            "correct": "<p><span>Výborně!</span>Já totiž nesnídám!</p>",
            "incorrect": "<p><span>Špatně.</span>Neměl jsem nic.</p>" // no comma here
        },
        { // Question 3
            "q": "Kde bydlím?",
            "a": [
                {"option": "V Liberci",           "correct": false},
                {"option": "V Praze",                  "correct": false},
                {"option": "Ve škole",  "correct": false},
                {"option": "Doma",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Super!</span>Skutečně bydlím doma.</p>",
            "incorrect": "<p><span>Seš marnej.</span>Správná odpověď je DOMA.</p>" // no comma here
        },
        { // Question 4
            "q": "Ahoj!",
            "a": [
                {"option": "Ahoj",    "correct": false},
                {"option": "42",     "correct": true},
                {"option": "Čau",      "correct": false},
                {"option": "Dobrý den",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Výborně!</span>42</p>",
            "incorrect": "<p><span>Špatně</span>Správná odpověď je 42.</p>" // no comma here
        },
        { // Question 5
            "q": "Je země větší než míč?",
            "a": [
                {"option": "Ano",    "correct": true},
                {"option": "Ne",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Dobrá práce!</span>Země je skutečně větší než míč.</p>",
            "incorrect": "<p><span>ERRRR!</span>Seš debil? Správná odpověď je ANO.</p>" // no comma here
        }, 
        { // Question 6
            "q": "Je země menší než míč?",
            "a": [
                {"option": "Ne",    "correct": true},
                {"option": "Ano",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Dobrá práce!</span>Země je skutečně menší než míč.</p>",
            "incorrect": "<p><span>ERRRR!</span>Seš debil? Správná odpověď je NE.</p>" // no comma here
        } // no comma here
    ]
};
