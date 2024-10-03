import { useState } from "react"

function Iterator() {

    const [number, setNumber] = useState(5)
    const [showMessage, setShowMessage] = useState(false)
    const [inputValue, setInputValue] = useState("")

    function handleAdd() {
        setNumber((prev) => prev + 1)
    }

    return <div>
        <p>Wartość: {number}</p>
        <button onClick={() => setNumber(10)}>Stała wartość 10</button>
        <button onClick={() => setNumber((prev) => prev - 1)}>Zmniejsz -1</button>
        <button onClick={handleAdd}>Zwiększ +1</button>
        <br />
        <button onClick={() => setShowMessage((prev) => !prev)}>{showMessage ? 'Ukryj wiadomosc' : 'Pokaz wiadomosc'}</button>
        {showMessage && <p>Nasza ukryta wiadomość</p>}
        <br />
        <br />
        <input type="text" />
        <p>Wartość inputa: {inputValue}</p>
    </div>
}

export default Iterator