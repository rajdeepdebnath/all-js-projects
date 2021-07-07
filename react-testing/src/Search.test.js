import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Search from './Search'

test('should find input element', () => {
    render(<Search />);

    expect(screen.getByRole('textbox')).toBeTruthy();
});

test('should have typed text in textbox', () => {
    render(<Search />);

    fireEvent.change(screen.getByRole('textbox'), { target : { value: 'new text' } });

    expect(screen.getByRole('textbox').value).toBe('new text');
})

test('shoud find list element', () => {
    render(<Search />);

    expect(screen.getByRole('list')).toBeTruthy();
})

test('should find listitem', () => {
    render(<Search />);

    expect(screen.getAllByRole('listitem').length).toEqual(3);
})

test('should ind select element', () => {
    render(<Search />);

    expect(screen.getByRole('combobox')).toBeTruthy();
})