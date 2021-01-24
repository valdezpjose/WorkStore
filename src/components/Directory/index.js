import React from 'react';
import './styles.scss';
import Right from './../../assets/right.jpg'
import Left from './../../assets/left.jpg'


const Directory = props => {
    return(
        <div className="directory">
        <div className="wrap">
         <div className="item" style={{backgroundImage: `url(${Left})`}}>
              <a>Compra</a>
         </div>   
         <div className="item" style={{backgroundImage: `url(${Right})`}}>
              <a>Vende</a>
         </div>  
         </div>   
        </div>
    );
};

export default Directory;