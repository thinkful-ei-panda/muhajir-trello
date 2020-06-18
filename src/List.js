import React from 'react';
import Card from './Card';


function List(props) {
  return (
    <section className="List">
      <header className="List-header">
      <h2>{props.header}</h2>
      </header>
      <div className="ListCards">
          <button type="button" onClick={() => props.handleAdd(props.listId)}>Add Random Card</button>
          {props.card.map(card => 
            <Card key={card.id} id={card.id} title={card.title} content={card.content} handleDelete={props.handleDelete}/>
            )}
          
      </div>
    </section>
  )
}

export default List