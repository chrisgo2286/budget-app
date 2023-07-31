import { useState } from 'react';
import './choiceButton.css';

export default function ChoiceButton ({ checkIfActive, toggleActive, label, ...other }) {
    const [ isHovered, setIsHovered ] = useState(false)

    function toggleHover () {
        setIsHovered(!isHovered)
    }

    function buildClass () {
        let className = 'choice-button';

        if (checkIfActive(label)) {
            className = className + ' choice-btn-active'
        }

        if (isHovered) {
            className = className + ' choice-btn-hover'
        }

        return className;
    }

    function handleClick () {
        toggleActive(label)
    }

    return (
        <div
            className={ buildClass() }
            onClick={ handleClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover }
            { ...other }>
            <span className='button-text'>{ label }</span>
        </div>
    )
}