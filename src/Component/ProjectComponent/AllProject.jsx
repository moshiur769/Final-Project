import projectData1 from "./projectData1.json"
import "./project.css"
import {useState} from "react";
const AllProject = () => {
    const [data, setData] = useState(projectData1)
    return (
        <div className= "project" >
            <div className= "container" >
                <div className= "projectData" >
                    <h3>
                        All Project
                    </h3>
                    <p>
                        Home
                        >
                        <span>All Project</span>
                    </p>
                </div>
                <div className= "allProjectData" >
                    <p>All Project</p>
                    <h3>Better Agency/SEO Solution At <br/> Your Fingertips</h3>
                </div>
                <div className= "projectDataList">
                    <section>
                        {
                            data.map((item,i)=>{
                                const {img,title} = item
                                return(
                                    <div key={i} className="card w-75 "  >
                                        <div >
                                            <img className= "w-50 img-list " src={img} />
                                        </div>
                                        <div>
                                            <p className= "titleProject" >
                                                {title}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllProject;