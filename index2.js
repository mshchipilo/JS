// let arrNumbPhone=[80257172184, 80293657079, 80293657072]
// for (let i=0; i < arrNumbPhone.length; i++){
// switch(arrNumbPhone[i]){
//     case 80257172184:
//         console.log('Номер Маши')
//         break;
//     case 80293657079:
//         console.log('Номер мамы')
//         break;
//     case 80293657072:
//         console.log('Номер папы')
//         break;
//     default:
//         console.log('Номер не найден')
// }
// }

// let arr=[1,25,18,7,27,'10']
//     arr.push (100)
// console.log(arr)
//     arr.pop()
// console.log(arr)
//     arr.shift()
// console.log(arr)


// let str="masha, sasha , stas , maksim"
// let arr=str.split(",")
// console.log(arr)

// let str="masha sasha stas maksim"
// let arr=str.join(",")
// console.log(arr)

// let mas=[1,25,18,7,27,'10']
// let arr=mas.includes(100)
// console.log(arr)

// let mas=[1,25,18,7,27,'10']
// let arr=mas.fill(0)
// console.log(arr)

// let mas=[1,25,18,7,27,'10']
// let mas1=[2,5,8,7,45,'44']
// let arr=mas.concat(mas1)
// console.log(arr)

// const obj={id:1,name:'Pasha'}
// console.log (obj.id)

// !!!!!!!!!const arrObj=[
//     {id:1,name:'Pasha'}, 
//     {id:2,name:'Masha'},
//     {id:3,name:'Sasha'},
// ]
// arrObj.find(el=>e1.id===1)
// console.log(arrObj)


// function showConsole(){
//     let x=[[1,2],[2,3],5]
//     let arr=x.flat()
//     console.log(arr)
// }
// showConsole();
// showConsole();

// let sum=function() {
//     let x=[[1,2],[2,3],5]
//     let arr=x.flat()
//     console.log(arr)
// }


// let func=(a,b,c,d)=>
// {
    
// }

// Заменить @ на !
// let str="aaa@bbb@ccc";
// console.log(str.replaceAll("@","!"));

// перевернутый текст
// let str = "123456789";
// str.split("").reverse().join("");
// console.log(str.split("").reverse().join(""));


// let str ="index.html"
// let checkHtml = (a) => a.substr(-5) == 'html'
// checkHtml(str)
// console.log(checkHtml(str))


// let user = {
//     name: "Artem",
//     isAdmin: true,
//     age:22
// }
// // console.log(user.isAdmin)
// //     delete user.isAdmin
// // console.log(user.isAdmin)

// // console.log(user["age"])

// // console.log("isAdmin" in user)

// for(key in user){
//     console.log(user [key])
// }

// let user = {
//     name: "masha",
//     isAdmin: false,
//     age: 26   
// }
// // console.log(user);
// delete user.age;
// console.log(user.age)
// user.age = 27
// console.log(user.age)

// const str = 'Hello'
// console.log(str)
// if (true){
//     const man = 'Man'
//     console.log(man)
//     console.lop(str)    
// }


// function doExample (a, callback) {
//     console.log (a);
//     callback ()
// }

// // let func1=function(){
// //     console.log(2);
// // }

// doExample(1, function(){
//     console.log(2);
// })


// let str = document.title
// console.log(str)
// document.title = 25
// console.log(document.title)

// const url = document.URL
// console.log(url)

// const domain = document.domain
// console.log(document.domain)

// const div = document.getElementById ("olllooo")
// console.log(div)

// const div = document.querySelector ("div")
// console.log(div)

// const div = document.getElementById ("olllooo")
// console.log(div)

// const div = document.querySelectorAll (".container")
// console.log(div)

// const div = document.querySelector(".container")
// div.style.color='red'
// console.log(div)

// -


// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) alert( 'Вы правы!' );





// const div = document.querySelector(".container")
// div.classList.add("hero-slider");
// console.log(div)

// const div = document.querySelector(".container")
// div.classList.remove("container");
// console.log(div)

// проверка
// const div = document.querySelector(".container")
// div.classList.contains("fff");
// console.log(div.classList.contains("fff"))

// const div = document.querySelector(".container")
// div.classList.toggle("hhhhh");
// console.log(div)


// вывод
// const div = document.querySelector(".home");
// console.log(div.id);
// console.log(div.className);
// console.log(div.title)

// div.setAttribute("title","red");
// console.log(div.title)

// div.removeAttribute("title");
// console.log(div.id);
// console.log(div.className);
// console.log(div.title)

// const div = document.createElement;
// div.id="myId";
// div.className="Hero";
// console.log(div.id);
// console.log(div.className)


// const btn = document.querySelector('.fff');
// btn.onclick = function (){
//     alert('Hello Button 2')
// }
// console.log(btn)



// let btn = document.querySelector('.jjj');

// function buttonClick(){
//     let input=document.getElementById('btn');
//     input.value='Masha'
// } 
// btn.addEventListener("click",buttonClick);


// let btn = document.querySelector('.jjj');

// function buttonClick(){
//     let input=document.getElementById('btn');
//     let num = input.value;
//     alert(Math.pow(num,2));
// } 
// btn.addEventListener("click",buttonClick);

let btn = document.querySelector('.jjj');

function buttonClick(){
let inputOne=document.getElementById('btn');
let inputTwo=document.getElementById('btn2');
let num1 = inputOne.value;
let num2 = inputTwo.value;
inputOne.value = num2;
inputTwo.value = num1;
} 
btn.addEventListener("click",buttonClick);