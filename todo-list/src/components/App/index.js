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
      ]
    };
  }
  render (){
    return(
      this.state.list.map((item) => {
        return (
        <div key={item.id}>{item.task}</div>
        )
      })
    )
  }
}



export default App;
