import React, { useState, useRef } from "react";
import "../sass/parallax.css";
import nug from "../assets/nug.png";
import logoDark from "../assets/logo-dark-mode.png";
import flavors from "../assets/flavors.png";
import radar from "../assets/radar.png";
import { useSpring, animated } from 'react-spring';
import ReactTooltip from 'react-tooltip';

const ParallaxComponent = (props) => {

// FADE section
    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1 });

// TOGGLE section
    const [isToggled, setToggle] = useState(false);
    const fadeIn = useSpring({
        opacity: isToggled ? 0 : 1
    })
    const fadeInColor = useSpring({
        color: isToggled ? '#8dc63f' : '#324552'
    })
    const fadeInSize = useSpring({
        fontSize: isToggled ? '3rem' : '1rem'
    })
    const fadeInTransform = useSpring({
        transform: isToggled ? 'translateX(-50px)' : 'translateX(50px)'
    })

    return (
        <div className="parallax-container">
            <section className="header">
            <img src={nug} style={{"height":"20vh"}} alt="cannabis nugget" />
            <animated.h1>Blue Dream</animated.h1>
            <p>Sativa-hybrid | ✴ </p>
            </section>
            <section className="radar-container">
            <h2 data-tip="Effects are gathers from documented users of the selected strain, including professionals.">Effects</h2>
            <img className="radar" style={{"height":"40vh"}} src={radar} />
            </section>
            <section className="desc">
            <h2>Description</h2>
            <p>Blue Dream is a slightly sativa dominant hybrid (60% sativa/40% indica) strain that is a potent cross between the hugely popular Blueberry X Haze strains. This infamous bud boasts a moderately high THC level that ranges from 17-24% on average and a myriad of both indica and sativa effects.</p>
            <p>See More ⬇</p>
            </section>
            <section className="radar-container">
            <h2 data-tip="Flavors are taken from user reviews, add your flavor profile to watch your flavors popup!">Flavor Profile</h2>
            <img className="radar" style={{"height":"40vh"}} src={flavors} />
            </section>
            <section>
            <animated.h2 style={fadeIn}>Opacity Toggle</animated.h2>
            <animated.h2 style={fadeInColor}>Color Toggle</animated.h2>
            <animated.h2 style={fadeInSize}>Size Toggle</animated.h2>
            <animated.h2 style={fadeInTransform}>Transform Toggle</animated.h2>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
            </section>
            <section>
            <h1>Here's the Parallax Container</h1>
            <h2>The one sentence we care about</h2>
            <p>Loren ipsum dorom unum peru something nice about the weather</p>
            </section>
        </div>
    );
};

export default ParallaxComponent;