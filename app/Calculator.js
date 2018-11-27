export default class Calculator{

    static infixToPostfix = (infix) =>{
        infix = infix.replace(/\+/g, ' + ');
        infix = infix.replace(/\-/g, ' - ');
        infix = infix.replace(/\//g, ' / ');
        infix = infix.replace(/\*/g, ' * ');

        infix = infix.split(' ');

        let opStack = [];
        let postfix = [];

        infix.forEach(element => {
            switch(element){
                case '+':
                case '-':
                case '*':
                case '/': {
                    if(opStack.length == 0){
                        opStack.push(element);
                    }
                    else {
                        let stTopPriority = this.getPriority(this.getStackTop(opStack));
                        let elePriority = this.getPriority(element);

                        if(elePriority > stTopPriority){
                            opStack.push(element);
                        }
                        // contivue here
                    }
                    opStack.push(element); 
                    break;
                }
                default: postfix.push(parseFloat(element))
            }
        });
        
        console.log(opStack);
        console.log(postfix);
    }

    static getPriority(char) {
        switch(char){
            case '+':
            case '-': return 0;
            case '*':
            case '/': return 1;
        }
    }

    static getStackTop(stack) {
        if(stack.length > 0){
            return stack[stack.length - 1];
        }
    }

}