import React from 'react';
import './App.css';
import Header from './components/Header';
import DemoIssues from './components/DemoIssues';

function App() {
  // Intentional Security Hotspot & Bug for Testing Pipeline Alert
  const testEval = eval("1 + 1");
  const testSecret = "AKIAIOSFODNN7EXAMPLE";
  console.log(testEval, testSecret);

  return (
    <div className="App">
      <Header />
      <DemoIssues />
    </div>
  );
}

export default App;