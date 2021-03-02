class Rotor{
    constructor(posPas, obj){
        this.posPass = posPas;
        this.tipo = 'rotor';
        this.dicIn = [];
        this.dicOut = [];
        this.objDic = obj;
    }
    
    init(posInit){
        this.dicIn = this.objDic.creaDicEncode(this.objDic.getPosChar(posInit));
        this.dicOut = this.objDic.creaDicEncode(this.objDic.getPosChar(this.dicIn[4]));

        /* console.log(this.dicIn);
        console.log(this.dicOut); */
    }

    getTipo(){
        return this.tipo;
    }

    codificaIda(item){
        return this.dicOut.indexOf(this.dicIn[item]);
    }

    codificaVuelta(item){
        return this.dicIn.indexOf(this.dicOut[item]);
    }
    
    avanza(){
        this.dicIn =  this.objDic.creaDicEncode(this.objDic.getPosChar(this.dicIn[1]));
    }

    getPosInit(){
        return this.dicIn[0];
    }

    setNewPaso(newPaso){
        this.posPass = newPaso;
    }

    isInPaso(){
        return this.dicIn[0] === this.posPass;
    }

    
}