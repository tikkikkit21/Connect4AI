function Circle(props) {
    const { value } = props

    const handleClick = () => {
        console.log("hello")
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