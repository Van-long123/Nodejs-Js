// const array=[1,2,3];
// const array2=[...array,4,5];
// console.log(array2);



// // const obj1 = { a: 1, b: 2 };
// //  const obj2 = { b: 3, c: 4 }; 
// const obj1 = { a: 1, b: 2 };
//  const obj2 = { c: 3, d: 4 };
// const combinedObj = { ...obj1, ...obj2 };
//  console.log(combinedObj); // { a: 1, b: 3, c: 4 }


//  const number=(a,b,...number)=>{
//     console.log(a,b);
//     console.log(number);
//  }
//  number(1,2,3,4,5,6);   


// const array=[1,2,3];
// const [a,b,c]=array;
// console.log(array[2]);
// console.log(b);
const obj1 = { fullname: "long", phone: 2213 };
const {fullname,phone}=obj1;
// console.log(fullname)
// console.log(phone)

const array1=[{fullname: "long", phone: 2213},{fullname: "long1", phone: 22131},{fullname: "long2", phone: 22132}];
const [a,b,c]=array1;
console.log(a)
