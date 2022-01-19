import { Box, Image, AspectRatio } from "@chakra-ui/react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {
  id: string;
  images: string[];
  children?: React.ReactChild | React.ReactNode;
  [x: string]: any;
};

function ImageCarousel({ id, images, children, ...props }: Props) {
  const [isNavigationShown, setIsNavigationShown] = useState(false);

  return (
    <Box
      w="100%"
      h="100%"
      position="relative"
      onMouseEnter={() => setIsNavigationShown(true)}
      onMouseLeave={() => setIsNavigationShown(false)}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={isNavigationShown}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <AspectRatio ratio={16 / 9}>
              <Image
                src={image}
                {...props}
                alt="Apartment image"
                roundedTop="sm"
              />
            </AspectRatio>
          </SwiperSlide>
        ))}
      </Swiper>
      {children}
    </Box>
  );
}

export default ImageCarousel;
