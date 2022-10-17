import React, { useState, useCallback } from "react";
import Button from "./Button";
import Call from "./Call";
import Title from "./Title";

function ParentComp() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);
  const handleIncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const handleIncrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Call text="age" call={age} />
      <Button handleclick={handleIncrementAge}>Increment Age</Button>
      <Call text="salary" call={salary} />
      <Button handleclick={handleIncrementSalary}>Increment Salary </Button>
    </div>
  );
}

export default ParentComp;
