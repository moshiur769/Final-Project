import teamData from "./teamData.json"
import {useState} from "react";
import "./team.css"
const TeamMember = () => {
    const [data, setData] = useState(teamData)
    console.log(data)
    return (
        <div id= "team" >
            <div className= "container" >
                <div>
                    <div className= "teamData" >
                        <h1 className= 'id' >Team</h1>
                        <p className= "home" > Home > <span className= "team1" >Team</span> </p>
                    </div>
                    <div className= "teamMember" >
                        <p className= "ourTeam" >Our Team Member</p>
                        <h1 className= "teamCheck" >Check our awesome team <br/> members</h1>
                    </div>
                    <div className= "teamImg" >
                            {
                                data.map((item,i)=>{
                                    const {image1,img2,img3,img4,name} = item
                                    return(
                                        <div key={i} className= "card teamdata " >
                                            <img className= "team1Img" src={image1} />
                                            <div className= "teamImg3" >
                                                <img src={img2} />
                                                <img src={img3} />
                                                <img src={img4} />
                                            </div>
                                            <h3 className= "teamName" >
                                                {name}
                                            </h3>
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

export default TeamMember;