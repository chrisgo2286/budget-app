import { useEffect, useState } from "react";
import { getEntries } from "../../misc/apiCalls";

export default function ExpensePage () {
    
    const [entries, setEntries ] = useState([])

    useEffect(() => {
        getEntries()
        .then((data) => {
            setEntries(data);
        })        
    }, [])
    
    console.log(entries)
    return (
        <div>
            { entries.map((entry) => (
                <div key={ entry.id }>{ entry.amount }</div>
            ))}
        </div>
    )
}