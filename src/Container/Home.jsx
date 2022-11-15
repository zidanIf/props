import React, {Component} from 'react';
import Contenthome from '../Content/Contenthome';

class Home extends Component{
    render(){
        return(
            <div>
                <Contenthome
                name="zidan"
                title="FE"/>

                <Contenthome 
                    name="razor"
                    title="SE"/>

                <Contenthome
                    name="zoro"
                    title="UI"/>

                <Contenthome/>
                <Contenthome/>

            </div>
            
            )
        }
}
export default Home;