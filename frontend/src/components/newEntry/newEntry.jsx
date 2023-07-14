import { useState } from "react";
import NewEntryFields from "./newEntryFields";

export default function NewEntry () {
    
    const [ fields, setFields ] = useState({
        category: '',
        amount: '',
        date: ''
    })

    return (
        <NewEntryFields />
    )
}