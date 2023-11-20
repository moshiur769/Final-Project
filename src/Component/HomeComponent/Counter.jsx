import counterJsonData from "./counterData.json"
import partnerData from "./partnerData.json"
import "./home.css"
import {useState} from "react";
const Counter = () => {
    const [data, setData] = useState(counterJsonData)
    const [partData, setPartData] = useState(partnerData)
    return (
        <div>
            <div id= "counterPage" >
                <div className= "container" >
                    <div className= "counterData" >
                        <div className= "counterDataList" >
                            <div className= "leftCounterData" >
                                <div className= "leftCounterText  " >
                                    <h3>
                                        Increase Your <br/>  Customers Loyalty <br/> and Satisfaction
                                    </h3>
                                    <p>We help businesses like yours <br/> earn more customers<br/>
                                        standout  from competitors, <br/>  make more  money
                                    </p>
                                    <button>Get Started</button>
                                </div>
                            </div>
                            <div className= "rightCounterData" >
                                <div className= "rightCounterImg" >
                                    {
                                        data.map((item,i)=>{
                                            const {image} = item
                                            return(
                                                <section key={i} >
                                                    <div>
                                                        <div>
                                                            <img className= "counterImg" src={image} />
                                                        </div>
                                                    </div>
                                                </section>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className= "partnarData" >
                <div className= 'container' >
                    <div className= "partnerImgList">
                            {
                                partData.map((item,i)=>{
                                    const {image} = item
                                    return(
                                        <div key={i} >
                                            <div>
                                                <img className= "partnerImg" src={image} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;