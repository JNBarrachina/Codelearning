import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
    const incrementCounter = () => {
        dispatch(increment())
        console.log("Counter incremented", count)
    }

    const decrementCounter = () => {
        dispatch(decrement())
        console.log("Counter decremented", count)
    }

return (
    <div>
        <h1>¡INCREDIBLE COUNTER!</h1>
        <button onClick={incrementCounter}>+</button>
        <p>{count}</p>
        <button onClick={decrementCounter}>-</button>
    </div>
  )
}
