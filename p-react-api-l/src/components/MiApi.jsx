// /src/components/MiApi.jsx
import MiBuscador from '../components/Buscador.jsx'
import {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';

const MiApi = ()  =>  {

                                const [infor,setInfor] = useState([])
                                const [informations,setInformations] = useState([])
                                
                                const consultaApi = async () => {

                                    
                                                                    try {
                                                                            const url = `https://rickandmortyapi.com/api/character`;
                                                                            const response = await fetch (url);
                                                                            const data = ((await response.json()).results).sort((a,b) => {return a.id - b.id});
                                                                            setInformations(data);
                                                                            setInfor(data);
                                                                            
                                                                        }

                                                                        catch {
                                                                                    alert('There was an error while trying to execute the query. Please contact the support team.')
                                                                                    

                                                                                }
                                                                    
                                                                }

                                useEffect   (   ()  =>  {
                                                            consultaApi()
                                                            
                                                        }, []


                                            )

                                return  (
                                            <div>
                                                    <div className="d-flex justify-content-center mt-5 mb-5">
                                                            <MiBuscador 
                                                                        informations={infor}
                                                                        setLaInfo={setInformations}

                                                            />
                                                            
                                                    </div>

                                                    <Table responsive>
                                                                        <thead>
                                                                        <tr>
                                                                            <th>Name</th>
                                                                            <th>Species</th>
                                                                            <th>Gender</th>
                                                                            <th>Location</th>
                                                                            <th>Status</th>
                                                                        </tr>
                                                                        </thead>
                                                            <tbody>
                                                            
                                                            {
                                                                informations.map(information => 
                                                                                                
                                                                                                (
                                                                                                    
                                                                                                    <tr key={information.id}>
                                                                                                        <td>{information.name}</td>
                                                                                                        <td>{information.species}</td>
                                                                                                        <td>{information.gender}</td>
                                                                                                        <td>{information.location && information.location.name}</td>
                                                                                                        <td>{information.status}</td>

                                                                                                    </tr>
                                                                                                            
                                                                                                )
                                                                                )
                                                            }
                                                            
                                                            </tbody>
                                                    </Table>
                                            </div>
                                        )



                        }

export default MiApi