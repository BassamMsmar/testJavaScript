age = 18

let isAllowed ;


if (age >= 18){
    isAllowed = true
}
else if (age < 18){
    isAllowed = false
}

console.log(isAllowed)

// ternary operator

let isAllowed2 = (age >= 10 ) ? true : false

console.log(isAllowed2)


let username = 'admin'
let password = 123456

if (username == 'admin' && password == 123456){
    console.log('Welcome')
}

if (username == 'admin' || password == 654321){
    console.log('Welcome')
}



let i = 10

while( i > 0 ){
    console.log(i)
    i--
}


let i2 = 0

while( i2 <= 10 ){
    console.log(i2)
    i2++
   
}


