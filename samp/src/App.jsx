// #1  -------Usecontext example------

// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("Roshan Robin");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }
// export default Component1;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);


// #2 ------Useref example--------

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// }
// export default App;



/*
Start typing in the input field and you will
see the current- and previous value.
*/

// #3 --------Usecallback example--------

import React, { useState, useCallback } from "react";

// Parent Component
function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Memoized function
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 10);
  }, []); // No dependencies, so this function is stable across renders.

  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <Child onIncrement={incrementCount} />
    </div>
  );
}

// Child Component
const Child = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

export default Parent;

// #4 -------Usememo example--------

// import React, { useState, useMemo } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // Expensive calculation, memoized using useMemo
//   const expensiveCalculation = useMemo(() => {
//     console.log("Expensive calculation running...");
//     return count * 2; // Imagine this as a more complex calculation
//   }, [count]); // Runs only when `count` changes.

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Expensive Result: {expensiveCalculation}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }

// export default App;