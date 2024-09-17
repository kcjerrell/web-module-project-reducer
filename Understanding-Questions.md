# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event is fired, executing the code in our handler: onClick={() => dispatch(addOne())}
* dispatch() is called with the return value of addOne(): dispatch({type:ADD_ONE})
* React does does some stuff we shouldn't need to worry too much about
* dispatch() calls our reducer function: reducer(state, {type:ADD_ONE})
* a match is made againt the "ADD_ONE" case and its code is executed. reducer returns with a new state object, value being +1 from the old state's value
* React does some more things, and rerenders the component with the new state
...

* TotalDisplay shows the total plus 1.
