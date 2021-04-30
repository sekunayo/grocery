import React from 'react';
import '../Form/form.css';

function Form(props){
  return(
          <form action="" onSubmit={props.submit}>
                    <input type="text" value={props.value} onChange={props.change} placeholder="e.g eggs"></input>
                    <button className="submit">Submit</button>
                </form>
  )
}

export default Form;