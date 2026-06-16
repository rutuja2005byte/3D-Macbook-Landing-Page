const Showcase = () => {
    return (
       <section id="showacase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoplay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>
       </section>
    )
}

export default Showcase;