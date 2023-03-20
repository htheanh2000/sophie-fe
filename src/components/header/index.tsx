import Container from "@/components/container"
import Link from "next/link"
import Button from "../button"
import Logo from "../logo"
const Header = () => {
    return ( 
    <Container className="h-20 flex justify-between items-center">
        <Logo/>
        <nav>
            <ul className="max-desktop:hidden flex">
                <Link href={'/sign-in'}>
                    <Button className="mr-8">Sign in</Button>
                </Link>
                <Link href={'/sign-up'}>
                    <Button>Sign up</Button>
                </Link>
            </ul>
            
        </nav>
    </Container>
    )
}

export default Header