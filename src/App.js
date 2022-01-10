import CycleList from './Components/CycleList/CycleList';
import CycleDetail from './Components/CycleDetail/CycleDetail';
import LikeDislike from './Components/LikeDislike/LikeDislike';
import './App.css';

function App() {
  return (
    <div>
      <aside>
        <CycleList />
      </aside>
      <main>
        <CycleDetail />
        <LikeDislike />
      </main>
    </div>
  );
}

export default App;
