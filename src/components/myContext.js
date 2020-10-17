import React from 'react';
const MyContext =React.createContext("default Context")
const MyProvider=MyContext.Provider
const MyConsumer=MyContext.Consumer
export {MyProvider, MyConsumer}
export default MyContext