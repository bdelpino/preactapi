// /src/components/Buscador.jsx
import {useState} from 'react'
import {Button} from 'react-bootstrap'


//START OF MiBuscador COMPONENT
const MiBuscador     =   ({informations,setLaInfo})  =>  {

                                    const [busqueda,setBusqueda] = useState("")

                                    const filtrabusqueda = ()   =>  {
                                                                        console.log("Se ejecuta Filtro de Búsqueda")

                                                                        //START OF FILTER FUNCTION
                                                                        const informationsFiltrados = informations.filter(
                                                                                                                            x => (  x.name.toLowerCase().includes(busqueda.toLowerCase(),0) ||
                                                                                                                                    x.species.toLowerCase().includes(busqueda.toLowerCase(),0) ||
                                                                                                                                    x.gender.toLowerCase().includes(busqueda.toLowerCase(),0) ||
                                                                                                                                    x.status.toLowerCase().includes(busqueda.toLowerCase(),0) ||
                                                                                                                                    x.location.name.toLowerCase().includes(busqueda.toLowerCase(),0)
                                                                                                                                )
                                                                                                                            
                                                                                                                            )
                                                                        //END OF FILTER FUNCTION
                                                                                                                            
                                                                        if (busqueda == "") {setLaInfo(informations)}
                                                                            else {setLaInfo(informationsFiltrados)}

                                                                    }

                                    return  (
                                                //START OF SEARCH DIV
                                                <div>
                                                        <table>
                                                                <tbody>
                                                                        <tr>    
                                                                                <td>
                                                                                    <input className="searchInput" type="text" name="Buscador" placeholder="Search using a keyword" 
                                                                                    onChange={ (e) => {setBusqueda(e.target.value)}} value={busqueda}></input>
                                                                                </td>
                                                                                <td>
                                                                                    <Button className="searchButton" onClick={filtrabusqueda}>Search</Button>
                                                                                </td>
                                                                        </tr>
                                                                </tbody>
                                                        </table>
                                                </div>
                                                //END OF SEARCH DIV
                                            )



                                }
//END OF MiBuscador COMPONENT
export default MiBuscador