import Container from "@/components/container"
import NAVLINKS from "@/constant/navlink"
import ImgLogo from "image/logo.png"
import Image from "next/image"
import Link from "next/link"
import Icon from "../icon"

const Header = () => {
    return ( 
    <Container className="py-6 flex justify-between items-center">
        <Image src={ImgLogo} alt="ImgLogo"/>
        <nav>
            <ul className="max-desktop:hidden flex">
                {NAVLINKS.map(link =>
                   <li key={link.url}>
                        <Link className="text-md py-2 px-6 flex justify-center items-center"  href={link.url}>
                            {link.name}
                            {link.subLinks ? <Icon className="ml-2" size="xxs" name="chevron-down"/> : null}
                        </Link>
                   </li> 
                )}
            </ul>
            
        </nav>
    </Container>
    )
}

export default Header