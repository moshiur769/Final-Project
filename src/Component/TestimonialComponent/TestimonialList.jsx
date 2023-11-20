import "./testimonial.css"
import testmonial from "./testmonialData.json"
import {useState} from "react";
const TestimonialList = () => {
    const [data, setData] = useState(testmonial)
    console.log(testmonial)
    return (
        <div className= 'testmonialpage' >
            <div className= 'container' >
                <div className= 'testmonialData' >
                    <h3>Testimonial List</h3>
                    <p>Home
                        >
                        <span>Testimonial List</span>
                    </p>
                </div>
                <div className= 'testmonialList' >
                    <p>Testimonial List</p>
                    <h3>Better Agency/SEO Solution At <br/> Your Fingertips</h3>
                </div>
                <div className= 'testmonialDataList' >
                    <div id= "testmonialImg" >
                        {
                            data.map((item,i)=>{
                                const {image,body,Name,Passion} = item
                                return(
                                    <div className= " testData card" key={i} >
                                        <div>
                                            <img className= 'testImg' src={image} />
                                        </div>
                                        <div>
                                            <p className= "testTitle" >
                                                {body}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className= "testName" >
                                                {Name}
                                            </h3>
                                        </div>
                                        <div>
                                            <h6>
                                                {
                                                    Passion
                                                }
                                            </h6>
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

export default TestimonialList;