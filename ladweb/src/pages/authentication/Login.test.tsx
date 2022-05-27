import React from 'react';
import { screen } from '@testing-library/react'; 
import {render} from '@utils/test-utils';

import Login from './Login';



test('Loginpage renders a page with a prompt for users to login', async () => {

  render(<Login />);

  const elem = await screen.findByText("Log in")
  expect(elem).toBeTruthy();
})


test('Expect login page to have one username field', async () => {
  render(<Login />);

  const usernameTextBox = await screen.findByPlaceholderText('Username');
  expect(usernameTextBox).toBeTruthy();
})

test('Expect login page to have one password field', async () => {
  render(<Login />);

  const passwordTextBox = await screen.findByPlaceholderText('Password');
  expect(passwordTextBox).toBeTruthy();
})

test('Expect login page to have one login button', async () => {
  render(<Login />);

  const loginButton = await screen.findByText('Login');
  expect(loginButton).toBeTruthy();
})