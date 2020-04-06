const http = new EasyHTTP

//get users
/* http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err))
 */

//post user
/* const data ={
    name: 'John Doe', 
    username: 'johndoe', 
    email: 'jdoe@gmail.com'
}
http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err)) */


//put user
/* const data ={
    name: 'John Doe', 
    username: 'johndoe', 
    email: 'jdoe@gmail.com'
}
http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err)) */

//delete user
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err => console.log(err)) 