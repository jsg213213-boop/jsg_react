import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 이름은 : {name}. <br />
      children 값은 : {children}
    </div>
  );
};

export default MyComponent;
