
// eslint-disable-next-line react/prop-types
const BoxColor = ({colorValue}) => {
    const divStyle = {
        backgroundColor: `${colorValue}`,
        color: 'white',
        padding: '10px',
        margin: '10px',
        border: '1px solid black'
    } 
    return (
        <div style={divStyle}>
            {colorValue}
        </div>
    )
}

export default BoxColor