import React, { useState } from 'react'

const list: {task: string; id: number }[] = [
  {
    task: 'asasa',
    id: 223
  },
  {
    task: 'fbubf',
    id: 121111
  },
  {
    task: 'quwbdq',
    id: 1212132
  }
]

const App = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState(list)
  const [inputValue, setInputValue] = useState('')
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setTodoItems((prevTodoItems) =>
      prevTodoItems.concat({ task: inputValue, id: Math.random() })
    )
    setInputValue('')
  }
  const onClickHandler = (id: number): void => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => {
        return item.id !== id
      })
    )
  }
  return (
    <>
      <ul>
        {todoItems.map((item) => (
          <>
            <li key={item.id}>{item.task}</li>
            <button onClick={(): void => onClickHandler(item.id)}>
              Remove
            </button>
          </>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputChangeHandler} value={inputValue} />
        <input type="submit" />
      </form>
    </>
  )
}

export default App
