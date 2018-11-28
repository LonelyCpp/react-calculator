import React from 'react';
import Calculator from '../app/Calculator';
import App from '../app/App'

import renderer from 'react-test-renderer';

test('infix to postfix', () => {
    expect(Calculator.infixToPostfix("9+9*9+9")).toEqual([9, 9, 9, "*", 9, "+", "+"]);
    expect(Calculator.infixToPostfix("9/9+9*9")).toEqual([9, 9, "/", 9, 9, "*", "+"]);
    expect(Calculator.infixToPostfix("9+9*9")).toEqual([9, 9, 9, "*", "+"]);
    expect(Calculator.infixToPostfix("9*9-9")).toEqual([9, 9, "*", 9, "-"]);    

    expect(Calculator.infixToPostfix("9.4+9*9.1+9.001")).toEqual([9.4, 9, 9.1, "*", 9.001, "+", "+"]);
    expect(Calculator.infixToPostfix("9/9.6+9*9.8")).toEqual([9, 9.6, "/", 9, 9.8, "*", "+"]);
    expect(Calculator.infixToPostfix("9.0+9*9")).toEqual([9.0, 9, 9, "*", "+"]);
});

test('postfix evaluation', () => {
  expect(Calculator.evalPostfix([9, 9, '+'])).toBe(18);
  expect(Calculator.evalPostfix([9, 1, '+'])).toBe(10);
  expect(Calculator.evalPostfix([3, 2, 5, '*', '+'])).toBe(13);
  expect(Calculator.evalPostfix([9, '+'])).toBe(NaN);

  expect(Calculator.evalPostfix([9.1, 9.3, '+'])).toBe(18.4);
  expect(Calculator.evalPostfix([9.01, 1, '+'])).toBe(10.01);
  expect(Calculator.evalPostfix([3.3, 2.3, 5, '*', '+'])).toBe(14.8);
  expect(Calculator.evalPostfix([9.6, '+'])).toBe(NaN);

});

test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });