import './App.css';
import DashboardPage from './dashboard';
import Userpage from './Users';
import Workoutplanpage from './WorkoutPlan';
import Schedulepage from './Schedules';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import  Dashboard from './pages/dashboard'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardPage/>}/>
          <Route exact path="/workoutplan" element={<Workoutplanpage/>}/>
          <Route exact path="/schedule" element={<Schedulepage/>}/>
          <Route exact path="/users" element={<Userpage/>}/>
          <Route exact path="/demo" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
