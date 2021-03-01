class Rotor{
    constructor(posInit, posPas, obj){
        this.posInit = posInit;
        this.posPass = posPas;
        this.dicIn = [];
        this.dicOut = [];
        this.objDic = obj;
    }
    
    init(){
        this.dicIn = this.objDic.creaDicEncode(this.objDic.getPosChar(this.posInit));
        this.dicOut = this.objDic.creaDicEncode(this.objDic.getPosChar(this.dicIn[4]));
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

    isInPaso(){
        return this.dicIn[0] === this.posPass;
    }

    
}