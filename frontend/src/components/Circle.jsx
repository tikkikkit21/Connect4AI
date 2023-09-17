function Circle(props) {
    const { value, bruh } = props

    const handleClick = () => {
    }

    return (
        <div 
            className={`circle ${value}`}
            onClick={handleClick}
        >
        </div>
    );
}

export default Circle;