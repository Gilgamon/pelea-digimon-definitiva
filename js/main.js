//Simplificacion de la toma de botones
let divAli= document.getElementById ("aliado");
let divEne= document.getElementById ("enemigo");
let ba1= document.getElementById ("ba1");
let ba2= document.getElementById ("ba2");
let ba3= document.getElementById ("ba3");
let ba4= document.getElementById ("ba4");
let be1= document.getElementById ("be1");
let be2= document.getElementById ("be2");
let be3= document.getElementById ("be3");
let be4= document.getElementById ("be4");
let listo= document.getElementById("listo");
//Funcion de constructora del tipo class en la que se basaran los objetos 
class Digimon {
    constructor ( a, b, c) {
    this.nombre = a;
    this.hp = b;
    this.skill= c;
}}
//Objetos hechos con en el Class (se agrego esto para hacer dinamica la utilizacion de las stadisticas y mas sencilla que con fetch)
let Agu= new Digimon ("Agumon", Math.ceil(Math.random() * 200), Math.ceil(Math.random() * 34));
let Gabu= new Digimon("Gabumon", Math.ceil(Math.random() * 190), Math.ceil(Math.random() * 40));
let Hawk= new Digimon("Hawkmon", Math.ceil(Math.random() * 180), Math.ceil(Math.random() * 50));
let Kera= new Digimon("Keramon", Math.ceil(Math.random() * 190), Math.ceil(Math.random() * 40));
//Array
let Digimons = [Agu,Gabu,Hawk,Kera];
//Recuperador de Datos Json y fetch
let aliJson = ()=>{
    fetch("data/digimons.json")
    .then((respuesta)=> {
        return respuesta.json()
    })
    .then((datos) =>{
        renderali (datos)
    }
    )
    .catch((error)=>{
        console.log (error)
    })
}
let renderali = (datos) =>{
    let op= sessionStorage.getItem("op")
    let digi = datos
    if (op== "1"){
        statali.innerText = `Nombre: ${digi[0].nombre} Att: ${digi[0].attributo} Att Elemental: ${digi[0].atributoElemental} Familia: ${digi[0].familia} HP base: ${digi[0].hp} Skill base: ${digi[0].skill}`
        }
    else if (op=="2"){
        statali.innerText = `Nombre: ${digi[1].nombre} Att: ${digi[1].attributo} Att Elemental: ${digi[1].atributoElemental} Familia: ${digi[1].familia} HP base: ${digi[1].hp} Skill base: ${digi[1].skill}`
        }
    else if (op=="3"){
        statali.innerText = `Nombre: ${digi[2].nombre} Att: ${digi[2].attributo} Att Elemental: ${digi[2].atributoElemental} Familia: ${digi[2].familia} HP base: ${digi[2].hp} Skill base: ${digi[2].skill}`
        }
    else if (op=="4"){
        statali.innerText = `Nombre: ${digi[3].nombre} Att: ${digi[3].attributo} Att Elemental: ${digi[3].atributoElemental} Familia: ${digi[3].familia} HP base: ${digi[3].hp} Skill base: ${digi[3].skill}`
        }
};
let eniJson = ()=>{
    fetch("data/digimons.json")
    .then((respuesta)=> {
        return respuesta.json()
    })
    .then((datos) =>{
        rendereni (datos)
    }
    )
    .catch((error)=>{
        console.log (error)
    })
}
let rendereni = (datos) =>{
    let op= sessionStorage.getItem("sel")
    let digi = datos
    if (op== "1"){
        stateni.innerText = `Nombre: ${digi[0].nombre} Att: ${digi[0].attributo} Att Elemental: ${digi[0].atributoElemental} Familia: ${digi[0].familia} HP base: ${digi[0].hp} Skill base: ${digi[0].skill}`
        }
    else if (op=="2"){
        stateni.innerText = `Nombre: ${digi[1].nombre} Att: ${digi[1].attributo} Att Elemental: ${digi[1].atributoElemental} Familia: ${digi[1].familia} HP base: ${digi[1].hp} Skill base: ${digi[1].skill}`
        }
    else if (op=="3"){
        stateni.innerText = `Nombre: ${digi[2].nombre} Att: ${digi[2].attributo} Att Elemental: ${digi[2].atributoElemental} Familia: ${digi[2].familia} HP base: ${digi[2].hp} Skill base: ${digi[2].skill}`
        }
    else if (op=="4"){
        stateni.innerText = `Nombre: ${digi[3].nombre} Att: ${digi[3].attributo} Att Elemental: ${digi[3].atributoElemental} Familia: ${digi[3].familia} HP base: ${digi[3].hp} Skill base: ${digi[3].skill}`
        }
};
//addEventListeners de los botones
ba1.addEventListener("click", set1);
ba2.addEventListener("click", set2);
ba3.addEventListener("click", set3);
ba4.addEventListener("click", set4);
be1.addEventListener("click", set5);
be2.addEventListener("click", set6);
be3.addEventListener("click", set7);
be4.addEventListener("click", set8);
listo.addEventListener("click",control);

