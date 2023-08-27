import './App.css'
import MiApi from './components/MiApi.jsx';

function App() {
  
  return (
    <>
              <div>
                      <header className="d-flex justify-content-center align-items-center text-center siteHeader">
                            <h1>The Rick and Morty Characters' Database</h1>
                      </header>

                      <div className="d-flex justify-content-center">
                            <MiApi/>
                      </div>

                      <footer className="d-flex justify-content-center align-items-center text-center ">
                                <p className="myFooterText">Follow us on Instragram 
                                                                                    <a className="text-decoration-none text-success" target="_blank"
                                                                                    href="https://www.instagram.com/RickAndMortyDBs"> @RickAndMortyDBs</a>
                                </p>
                      </footer>

              </div>
    </>
  )
}

export default App
