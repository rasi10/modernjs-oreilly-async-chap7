/* const sayHello = () => {
    console.log('Hello')
} */

// One line function does not need braces
//const sayHello = () => console.log('Hello')

//One line and returning the value
// const sayHello = () => 'Hello'

//Return object
//const sayHello = () =>({msg: 'hello '})
//console.log(sayHello())


/* const sayHello = name => console.log(`Hello ${name}`)
sayHello('Brad') */


// Multiple parameters need parenthesis
/* const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)
sayHello('Brad', 'Traversy') */



const users = ['Nathan','John','William']
/* const nameLengths = users.map(function(name){
    return name.length
}) */
//Shorter
/* const nameLengths = users.map((name) =>{
    return name.length
}) */
//Shortest
const nameLengths = users.map(name => name.length)    
console.log(nameLengths)
