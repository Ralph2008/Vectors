class resultat{
    constructor(x, y){
        this.x = "";
        this.y = "";
    }
}



function isnumber(nbr){
    if(typeof nbr != "Number"){
        resultbloc.innerHTML = "Veuillez entrer un nombre.";
        resultbloc.style.color = "red";
    }
}

const resultbloc = document.getElementById("resultveccoo");

const bouton = document.getElementById("bouton1");

bouton1.addEventListener('click', function(){
    resultbloc.innerHTML = "";
    let xA = document.getElementById("xA").value;
    let xB = document.getElementById("xB").value;
    let yA = document.getElementById("yA").value;
    let yB = document.getElementById("yB").value;

    resultbloc.append("Coordonées X : ", xB-xA, " ; Coordonées Y : ", yB-yA);
})