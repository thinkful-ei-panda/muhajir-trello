import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <List id="id" header="header" cardIds={['a','b']} allCards={
        {
          a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
          b: { id: 'b', title: 'Second card', content: 'lorem ipsum' }
        }
      }
      />,
      div
    );
    
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<List id="id" header="header" cardIds={['a','b']} allCards={
      {
        a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
        b: { id: 'b', title: 'Second card', content: 'lorem ipsum' }
      }
    }/>).toJSON();

    expect(tree).toMatchSnapshot();
  })
});