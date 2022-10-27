import LogoInsta from "../iconos/instagram.svg";
import LogoWpp from "../iconos/whatsapp.svg";

const Footer = () => {
    return (
        <>
            <footer>
                <p>Copyright © 2022 PlayGames SA. Todos los derechos reservados</p>
                <ul className="footer_iconos">
                    <li><a href="https://www.whatsapp.com" target="_blank"><span>Whatsapp</span><img src={LogoWpp}
                        alt="Logo Whatsapp"/></a></li>
                    <li><a href="https://www.Instagram.com" target="_blank"><span>Instagram</span><img src={LogoInsta}
                        alt="Logo Instagram"/></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;