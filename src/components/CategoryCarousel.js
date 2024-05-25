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

const CategoryCarousel = (props) => {
  const { data } = props;

  return (
    <Carousel className="w-auto pt-8">
      <CarouselContent className="-ml-1">
        {data.map((item, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-2/6 lg:basis-1/6 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0 rounded-2xl">
                  <ProfileCard
                    totalVol={item.totalVol}
                    name={item.name}
                    src={item.src}
                    floorPrice={item.floorPrice}
                    coverSrc={item.coverSrc}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CategoryCarousel;
