/**
 * --------------------
 *          STEPS
 * ---------------------
 * 1. Create a post api on the server side
 * 2. Client side send data via post
 * 3. set fetch method inside the fetch option (second parameter)
 * 4. option will have three things: method
 * 5. options will have headers: 'content-type' : 'application/json'
 * 6. don't forget to send data by JSON.stringify in the body
 * 7. On the server side: don't forget to use express.json() middleware
*/ 