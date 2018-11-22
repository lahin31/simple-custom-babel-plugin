//  return the variable as a number of UTF-16 code unit
module.exports = function() {
  return {
    visitor: {
      FunctionDeclaration(path) {
        for (var i in path.scope.bindings) {
          path.scope.rename(i, i.charCodeAt(0));
        }
      }
    }
  };
};

// remove console statement from your code
module.exports = function() {
  return {
    visitor: {
      ExpressionStatement(path) {
        path.remove();
      }
    }
  };
};
