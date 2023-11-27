import './simpleInput.css'

export default function SimpleInput ({ type, name, value, fields, setFields, ...other }) {
    
    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    function modifyName () {
        return name.replace('_',' ')
    }

    return (
        <div className="simple-input" >            
            <div>{ modifyName() }</div>
            <input
                type={ type } 
                name={ name }
                value={ value }
                onChange={ handleChange }
                { ...other }
            />
        </div>
    )

}