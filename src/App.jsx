// src/App.jsx
import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Simple Website</h1>
      </header>
      <main style={styles.main}>
        <h2>About This Website</h2>
        <p>
          This is a simple website created using React. It demonstrates the basic structure of a React application.
        </p>
        <p>
          You can modify this code to add more features and styles as you learn more about React!
        </p>
      </main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Simple Website</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  main: {
    margin: '20px 0',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
};

export default App;