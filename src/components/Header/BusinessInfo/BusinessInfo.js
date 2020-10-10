import React from 'react';
import InfoCard from './InfoCard';
import { faClock,faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


let infoData = [
    {title: 'Opening Hours',
description: 'We are 24/7 Open',
icon: faClock,
background: 'primary',
},
{title: 'Visit Us',
description: 'Brooklyn, NY 10003, USA',
icon: faMapMarker,
background: 'dark',
},
{title: 'Call Us Now',
description: '+123456788',
icon: faPhoneVolume,
background: 'primary',
},

]
    


const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
           <div className="row w-75">
           {infoData.map(info => <InfoCard info={info}></InfoCard>)}
           </div>
        </section>
    );
};

export default BusinessInfo;