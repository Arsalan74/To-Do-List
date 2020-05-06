import React from 'react';


const list=[
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
];

const App = () => {
  return (
  list.map((item)=> {
    return (
      <div key={item.id}>
        {item.task}      
      </div>
    )
  })
  )
}

export default App;