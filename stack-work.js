/* eslint-disable no-console */
const Stack = require('./stack');

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

const peek = stack => {
  if(stack.top === null){
    return null;
  }
  return stack.top.data;
};

const isEmpty = stack => {
  return stack.top === null;
};

const display = stack => { 
  let current = stack.top;
  while (current !== null) { 
    console.log(current.data);
    current = current.next;
  }
};

starTrek.pop();
starTrek.pop();


function palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const chars = new Stack();
  for(let i = 0; i < s.length; i++){
    chars.push(s[i]);
  }

  let palindrome = true;
  let i = 0;
  while(chars.top !== null){
    const char = chars.pop();
    if(char !== s[i]){
      palindrome = false;
      break; 
    }
    i++;
  }
  return palindrome;
}

const sort = stack => {
  const newStack = new Stack();

  while(!isEmpty(stack)){     
    if(isEmpty(newStack)){           
      newStack.push(stack.pop());
    }
    else if(peek(stack) <= peek(newStack)){         
      newStack.push(stack.pop());
    }
    else if(peek(stack) > peek(newStack)){
      const tempVar = stack.pop();       
      while(!isEmpty(newStack) && tempVar > peek(newStack)){            
        stack.push(newStack.pop());
      }
      newStack.push(tempVar);
    }        
  }
  return newStack;
};


function matchingParentheses(s) {
  const parens = new Stack();
  for (let i = 0; i < s.length; i++) { 
    if (s[i] === '(') {
      parens.push({
        data: s[i],
        index: i});
    }
    else if (s[i] === ')') { 
      try {
        parens.pop();
      }
      catch(error) { 
        return 'There is an open parentheses at char ' + i;
      }
            
    }
        
  }
  if (parens.top !== null) { 
    return 'There is an extra open parentheses at ' + parens.top.data.index;
  }
  return 'Matching parentheses';
  
}
let numStack = new Stack();
numStack.push(3);
numStack.push(4);
numStack.push(2);
numStack.push(5);
numStack.push(1);
numStack.push(7);
numStack = sort(numStack);
display(numStack);