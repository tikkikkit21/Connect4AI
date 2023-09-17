function ReDirectButton(props) {
    const { page, text } = props

    return (
        <link to={page}>{text}</link>
    )
}

export default ReDirectButton;