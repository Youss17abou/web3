const Total = ({parts =[]}) => {
    const total = parts.length > 0 ? parts.reduce((sum, part) => sum + part.exercises, 0) : 0;
    
    return (      
        <p>Number of exercises {total}</p>
    );
};

export default Total;
