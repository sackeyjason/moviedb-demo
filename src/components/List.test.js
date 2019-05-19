import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const testItems = [
  {name: 'cat', id: 0},
  {name: 'dog', id: 1}
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List
    items={[]}
    filter=""
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders item names', () => {
  const list = renderer.create(
    <List
      items={testItems}
      filter=""
      clickHandler={() => {}}
    />
  );
  let tree = list.toJSON();
  expect(tree).toMatchSnapshot();
});

test('filters item names', () => {
  const list = renderer.create(
    <List
      items={testItems}
      filter="cat"
      clickHandler={() => {}}
    />
  );
  let tree = list.toJSON();
  expect(tree).toMatchSnapshot();
});
