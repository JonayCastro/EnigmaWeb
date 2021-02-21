var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var abecPuntos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '$', '%', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '^', '_', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var elementos;
var textAreaIn;
var textAreaOut;

const dic = new Diccionario(abecPuntos);

window.onload = ()=>{



    textAreaIn = document.getElementById('in-text');
    textAreaIn.addEventListener('keypress', textIn);

    textAreaOut = document.getElementById('out-text');

    elementos = document.getElementsByClassName('rotor-select');
    
    for(var i=0;i<elementos.length;i++){
        loadAlpha(elementos[i]);
        posInitRandom(elementos[i]);
        elementos[i].addEventListener('change', getOption);
    }
}

function textIn(e){
    textAreaOut.value = e.target.value;
}

function posInitRandom(e){
    let posRandom = parseInt(Math.random()*(abecedario.length-0)+0);
    e.value = abecedario[posRandom];
}

function loadAlpha(rotor){
    for (letter in abecedario){
        let option = document.createElement('option');
        option.setAttribute('id','rotor-'+abecedario[letter].toLowerCase()+'-option');
        option.innerHTML = abecedario[letter];
        rotor.append(option);
    }

}

function getOption(e){
    let selec = e.target.value;
    let idSelec = e.target.id;

    textAreaIn.value = '';
    textAreaOut.value = '';
    
    console.log(selec+' '+idSelec);
}