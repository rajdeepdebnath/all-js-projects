import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, cleanup, logRoles, prettyDOM, waitFor } from '@testing-library/react'
import App from './App'

test('should find element with "counter" test in App component', () => {
    render(<App />);

    expect(screen.getByText('counter', { exact:false})).toBeInTheDocument();
});

test('should have initial value "0" for counter element', () => {
    render(<App />);

    expect(screen.getByTestId('counter')).toHaveTextContent(0);
});

// test('should have value "1" for counter element', async () => {
//     render(<App />);

//     fireEvent.click(screen.getAllByRole('button')[0]);
//     //fireEvent.click(screen.getAllByRole('button')[0]);

//     // logRoles(screen.getAllByRole('button')[0]);
//     // console.log(prettyDOM(screen.getByTestId('counter')));
//     await waitFor(() => screen.getByText('1'))

//     expect(screen.getByTestId('counter')).toHaveTextContent(/^1$/);
// });
