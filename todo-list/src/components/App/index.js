import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      list:[
        {
          task:"item1",
          id:123
        },
        {
          task:"item2",
          id:12
        },
        {
          task:"item3",
          id:1
        }
      ],
      inputValue:"a"
    };
  }

  inputChangeHandler = (e) => {
    const value= e.target.value  
    this.setState((prevState)=> ({
      ...prevState,inputValue : value
    }))
  }
  inputSubmitHandler = (event) =>{
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      list: prevState.list.concat({
        task: prevState.inputValue,
      id:Math.random()
    }),
      inputValue: '',
    }))
  }
  
  render () {
    return(
      <div>
        <ul>
      {this.state.list.map((item) => {
        return (
        <li key={item.id}>{item.task}</li>
        )
      })}
        </ul>
         <form onSubmit={this.inputSubmitHandler}>
           <input type="text"
           onChange={(e) => this.inputChangeHandler(e)}
           value={this.state.inputValue}
           />
           <input type="submit" />
        </form>
      </div>
    )
  }
}



export default App;
