# dataStructures
New Reporisitory where I can gather info regarding data Structures in JS.

--Destructuring arrays--
Introduced in ES6, destructuring arrays- a way of unpacking values of an array or an object into separate variables. Breaking down a complex datastructure to a simpler datastructures.


--Destructuring objects--
Same as arrays, you can destructure objects in JS, as a way of unpacking values from an object.

--Spread Operator--
Theory continued in desObjects.js

We can use the spread operator to expand an array to all its elements. Upacking it. It is similar to destructuring, also help us get elements out of arrays. 
The big difference is: it takes all the elements from the array, and it does not create new variables. 

As a consequece we can only use it, in places where we would be needing/using values separated by commas.

The spread operator works on all so-called iterables(arrays, strings, maps or sets BUT NOT Objects).

Rest pattern and rest parameters: 
Rest pattern looks exactly like the spread operator, it has the same syntax(...) but actually does the oposite of the spread operator. Basically to collect multiple elements and condense them into an array. 
Spread-> unpack elements into an array
Rest-> pack elements into an array

The way to differentiate them is: 
Spread-> on the RIGHT side of the =(assignment operator), but we can also use it on the left side of the operator with destructuring
Rest -> 

Short Circuting (&&(and) and ||(or))
When using OR operator, upon comparing lets say (3 || 'John')=> the result will not always have to be a boolean.

Both of them can use ANY data type, they can return ANY datatype and short-curcuiting(short-circuit evaluation)
-For the OR operator ||-> short-circuiting means that if the first value is a truthy value it will immediately return that first value. (it will return 3) the other operator will not be even evaluated.

Ex:
console.log(3 || 'John');->3
console.log(' ' || 'John');->John
console.log(true || 0);->true
console.log(undefined || null);->null

-- With multiple choices--
console.log(undefined || 0 || ' ' || 'Hello' || 23 || null)-> it will return Hello, as the first truthy value in the chain of OR operations.

---Short cirquit AND operator---

When it comes to short circuit evaluation, AND works at the EXACT OPOSITE OF THE OR OPERATOR- > WHEN THE FIRST VALUE IS FALSY AND SHORT CIRCUITS and terminates execution.

Ex:
console.log('Hello'&& 23 && null && 'john');->returns null (hits null->falsy value and stops)

--- Nullinsh Coalescing Operator(??) ---
In the OR exercise in the destObjects.js
we use it as setting a default value in case the first value was a falsy value. 

Works only with the nullish values: null and undefined. It does NOT include 0 or '' (empty string)->its as they are not falsy values and were instead a thruty values.

Logical assignment operators.

OR assignment operator => this operator assigns a value to variable if that current variable is falsy


The for of Loop
This loop will loop over the entire array and for each adoration it will give us access to the current array element that we can specify-> in our case item it will log each element one by one. We can still use continue and break  keywords. 

Enhanced Object Literals and Optional chaining- introduced in ES6 with goal of simplifying/ cleaning up the language

Optional Chaining 
S 2020- Optional chaining if certain property does not exist in the object then undefined is returned immediately: 
ex:
console.log(restaurant.openingHours.mon?.open);

Only if the property is before the question mark exist then it will be read, if not undefined it will be thrown 

Optional chaining operator that we almost all the time we use with the nullish coalescing operator so that we can do somethin in case that we can a results from the array or object taht we checking.

 Looping Objects: Object Keys, Values, and Entries

 Choices between datastructures: 

Data can come from 3 different sources: 

1: From the program itself-> data written directly in the source code (e.g. status messages)

2: From the UI: Data input from the use or data written in the DOM(e.g. tasks in todo app)

3: From external sources: Data Fetched for example from web API (Application Programming Interface)

After you gather the data, you end up having collections of data. And in order to access that data we are using data structures. There are 4 build in data structures in JS. 

Mainly boiled to the decision between what are going to use? 

If we need a simple list of values: we can use arrays or sets.

On the other hand-> if we need key-value pairs then we need an object or a map.

The big difference is that with key-value pair we have a way of describing the values(by using the key). On the other hand in a list like a set or an array- we simply have the value without any description.

Data from APIs comes under JSON data format, it can be converted to JS objects and arrays. 

Other built-in: WeakMap, WeakSet
Other non-built-in: Stacks,Queues, Linked Lists, Trees, Hash Tables.

Arrays: 
-To be used when you need ordered list of values(might contain duplicates)
-When you need to manipulate data

Sets:
-use when you need to work with unique values
-use when high-performance is really important
-use to remove duplicates from arrays

Objects: 
-More traditional key/value store
-Easier to write and acccess the values with .and []

Use when:
-you need to include functions(methods)
-when working with JSON->convert to map

Maps: 
-better performance
-keys can have any data type
-easy to iterate, easy to compute size

Use when:
-simply need to map key to values
-when you need key that are not strings

