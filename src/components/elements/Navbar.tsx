import Container from "../shared/Container"
import NavItem from "../shared/NavItem"
import logo from "/assets/icon.svg"
import BtnLink from "../shared/BtnLink"
import useThemeStore from "../../store/ThemeStore" // Import BtnLink component instead of NavIte


export const navItems = [
    {
        href: "#",
        text: "Home"
    },
    {
        href: "#services",
        text: "Services"
    },
    {
        href: "#about-us",
        text: "About Us"
    },
    {
        href: "#features",
        text: "Features"
    }
]

const Navbar = () => {
    const { toogleTheme, theme } = useThemeStore();

    return (
        <header className="fixed backdrop-blur-lg inset-x-0 top-0 z-50 py-6">
            <Container>
                <nav className="w-full flex justify-between gap-6 relative">
                    {/* Logo */}
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="EdgeAI Logo" className="w-10 h-10" />
                            <div className="inline-flex text-lg font-seminold text-heading-1">EdgeAI</div>
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
                        <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                            {navItems.map((item, index) => (
                                <NavItem href={item.href} text={item.text} key={index} />
                            ))}
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                            <BtnLink href="#eta" text="Get Started" className="" />
                        </div>
                    </div>
                    <div className="min-w-max flex items-center gap-x-3">
                        <button onClick={toogleTheme} className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer">
                            {theme === "dark" ? (
                                    <svg className="icon w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7176" width="200" height="200"><path d="M557.553778 976.355556c-257.265778 0-466.56-207.160889-466.56-464.426667 0-253.923556 206.577778-464.284444 460.501333-464.284445h0.355556c10.766222 0 20.622222 3.953778 25.443555 13.610667 4.878222 9.756444 3.740444 20.394667-2.915555 29.027556-55.722667 72.220444-85.162667 158.108444-85.162667 249.372444 0 225.891556 183.779556 409.386667 409.671111 409.386667l5.248-0.256c10.325333-0.142222 20.977778 5.859556 25.841778 15.644444a28.302222 28.302222 0 0 1-2.915556 30.051556C837.902222 910.08 703.203556 976.355556 557.553778 976.355556zM495.274667 105.016889C299.192889 135.281778 147.882667 306.161778 147.882667 509.809778c0 225.877333 183.779556 409.656889 409.671111 409.656889 108.686222 0 210.403556-42.055111 286.577778-116.977778-231.566222-27.192889-411.804444-224.625778-411.804445-463.36 0-83.427556 21.617778-163.299556 62.947556-234.112z" fill="#ffffff" p-id="7177"></path><path d="M578.830222 879.132444c-186.865778 0-345.784889-133.418667-377.841778-317.269333a14.222222 14.222222 0 1 1 28.017778-4.878222c29.681778 170.183111 176.810667 293.703111 349.824 293.703111a14.222222 14.222222 0 1 1 0 28.444444zM209.991111 531.2c-7.537778 0-13.838222-6.997333-14.193778-14.606222-0.312889-6.584889-0.483556-13.795556-0.483555-20.465778 0-7.864889 6.357333-14.492444 14.222222-14.492444s14.222222 6.229333 14.222222 14.094222c0 6.229333 0.170667 13.425778 0.455111 19.584 0.369778 7.850667-5.674667 15.886222-13.525333 15.886222h-0.696889z" fill="#ffffff" p-id="7178"></path><path d="M622.350222 309.930667m-25.344 0a25.344 25.344 0 1 0 50.688 0 25.344 25.344 0 1 0-50.688 0Z" fill="#ffffff" p-id="7179"></path><path d="M787.072 188.273778m-25.344 0a25.344 25.344 0 1 0 50.688 0 25.344 25.344 0 1 0-50.688 0Z" fill="#ffffff" p-id="7180"></path><path d="M731.960889 415.303111m-25.344 0a25.344 25.344 0 1 0 50.688 0 25.344 25.344 0 1 0-50.688 0Z" fill="#ffffff" p-id="7181"></path></svg>                                )
                                : (
                                    <svg className="icon w-6 h-6" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5029" width="200" height="200"><path d="M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#FFC445" p-id="5030"></path><path d="M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z" fill="#FFC445" p-id="5031"></path></svg>
                                )}
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navbar