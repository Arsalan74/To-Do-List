import React,{useState} from 'react';

<<<<<<< HEAD
const list=[{
    task:"asasa",
    id:'223'
},{
    task:"fbubf",
    id:'121111'
},{
    task:"quwbdq",
    id:"1212132"
}];




const App = (prop) => {
    const [todoItems,setTodoItems] = useState(list)
    const [inputValue,setInputValue] = useState("")
    const inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodoItems((prevTodoItems) => prevTodoItems.concat({ task:inputValue, id:Math.random()}))
        setInputValue("");
    }
    return (
        <>
            
            <ul>
            {todoItems.map((item) => {
                return (
                        <li key={item.id}>{item.task}</li>
                       )}
                       )
            }
        </ul>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={inputChangeHandler} value={inputValue} />
            <input type="submit"/>
        </form>  
        </>     
    );
}



export default App;
