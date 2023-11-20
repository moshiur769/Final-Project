import React, {useState} from 'react';
import workData from "./workData.json"
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
const Worklist = () => {
    const [data, setData] = useState(workData)

    return (
        <div className= "workCom" >
            <div className= 'container'>
                <div className= "workList">
                    <p className= "work" >Work List</p>
                    <h1 className= "we" >
                        We provide the Perfect Solution <br/> to your business growth
                    </h1>
                    <div className= "workData" >
                        <section>
                            {
                                data.map((item,i)=>{
                                    const {img,title,body} = item
                                    return(
                                        <div key={i} >
                                            <article className= "workListData" >

                                                   <div className= "workDataList"   >
                                                           <img src={img} />
                                                           <h5>
                                                               {title}
                                                           </h5>
                                                           <p>
                                                               {body}
                                                           </p>
                                                           <Link className= "linkData" to={title} >
                                                               Learn More <span> <FaArrowRight/></span>
                                                           </Link>
                                                   </div>
                                            </article>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Worklist;