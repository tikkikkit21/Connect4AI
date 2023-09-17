import { useState } from 'react';

function Circle(props) {
<<<<<<< HEAD
    const { value, column, row, handleClick } = props
=======
    const { value, column, handleClick } = props
>>>>>>> main
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
<<<<<<< HEAD
            onClick={() => handleClick(column, row)}
=======
            onClick={() => handleClick(column)}
>>>>>>> main
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        </div>
    );
}

export default Circle;