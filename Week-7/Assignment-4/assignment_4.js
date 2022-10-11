


function parenthesisChecker(str) {
    let stackArr = []
  
    for (let i = 0; i < str.length; i++) {
      let starting = str[i];
  
      if ((starting === '{') || (starting === '(') || (starting === '[')) {
        stackArr.push(str[i])
      }
  
      if (stackArr.length === 0) {
        return false
      }
  
      let closing;
  
      if (starting === '}') {
        closing = stackArr.pop()
        if (closing === '(' || closing === '[') {
          return false;
        }
      }
      else if (starting === ')') {
        closing = stackArr.pop()
        if (closing === '{' || closing === '[') {
          return false;
        }
      }
      else if (starting === ']') {
        closing = stackArr.pop()
        if (closing === '{' || closing === '(') {
          return false;
        }
      }
  
  
    }
    return stackArr.length === 0
  }
  
  console.log(parenthesisChecker("{([])}"))