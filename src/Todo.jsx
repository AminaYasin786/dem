import React from 'react';
import todo from "../src/pics/Home2.jpeg";

const Todo = () => {
  return (
    <>
    <div className='main-div'>
      <div className='child-div'>
       <figure>
        <img src={todo} alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
        </figure>
       <div className='addItems'>
         <input type='text' placeholder='Add item...'/>
         <i className="fa-solid fa-plus" title='Add Item'>+</i>
       </div>
       <div className='showItems'>
        <div className='eachItem'>
          <h3>Apple</h3>
          <i className="fa-solid fa-trash" title='Delete Item'></i>
        </div>
       </div>
      </div>
    </div>
    </>
  );
};

export default Todo;
