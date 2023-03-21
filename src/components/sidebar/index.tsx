"use client";
import Icon, { IconName } from "../icon";
import Logo from "../logo";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import img_4 from "image/4.svg";
import Button from "../button";
interface ILink {
  name: string;
  icon: IconName;
  url: string;
}

const NAV_LINKS: ILink[] = [
  {
    name: "Dashboard",
    icon: "bar-chart-up-with-border",
    url: "/dashboard",
  },
  {
    name: "Projects",
    icon: "calendar",
    url: "/dashboard/project",
  },
  {
    name: "Teams",
    icon: "clock",
    url: "/dashboard/team",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <div className="w-64 px-4 py-2 flex flex-col justify-between h-screen shadow-md">
      <section>
        <Logo className="mb-6  mx-auto " />
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={classNames(
              "hover:bg-violet-600 group  hover:text-white cursor-pointer my-2 px-4 font-medium py-3 rounded flex",
              { "bg-violet-600 text-white ": pathname === link.url }
            )}
          >
            <Icon className={classNames("mr-4 group-hover:invert ",{'invert': pathname === link.url })} name={link.icon} />
            {link.name}
          </Link>
        ))}
      </section>
      <div>
        <Button style="secondary" className="w-full mb-4">Go to premium</Button>
        <Image className="bg-violet-400" src={img_4} alt="img_4" />
      </div>
    </div>
  );
};

export default SideBar;
