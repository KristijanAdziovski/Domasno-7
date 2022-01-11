let animal = {}
animal.name ="Max";
animal.kind="kind";
animal.speeking="Hey bro!!!"
animal.speek=function(){
    return `Dog say :${this.speeking}`;
}
let say = animal.speek()
console.log(say);

//BONUS

let dog={}
dog.name=prompt("Enter the dog name");
dog.kind=prompt("Enter the kind ");
dog.speeking=prompt("What dog say ?");
dog.speek=function(){
    return `Hi my name is ${this.name}, i am very ${this.kind}, and i say ${this.speeking};`
}
let newSay=dog.speek()
console.log(newSay);