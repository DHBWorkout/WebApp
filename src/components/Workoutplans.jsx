import React from 'react'
import {useState} from 'react';
import '../ressource/assets/Workoutplan.css'





    export default function Text() {
        const [isShownBruTri, setIsShownBruTri] = useState(false);
        const [isShownSchu, setIsShownSchu] = useState(false);
        const [isShownRüBi, setIsShownRüBi] = useState(false);
        const [isShownBei, setIsShownBei] = useState(false);

const handleclickBruTri = event => {
    setIsShownBruTri(current => !current);
}
const handleclickSchu = event => {
    setIsShownSchu(current => !current);
}
const handleclickRüBi = event => {
    setIsShownRüBi(current => !current);
}
const handleclickBei = event => {
    setIsShownBei(current => !current);
}


        return (
            <div className='main-content_container'>
                <header className='header_container'>
                    <div className="hint">
                        <p>!!! This is just a Alpha Version !!!</p>
                    </div>
                </header>
                <body className='body'>
                <div className='body-content-left'>
                    <table className='trainingstable'>
                        <tr>
                            <th className='tableheader'>ID</th>
                            <th className='tableheader'>Trainingsplan</th>
                            <th className='tableheader'>Schwierigkeit</th>
                            <th className='tableheader'>Anzeigen</th>

                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Beine</td>
                            <td>heavy</td>
                            <td>
                                <button  className='anzeigebtn' onClick={handleclickBei}>Anzeigen</button>
                            </td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Brust Trizeps</td>
                            <td>heavy</td>
                            <td>
                                <button className='anzeigebtn' onClick={handleclickBruTri}>Anzeigen</button>
                            </td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Schultern</td>
                            <td>middle</td>
                            <td>
                                <button className='anzeigebtn' onClick={handleclickSchu}>Anzeigen</button>
                            </td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Rücken Bizeps</td>
                            <td>easy</td>
                            <td>
                                <button className='anzeigebtn' onClick={handleclickRüBi}>Anzeigen</button>
                            </td>

                        </tr>
                    </table>
                </div>


                <div className='body-content-right'>

                        {isShownBruTri && (
                            <div>
                                <h2>Brust Trizeps</h2>
                                <h3>ChestPress</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    </table>
                                <h3>ChestFlys</h3>
                                    <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                        <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>Dips</h3>
                                        <table className='trainingstable'>
                                            <th className='tableheader'>Set</th>
                                            <th className='tableheader'>kg</th>
                                            <th className='tableheader'>Wdh</th>
                                            <th className='tableheader'>Done</th>

                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                            </div>
                        )}
                    {isShownBei && (
                        <div>
                            <div>
                                <h2>Beine</h2>
                                <h3>LegPress</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>Leg Extensions</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>Squat</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>

                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    )}
                    {isShownRüBi&& (
                        <div>
                            <div>
                                <h2>Rücken Bizeps</h2>
                                <h3>Lat Pull Down</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>High Row</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>Low Row</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>

                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    )}
                    {isShownSchu && (
                        <div>
                            <div>
                                <h2>Shoulders</h2>
                                <h3>Millitary Press</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>Lateral raises</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>
                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                                <h3>Face Pulls</h3>
                                <table className='trainingstable'>
                                    <th className='tableheader'>Set</th>
                                    <th className='tableheader'>kg</th>
                                    <th className='tableheader'>Wdh</th>
                                    <th className='tableheader'>Done</th>

                                    <tr>
                                        <td>1</td>
                                        <td>20</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>35</td>
                                        <td>8</td>
                                        <td> <div>
                                            <input type="checkbox" />
                                        </div></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    )}


                </div>
                </body>

            </div>

        )

        function changedata(parameter){
            if(parameter===0){
                document.getElementById('myorders').style.display = 'block';
            }
            else if(parameter===1){
                document.getElementById('myproducts').style.display = 'block';
            }
            else{
                document.getElementById('mysupplier').style.display = 'block';
            }
        }

}
