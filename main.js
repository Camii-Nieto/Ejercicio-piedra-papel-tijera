const PIEDRA= "piedra";
const PAPEL= "papel";
const TIJERA= "tijera";

const empate= 0;
const victoria= 1;
const derrota= 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const textoResultado= document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", ()=>{
    play(PIEDRA);
})
papelBtn.addEventListener("click", ()=>{
    play(PAPEL);
})
tijeraBtn.addEventListener("click", ()=>{
    play(TIJERA);
})

function play(userOption){
    const machineOption= calcularOpcionMaquina();
    const resultado= calcularResultado(userOption, machineOption);

    userImg.src = "img/"+userOption+".png";
    machineImg.src = "img/"+machineOption+".png";

    if(resultado === empate){
        textoResultado.innerHTML= "Hubo un empate"
    }else if(resultado === derrota){
        textoResultado.innerHTML= "Perdiste!!"
    }else{
        textoResultado.innerHTML= "Ganaste!!"
    }
}


function calcularOpcionMaquina(){
   const number= Math.floor(Math.random() * 3);
   if(number === 0){
       return PIEDRA;
   } else if(number === 1){
       return PAPEL;
   } else if(number === 2){
       return TIJERA;
   }
}

function calcularResultado(userOption, machineOption){
    if(userOption === machineOption){
        return empate;
    } else if(userOption === PIEDRA){

        if(machineOption === PAPEL) return derrota;
        if(machineOption === TIJERA)return victoria;

    } else if(userOption === PAPEL){

        if(machineOption === TIJERA) return derrota;
        if(machineOption === PIEDRA)return victoria;

    }else if(userOption === TIJERA){
        
        if(machineOption === PIEDRA) return derrota;
        if(machineOption === PAPEL)return victoria;
    }
}