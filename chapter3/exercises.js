//*pg53*EXERCISE 3.1***//

let myList = ["Milk", "Bread", "Apples"];
console.log(myList.length);
myList[1] = "Bananas";
console.log(myList);

//**END of EXERCISE 3.1******//


//**exercise 3.2*****//
let myList = [];
myList.push("Milk", "Bread", "Apples");
myList.splice(1, 1, "Bananas", "Eggs");
let removeLast = myList.pop();
console.log(removeLast);

myList.sort();
console.log(myList.indexOf("Milk"));
myList.splice(1, 0, "Carrots", "Lettuce");
let myList2 = ["Juice", "Pop"];
let finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);

//**END of exercise 3.2*****//


//**exercise 3.3*******//
let myArr = [1, 2, 3];
let bigArr = [myArr, myArr, myArr];
console.log(bigArr[1][1]);
console.log(bigArr[0][1]);
console.log(bigArr[2][1]);

//**END of EXERCISE 3.3******//

//****exercise 3.4*******//

let myCar = {
    make: "Toyota",
    model: "Camry",
    tires: 4,
    doors: 4,
    color: "blue",
    forSale: false
};
let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);

//***END OF EXERCISE 3.4******//

//**exercise 3.5******//
//a)creating and object "people"
let people = {friends:[]};

//b)creating 3 friend objects
let friend1 = {first: "Laurence", last: "Svekis", id: 1};
let friend2 = {first: "Jane", last: "Doe", id: 2};
let friend3 = {first: "John", last: "Doe", id: 3};

//c)adding friend objects to friends array inside the people object//using push() after accessing friends array 
people.friends.push(friend1, friend2, friend3);
console.log(people);

//**END OF EXERCISE 3.5******//

//**Projects***//

//**pg68*Manipulating and array*****//

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
//a)
theList.shift();//using shift() to remove first element
theList.pop();//pop() to remove  last element

theList.unshift("FIRST");//using unshift() to add first element "FIRST"
theList[3] = "hello World";//assigning "hello world", to the fourth item(which is in index 3)
theList[2] = "MIDDLE";//assigning "MIDDLE", to the third item(at index 2)
theList.push("LAST");//using push() to add "LAST" element in last position...
theList.splice(4,3);//using splice()to remove from index 4 three elements
console.log(theList);
