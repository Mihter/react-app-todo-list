import styled from "styled-components"
import { useUpdateTodoItem } from "../../data/hooks/useData";
const Input = styled.select`
    font-size: 16px;
    width: 40px;
    border: solid 1px black;
    border-radius: 20%;
    height: 30px;
    background-color: #F6F6F6;
`

// Определяем компонент PriorityInput
export const PriorityInput = ({ id, checked, priority, setPriorityForNewTask, setColor }) => {
    const { mutate } = useUpdateTodoItem();

    const handleChange = (event) => {
        const newValue = event.target.value;//новый приоритет
        if (setPriorityForNewTask) {
            setPriorityForNewTask(newValue); 
        }
        if (setColor) {
            setColor(230 - 110 / newValue); 
        }
        mutate({ id, checked, priority: newValue });
    };

    return (
        <Input value={priority} onChange={handleChange}>
            {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                    {num}
                </option>
            ))}
        </Input>
    );
};