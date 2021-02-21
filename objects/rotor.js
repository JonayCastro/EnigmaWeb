class Rotor{
    constructor(posInit, posPas, obj){
        this.posInit = posInit;
        this.posPass = posPas;
        this.dicIn = [];
        this.dicOut = [];
        this.objDic = obj;
    }
    
    setPosInit(c){
        this.posInit = c;
    }
    
    setPosPas(c){
        this.posPass = c;
    }
    
    creaDics(){
        this.dicIn = this.objDic.creaDicEncode(this.objDic.getPosChar(this.posInit));
        this.dicOut = this.objDic.creaDicEncode(this.objDic.getPosChar(this.dicIn[4]));
    }
    
    avanza(){
        if(this.dicIn[0] === this.posPass){
           this.dicIn =  this.objDic.creaDicEncode(this.objDic.getPosChar(this.dicIn[1]));
        } 
    }

    
}