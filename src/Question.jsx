import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
    const [infoStatus, setInfoStatus] = useState(false)
    const [btnStatus, setBtnStatus] = useState(true)

    const showInfo = () => {
        setInfoStatus(!infoStatus)
        setBtnStatus(!btnStatus)
    }
  return(
    <article className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={showInfo}>{btnStatus ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
        </header>
        {infoStatus && <p>{info}</p>}
    </article>
  )
};

export default Question;
