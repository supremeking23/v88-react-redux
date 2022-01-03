import CycleList from './Components/CycleList/CycleList';
import CycleDetail from './Components/CycleList/CycleDetail/CycleDetail';
import './App.css';

function App() {
  return (
    <div>
      <aside>
        <CycleList />
      </aside>
      <main>
        <CycleDetail />
      </main>
    </div>
  );
}

export default App;
