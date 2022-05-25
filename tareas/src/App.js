import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
        <div className="container_tareas">
          <h1>Aplicación para la creación de tareas</h1>
          <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
