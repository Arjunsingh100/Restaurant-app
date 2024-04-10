// class person{
//     constructor(name,add){
//         this.name=name;
//         this.add=add;
//     }
//     printIt(name) {
//         console.log(this.name);
//     }
// }
// class teacher extends person{
//     constructor(name,add,tname){
//         super(name,add);
//         this.tname=tname;
//     }
// }

// let obj=new teacher('arjun','noida','singh');
// let obj1=new teacher('singh','benglure','rishabh');
// let obj2=new teacher('rahul','delhi','nikita');
// let obj3=new teacher('kuber','aligarh','kamal');

// let obj4={name:'rajendra',add:'delhi',func:()=>{console.log(this)}};
// console.log(obj4.func());

// let arr=[obj,obj1,obj2,obj3];
// console.log(arr);

// console.log(obj);
// obj.printIt();

//apply call bind

let obj1={
    name:'arjun',
    roll:11,
    print:function (ele1,ele2,ele3){
        console.log(ele1,ele2,ele3);
        console.log('i am print functuom')
        console.log(this.name)
        console.log(this.roll);
    }
}

let obj2={
    name:'singh',
    roll:12
}

obj1.print.call(obj2);
obj1.print.apply(obj2,[1,24,5]);

let printobj1=obj1.print.bind(obj2);
printobj1(12,13,14);
printobj1('kjdkf',17,[54,34,56,76]);


//clousure

function Person(){
    let a=23;
    return function(code){
        let pin=a+code;
        console.log(pin)
    }
}

let createPass=Person()
console.log(createPass(120));

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }

  const myName={
    name:'arjun',
    education:'BCA'
  }
  const myUpdatedVehicle={...myVehicle,...updateMyVehicle,...myName};
  console.log(myUpdatedVehicle);