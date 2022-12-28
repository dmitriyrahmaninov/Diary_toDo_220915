import React from 'react';
import s from './style.module.sass'


export default function FormContainer({ addToDoItem }) {
    
    const submit = event => {
        event.preventDefault();
        const { day, state, description } = event.target;
        addToDoItem(day.value, state.value, description.value);
        day.value = '';
        state.value = '';
        description.value = '';
    }

    return (
        <form onSubmit={submit} className={['wrapper', s.form].join(' ')}>

            <div className={[s.wrapper, s.change].join(' ')}>
                <div className={s.change_day}>
                    <input type="text" placeholder='Выберите день' name='day'/>
                    <button><i class="fa-solid fa-caret-down"></i></button>
                </div>
                <div className={s.change_state}>
                    <input type="text" placeholder='Выберите важность' name='state' />
                    <button><i class="fa-solid fa-caret-down"></i></button>
                </div>
            </div>

            <input className={[s.wrapper, s.description].join(' ')}
                type="text" placeholder='Описание' name='description' />

            <button>Добавить</button>
            
        </form>
    )
}
