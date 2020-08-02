

let Animal=class {
    constructor(kind,defaultHp,hp,name,atk){
        this.kind=kind;
        this.defaultHp=defaultHp;
        this.hp=hp;
        this.name=name;
        this.atk=atk;
    }
    //Getter
    get brief(){
        return this.calcBrief()
    }
    //Method
    calcBrief(){
        return `种族 ${this.kind} ：${this.name} 的默认血量为${this.defaultHp}，当前血量为${this.hp}`
    }

}


const human=new Animal("human",100,100,"小明",10)
const dog=new Animal("dog",40,40,"哈士奇",20)


dog.bite=function(a){
    console.log(this)
    a.hp-=this.atk
    console.log(`${a.name}被${this.name}咬，掉血${this['atk']},剩余血量${a.hp}`)
}
/**
 * @description: 攻击函数
 * @param {type} a,b 两个不同的动物
 * @return: 
 */
function attack(a,b){
    a["hp"]-=b["atk"]
    console.log(`${a.name}收到了${b.name}的攻击，掉血${b['atk']},剩余血量${a.hp}`)
}

attack(human,dog)
dog.bite(human)


