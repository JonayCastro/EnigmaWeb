class Reflector{
    constructor(obj){
        this.objDic = obj;
        this.dicIn = [];
        this.dicOut = [];
        this.tipo = 'relfector';
    }

    init(posInit){
        this.dicIn = this.objDic.creaDicEncode(this.objDic.getPosChar(posInit));
        this.dicOut = this.objDic.creaReverseDic(this.dicIn);
    }

    codifica(item){
        return this.dicOut.indexOf(this.dicIn[item]);
    }

    getTipo(){
        return this.tipo;
    }
}