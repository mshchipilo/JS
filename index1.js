let bool=false
console.log(typeof bool)
bool=String(bool)
console.log(typeof bool)
// приведение к строчному

let str="464"
let num=Number(str)
console.log( num)

let num1=Number ("\t \n")
console.log (num1)

let bool1=Boolean(null)
console.log(bool1)

console.log(2>3)
console.log(2==2)
console.log(2!=2)
console.log(null==undefined)

let bool2=!true
console.log(bool2)

// let answer=prompt('сколько тебе лет?','')
// console.log(answer)
// if (answer<18){
//     console.log('aaaa')
// } else {
//     console.log('ffffff')
// }



// let login="shchipilo"
// let password="12345"
// let LoginInput=prompt('Введите Логин')
// let passwordInput=prompt('Введите Пароль')
// if (login === LoginInput && password === passwordInput){
//     console.log('Верно')    
// } 
// else {
//     console.log('Ошибка')
// }



// let arrNum=[1,4,7]
// if (arrNum[0] > 4) console.log('true')
// if (arrNum[1] > 4) console.log('true')
// if (arrNum[2] > 4) console.log('true')

// let arr=[1,45,78,65,'ffff',554477,554,'aaaa',44,'ffk',4444,'sdsssss',444225558]
// for (let i=0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }


// for (let j=10; j < 100; j++)
// {
//     console.log(j);
// }


// let i=0
// while (i<13)
// {
//     console.log(i);
//     if(i==7) break;
//     i++;
// }

// let i=31
// while (i<60)
// {
//     console.log(i);
//     i++;
// }

let i=10
while (i<280)
{
        if(i%10==0) console.log(i)

    i++;
}