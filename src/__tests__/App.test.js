import React from 'react';
import { Provider } from 'react-redux';
import {
  render, screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Test Nav title render', () => {
  test('Render nav title', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/Top Animes/i)).toBeInTheDocument();
  });
});

describe('Sanpshoot of the whole app', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
