import { render, fireEvent } from "@testing-library/react";
import Counter from '../components/Counter';

let component;

beforeEach(() => {
  component = render(<Counter />);
});

test('renders counter message', () => {
  const { getByText } = component;
  const counterMessage = getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const { getByTestId } = component;
  const counterValue = getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const { getByText, getByTestId } = component;
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  const counterValue = getByTestId('count');
  expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const { getByText, getByTestId } = component;
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  const counterValue = getByTestId('count');
  expect(counterValue).toHaveTextContent('-1');
});
