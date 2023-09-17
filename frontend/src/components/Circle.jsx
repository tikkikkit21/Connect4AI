import { useState } from 'react';

function Circle(props) {
    const { value, column, row, handleClick } = props
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
            onClick={() => handleClick(column, row)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        </div>
    );
}

export default Circle;

