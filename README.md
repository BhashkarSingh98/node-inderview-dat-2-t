Qus1:
<h1> What are the different types of HTTP requests?</h1>
HTTP Stand for "Hyper Text Transfer Protocol" which specifies a collection of request methods to specify what action is to be performed on a particular resource.

HTTP Request methods are as mentioned below:
GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.
POST:POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
PUT: A PUT request is used to modify the data on the server.
PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.
DELETE: A DELETE request is used to delete the data on the server at a specified location.

Qus2:
<h1> Explain the concept of middleware in Node.js.</h1>
Middleware are like general function which takes three parameters as request,response and next.
These middleware are used to execute some function before the resposne is send back to the client.
Middleware mostly get used for authentication if the API request is called from the client with proper user credentials or not.
next() function is very important,after the end of each middleware we should execute the next() function so that the program execution can move w=either to next middleware or to main route.

Qus3:
<h1>Explain CORS?</h1>
CORS Stands for "cross-rigin resource sharing".
CORS is a mechanism by what data or any other resource of a site could be shared to a third party website when there is need.

Question4:
<h1>What is Express?how it helps you to create a backend application?</h1>
Express is a small framework that sits on the top of nodejs wehb server functionality to simplicity its APIs and add helpful features.

It makes it easier to oragnize your application functionality with middleware and routing.


Qus5:
<h1>Explain min 5 status codes gets used in Backend development?</h1>
An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled.

HTTP status codes are:-

200:This is the standard "OK" status code for a successful request.
400:This indicates the "BAD REQUEST" response status code means the server cannot or will not process the request due to something i.e preceived to be client error.
401:This status code request occurs when authentication is required but has failed or not been provided.
402:This status code request occurs for payment.The initial aim for creating this code was using it for digital payment system.
403:The client does not have access rights to the content i.e it is unauthorised so the server is refusing to give the requested resource.
404:A status code 404 occurs when the request is valid, but the resource cannot be found on the server.
500:The status code 500 happens when the server cannot fulfill a request due to an unexpected issue.
503:The status code 503 occurs when the server is not ready to handle the request and due to this give error of 503 as service unavialable.

Qus6:
<h1>What is the Difference between HTTP and HTTPS?</h1>
HTTPS
HTTP stands for "Hyper Text Transfer Protocol".
In HTTP,URL begins with "http://".
HTTP is considered to be insecured.
HTTP speed is faster than HTTPS.
HTTP uses port number 80 for communication.
HTTPS
HTTPS stands for "Hyper Text Transfer Protocol secure".
In HTTPS,URL begins with "https://".
HTTPS is secure.
HTTPS speed is slower than HTTP.
HTTPS uses port number 443 for communication.

Qus7:
<h1>What are JWT tokens?</h1>
To achieve authentication in the APIs, we use JWT tokens.
They stand for JSON Web Tokens.
When any user logs-in by giving its username and password, then we will receive the username and password in the request body of the API.
Then using username and password we will create one token and assign it to the user.
Then whenever this user will be calling any API, then this token will be passed from front-end application, then from backend application we will verify this token is valid or not.
This is how we can achieve authentication in the APIs using JWT tokens.