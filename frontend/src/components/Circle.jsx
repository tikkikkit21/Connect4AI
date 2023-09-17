import { useState } from 'react';

function Circle(props) {
    const { value, column, handleClick } = props
    const [mouseHover, setMouseHover] = useState("no-hover")

    const handleMouseEnter = () => {
        setMouseHover("hover")
    }

    const handleMouseLeave = () => {
        setMouseHover("no-hover")
    }

    return (
        <div 
            className={`circle ${value} ${mouseHover}`}
            onClick={() => handleClick(column)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        </div>
    );
}

export default Circle;