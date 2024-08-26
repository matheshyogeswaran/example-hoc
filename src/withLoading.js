import React, { useState, useEffect } from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading delay
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds delay
    }, []);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
