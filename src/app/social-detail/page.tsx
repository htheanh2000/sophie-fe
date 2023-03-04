"use client";
import Container from "@/components/container";
import Icon from "@/components/icon";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { formatDate, getTime } from "@/utils/datetime";
import { notFound } from "next/navigation";
import Image from 'next/image'
const SocialDetail = () => {
  const {data} = useAppSelector((state:RootState) => state.social)
  if(!data?.id) {
      notFound()
  }
  return (
    <Container className="my-32">
      <div className="relative">
      <Image
      width={500}
      height={500}
          loading="lazy"
          className="mb-10 desktop:absolute desktop:-z-10 desktop:right-0 desktop:-top-10 cursor-pointer bg-contain w-[500px] rounded-tl-[32px] rounded-br-[32px] "
          src={data.banner}
          alt="random image"
        />
        <h1 className="text-heading text-white bg-purple w-fit py-1 px-3 max-w-xl ">
          {data.title}
        </h1>
        <div className="mt-8 flex items-center">
          <Icon size="lg" className="mr-2" name="calendar" />
          <p className="text-heading-3 mr-12">{formatDate(data.startAt)}</p>
          <Icon size="lg" className="mr-2" name="clock" />
          <p className="text-heading-3">{getTime(data.startAt)}</p>
        </div>
        <div className="mt-8 flex items-center">
          <Icon className="mr-2" name="location" />
          <p className="font-semibold">{data.venue}</p>
        </div>
        <div className="mt-8 flex items-center">
          <Icon size="xs" className="mr-2" name="people" />
          <p className="font-semibold mr-12">{data.capacity} people</p>
          <Icon size="xs" className="mr-2" name="cost" />
          <p className="font-semibold">${data.price}</p>
        </div>
        
        <p className="max-w-2xl mt-16 whitespace-pre-wrap" >
          {data.description}
        </p>
      </div>
    </Container>
  );
};

export default SocialDetail;
