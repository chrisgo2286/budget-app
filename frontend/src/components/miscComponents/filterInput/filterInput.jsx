import { useState } from "react";
import './filterInput.css';

export default function FilterInput ({ type, name, value, fields, setFields, ...other }) {
    const [ ishovered, setIsHovered ] = useState(false);

    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    function toggleIsHovered () {
        setIsHovered(!ishovered);
    }

    function buildClass () {
        return (ishovered) ? 'filter-input-pair filter-input-hover': 'filter-input-pair';
    }

    return (
        <div 
            className={ buildClass() }
            onMouseEnter={ toggleIsHovered }
            onMouseLeave={ toggleIsHovered }>
            <label htmlFor={ name }>{ name }</label>
            <input
                type={ type } 
                name={ name }
                value={ value }
                id={ name }
                onChange={ handleChange }
                data-cy={'input-' + name}
                { ...other }
            />
        </div>
    )
}