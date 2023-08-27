// /src/components/MiApi.jsx
import MiBuscador from '../components/Buscador.jsx'
import {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';


//START OF MiApi COMPONENT
const MiApi = ()  =>  {

                                const [infor,setInfor] = useState([]) //DECLARES infor STATE
                                const [informations,setInformations] = useState([]) //DECLARES informations STATE
                                
                                //START OF consultaApi ASYNC FUNCTION
                                const consultaApi = async () => {

                                    
                                                                    try {
                                                                            const url = `https://rickandmortyapi.com/api/character`; //API URL
                                                                            const response = await fetch (url);
                                                                            const data = ((await response.json()).results).sort((a,b) => {return a.id - b.id});
                                                                            setInformations(data);
                                                                            setInfor(data);
                                                                            
                                                                        }

                                                                        catch {
                                                                                    alert('There was an error while trying to execute the query. Please contact the support team.');
                                                                                    

                                                                                }
                                                                    
                                                                }
                                //END OF consultaApi ASYNC FUNCTION

                                //START OF useEffect HOOK
                                useEffect   (   ()  =>  {
                                                            consultaApi()
                                                            
                                                        }, []


                                            )
                                //END OF useEffect HOOK

                                return  (
                                            //START OF SEARCH FILTER AND TABLE CONTAINER RENDER//
                                            <div className=".tableContainer">
                                                
                                                    <div className="d-flex justify-content-center mt-5 mb-5">
                                                            <MiBuscador 
                                                                        informations={infor}
                                                                        setLaInfo={setInformations}

                                                            />
                                                            
                                                    </div>

                                                    
                                                            
                                                            <Table responsive className="infoTable">
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
                                                                    
                                                                    {   //START OF TABLE MAPPING
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
                                                                        //END OF TABLE MAPPING
                                                                    }
                                                                    
                                                                    </tbody>
                                                            </Table>

                                                    
                                            </div>
                                            //END OF SEARCH FILTER AND TABLE CONTAINER RENDER
                                        )



                        }
//END OF MiApi COMPONENT


export default MiApi //EXPORTS MiApi COMPONENT