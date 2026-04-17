import Section from "../components/Section";

function Hero() {
    return (
        <Section id="hero" style={{
            paddingTop: "80px"
        }}>

            <div
                className="hero-container"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    marginTop: "90px",
                    gap: "10px",
                    minHeight: "calc(100vh - 80px)",
                    padding: "0 40px"
                }}
            >

                <div
                    className="hero-image"
                    style={{
                        width: "220px",
                        height: "220px",
                        borderRadius: "50%",
                        border: "2px solid #22c55e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img
                        src="/images/dp.jpeg"
                        alt="Profile"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "50%"
                        }}
                    />
                </div>

                <div
                    className="hero-text"
                    style={{
                        maxWidth: "500px",
                        lineHeight: "1.5",
                        // height: "1500px"
                    }}
                >
                    <h1 style={{ marginBottom: "10px" }}>
                        Hello, I'm RAGHAV TIWARI
                    </h1>

                    <h2 style={{ marginBottom: "10px", fontWeight: "normal" }}>
                        Electronics & Communication Engineer
                    </h2>

                    <p style={{ marginBottom: "20px" }}>
                        Aspiring VLSI / Hardware Engineer
                    </p>
                    
                </div>

            </div>

        </Section>
    );
}

export default Hero;