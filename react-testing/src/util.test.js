import {multiply, lowerCase} from './util'

test('lowerCase', () => {
    expect(lowerCase('ABCD')).toBe('abcd');
    expect(lowerCase('XyZ')).toBe('xyz');
    expect(lowerCase('123')).toBe('123');
});


test('multiply', () => {
    expect(multiply(2,3)).toBe(6);
    expect(multiply(-2,3)).toBe(-6);
    expect(multiply(5,5)).toBe(25);
});