//funciones que guardan las selecciones en el session storage
    function set1(){
    return sessionStorage.setItem("op", 1),
    divAli.innerText = "Elegiste a Agumon como tu digimon acompañante",
    aliJson()};
    function set2(){
    return sessionStorage.setItem("op",2),
    divAli.innerText = "Elegiste a Gabumon como tu digimon acompañante",
    aliJson()};
    function set3(){
    return sessionStorage.setItem("op",3),
    divAli.innerText = "Elegiste a Hawkmon como tu digimon acompañante",
    aliJson()};
    function set4(){
    return sessionStorage.setItem("op",4),
    divAli.innerText = "Elegiste a Keramon como tu digimon acompañante",
    aliJson()};
    function set5(){
    return sessionStorage.setItem("sel",1),
    divEne.innerText = "Elegiste a Agumon como enemigo",
    eniJson()};
    function set6(){
    return sessionStorage.setItem("sel",2),
    divEne.innerText = "Elegiste a Gabumon como enemigo",
    eniJson()};
    function set7(){
    return sessionStorage.setItem("sel",3),
    divEne.innerText = "Elegiste a Hawkmon como enemigo",
    eniJson()};
    function set8(){
    return sessionStorage.setItem("sel",4),
    divEne.innerText = "Elegiste a Keramon como enemigo",
    eniJson()};
    
    //funcion que se encarga de delimitar si eligio un digimon que pelee por nosotros
    function control(){
        let op= sessionStorage.getItem("op")
        if (op== null){ 
            swal.fire('Debes elegir un digimon')
        }else{
            control2()
        }
    }
    //funcion que se encarga de delimitar si eligio un digimon que pelee por el enemigo
    function control2(){
        let sel = sessionStorage.getItem("sel")
        if (sel== null){ 
            swal.fire('Debes elegir un enemigo')
        }else{
            SavName()
            azul()
        }
    }
    //funcion que se encarga de guardar el nombre del usuario si quiere usar uno
    function SavName(){
        return sessionStorage.setItem("tamer",document.getElementById("tamer").value)};
    //funcion que se encarga de cambiar el html para poder llevar a ccabo la pelea
    function azul(){
        let miPage= document.getElementById("miPagina")
        miPage.innerHTML = "<header>"+"<section class=titulo>"+
            "<h1 id=tit>BIENVENIDO A LA SECCION DE PELEA</h1>"+
        "</section>"+"</header>"+"<div id=pelal>"+"<button id=pelea onclick=buba()>START BATTLE</button>"+"<button id=regre onclick=regresar()>REGRESAR A LA SELECCION</button>"+"</div>"};
    //funcion que se encarga de regresarte al incio si asi lo quieres
        function regresar(){
        return sessionStorage.clear(),
        location.href="./index.html"
    }
    //funcion que se encarga de la pelea
    function buba (){
    let tn=sessionStorage.getItem("tamer")
    let daño1=0
    let hp1=0
    let daño2=0
    let hp2=0
    let op= sessionStorage.getItem("op")
    let sel = sessionStorage.getItem("sel")
    //seteo de las estadisticas del digimon segun la seleccion
    if (op== "1"){
        daño1=Agu.skill, hp1=Agu.hp
        }else if (op=="2"){
        daño1=Gabu.skill, hp1=Gabu.hp
        }else if (op=="3"){
        daño1=Hawk.skill, hp1=Hawk.hp
        }else if (op=="4"){
        daño1=Kera.skill, hp1=Kera.hp
        }
        if (sel=="1"){
        daño2=Agu.skill, hp2=Agu.hp
        }else if (sel=="2"){
        daño2=Gabu.skill, hp2=Gabu.hp
        } else if (sel=="3"){
        daño2=Hawk.skill, hp2=Hawk.hp
        } else if (sel=="4"){
        daño2=Kera.skill, hp2=Kera.hp
        }
        //escritura de la pelea en pantalla para que el jugador tenga forma de ver como salio la pelea sin entrar en la consola
        let round= 0
        document.getElementById("miPagina").innerHTML+= "<div id=aliado>"+"La vida de tu digimon al comenzar la pelea es de "+ hp1 +" de vida"+
        "<br>"+"La vida de tu rival al comenzar la pelea es de "+ hp2 +" de vida"+"<br>"+"</div>";
        //while que se encarga de ejecutar una pelea en automatico a forma de desgaste
        while (hp1 > 0 && hp2> 0){
        round +=1
        hp1-=Math.ceil(Math.random() * daño2 )
        hp2-=Math.ceil(Math.random() * daño1 )
        document.getElementById("miPagina").innerHTML+= "<div id=final>"+ tn +" este es el round "+ round +
        "<br>"+ tn + " tu vida restante es de "+ hp1 + "<br>" + tn +" la vida restante del rival es "+ hp2 +"<br>"
        }
        //Alerta que muestra como salio la pelea segun lo sucedido en el while anterior
        if (hp1<=hp2) {swal.fire('Tu Digimon se ha debilitado, la pelea duro ' + round + ' rounds')
        } else {swal.fire('Tu digimon ha ganado, la pelea duro ' + round + ' rounds')}
        } 
        //for que se encarga de mostrar las estadisticas de todos los digis a la vez y una vez aplicado el calculo (seria como un hack). 
        for (let i = 0; i < Digimons.length; i+=1) {
        console.log (Digimons[i].nombre);
        console.log (Digimons[i].hp);
        console.log (Digimons[i].skill);
    }
