import { useState } from "react";
import styled, { css } from "styled-components";
import { useUpdateTodoItem } from "../../data/hooks/useData";

const disabledCss = css`
  background-color: #E2E2E2;
  border-width: 0px;
`

const checkedCss = css`
  border-color: #B5B5BA;
  background-color: #B5B5BA;
  background-image: url(assets/images/svg/todo-done.svg);
  background-position: center;
  background-repeat: no-repeat;
`

export const CheckboxContainer = styled.span(props => {
  return `
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    cursor: pointer;
    ${props.disabled ? disabledCss : ''}
    ${props.checked ? checkedCss : ''}
  `;
});

export const TodoItemCheckbox = ({ disabled, checked, id, priority }) => {
    const { mutate } = useUpdateTodoItem();
    const handleCheckboxClick = () => {

        if (!disabled) { 
            mutate({ id, checked: !checked, priority }); 
        }

    };
    return <CheckboxContainer disabled={disabled} checked={checked} onClick={handleCheckboxClick} />
}