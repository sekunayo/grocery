import React,{useState,useEffect} from 'react';
// import List from '../List/List.js';
import Form from '../Form/Form.js';
import Modal from '../Modal/Modal.js';
import '../Card/card.css';

let storageData = localStorage.getItem('list');
const store = () => {
  if(storageData){
    storageData = JSON.parse(localStorage.getItem('list'));
  }
  else{
    return [];
  }
}

function Card(){
const [showList,setShowList] = useState(false);
const [value,setValue] = useState('');
const [list, setList] = useState(store());

useEffect(() => {
  localStorage.setItem('list',JSON.stringify(list));
});
   
const onChangeHandler = (e) => {
   setValue(e.target.value);
  }
const submitHandler = (e) => {
        e.preventDefault();
        setShowList(true);
        const newArray = value;
        setList([...list,newArray]);
        setValue('');
    }
      return(
         <div className="grocery-card">
            <div className="grocery-inner-card">
                <Modal/>
                <h3>Grocery Bud</h3>
                <Form value={value} change={onChangeHandler} submit={submitHandler}/>
                 {/* {showList && list.map(element => <List key={element.id} title={element.title}/>)}  */}
                {showList && <div className="clear-button">
                    <button className="clear">Clear Items</button>
                </div>}
                {console.log(list)}
            </div>
         </div>
  )
}

export default Card;