import React from "react";
import Input from "../miscComponents/input/input";
import SelectField from "../miscComponents/selectField/selectField";

export default function NewEntryFields ({ fields, setFields }) {
    return (
        <div className='new-entry-fields'>
            <Input />
            <Input />            
        </div>
    )
}