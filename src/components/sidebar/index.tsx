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
    icon: "menu",
    url: "/dashboard",
  },
  {
    name: "Projects",
    icon: "menu",
    url: "/dashboard/project",
  },
  {
    name: "Teams",
    icon: "menu",
    url: "/dashboard/team",
  },
];

const SideBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="w-64 px-4 py-2 flex flex-col justify-between h-screen border-r-[1px]  border-gray/40 ">
      <section>
        <Logo className="mb-4 w-32" />
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={classNames(
              "hover:bg-violet-600 group  hover:text-white cursor-pointer my-2 px-4 font-medium py-3 rounded flex",
              { "bg-violet-600 text-white": pathname === link.url }
            )}
          >
            <Icon className="mr-4 group-hover:[hover-white]" name={link.icon} />
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