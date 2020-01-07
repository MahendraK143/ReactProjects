import React, {useState, useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent(props) {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary]) 
    return (
        <div>
            <Title />
            <Count text = "Age" count= {age} />
            <Button handleClick={incrementAge}>Increase Age </Button>
            <Count text = "Salary" count= {salary} />
            <Button handleClick={incrementSalary}>Increase Salary </Button>
        </div>
    );
}

export default ParentComponent;