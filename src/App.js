import React,{useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {

  const [inputList, setInputList] = useState( "" );
  const [items, setItems] = useState([]);

  const itemEvent =(e) =>{
    setInputList(e.target.value)
  };

  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
        
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log( "deleted" );

    setItems((oldItems) => {
      return oldItems.filter((arrElemnt, index) => {
        return index !== id
      })
    })
}
  return (
    <div className="main_div">
      <div className="center_div"><br/>
      <h1>ToDo Lists</h1><br/>
      <input 
      type="text" 
      placeholder="Add a items"     
      value={inputList}
      onChange={itemEvent}
       />
      <button onClick = { listOfItems }> + </button>
      <ol>
      {
        items.map((itemval, index)=>{
          return <ToDoList 
          key={index} 
          id={index}
          onSelect={deleteItems}
          itemval={itemval}/> 
        })
      }
        
      </ol>
      </div>
         </div>
  );
}

export default App;
