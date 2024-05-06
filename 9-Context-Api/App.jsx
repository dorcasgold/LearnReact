import React, { useContext } from 'react'; 
import './App.css';

export const MyContext = React.createContext();

const ChildComponent = () => {
  const contextValue = useContext(MyContext);
  return (
    <h1>ChildComponent {contextValue}</h1>
  );
};

function App() {
  const sharedValue = 'Hello from Context';

  return (
    <MyContext.Provider value={sharedValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default App;
