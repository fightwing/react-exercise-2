import React from 'react';

const CountContext = React.createContext({
  count: 0,
  buy: () => {},
});
export default CountContext;
