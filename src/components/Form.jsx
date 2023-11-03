import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { nanoid } from 'nanoid';
import styled from 'styled-components';


    function Form() {
        const dispatch = useDispatch();

        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');

        const onTitleChange = (e) => setTitle(e.target.value);
        const onBodyChange = (e) => setBody(e.target.value);

        const onAddBtnClick = (e) => {
            e.preventDefault();
            if(title === '' || body === '') {
                alert('투 두 리스트를 입력해주세요.');
                return;
            }
            const newTodo = {
                id: nanoid(),
                title,
                body,
                isDone: false,
            };
            console.log(newTodo);
            dispatch(addTodo(newTodo)); // 인자로 받는거는 액션타입이 있는 액션객체를 받는다.
            setTitle('');
            setBody('');
        };

    return (
        <Section>
            <FormArea>
                <Label htmlFor="form-title">
                    제목
                    <Input
                        type="text"
                        id="form-title"
                        value={title}
                        onChange={onTitleChange}
                    />
                </Label>
                <Label>
                    내용
                    <Input
                        type="text"
                        id="form-body"
                        value={body}
                        onChange={onBodyChange}
                    />
                </Label>
                <FormButton
                    onClick={onAddBtnClick}
                >
                    추가하기
                </FormButton>
            </FormArea>
        </Section>
    )
    }

    export default Form

    const Section = styled.section`
        height: 100px;
        display: flex;
        align-items: center;
        padding: 20px 30px;
        background-color: #edd8e1;
        border-radius: 15px;
        font-weight: bolder;
    `;

    const FormArea = styled.form`
        width: 100%;
    `;

    const Label = styled.label`
        margin-right: 5px;
    `;

    const Input = styled.input`
        width: 260px;
        height: 40px;
        margin: 0 20px;
        border: none;
        border-radius: 15px;
    `;

    const FormButton = styled.button`
        border: none;
        position: absolute;
        background-color: #e5b7d3;
        color: black;
        font-weight: bolder;
        margin-right: 5px;
    `;