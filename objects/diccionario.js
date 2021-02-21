class Diccionario{
    constructor(dic){
        this.dic = dic;
    }
    creaDicEncode(pos){
        return this.dic.slice(pos).concat(this.dic.slice(0, pos));
    }

    getPosChar(char){
        return this.dic.indexOf(char);
    }
 
}