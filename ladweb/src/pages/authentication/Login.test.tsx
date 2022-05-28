import { screen, fireEvent} from '@testing-library/react'; 
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

  await screen.findByText('Login');
})




test('expect to get an error message if username is missing', async () => {
  render(<Login />)

  fireEvent.click(screen.getByText("Login"))

  await screen.findByText("Username is required");
})


test('expect to get an error message if password is missing', async () => {
  render(<Login />)

  fireEvent.click(screen.getByText("Login"))

  await screen.findByText("Password is required");
})