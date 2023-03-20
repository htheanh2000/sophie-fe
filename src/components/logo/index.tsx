import Image from "next/image";
import Link from "next/link";
import ImgLogo from "image/logo.png";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="cursor-pointer"
        src={ImgLogo}
        height={60}
        alt="ImgLogo"
      />
    </Link>
  );
};

export default Logo;
