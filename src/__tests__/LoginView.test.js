import { render, fireEvent } from '@testing-library/react';
import LoginView from '../LoginView.js';

describe('loginView', () => {
  it('renders the login page', () => {
    const wrapper = render(<LoginView />);

    expect(wrapper.getByTestId('name'));
    expect(wrapper.getByTestId('submit-login'));
    expect(wrapper.getByTestId('bots'));
    expect(wrapper.getByText('Enter Name:'));
  })

  it('allows submission of a non empty input', () => {
    const testfunc = jest.fn()
    const view = render(<LoginView onSubmit={testfunc} />);

    const nameInput = view.getByTestId('name');
    const submitButton = view.getByTestId('submit-login');
    fireEvent.change(nameInput,{target:{value:'trevor'}})
    fireEvent.click(submitButton)

    expect(testfunc).toBeCalled()
  })

  it('allows you to select number of bots', () => {
    const wrapper = render(<LoginView />);

    const botInput = wrapper.getByTestId('bots')

    botInput.value = 3
  })
})
