import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleStatusTodo, deleteTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

    function ListMap({ item }) {

        const dispatch = useDispatch();

        const onToggleBtnClick = (id) => dispatch(toggleStatusTodo(id));

        const onDeleteBtnClick = (id) => dispatch(deleteTodo(id));

    return (
        <Todo key={item.id}>
            <Link to={`${item.id}`}>
                <Linkp>상세보기</Linkp>
            </Link>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <TodoBtnArea>
                <TodoDeleteBtn
                    onClick={() => onDeleteBtnClick(item.id)}
                >
                    삭제하기
                </TodoDeleteBtn>
                <TodoCheckBtn
                    onClick={() => onToggleBtnClick(item.id)}
                >
                    {!item.isDone ? '완료' : '취소'}
                </TodoCheckBtn>
            </TodoBtnArea>
        </Todo>
        )
    }

    export default ListMap


    const Todo = styled.div`
        width: 282px;
        padding: 15px 23px;
        border: 4px solid #dc8ab1;
        border-radius: 15px;
    `;

    const Linkp = styled.p`
        font-size: 12px;
    `;

    const TodoBtnArea = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 10px;
    `;

    const TodoDeleteBtn = styled.button`
        width: 110px;
        border: 2px solid #b48eb5;
        font-weight: bolder;
    `;

    const TodoCheckBtn = styled.button`
        width: 110px;
        border: 2px solid #ca9eaa;
        font-weight: bolder;
    `;