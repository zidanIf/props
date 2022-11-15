import React from 'react';
import './Contenthome.css';
const Contenthome = (props) => {
    return(
        <div className="Content-wrapper">
            <div className="img-thumb">
                <img src="https://asset.kompas.com/crops/uISdwf1fX_CDfGfwKXOEiU9N8JQ=/106x284:1066x924/750x500/data/photo/2022/01/06/61d713da18726.jpg" alt="" />
                <h1 class="name">{props.name}</h1>
            </div>
            <p className="title">{props.title}</p>
            <p className="desk">desk</p>
        </div>
    );
}
Contenthome.defaultProps = {
    name: 'ooo'
}
export default Contenthome;