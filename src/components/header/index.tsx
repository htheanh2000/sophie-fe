import Container from "@/components/container"
import NAVLINKS from "@/constant/navlink"
import Link from "next/link"
import Icon from "../icon"
import Logo from "../logo"
const Header = () => {
    return ( 
    <Container className="py-6 flex justify-between items-center">
        <Logo/>
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