const listeGit = [
    {
        question: "Qu'est-ce que Git?",
        options: ["Un système de gestion de base de données", "Un système de gestion de version", "Un langage de programmation", "Un navigateur web"],
        reponse: "Un système de gestion de version"
    },
    {
        question: "Quelle commande Git permet de cloner un dépôt distant sur votre machine locale?",
        options: ["git clone", "git commit", "git pull", "git push"],
        reponse: "git clone"
    },
    {
        question: "Quelle commande Git permet de créer une nouvelle branche?",
        options: ["git branch", "git checkout", "git merge", "git create"],
        reponse: "git branch"
    },
    {
        question: "Quelle commande Git permet d'afficher l'historique des commits?",
        options: ["git log", "git status", "git diff", "git history"],
        reponse: "git log"
    },
    {
        question: "Quelle commande Git permet d'envoyer des modifications locales vers un dépôt distant?",
        options: ["git pull", "git push", "git commit", "git merge"],
        reponse: "git push"
    },
    {
        question: "Quelle commande Git permet de créer un nouveau commit avec des modifications précédemment enregistrées?",
        options: ["git commit", "git branch", "git pull", "git push"],
        reponse: "git commit"
    },
    {
        question: "Quelle commande Git permet de fusionner une branche dans la branche actuelle?",
        options: ["git merge", "git commit", "git checkout", "git push"],
        reponse: "git merge"
    },
    {
        question: "Quelle commande Git permet de passer d'une branche à une autre?",
        options: ["git switch", "git branch", "git checkout", "git merge"],
        reponse: "git checkout"
    },
    {
        question: "Quelle est la différence entre Git et GitHub?",
        options: ["Il n'y a pas de différence", "Git est un outil de gestion de version, tandis que GitHub est une plateforme de collaboration en ligne basée sur Git", "Git est utilisé pour la gestion de bases de données, tandis que GitHub est un système d'exploitation", "GitHub est une version plus récente de Git"],
        reponse: "Git est un outil de gestion de version, tandis que GitHub est une plateforme de collaboration en ligne basée sur Git"
    },
    {
        question: "Quelle est la commande Git pour créer une nouvelle étiquette (tag) pour un commit spécifique?",
        options: ["git label", "git tag", "git branch", "git mark"],
        reponse: "git tag"
    },
    {
        question: "Quelle commande Git permet de récupérer les dernières modifications d'un dépôt distant sans fusionner?",
        options: ["git fetch", "git pull", "git clone", "git merge"],
        reponse: "git fetch"
    },
    {
        question: "Quelle est la commande Git pour annuler les modifications locales et revenir à la dernière version confirmée (commit) d'une branche?",
        options: ["git reset", "git checkout", "git revert", "git undo"],
        reponse: "git reset"
    },
    {
        question: "Quelle commande Git permet de lister toutes les branches, y compris les branches distantes?",
        options: ["git branch", "git list", "git show", "git remote"],
        reponse: "git branch -a"
    },
    {
        question: "Quelle commande Git permet de créer une copie locale d'une branche distante?",
        options: ["git clone", "git branch", "git checkout", "git pull"],
        reponse: "git checkout -b <nom_de_la_branche>"
    },
    {
        question: "Quelle est la commande Git pour ajouter des fichiers modifiés à la zone de préparation (staging area) en vue d'un prochain commit?",
        options: ["git add", "git commit", "git stage", "git modify"],
        reponse: "git add"
    },
    {
        question: "Quelle est la commande Git pour vérifier l'état actuel du dépôt, y compris les fichiers modifiés et les fichiers en attente d'un commit?",
        options: ["git status", "git check", "git info", "git diff"],
        reponse: "git status"
    },
    {
        question: "Quelle commande Git permet de supprimer une branche locale?",
        options: ["git delete", "git remove", "git branch -d", "git branch -D"],
        reponse: "git branch -d"
    },
    {
        question: "Quelle commande Git permet de fusionner les modifications d'une branche distante dans votre branche actuelle?",
        options: ["git push", "git merge", "git pull", "git fetch"],
        reponse: "git merge origin/<nom_de_la_branche>"
    },
    {
        question: "Quelle est la commande Git pour ajouter un fichier spécifique à la zone de préparation (staging area) en vue d'un prochain commit?",
        options: ["git add", "git commit", "git stage", "git modify"],
        reponse: "git add <nom_du_fichier>"
    },
    {
        question: "Quelle est la commande Git pour voir les différences entre le dernier commit et la branche actuelle?",
        options: ["git diff", "git status", "git show", "git compare"],
        reponse: "git diff HEAD"
    }
];
/*--------------------------------------------------------*/
const listeJS = [
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript?",
        options: ["var", "let", "const", "let et const"],
        reponse: "let et const"
    },
    {
        question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        reponse: "push()"
    },
    {
        question: "Quelle est la sortie de console pour 3 + '3' en JavaScript?",
        options: ["6", "33", "36", "Erreur"],
        reponse: "33"
    },
    {
        question: "Quelle méthode est utilisée pour convertir une chaîne de caractères en minuscules?",
        options: ["toUpperCase()", "toLower()", "toLowerCase()", "lowerCase()"],
        reponse: "toLowerCase()"
    },
    {
        question: "Quelle fonction est utilisée pour planifier l'exécution d'une fonction à un moment donné?",
        options: ["setTimeout()", "setInterval()", "execAtTime()", "runAfter()"],
        reponse: "setTimeout()"
    },
    {
        question: "Quel opérateur est utilisé pour la comparaison stricte en termes de valeur et de type?",
        options: ["==", "===", "=>", "!=="],
        reponse: "==="
    },
    {
        question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau?",
        options: ["pop()", "shift()", "remove()", "delete()"],
        reponse: "pop()"
    },
    {
        question: "Quelle est la portée (scope) d'une variable déclarée avec 'var'?",
        options: ["Globale", "Locale", "De bloc", "Enfermée"],
        reponse: "Locale"
    },
    {
        question: "Quelle méthode est utilisée pour parcourir les propriétés d'un objet?",
        options: ["loop()", "for...in", "forEach()", "enumerate()"],
        reponse: "for...in"
    },
    {
        question: "Quelle est la valeur de 'this' dans le contexte d'une fonction fléchée (arrow function)?",
        options: ["Objet global (window)", "Objet courant", "Undefined", "Parent de la fonction"],
        reponse: "Objet global (window)"
    },
    {
        question: "Quelle méthode est utilisée pour déterminer la longueur d'une chaîne de caractères?",
        options: ["size()", "length()", "count()", "getSize()"],
        reponse: "length()"
    },
    {
        question: "Quelle est la bonne façon d'insérer 'Hello' dans le tableau ['Bonjour', 'Monde'] pour avoir ['Bonjour', 'Hello', 'Monde']?",
        options: ["array.insert('Hello', 1)", "array.add('Hello')", "array.splice(1, 0, 'Hello')", "array.concat('Hello')"],
        reponse: "array.splice(1, 0, 'Hello')"
    },
    {
        question: "Quelle méthode est utilisée pour transformer un tableau en une chaîne de caractères?",
        options: ["join()", "concat()", "toString()", "merge()"],
        reponse: "join()"
    },
    {
        question: "Quel est l'objectif de JSON.stringify() en JavaScript?",
        options: ["Convertir un objet en une chaîne JSON", "Analyser une chaîne JSON", "Convertir un tableau en une chaîne JSON", "Créer un nouvel objet JSON"],
        reponse: "Convertir un objet en une chaîne JSON"
    },
    {
        question: "Quelle méthode est utilisée pour supprimer un élément spécifique d'un tableau en fonction de sa valeur?",
        options: ["delete()", "remove()", "splice()", "erase()"],
        reponse: "splice()"
    },
    {
        question: "Quelle est la différence entre 'null' et 'undefined' en JavaScript?",
        options: ["Elles sont identiques.", "'null' signifie absence de valeur, tandis qu''undefined' signifie qu'une variable n'a pas été définie.", "'undefined' signifie absence de valeur, tandis que 'null' signifie qu'une variable n'a pas été définie.", "L'une est un mot-clé, l'autre est une valeur spéciale."],
        reponse: "'null' signifie absence de valeur, tandis qu''undefined' signifie qu'une variable n'a pas été définie."
    },
    {
        question: "Quelle méthode est utilisée pour trier les éléments d'un tableau en JavaScript?",
        options: ["sort()", "order()", "arrange()", "organize()"],
        reponse: "sort()"
    },
    {
        question: "Quel est le résultat de 10 / 0 en JavaScript?",
        options: ["0", "Infinity", "NaN", "Erreur"],
        reponse: "Infinity"
    },
    {
        question: "Quelle méthode est utilisée pour ajouter un élément au début d'un tableau?",
        options: ["push()", "unshift()", "prepend()", "addFirst()"],
        reponse: "unshift()"
    },
    {
        question: "Quel événement est déclenché lorsqu'un formulaire HTML est soumis (submitted)?",
        options: ["onsubmit", "onclick", "onchange", "onformsubmit"],
        reponse: "onsubmit"
    }
    
];
