import './App.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {AppProvider} from "./AppProvider.tsx";

function App() {

    return (
            <Router>
                <AppProvider/>
            </Router>

    )
}

export default App
