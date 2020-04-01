import React, { useState } from "react";
import "../sass/parallax.css";
import nug from "../assets/nug.png";
import { useSpring, animated } from 'react-spring';

const Parallax = () => {
// FADE section
    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1 });

// TOGGLE section
    const [isToggled, setToggle] = useState(false);
    const fadeIn = useSpring({
        opacity: isToggled ? 0 : 1
    })
    const fadeInColor = useSpring({
        color: isToggled ? 'tomato' : 'green'
    })
    const fadeInSize = useSpring({
        fontSize: isToggled ? '3rem' : '1rem'
    })
    const fadeInTransform = useSpring({
        transform: isToggled ? 'translateX(-50px)' : 'translateX(50px)'
    })

    return (
        <div className="parallax-container">
            <section>
            <img src={nug} style={{"height":"20vh"}} alt="cannabis nugget" />
            <animated.h1 style={fade}>Here's the Fade Container</animated.h1>
            <h2>The one sentence we care about</h2>
            <p>Loren ipsum dorom unum peru something nice about the weather</p>
            </section>
            <section>
            <animated.h1 style={fadeIn}>Opacity Toggle</animated.h1>
            <animated.h1 style={fadeInColor}>Color Toggle</animated.h1>
            <animated.h1 style={fadeInSize}>Size Toggle</animated.h1>
            <animated.h1 style={fadeInTransform}>Transform Toggle</animated.h1>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
            </section>
            <section>
            <h2>The one sentence we care about</h2>
            <p>Loren ipsum dorom unum peru something nice about the weather</p>
            </section>
            <section>
            <h1>Here's the Parallax Container</h1>
            <h2>The one sentence we care about</h2>
            <p>Loren ipsum dorom unum peru something nice about the weather</p>
            </section>
        </div>
    );
};

export default Parallax;