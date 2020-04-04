const http = new easyHTTP

//Get posts
/* const response = http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
    if (error) {
        console.log(error)
    } else {
        console.log(posts)
    }
})
 */

// Create data
/* const data = {
    title: 'Custom Post', 
    body: 'This is a custom post'
}

//Create post
http.post('https://jsonplaceholder.typicode.com/posts/', data, function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post)
    }

}) */

//Update a post
/* const data = {
    title: 'Custom Post', 
    body: 'This is a custom post'
}

http.put('https://jsonplaceholder.typicode.com/posts/1',data, function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post)
    }
}) */

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err)
    } else {
        console.log(response)
    }
})