"use client";
import Button from "@/components/button";
import Container from "@/components/container";
import useDevice from "@/hook/useDevice";
import img_1 from "image/1.png";
import Image from "next/image";

const LandingPage = () => {
  const DEVICE = useDevice();
  return (
    <Container className="px-5 flex flex-col-reverse tablet:flex-row items-center justify-between mt-16">
      <div>
        <h1 className="text-center mt-8 tablet:mt-0 tablet:text-left tablet:flex">
          Online Learning {DEVICE !== "MOBILE" && "Platform"}{" "}
        </h1>
        <p className="text-center tablet:text-left">
          Learn from the Comfort of Your Home with Our Online Education Platform
        </p>
        <Button size="lg" className="mt-8 mx-auto tablet:mx-0">Get started</Button>
      </div>
      <Image
        className="desktop:max-w-xl tablet:max-w-md"
        src={img_1}
        alt="img_1"
      />
    </Container>
  );
};

export default LandingPage;
