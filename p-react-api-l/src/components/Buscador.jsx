// /src/components/Buscador.jsx
import {useState} from 'react'
import {Button} from 'react-bootstrap'



const MiBuscador     =   ({informations,setLaInfo})  =>  {

                                    const [busqueda,setBusqueda] = useState("")

                                    const filtrabusqueda = ()   =>  {
                                                                        console.log(informations)

                                                                        const informationsFiltrados = informations.filter(
                                                                                                                            x => (  x.name==busqueda ||
                                                                                                                                    x.species==busqueda ||
                                                                                                                                    x.gender==busqueda ||
                                                                                                                                    x.status==busqueda ||
                                                                                                                                    x.location.name==busqueda
                                                                                                                                )
                                                                                                                            
                                                                                                                            )
                                                                                                                            
                                                                        if (busqueda == "") {setLaInfo(informations)}
                                                                            else {setLaInfo(informationsFiltrados)}

                                                                    }

                                    return  (
                                                <div>
                                                        <input type="text" name="Buscador" placeholder="Busque por palabra clave" 
                                                        onChange={ (e) => {setBusqueda(e.target.value)}} value={busqueda}></input>

                                                        <Button onClick={filtrabusqueda}>Buscar</Button>

                                                </div>
                                            )



                                }

export default MiBuscador