const Hero  = () => {
    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />

                <video ref={videoRef} src="/video/hero.mp4" autoPlay muted playsInline />
            </div>
        </section>
    )
} 

export default Hero;