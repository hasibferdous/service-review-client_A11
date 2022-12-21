import './Blogs.css'

const Blogs = () => {

    return (
        <div className='lg:m-11 lg:px-11 py-11 bg-slate-300'>
        <div className='blog mt-5 lg:ms-4'>
        <h3><u>Questions & Answers</u></h3>

<h5><b>a. Difference between SQL and NoSQL?</b></h5>
<p><table>
  <tr>
    <th>SQL</th>
    <th>NoSQL</th>
    
  </tr>
  <tr>
    <td>1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
    <td>1. Non-relational or distributed database system..</td>
    
  </tr>
  <tr>
    <td>2. These databases have fixed or static or predefined schema.</td>
    <td>2. They have dynamic schema.</td>
    
  </tr>
  <tr>
    <td>3. These databases are best suited for complex queries.</td>
    <td>3. These databases are not so good for complex queries.</td>
    
  </tr>
  <tr>
    <td>4. Follows ACID property.</td>
    <td>4. Follows CAP(consistency, availability, partition tolerance).</td>
    
  </tr>
  <tr>
    <td>5. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</td>
    <td>5. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</td>
    
  </tr>
</table>
</p>


<h5><b>b. What is JWT, and how does it work?</b></h5>
<p >JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
             This information can be verified and trusted because it is digitally signed.</p><p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties.
                What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings:<p>
            1. The header and the payload.
            2. The signature.</p></p>


<h5><b>c. What is the difference between javascript and NodeJS?</b></h5>
<p><table>
  <tr>
    <th>JavaScript</th>
    <th>NodeJS</th>
    
  </tr>
  <tr>
    <td>1. JavaScript is a proper high-level programming language used to create web scripts.</td>
    <td>1. Node.js is a run time environment built on google’s v8 engine.</td>
    
  </tr>
  <tr>
    <td>2. JavaScript is executed in the browser.</td>
    <td>2. Node.js gives us the ability to execute JavaScript outside the browser.</td>
    
  </tr>
  <tr>
    <td>3. JavaScript can manipulate DOM or add HTML within.</td>
    <td>3. Node.js doesn’t have the capability to add HTML.</td>
    
  </tr>
  <tr>
    <td>4. JavaScript is mainly used to create front end web applications or develop client-side.</td>
    <td>4. Node.js is used on the back end development that is server-side development.</td>
    
  </tr>
  <tr>
    <td>5. JavaScript follows the standard of JavaScript when writing programs.</td>
    <td>5. Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser..</td>
    
  </tr>
</table>
</p>

<h5><b>d. How does NodeJS handle multiple requests at the same time?</b></h5>
<p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. 
            NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. 
But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>

        </div>
        </div>
    );
};

export default Blogs;