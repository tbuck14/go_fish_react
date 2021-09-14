import { render, fireEvent } from '@testing-library/react';
import LoginView from '../LoginView.js';
describe('loginView', () => {
  it('renders the login page', () => {
    const wrapper = render(<LoginView />);

    expect(wrapper.getByTestId('name'));
    expect(wrapper.getByTestId('submit'));
    expect(wrapper.getByText('Name:'));
  })

  it('allows submission of a non empty input', () => {
    const testfunc = jest.fn()
    const view = render(<LoginView onSubmit={testfunc} />);

    const nameInput = view.getByLabelText('Name:');
    const submitButton = view.getByTestId('submit');
    fireEvent.change(nameInput,{target:{value:'trevor'}})
    fireEvent.click(submitButton)

    expect(testfunc).toBeCalled()
    expect(testfunc).toBeCalledWith('trevor')
  })

  it('does not allow submission of an empty input', () => {
    const testfunc = jest.fn()
    const view = render(<LoginView onSubmit={testfunc} />);

    const nameInput = view.getByTestId('name');
    const submitButton = view.getByTestId('submit');
    fireEvent.click(submitButton)

    expect(nameInput.checkValidity()).toEqual(false)
  })
})
