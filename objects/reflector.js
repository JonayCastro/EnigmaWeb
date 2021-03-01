class Reflector{
    constructor(posInit, obj){
        this.posInit = posInit;
        this.objDic = obj;
        this.dicIn = [];
        this.dicOut = [];
    }

    init(){
        this.dicIn = this.objDic.creaDicEncode(this.objDic.getPosChar(this.posInit));
        this.dicOut = this.objDic.creaReverseDic(this.dicIn);
    }

    codifica(item){
        return this.dicOut.indexOf(this.dicIn[item]);
    }
}