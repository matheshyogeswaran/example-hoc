import React from 'react';
import withLoading from './withLoading';
import MyComponent from './MyComponent';

const EnhancedComponent = withLoading(MyComponent);

const App = () => {
  return (
    <div>
      <EnhancedComponent />
    </div>
  );
};

export default App;
