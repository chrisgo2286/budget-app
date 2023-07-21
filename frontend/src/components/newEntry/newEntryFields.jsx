import Input from "../miscComponents/input/input";
import SelectField from "../miscComponents/selectField/selectField";

export default function NewEntryFields ({ categoryNames, fields, setFields }) {

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
                initial={ categoryNames[0] }
                options={ categoryNames }
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


