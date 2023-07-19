import Input from "../miscComponents/input/input";
import SelectField from "../miscComponents/selectField/selectField";
import { getCategoryName } from "../../misc/miscFunctions";

export default function NewEntryFields ({ categories, fields, setFields }) {

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
                initial={ (fields.category === '') ? categories[0]: getCategoryName(fields.category, categories) }
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