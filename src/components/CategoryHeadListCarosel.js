import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProfileCard from "./ProfileCard"

const CategoryHeadListCarosel = (props) => {
  const { data } = props;

  return (
    <Carousel className="pt-8">
      <CarouselContent className="">
        {data.map((item, index) => (
          <CarouselItem key={index} className=" md:basis-6/12 xl:basis-3/12 lg:basis-1/3">
              <Card className="">
                <CardContent className="flex items-center justify-center p-0 rounded-2xl">
                  <ProfileCard
                    totalVol={item.totalVol}
                    name={item.name}
                    src={item.src}
                    floorPrice={item.floorPrice}
                    coverSrc={item.coverSrc}
                    headList
                  />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CategoryHeadListCarosel;
