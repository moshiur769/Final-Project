import mask from "../../assets/Image/Mask.png";
import featureProduct from "./featureProduct.json"
import {useState} from "react";
import "./home.css"
const FeatureProduct = () => {
    const [featureData,setFeatureData] = useState(featureProduct)
    console.log(featureData)
    return (
        <div className= "Feature" >
             <div className= "container" >
                 <div id= "Feature" >

                     <p className= "featureProject" >Featured Project</p>
                     <h1 className= "provide" >
                         We provide the Perfect Solution <br/> to your business growth
                     </h1>
                     <div className= "featureDataList" >
                         <div id= "feature1" >
                             <img id="img1" src={mask} />
                             <p className= "App" >App Design - June 20, 2022</p>
                             <h1 className= "Redesign" >App Redesign</h1>
                         </div>
                         <div className= "featrueDataImgList" >
                             <section>
                                 {
                                     featureData.map((data,i)=>{
                                         const {img,title,body} = data;
                                         return(
                                             <div className= "featureProjectDataList" key={i} >
                                                     <img className= "featureImg" src={img} />
                                                     <p className= "featureDataTitle" >
                                                         {title}
                                                     </p>

                                                     <h4 className= "featureDataBody" >
                                                         {body}
                                                     </h4>
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

export default FeatureProduct;