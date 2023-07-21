import { useState } from "react";
import Input from "../miscComponents/input/input";
import SelectField from "../miscComponents/selectField/selectField";
import { getCategoryName } from "../../misc/miscFunctions";

import { useEffect } from "react";

export default function NewEntryFields ({ categories, fields, setFields }) {

    const [ initCategory, setInitCategory ] = useState()

    useEffect(() => {
        (fields.category) ? setInitCategory(getCategoryName(fields.category, categories)) : setInitCategory(categories[0].name) 
    }, [categories, fields])

    return (
        <div className='new-entry-fields'>
            <Input
                type='date'
                name='date'
                value={ fields.date }
                fields={ fields }
                setFields={ setFields } />
            <SelectField
                name='category'
                initial={ initCategory }
                options={ categories }
                fields={ fields }
                setFields={ setFields } />
            <Input 
                type='number'
                name='amount'
                value={ fields.amount }
                fields={ fields }
                setFields={ setFields } />          
        </div>
    )
}