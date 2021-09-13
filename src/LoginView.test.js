import { render, screen, fireEvent } from '@testing-library/react';
import LoginView from './LoginView.js';

test('renders the login page', () => {
  render(<LoginView />);

  const nameInput = document.getElementById('name');
  expect(document.body.innerHTML).toContain('Name:');
  const submitButton = document.getElementById('submit');
  expect(nameInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('allow submission on a non empty input', () => {
  // render(<LoginView />);

  // const nameInput = document.getElementById('name');
  // const submitButton = document.getElementById('submit');
  // fireEvent.change(nameInput, {target:{value:'trevor'}})
  // submitButton.click()
  // expect(document.body.innerText).toContain('Game Page')
});
