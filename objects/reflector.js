class Reflector{
    constructor(posInit, obj){
        this.posInit = posInit;
        this.obj = obj;
        this.dicIn = [];
        this.dicOut = [];
    }

    creaDicEncode(){
        this.dicIn = this.objDic.creaDicEncode(this.objDic.getPosChar(this.posInit));
        this.dicOut = this.dicIn.reverse();
    }
}