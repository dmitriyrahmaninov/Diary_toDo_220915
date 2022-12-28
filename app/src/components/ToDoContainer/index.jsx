import React from 'react';
import ToDoItem from '../ToDoItem';
import s from './style.module.sass'

export default function ToDoContainer({toDoList, closeToDoItem, clearToDo}) {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            {toDoList.map(el => <ToDoItem key={el.id} {...el}
                closeToDoItem={closeToDoItem}
                clearToDo={clearToDo}
            />)}
        </div>
    )
}
