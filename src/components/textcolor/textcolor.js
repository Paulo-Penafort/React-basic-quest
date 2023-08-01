import React from "react"
import './textcolor.css'

const Textcolor = ({ color }) => {
   const styles = {
      color,
      textTransform: 'uppercase',
   };
  return (
    <>
      <p className="textColor" style={styles}>
         Use modelos de currículo profissionais testados em campo que seguem exatamente as “regras de currículo” que os empregadores procuram. Fácil de usar e feito em poucos minutos — experimente agora gratuitamente!
      </p>
    </>
  )
}
export default Textcolor 
