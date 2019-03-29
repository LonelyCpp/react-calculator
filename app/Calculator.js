export default class Calculator {
  static getPriority = char => {
    switch (char) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      default:
        return 0;
    }
  };

  static getStackTop = stack => {
    if (stack.length > 0) {
      return stack[stack.length - 1];
    }
  };

  static infixToPostfix = infix => {
    infix = infix.replace(/\+/g, ' + ');
    infix = infix.replace(/\-/g, ' - ');
    infix = infix.replace(/\//g, ' / ');
    infix = infix.replace(/\*/g, ' * ');

    infix = infix.split(' ');

    let opStack = [];
    let postfix = [];

    infix.forEach(element => {
      switch (element) {
        case '+':
        case '-':
        case '*':
        case '/': {
          if (opStack.length == 0) {
            opStack.push(element);
          } else {
            let stTopPriority = Calculator.getPriority(
              Calculator.getStackTop(opStack)
            );
            let elePriority = Calculator.getPriority(element);

            if (elePriority >= stTopPriority) {
              opStack.push(element);
            } else {
              while (elePriority < stTopPriority && opStack.length != 0) {
                postfix.push(opStack.pop());
                stTopPriority = Calculator.getPriority(
                  Calculator.getStackTop(opStack)
                );
              }
              opStack.push(element);
            }
          }
          break;
        }
        default:
          postfix.push(parseFloat(element));
      }
    });

    while (opStack.length != 0) {
      postfix.push(opStack.pop());
    }

    return postfix;
  };

  static evalPostfix(postfix) {
    let evalStack = [];

    postfix.forEach(element => {
      try {
        switch (element) {
          case '+': {
            let v1 = evalStack.pop();
            let v2 = evalStack.pop();
            evalStack.push(v2 + v1);
            break;
          }
          case '-': {
            let v1 = evalStack.pop();
            let v2 = evalStack.pop();
            evalStack.push(v2 - v1);
            break;
          }
          case '*': {
            let v1 = evalStack.pop();
            let v2 = evalStack.pop();
            evalStack.push(v2 * v1);
            break;
          }
          case '/': {
            let v1 = evalStack.pop();
            let v2 = evalStack.pop();
            evalStack.push(v2 / v1);
            break;
          }
          default: {
            evalStack.push(element);
          }
        }
      } catch (err) {
        console.error(err);
      }
    });

    return Calculator.getStackTop(evalStack);
  }
}
