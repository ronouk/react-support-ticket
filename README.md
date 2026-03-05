1. **What is JSX, and why is it used?**

 JSX stands for JavaScript XML. It's a syntax extension that lets user write HTML- like markup inside a JavaScript file.

It is used to:

* Make component structure more readable and intuitive.
* Allows embedding JavaScript expressions inside curly braces `{}`

2. **What is the difference between State and Props?**

State manage data within a component
Props is used to pass data from parent to child

3. **What is the useState hook, and how does it work?**

useState is a **React hook** that adds state to functional components.

It accepts one argument: the  initial state (can be array or number or string or boolean)  and returns an array with  **two elements.** The two elements are:

* The current state value.
* A function to update that value.
* Example: const [newState, setNewState] = useState([]);

4. **How can you share state between components in React?**

   There are several ways to share state between components.

   1. Passing as props
   2. Lifting the state up
   3. Using context. It is advanced and most convenient way.
5. How is event handling done in React?

   The event handling is done by use function which generally starts with handleFunctionName. It does not need to be named like this but it is common practice. Then the data is processed within and passed via props to the component where it gets processed/executed.
