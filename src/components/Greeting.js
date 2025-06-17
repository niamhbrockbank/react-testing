import { useState } from "react"

const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    function handleChangeText(){
        setChangedText(prev => !prev)
    }

    return <div>
        <h2>Hello world</h2>
        {!changedText ? <p>Good to see you</p> : <p>Changed!</p>}
        <button onClick={handleChangeText}>Change Text!</button>
    </div>
}

export default Greeting