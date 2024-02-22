// import { useEffect, useState } from 'react'
// const Counter = () => {
//   const [count, setCount] = useState (0); // Count state variable
//   useEffect ( () => {
//     const interval_id = setInterval (() => {setCount(count+1)},1000) // Incrementing the count
//     return () => {clearInterval(interval_id)} // Clearing the interval
//   },[count]);
//   console.log("Count is, ", count) // Logging the count to the console
//   return (
//     <div className="max-w-max p-5 my-40 mx-auto border-2 border-gray-200 rounded">
//       <h1 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
//         useFreshRef hook demo
//       </h1>
//       <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">The count is: {count}</p>
//     </div>
//   );
// }
// export default Counter;



// APPROACH 2
// import { useEffect, useRef, useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0); // Count state variable
//   const countRef = useRef(count); // Creating a ref to the state variable
//   useEffect(() => {
//     countRef.current = count;
//   }, [count]); // Updating the ref to the current count every time the count changes
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const newCount = countRef.current + 1; // Incrementing the ref
//       setCount(newCount); // Setting the state variable to the incremented count
//       countRef.current = newCount; // Updating the ref the the new count
//     }, 1000);
//     return () => {
//       clearInterval(intervalId); // Clearing the interval
//     };
//   }, []);
//   console.log("Count is, ", count);
//   return (
//     <div className="max-w-max p-5 my-40 mx-auto border-2 border-gray-200 rounded">
//       <h1 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
//         useFreshRef hook demo
//       </h1>
//       <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">The count is: {count}</p>
//     </div>
//   );
// };

// export default Counter;





import { useEffect, useState } from "react";
import { useFreshRef } from "../hooks/useFreshRef";

const Counter = () => {
  const [count, setCount] = useState(0); // Count state variable
  const countRef = useFreshRef(count); // Using the useFreshRef hook to create a ref to the state variable
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCount = countRef.current + 1; // Incrementing the ref
      setCount(newCount); // Setting the state variable to the incremented count
      countRef.current = newCount; // Updating the ref the the new count
    }, 1000);
    return () => {
      clearInterval(intervalId); // Clearing the interval
    };
  },[]);
  console.log("Count is, ", count);
  return (
    <div className="max-w-max p-5 my-40 mx-auto border-2 border-gray-200 rounded">
      <h1 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        useFreshRef hook demo
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-center">The count is: {count}</p>
    </div>
  );
};

export default Counter;