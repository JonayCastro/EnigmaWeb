var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var abecPuntos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '$', '%', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '^', '_', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var elementos;
var textAreaIn;
var textAreaOut;
var rotores = [];
var reflector;
var salida = '';

const dic = new Diccionario(abecedario);

window.onload = ()=>{
    textAreaIn = document.getElementById('in-text');
    textAreaIn.addEventListener('keyup', textIn);
    //textAreaIn.addEventListener('change', textIn);

    textAreaOut = document.getElementById('out-text');

    elementos = document.getElementsByClassName('rotor-select');
    
    for(var i=0;i<elementos.length;i++){
        loadAlpha(elementos[i]);
        posInitRandom(elementos[i]);
        elementos[i].addEventListener('change', getOption);
    }

    for(var j = 0;j<3;j++){
        let idenInit = '#rotor-init-'+j
        let idenPaso = '#rotor-salto-'+j

        let posInitRo = $(idenInit).val();
        let posPaso = $(idenPaso).val();

        let rotor = new Rotor(posPaso, dic);
        initRotor(rotor, posInitRo);
        rotores.push(rotor);
    }
    let posInitRe = $('#reflector-init').val();
    reflector = new Reflector(dic);
    reflector.init(posInitRe);
}

function initRotor(rotor, posInit){
    rotor.init(posInit);
}

function avanzaCtrl(){
    rotores[0].avanza();
    elementos[0].value = rotores[0].getPosInit();
    
    if(rotores[0].isInPaso()){
        rotores[1].avanza();
        elementos[2].value = rotores[1].getPosInit();
    }
    if(rotores[1].isInPaso()){
        rotores[2].avanza();
        elementos[4].value = rotores[2].getPosInit();
    }
}

function textIn(e){
    console.log('textIn');
    if(e.target.value.length !== 0){
        for(let j = 0;j<elementos.length;j++){
            elementos[j].setAttribute('disabled', true);
        }
        let one = dic.getPosChar((textAreaIn.value.charAt(textAreaIn.value.length-1).toUpperCase()));
        
        let two = rotores[0].codificaIda(one);
        let three = reflector.codifica(two);
        let four = rotores[0].codificaVuelta(three);
        let five = dic.getCharDic(four);
        salida+=five;
        textAreaOut.value = salida;

        avanzaCtrl();
    }else{
        for(let h = 0;h<elementos.length;h++){
            elementos[h].removeAttribute('disabled');
        }
        salida = '';
        textAreaOut.value = '';
    }
    
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
    let idSelec = (e.target.id.split('-'));

    if(idSelec[0] === 'rotor'){
        if(idSelec[1] === 'init'){
            rotores[idSelec[2]].init(selec);
        }else{
            rotores[idSelec[2]].setNewPaso(selec);
        }
    }else{
        reflector.init(selec);
    }

    textAreaIn.value = '';
    textAreaOut.value = '';
    
    
}