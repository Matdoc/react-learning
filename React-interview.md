# 1 . What does "debouncing" mean, and how can you implement it in React?
    Debouncing is an programming technique which limits the rate at which the function is calling , it make sure that the function is called less frequently .

    for eg in search functionality instead of calling the server or updating the state for each keystroke , we will use the debouncing technique to solve this 


How to Implement the debouncing in react (eg : search functionallity)
-----------------------------------------
```
Const[queryt , SetQuery] = useState("");
Const[debouncing , SetDebouncing] = useState("");

useEffect(
    () => {

    let timer = setTimeout(() = {
        SetDebouncing(query);
    } ,500)

    return () => cleatTimeout(timer)

    },[query]);

const handleChange = (e) => {
    setQuery(e.target.value);
}

useEffect(()=>{
    if(debouncing){ console.log("Searching starts")}
},[debouncing]);

```

* we will use two states one to track query and another to get the debouncedQuery ,
* We will first assign the e.target.value to the Query 
* we have a useeffect hook when there is a change in query we will call this , where we have a setTimeout function which have a certain time , once the time is completed we will assign taht query to debouncedQuery . here timer will start again each time there is a change in query before the timeout completes
* now we will have a another useEffect hook here when there is a chnge in the debouncedQuery we will call the server api or any functions that involve with that query .

---

# 2. what is caching nad what are the types of caching

  Types of caching are
    * Memory caching 
    * Web Browser caching
    * application caching 
    * Common distributed network (CDN) caching 
    * Database caching

# 3.what is currying ? // This one of the important topic in Functional Programing .
https://dev.to/alexmercedcoder/deep-dive-into-functional-programming-in-javascript-851


> Functional Programming

* Functional programming is a paradigm that treats programming as an advanced mathematical model, avoiding state changes and mutating code.
* It emphasizes pure functions, immutability, and declarative coding, which make the code more predictable and easier to handle.

 > The core concepts of functional programming are

* Pure function 
* Immutability 
* Memorization 
* Currying 
* First class function 
* Higher order function 


## Currying 

# 4. What is callback hell in Javascript?
# 5.Explain prototype in javascript.
# 6.What is the difference between arrow function and normal function ?
# 7.What is lazy loading ans debouncing?
# 8.Describe JavaScript Global execution context.
# 9.What is the process of hoisting for normal and arrow functions, and what are the differences between them?
# 10.What is the type of undefined and null?

# 11. How we will log the params from the url ?
* here we can get the params from the url using windows and using params in reat-dom-routing

> Method 1 

Using window

//get the url using windows 

let url = Windows.location.href

let newurl = new Url(url);

console.log("params" , newurl.params)  // here we will get an object key and value pair 

> method 2 

we will use useParam() hook from a react-router-dom , where we can get the values and we can break taht or distribute that to a variable , here we will not get the key and value pair

# 12.What are two different types of layout system?
# 13.what are the difference between useLayoutEffect and useEffect?
# 14.What is useContext hook?
# 15.Explain the Context Api in React Application.
# 16.What are the React custom hooks? and How can custom hooks be created?


## crio dsa 
* find the permutation 
* find the first lone superstar