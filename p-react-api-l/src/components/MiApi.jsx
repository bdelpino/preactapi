// /src/components/MiApi.jsx

import {useState,useEffect} from 'react'

const MiApi = ()  =>  {

                                const [infor,setInfor] = useState("character")
                                const [informations,setInformations] = useState([])
                                const consultaApi = async () => {
                                                                    
                                                                    const url = `https://www.narutodb.xyz/api/${infor}?limit=1500`;
                                                                    const response = await fetch (url);
                                                                    const data = await response.json();
                                                                    
                                                                    const test = infor + "s";
                                                                    setInformations(data[test]);
                                                                }

                                useEffect   (   ()  =>  {
                                                            consultaApi()
                                                            
                                                        }, []


                                            )

                                return  (
                                            

                                            <ul>
                                                    {informations.map(information => <li key={information.id}>{information.id}</li>)}
                                            </ul>
                                        )



                        }

export default MiApi