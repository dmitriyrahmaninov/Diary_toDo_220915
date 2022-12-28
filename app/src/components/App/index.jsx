import FormContainer from "../FormContainer";
import ToDoContainer from "../ToDoContainer";
import { useState } from "react";
import {weekDays} from '../data/weekDays'

function App() {
// [ПН, ВТ, СР, ЧТ, ПТ]
  const [toDoList, setToDoList] = useState(weekDays);

  const addToDoItem = (day, state, description) => {
    const target = toDoList.find(el => el.day === day);
    target.toDo.push({
      id_toDo: Date.now(),
      state,
      description
    })
    setToDoList([...toDoList])
  }

//clearToDo пока не работает =(
  const clearToDo = (id, day) =>
    // setToDoList(toDoList.toDo.filter(item => item.id !== id))

    // const target = toDoList.find(el => (el.day === day) ? (target.toDo.filter(item => item.id !== id)) : '')
{
    const target = toDoList.find(el => el.day === day)
    console.log(target)
    if (target) {
      console.log(target.toDo)
      const new_item = target.toDo.filter(item => item.id !== id);
      console.log(new_item);
      target.toDo = target.toDo.push(...new_item)
    }
    console.log(target)
    setToDoList([...toDoList]);
  }

  const closeToDoItem = (id) => {
    const target = toDoList.find(item => item.id === id);
    target.toDo.length = 0;
    setToDoList([...toDoList])
  }

  return (
    <>
      <FormContainer addToDoItem={addToDoItem} />
      <ToDoContainer toDoList={toDoList} closeToDoItem={closeToDoItem} clearToDo={clearToDo} />
    </>
  );
}

export default App;
