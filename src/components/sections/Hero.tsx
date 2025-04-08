import Button from "../shared/Button"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Numbers from "./Numbers"
import useThemeStore from "../../store/ThemeStore"

const Hero = () => {
    const { theme } = useThemeStore();
    return (
        <section className="relative pt-32 lg:pt-36">
            {" "}
            <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden">

                    </span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
                </div>

                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
                        {" "}
                        Empower Your Business{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            with AI{" "}
                        </span>
                    </h1>
                    <Paragraph className="mt-8">
                        Our AI SaaS platform provides you with the tools and resources you need to grow your business.
                        From data analysis to customer support, we have everything you need to succeed.
                    </Paragraph>
                    <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
                                <span className="min-w-max pr-2 border-r border-box-border">
                                    {" "}
                                    {theme === "dark" ? (
                                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11160" width="20" height="20"><path d="M498.688 563.2c8.192 7.168 19.456 7.168 27.648 0l289.792-268.288c5.12-10.24 4.096-26.624-16.384-26.624l-573.44 1.024c-15.36 0-27.648 14.336-16.384 26.624L498.688 563.2zM819.2 409.6c0-13.312-16.384-20.48-25.6-11.264l-225.28 208.896c-15.36 14.336-34.816 21.504-55.296 21.504s-39.936-7.168-55.296-21.504L231.424 398.336c-10.24-9.216-25.6-2.048-25.6 11.264v266.24c0 33.792 27.648 61.44 61.44 61.44h491.52c33.792 0 61.44-27.648 61.44-61.44-1.024 0-1.024-184.32-1.024-266.24z" fill="#FFFFFF" p-id="11161"></path></svg>
                                    ) : (
                                        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1820" width="20" height="20"><path d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l73.142857 62.000762V780.190476h682.666666V417.645714l73.142857-62.000762zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z m-10.971428 73.142857H181.638095L512 525.58019 842.361905 243.809524z" p-id="1821"></path></svg>
                                    )}
                                </span>
                                <input type="wmail" placeholder="ljnworkwork@outlook.com" className="w-full py-3 outline-none bg-transparent" />
                                <Button className="min-w-max rounded-full outline-none bg-transparent">
                                    <span className="hidden sm:flex relative z-[5]">Get Started</span>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                </div>
            </Container>
            <Numbers />
        </section>
    )
}

export default Hero