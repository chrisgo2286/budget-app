import { useState } from 'react';
import './button.css';

export default function Button ({ onClick, label, ...other }) {
    const [ isHovered, setIsHovered ] = useState(false)

    function toggleHover () {
        setIsHovered(!isHovered)
    }

    function buildClass () {
        return (isHovered) ? 'button btn-hover': 'button';
    }

    return (
        <div 
            className={ buildClass() } 
            onClick={ onClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } 
            { ...other }>
            { label }
        </div>
    )
}