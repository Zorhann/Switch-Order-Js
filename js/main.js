// Const pointant vers les éléments du html
const repliques = document.querySelectorAll(".replique");
const h2 = document.querySelector("h2");
const buttonUP = document.getElementById("buttonUP");
const buttonDown = document.getElementById("buttonDown");

//Ici on stock les répliques que l'on va afficher dans les <p> du html
//Je sais que tu vas te dire WTF en voyant ça mais j'ai pas trouvé d'autre solutions pour garder ma mise en page 😅
const punch = [
    `<b>Réplique 1: </b><span>« Pourquoi voulez-vous boxer ?" - Parce que je ne peux pas chanter ou danser » </span><b>(Rocky)</b>`,
    `<b>Réplique 2: </b><span>« Il y a un dicton en Italie : on peut se brûler la langue avec un bol de soupe. - Il y a un dicton en Irlande : rien à foutre des dictons italiens ». </span><b>(Piège en eaux troubles)</b>`,
    `<b>Réplique 3: </b><span>«Alex, ne fait pas ça, c'est ton frère! - Pourquoi, parce qu'il me ressemble? Je vais changer ça tout de suite » </span><b>(Double Impact)</b>`,
    `<b>Réplique 4: </b><span>« T'aimes bien les omelettes ? ... Tiens, je te casse les œufs ! » </span><b>(Last Action Hero)</b>`,
];

// Permet de stocker la réplique sur laquelle on clique
let punchLineActuelle = null;

//Permet d'avoir l'affichage du message lors du chargement de la page
//Car à ce moment là, il n'y a pas de réplique sélectionnée
h2.textContent = "Aucune réplique sélectionnée";

// Fonction qui rempli le contenu des <p> avec les données du tableau punch
function majReplique() {
    repliques.forEach((replique, index) => {
        replique.innerHTML = punch[index];
    });    
}

majReplique()

repliques.forEach(function(punchLine, index) {
    punchLine.addEventListener("click", function() {
        // Si on clique de nouveau sur la même réplique, supprime la classe "jaune" pour redevenir normal
        if (punchLine === punchLineActuelle) {
            punchLine.classList.remove("jaune");
            // Réinitialise la réplique stockée dans punchLineActuelle
            punchLineActuelle = null;
            // Gère l'affichage du message dans H2 car aucune réplique n'est séléctionnée
            h2.textContent = "Aucune réplique sélectionnée";
        } else {
            // Sinon, on retire la classe "jaune" de la réplique précédente
            if (punchLineActuelle) {
                punchLineActuelle.classList.remove("jaune");
            }
            // Et on l'ajoute à la nouvelle réplique que l'on viens de cliquer
            punchLine.classList.add("jaune");
            punchLineActuelle = punchLine;
            // Gère l'affichage de la réplique sélectionnée
            // (index + 1) car de base le premier index est [0]
            // Sans cela, les numéro de réplique seraient 0, 1, 2, 3 au lieu de 1, 2, 3, 4
            h2.textContent = "Réplique sélectionnée : " + (index + 1);
        }
    });
});

buttonUP.addEventListener("click", function () {
    // Const qui retire la 1er réplique du tableau punch à l'aide de la fonction shift
    // Qui permet de rétirer la réplique de l'index[0] du tableau et la stock dans premiereReplique
    const premiereReplique = punch.shift();
    // On ajoute la réplique stocké dans premiereReplique avec la fonction push
    // De cette façon elle se retrouve à la fin du tableau
    punch.push(premiereReplique);
    // Ici on remet à jour le contenu des <p> avec le nouveau contenu du tableau punch
    majReplique()
});

buttonDown.addEventListener("click", function () {
    // Const qui retire la derniere réplique du tableau punch à l'aide de la fonction pop
    // Qui permet de rétirer la réplique du dernier index du tableau et la stock dans derniereReplique
    const derniereReplique = punch.pop();
    // On ajoute la réplique stocké dans derniereReplique avec la fonction unshit
    // De cette façon elle se retrouve au début du tableau
    punch.unshift(derniereReplique);
    // Ici on remet à jour le contenu des <p> avec le nouveau contenu du tableau punch
    majReplique()
});