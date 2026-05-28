// frontend/src/App.tsx
import Weather from './components/Weather';
import './App.css';

function App() {
  // Madrid coordinates as default
  const latitude = 40.4165;
  const longitude = -3.7026;
  const units = 'metric'; // Change to 'imperial' if needed

  return (
    <div className="app">
      <Weather latitude={latitude} longitude={longitude} units={units} />
    </div>
  );
}

export default App;