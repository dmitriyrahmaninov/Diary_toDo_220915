import React, { createElement } from 'react';
import s from './style.module.sass'

export default function ToDoItem({id, day, toDo, closeToDoItem, clearToDo }) {

    return (
        <div className={ (toDo.length === 0) ? s.toDoItem : s.toDoItem_active}>
            <div className={s.weekDay}>
                <p>{day}</p>
            </div>
                <div className={s.toDo}>
                {toDo.map(el => 
                    
                    <p key={el.id} style={el.state === 'Done'
                        ? { backgroundColor: '#1ABC9C' }
                        : { backgroundColor: '#E74C3C' }
                    }>
                        {el.description}
                        {
                            <span onClick={() => clearToDo(el.id, day)} className={s.xMark}>
                                <i class="fa-solid fa-circle-xmark"></i>
                            </span>
                        }
                    </p>

                    )}
                    
                </div>
            <span onClick={() => closeToDoItem(id)}><i class="fa-solid fa-circle-xmark"></i></span>
        </div>
    )
}

