import './App.css'
import MiApi from './components/MiApi.jsx';

function App() {
  
  return (
    <>
              <div>
                      <div className="d-flex justify-content-center text-center">
                            <h1>The Rick and Morty Characters' Database</h1>
                      </div>

                      <div>
                            <MiApi/>
                      </div>

              </div>
    </>
  )
}

export default App
