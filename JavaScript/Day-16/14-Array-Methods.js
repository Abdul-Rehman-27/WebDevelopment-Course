//----------------Array Methods--------------

//-push() – add at end
console.log("--------Add Toyota at end---------------")
let cars = ["audi", "bmw", "mehran", "maruti"];
cars.push("toyota");
console.log(cars); 

// //-pop() – remove from end and return that deleted element
console.log("--------Delete element from end---------------")
cars.pop();     // remoe toyota and return
console.log(cars);

//-unshift() – add at start
console.log("----------------Add Ferrari at end------------------")
cars.unshift("ferrari");
console.log(cars);

//-shift() – remove from start and return that deleted 
console.log("--------Delete element from start---------------")
cars.shift();   //remoe ferrari and return
console.log(cars);

//-Example
console.log("--------Followers Example-----------")
let followers = ['a', 'b', 'c'];
let blockUser = followers.pop();
console.log("Followers:",followers);
console.log("View Block Followers:",blockUser);