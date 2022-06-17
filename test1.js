function Dog(name, age, color){
    this.name=name;
    this.age=age;
    this.color=color;

    this.bark=function(){
        console.log("I', barking");
    };
}
class Cat{
    constructor(name,age,color){
    this.name=name;
    this.age=age;
    this.color=color;
    }

    mew(){
        console.log("I'm meowing");
    }
}
function testObjects(){

    //objects litera
    let dog1={
        name:"Frida", 
        age:5, 
        color:"White", 
    };
    let dog2={
        name:"Frida", 
        age:5, 
    };
    console.log(dog1, dog2);


    //object constructor
    let dog3=new Dog("Frida",5,"White");
    let dog4=new Dog("Venom",2,"Black");
    console.log(dog3, dog4);
    console.log(dog3.name);
    console.log(dog3.bark());



    // classes
    let cat1=new Cat("Boni",1,"white");
    let cat2=new Cat("stranger",3,"greey");
    console.log(cat1, cat2);
    console.log(cat1.name);
    console.log(cat1.mew());
}


function runTests(){
    console.log("This is a test ;)");
    testObjects();
}