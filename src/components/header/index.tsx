import Container from "@/components/container";
import useDevice from "@/hook/useDevice";
import Link from "next/link";
import Button from "../button";
import Icon from "../icon";
import Logo from "../logo";
const Header = () => {
  const device = useDevice();
  return (
    <Container className="h-20 flex justify-between items-center tablet:items-end">
      {device === "MOBILE" ? <Logo short className="w-10" /> : <Logo />}
      <nav className="hidden tablet:flex ">
        <Link href={"/sign-up"}>
          <Button className="mr-4" style="secondary">Sign in</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button >Sign up</Button>
        </Link>
      </nav>
      <Icon className="tablet:hidden" name="menu"/> 
      {/* <nav>
        <ul className="flex">
          <Link href={'/sign-in'}>
                    <Button className="mr-8">Sign in</Button>
                </Link>
          <Link href={"/sign-up"}>
            <Button>Sign up</Button>
          </Link>
        </ul>
      </nav>
      <Icon className="tablet:hidden" name="menu"/> */}
    </Container>
  );
};

export default Header;
