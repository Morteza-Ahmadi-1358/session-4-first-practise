import './App.css'
import Form from './components/Form'
import Cost from './components/Cost'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [myCosts, setMyCosts] = useState([
    {id: 0, type: 'لپ تاپ', cost: 2000000},
    {id: 1, type: 'موبایل', cost: 1000000},
    {id: 2, type: 'ساعت هوشمند', cost: 500000},
    {id: 3, type: 'هندزفری', cost: 250000},
  ]);
 const addItemToList = (item) => {
  item.id = uuidv4();
  setMyCosts([...myCosts, item]);
 }
 const deleteItemById = (id) => {
  setMyCosts(myCosts.filter(item => {
    return item.id !== id;
  }));
 }
  return (
    <div>
      <Form addItemToList={addItemToList}/>
      {
        myCosts.map((cost) => {
          return <Cost key={cost.id} data={cost} deleteItemById={deleteItemById} />
        })
      }
    </div>
  )
}

export default App