import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';
import Tarea from './Componentes/Tarea';

function App() {
  return (
    <div className="App">
        <div className="container_tareas">
          <h1>Aplicación para la creación de tareas</h1>
          <ListaDeTareas />
          <Tarea
          texto="Aprendiendo React" />
        </div>
    </div>
  );
}

export default App;
