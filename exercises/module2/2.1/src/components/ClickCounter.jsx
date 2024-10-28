import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ClickCounter = ({title, message}) => {
    const [count, setCount] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
    const handleClick = () => {
        if (count === 10) {
            setShowMessage(true)
        }
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleClick}>
                count is {count}
            </button>
            <p>{showMessage ? message : ""}</p>
        </div>
    )
}
export default ClickCounter