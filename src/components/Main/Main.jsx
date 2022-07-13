import React from 'react';

import Description from './Description/Description';
import Timer from './Timer/Timer';
import Purschase from './Purschase/Purschase';
import Events from './Events/Events';
import AboutUs from './AboutUs/AboutUs';
import OurCards from './OurCards/OurCards';
import Marketplace from './Marketplace/Marketplace';
import RoadMap from './RoadMap/RoadMap';

function Main() {
    return (
        <main>
            <Description />
            <Timer />
            <Purschase />
            <Events />
            <AboutUs />
            <OurCards />
            <Marketplace />
            <RoadMap />
        </main>
    );
}

export default Main;
