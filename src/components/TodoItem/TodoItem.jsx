import React, { useState } from 'react';//
import styled, { css } from "styled-components"
import {TodoItemContainer} from './TodoItemContainer'
import { TodoItemCheckbox } from './TodoItemCheckbox';
import { useDeleteTodoItem } from '../../data/hooks/useData';//
import { PriorityInput } from './PriorityInput';//

const checkedCss = css`
  color: #B5B5BA;
  text-decoration: line-through;
`

const Title = styled.span(props => {
  return `
    width: 60%;
    font-size: 15px;
    overflow-wrap: break-word;
    ${props.checked ? checkedCss : ''};
  `;
})

const Delete = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-image: url(assets/images/png/delete.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px;
  cursor: pointer;
`;
//
export const TodoItem = ({ title, checked, id, priority }) => {
    const [color, setColor] = useState(50 * priority);
    const { mutate } = useDeleteTodoItem();
    const onClickDeleteHandler = () => {
        if (confirm(`Удалить элемент ${title}?`)) {
            mutate({ id });
        }
    }
    return (
        <TodoItemContainer style={{ backgroundColor: `rgb(${color}, 170, 20)` }}>
            <TodoItemCheckbox checked={checked} disabled={false} id={id} priority={priority} />
            <PriorityInput checked={checked} id={id} priority={priority} setColor={setColor} />
      <Title checked={checked}>
        {title}
            </Title>
            <Delete onClick={onClickDeleteHandler} />
    </TodoItemContainer>
  )
}
