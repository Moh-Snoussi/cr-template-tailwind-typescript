import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../Components/App';
import Api from "../Commons/Api"

const api = new Api()
const mock = (api.apiEndPoint = jest.fn())

test('renders learn react link', () => {
  render(<App  testProp="hello"/>);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});


test('Clicking on it change the content', () => {
  render(<App  testProp="hello"/>);
  const linkElement = screen.getByText(/start/i);

  fireEvent.click(linkElement)
  expect(linkElement).toHaveTextContent(/hello/i);
});

test('Api caller', () => {

  mock.mockReturnValue("never Know")
  render(<App  testProp="hello"/>);
  const linkElement = screen.getByText(/start/i);

  fireEvent.click(linkElement)
  expect(linkElement).toHaveTextContent(/never Know/i);
})
