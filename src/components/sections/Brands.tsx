import Container from "../shared/Container";
import Title from "../shared/Title";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

const Brands = () => {
    return (
        <section>
            {" "}
            <Container className="space-y-8">
                <div className="text-center max-w-3xl mx-auto">
                    <Title> Trusted by Industry Leaders </Title>
                </div>
                <div className="flex justify-center flex-wrap">
                    {logos.map((logo, key) => (
                        <div key={key} className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group">
                            <img className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" src={`src/assets/logos/${logo}.png`} width="100" height="100" alt={logo} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Brands;