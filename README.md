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
