import service1Data from "./service1Data.json"
import "./service.css"
import {useState} from "react";
const OurAllService = () => {
    const [data, setData] = useState(service1Data)
    return (
        <div className= "servicePage" >
            <div className= "container" >
                <div className= "serviceText" >
                    <h2>
                        Our Services
                    </h2>
                    <p>Home > <span>Our Services</span> </p>
                </div>
                <div className= "serviceList" >
                    <p>Our All Services</p>
                    <h2>We Provide BestWeb design <br/> services</h2>
                </div>
                <div id="serviceList">
                    <div className= "leftSericeData card h-auto ">
                        <div>
                            <section>
                                {
                                    data.map((item,i)=>{
                                        const {title,body,img1,img2,img3,img4} = item
                                        return(
                                            <div className= "leftData" key={i} >
                                                <div>
                                                    <h3   >
                                                        {title}
                                                    </h3>
                                                </div>
                                                <div>
                                                    <p>
                                                        {body}
                                                    </p>
                                                </div>
                                                <div>
                                                    <img className= "w-50" src={img1} />
                                                    <img className= "w-50"  src={img2} />
                                                    <img src={img3} />
                                                    <img src={img4} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </div>
                    </div>
                    <div className= "rightSericeData card h-auto ">
                        <div>
                            <section>
                                {
                                    data.map((item,i)=>{
                                        const {title,body,img1,img2,img3,img4} = item
                                        return(
                                            <div className= "leftData" key={i} >
                                                <div>
                                                    <h3   >
                                                        {title}
                                                    </h3>
                                                </div>
                                                <div>
                                                    <p>
                                                        {body}
                                                    </p>
                                                </div>
                                                <div>
                                                    <img className= "w-50" src={img1} />
                                                    <img className= "w-50"  src={img2} />
                                                    <img src={img3} />
                                                    <img src={img4} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </div>
                    </div>
                </div>

                <div id="serviceList1">
                    <div className= "leftSericeData1 card h-auto ">
                        <div>
                            <section>
                                {
                                    data.map((item,i)=>{
                                        const {title,body,img1,img2,img3,img4} = item
                                        return(
                                            <div className= "leftData" key={i} >
                                                <div>
                                                    <h3   >
                                                        {title}
                                                    </h3>
                                                </div>
                                                <div>
                                                    <p>
                                                        {body}
                                                    </p>
                                                </div>
                                                <div>
                                                    <img className= "w-50" src={img1} />
                                                    <img className= "w-50"  src={img2} />
                                                    <img src={img3} />
                                                    <img src={img4} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </div>
                    </div>
                    <div className= "rightSericeData1 card h-auto ">
                        <div>
                            <section>
                                {
                                    data.map((item,i)=>{
                                        const {title,body,img1,img2,img3,img4} = item
                                        return(
                                            <div className= "leftData1" key={i} >
                                                <div>
                                                    <h3   >
                                                        {title}
                                                    </h3>
                                                </div>
                                                <div>
                                                    <p>
                                                        {body}
                                                    </p>
                                                </div>
                                                <div>
                                                    <img className= "w-50" src={img1} />
                                                    <img className= "w-50"  src={img2} />
                                                    <img src={img3} />
                                                    <img src={img4} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAllService;










































