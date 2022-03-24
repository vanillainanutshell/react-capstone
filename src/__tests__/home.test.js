import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Home from '../components/home';

describe('Check if all components are rendered', () => {
  test('Check header', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(screen.getByText('Top Rated Animes')).toBeInTheDocument();
  });
});

describe('Sanpshoot of the Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
