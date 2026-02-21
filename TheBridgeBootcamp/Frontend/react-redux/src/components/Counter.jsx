import { useSelector, useDispatch } from 'react-redux'
import { selectValue, selectIncrement, decrementValue, incrementValue } from '../features/counter/counterSlice'

export const Counter = () => {
    const count = useSelector(selectValue)
    const increment = useSelector(selectIncrement)
    const dispatch = useDispatch()

    const handleIncrement = event => dispatch(event.target.value)

    return (
        <div>
            <h1>¡INCREDIBLE COUNTER!</h1>
            <input type="text"
                value={increment}
                onChange={handleIncrement} />
            <button onClick={() => dispatch(incrementValue())}>+</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrementValue())}>-</button>
        </div>
    )
}
