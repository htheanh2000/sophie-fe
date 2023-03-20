import Image from "next/image";
import Link from "next/link";
import img_logo from "image/logo.png";
import img_logo_short from "image/logo-short.png";
import classnames from "classnames";

interface IProps  {
  className?: string;
  short?: boolean;
}
const Logo = ({className,short} : IProps) => {
  return (
    <Link href="/">
      <Image
        className={classnames("cursor-pointer", className)}
        src={short ? img_logo_short : img_logo}
        height={60}
        alt="ImgLogo"
      />
    </Link>
  );
};

export default Logo;
