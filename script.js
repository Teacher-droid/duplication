// récupere l'element à l'id btn-multi 
let btnID = document.getElementById("btn-multi");
// crée un ecouteur d'evenement qui va effectuer une fonction à l'appel d'un click
btnID.addEventListener("click", makeTr);

function makeTr() {
    // en 1er temps crée une boucle qui va stocker les elements dans des variables (tr > td)
    for (let i = 0; i <= 10; i++) {
        // récupere la valeur(value) mise dans l'input number
        let table = document.getElementById("nb-multi").value;
        let tableauHTML = document.getElementById("table-multiplication");

        // création de la variable tr
        let tr = document.createElement('tr')

        // l'on va écouté le passage de la sourie sur la ligne
        tr.addEventListener("mouseover", trMouseOver)



        // il faut écouté quan la sourie par de sur l'élément pour repassé ca couleur de fond a sont état initial
        tr.addEventListener("mouseout", trMouseLeave)

        // cration des td
        let tdTable = document.createElement('td')
        let tdSymboleMultiplication = document.createElement('td')
        let tdindex = document.createElement('td')
        let tdegal = document.createElement('td')
        let tdresult = document.createElement('td')

        // ajout les valeurs correspondants aux variables
        tdTable.innerText = table
        tdSymboleMultiplication.innerText = " x "
        tdindex.innerText = i;
        tdegal.innerText = "="
        tdresult.innerText = table * i

        // ajoute des td au tr
        tr.appendChild(tdTable)
        tr.appendChild(tdSymboleMultiplication)
        tr.appendChild(tdindex)
        tr.appendChild(tdegal)
        tr.appendChild(tdresult)

        // ajout de tr au tableau html
        tableauHTML.appendChild(tr)
    }
    // la boucle se fait 10 fois
}


function trMouseOver(event) {
    event.target.parentNode.style.backgroundColor = "red"
}

function trMouseLeave(event) {
    event.target.parentNode.style.backgroundColor = ""
}
