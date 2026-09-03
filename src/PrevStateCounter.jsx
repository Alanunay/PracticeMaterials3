
import {useState} from 'react'

export const PrevStateCounter =() =>{
const [count, setCount] = useState(0)
 console.log('Render phase: Component renderiung with count=', count);
// const handleIncrement = () => {
//     console.log("Before setCount, count is:", count);
//     setCount(count + 1)
//     console.log("Still in trigger phase. After setCount, count is:", count);
// }
// const handleClick = () => {
//     setCount((prev) => prev + 1);

//     console.log("After setCount(prev => prev + 1), count is:", count);

//   setCount((prev) => prev + 5);
//     console.log("After setCount(prev => prev + 1), count is:", count);

//    setCount((prev) => prev + 10);
//     console.log("After setCount(prev => prev + 1), count is:", count);
// };
const handleClick = () => {
    setCount((prev) => {
        console.log("First updated fn: prev count =", prev);
        return prev + 1;
    });
    setCount((prev) => {
        console.log("Second updated fn: prev count =", prev);
        return prev + 5;
    });
    setCount((prev) => {
        console.log("Third updated fn: prev count =", prev);
        return prev + 10;
    });
};
  return (
    <div>
      <h2>Count: {count}</h2>
       <button onClick={handleClick}>Increment</button>
    </div>
  )
}
