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

    getCharDic(indice){
        return this.dic[indice];
    }

    creaReverseDic(arr){
        let reArr = [];
        for(let i=arr.length-1;i>=0;i--){
            reArr.push(arr[i]);
        }
        return reArr;
    }
 
}