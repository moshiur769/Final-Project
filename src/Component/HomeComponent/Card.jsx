import  {useState} from 'react';
import cardDatas from "./card.json"
const Card = () => {
    const [cardDta, setCardDta] = useState(cardDatas)
    return (
        <div>
            <div className= "cardList" >
                <div className= 'container' >
                    <section className= "cardDataList" >
                        {
                            cardDta.map((data,i)=>{
                                const {img,Number,body} = data
                                return(
                                    <div className= 'card' key={i} >
                                        <div className= 'cardDiv' >
                                            <img className= "cardImg" src={img} alt="" />
                                        </div>
                                        <h3 className= 'cardNumber' >
                                            {Number}
                                        </h3>
                                        <p className= "cardBody" >
                                            {body}
                                        </p>
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

export default Card;