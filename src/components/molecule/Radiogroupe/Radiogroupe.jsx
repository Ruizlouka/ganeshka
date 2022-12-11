import  {React, useState }  from "react";
import PropTypes, { string } from 'prop-types';

import './style.css';

export const Radiogroupe = ({backgroundColor,shadow,rounded, height, width,...props}) => {
   
    const RadioBoutton = () => {
        this.state = {
            erreur: ' Pas de valeur pas sélectionner'
          };
    const nombre=props.nombre;
    let i=0;
    if(nombre===1 || nombre===0){
        <div>
 <label  flexDirection={props.flexDirection}>{props.title}</label>  <input type="radio" color={props.color} width={props.width} height={props.height} value={props.title} size={props.size}  onClick={() => this.setState({ erreur:''  })}/>
 </div>
    }else{
    while ( i === nombre){
        <div>
      <label>{props.title}</label>  <input type="radio"  color={props.color} width={props.width} height={props.height} value={props.title} size={props.size}  onClick={() => this.setState({ erreur:''  })}/>
      </div>
i++
    }
    }
   <div> {this.state.erreur}</div>
};

     return (
        
        <div className={['radiogroupe', props?.className].join(' ')} 
        
        style={
            {
                ...{
                    flexDirection : props.position ,
                    width : width || null,
                    height : height || null,
                    backgroundColor : backgroundColor || "white",
                },
                ...props?.style
            }
        }>
            <RadioBoutton/>
        </div>
    )
}


const themesLengthShadow = 41;
Radiogroupe.propTypes ={ 
    /**
     * Which color is used for background
     */
    backgroundColor: PropTypes.string,
    /**
     * Which width
     */
    width: PropTypes.string,
    /**
     * Which height
     */
    height: PropTypes.string,
    /**
    * Is rounded ? 
     */
    rounded: PropTypes.bool,
    /**
    * Which type of shadow ? 
     */
     shadow: PropTypes.oneOf(Array.apply(null, Array(themesLengthShadow)).map((x, i) => {return x;})),

     nombre: PropTypes.number,

     position: PropTypes.string,
     title:PropTypes.string,
     size:PropTypes.number

}

Radiogroupe.defaultProps = {
    backgroundColor: null,
    rounded:false,
    shadow: 1
}

export default Radiogroupe;