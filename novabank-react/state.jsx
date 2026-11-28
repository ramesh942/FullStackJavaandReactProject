import { useState } from "react";

function BrokenCounter() {
    const [balance, setBalance] = useState(100000); // Initialize state with 100000

    const addBonus = () => {
        setBalance(balance + 500); // Update state with new balance
        console.log("Memory value", balance);
    };

    console.log("Component rendered");
    return <button onClick={addBonus}>Balance: ₹{balance}</button>;
}

export default BrokenCounter;