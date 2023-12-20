import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://www.tvp.info';
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.textWrapper}>
        <p style={styles.mainText}>Für Deutschland, auf wiedersehen!</p>
        <p style={styles.subText}>Ospi</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#0074ff', // Light blue background
  },
  textWrapper: {
    textAlign: 'center',
  },
  mainText: {
    fontSize: '24px',
    color: '#333', // Adjust the color as needed
    marginBottom: '10px',
  },
  subText: {
    fontSize: '20px',
    color: '#555', // Adjust the color as needed
  },
};

export default App;
