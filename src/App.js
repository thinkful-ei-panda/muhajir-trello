import React from 'react';
import List from './List';
import store from './store';
import './style.css';

class App extends React.Component {
  state = store
  
  omit = (obj, keyToOmit) => {
    let {[keyToOmit]: _, ...rest} = obj;
    return rest;
  }

  handleDelete = (cardId) => {
    //remove object from allCards in state
    console.log('you are supposed to delete bruh')
    
    const newLists = this.state.lists.map(list => ({
      cardIds : list.cardIds.filter(id => id !== cardId)
    }))

    const newCards = this.omit(this.state.allCards, cardId)
    
    this.setState({
      lists : newLists,
      allCards : newCards
    })
  }

  handleAdd = (listId) => {
    console.log(this.state.lists)
    console.log('add something here')

    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    let randomCard = newRandomCard();

    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
        return {
         ...list,
          cardIds : [...list.cardIds, randomCard.id]}
      }
      return list
    })

    this.setState({
      lists : newLists,
      allCards: {
        ...this.state.allCards, [randomCard.id] : randomCard
      }
    })

    console.log(this.state.lists)
  }

  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
      <div className="App-list">
        {this.state.lists.map(list => 
          <List 
          key={list.id}
          listId={list.id} 
          header={list.header} 
          card={list.cardIds.map(id => this.state.allCards[id])}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd} /> 
        )}
      </div>
      </main>
    )
  }
  
}

export default App;