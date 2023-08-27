import './App.css'
import MiApi from './components/MiApi.jsx';

function App() {
  
  return (
    <>
              <div>
                      <div className="d-flex justify-content-center align-items-center text-center siteHeader">
                            <h1>The Rick and Morty Characters' Database</h1>
                      </div>

                      <div className="d-flex justify-content-center">
                            <MiApi/>
                      </div>

              </div>
    </>
  )
}

export default App
