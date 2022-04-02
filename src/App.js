import './App.css';
import Informacion from './components/information';
import Articles from './components/articles';
import Historial from './components/historial';
import Videos from './components/videos';
import Patentes from './components/patentes';
import Startups from './components/startups/Startups';
import Convocatorias from './components/convocatorias'
import Noticias from './components/noticias/Noticias';
import Eventos from './components/eventos';
import Investigacion from './components/investigacion';
import {DataProvider} from './context/DataContext'; 

function App() {
  return (
    <DataProvider>
    <div className="App">
        <Informacion />
        <Articles />
        <Historial />
        <Videos />
        <Patentes />
        <Startups />
        <Convocatorias />
        <Noticias />
        <Eventos />
        <Investigacion />
    </div>
    </DataProvider>
  );
}

export default App;
