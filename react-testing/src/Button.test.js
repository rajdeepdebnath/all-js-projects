import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, prettyDOM, cleanup } from '@testing-library/react'
import Button from './Button'

test('should have button element in dom', () => {
    render(<Button />);

    //console.log(prettyDOM(screen.getByRole('button')));
    expect(screen.getByRole('button')).toBeInTheDocument();
})

test('should show button text "clicked" when cliked', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toHaveTextContent(/^Click Me$/);
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button')).toHaveTextContent(/^Clicked$/);
})
