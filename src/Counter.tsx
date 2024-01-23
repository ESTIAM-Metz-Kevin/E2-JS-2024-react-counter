import { useState } from "react";
import "./Counter.css";

type CounterProps = {
    name: string;
}

export default function Counter(props: CounterProps) {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="counter">
            <p>{props.name}</p>
            <span className="counter--value">
                {counter}
            </span>

            <div className="counter--actions">
                <button onClick={increment}>Plus +</button>
                <button onClick={decrement}>Moins -</button>
            </div>
        </div>
    )
}