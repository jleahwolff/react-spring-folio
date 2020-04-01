import { Parallax, ParallaxLayer } from '@react-spring/addons';

=========================
    
    const parallaxRef = useRef(null);

    function handleClick() {
        parallaxRef.scrollTo(1);
    };

=========================
return(
<!-- <div className="parallax-container">
        <Parallax ref={props.parallaxRef}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#57EE89' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} /> -->

        {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} /> */}

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={nug} alt="nugget" style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={nug} alt="nugget" style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={nug} alt="nugget" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>


        <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundColor: 'blue'
            }}
        />

        <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={handleClick}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logoDark} alt="nugget" style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={handleClick}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logoDark} alt="nugget" style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={handleClick}>
            <img src={logoDark} alt="nugget" style={{ width: '40%' }} />
        </ParallaxLayer>
        </Parallax>
)