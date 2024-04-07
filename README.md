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