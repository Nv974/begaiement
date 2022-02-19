/*

Critères d'évaluation :
- Capacité à résoudre un problème donné
- Voir ce que le candidat peut réaliser en plus de l'énoncé demandé (amélioration du code, lisibilité, gestion des erreurs, etc.)

######################################################################
# AUCUNE LIBRAIRIE EXTERNE NE DOIT ETRE UTILISÉ (pas de JQuery, etc) #
######################################################################

[
  [A, B, C],
  [A, [B, C, A], C],
  [[A, B, C], B, C],
  [C, A, [B, C, A]],
  [[A, B, [C, B, A]], B, C]
  [[A1, 1B, [C, B, A]], B, C]
]


*/

const tab = new Array(
    new Array('A', 'B', 'C'),
    new Array('A', new Array('B', 'C', 'A'), 'C'),
    new Array(new Array('A', 'B', 'C'), 'B', 'C'),
    new Array('C', 'A', new Array('B', 'C', 'A')),
    new Array(new Array('A', 'B', new Array('C', 'B', 'A')), 'B', 'C'),
    new Array(new Array('A1', '1B', new Array('C', 'B', 'A')), 'B', 'C'),
);

//1/ Parcourir le tableau tab ci-dessus et trouver le nombre total de "A" présent
function findA(tab) {
    //your code
    let count = '0';

    const newTab = tab.join().split(',');

    newTab.forEach((elt) => {
        const splitElt = elt.split('');

        splitElt.forEach((newElt) => {
            if (newElt.toLowerCase() === 'a') count++;
        });
    });

    console.log(`Il y a ${count} 'A' dans le tableau `);
}

//2/ En adaptant la fonction findA, créer une fonction find, prenant en paramètre un tableau (argument obligatoire) et un second argument (string, non obligatoire)
//si le second argument est renseigné, afficher le nombre d'occurence dans le tableau,
//sinon retourner les différentes occurences du tableau ainsi que le nombre de chaque occurence
//BONUS : la fonction find doit fonctionner avec un tableau peu importe sa dimension
function find(tab, string) {
    let occ = 0;
    let totalOcc = 1;

    const newTab = tab.join().split(',');

    newTab.sort();

    if (string) {
        newTab.forEach((elt) => {
            if (elt === string) {
                occ++;
            }
        });

        console.log(`Il y a ${occ} ${string} en tout dans le tableau `);
    } else {
        for (let i = 0; i < newTab.length; i++) {
            if (newTab[i] === newTab[i + 1]) {
                totalOcc++;
            }
        }
        console.log(`Il y a ${totalOcc} occurences en tout dans le tableau `);
    }

    //your code
}

//find(tab);

//3/ Sans supprimer la fonction find() précédente, réécriver celle-ci avec le moins de caractère possible
function findOptimize(tab, string) {
    let count = 0;
    const newTab = tab.join().split(',').sort();

    if (string) {
        newTab.forEach((elt) => elt === string && count++),
            console.log(`Il y a ${count} ${string} en tout dans le tableau `);
    } else {
        count = 1;
        for (let i = 0; i < newTab.length; i++) {
            newTab[i] === newTab[i + 1] && count++;
        }
        console.log(`Il y a ${count} occurences en tout dans le tableau `);
    }

    //your code
}

//Test à exécuter :
//findA(tab);
//find(tab);
//find(tab, 'B');
//find(tab, 'A1');
//findOptimize(tab);
//findOptimize(tab, 'A');

//code strong !
//à retourner par email à support@squirrel.fr
//Merci d'indiquer le temps nécessaire à la réalisation de ce test : Xh Xmin
