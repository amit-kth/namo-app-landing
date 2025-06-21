"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


const logos = [
  {
    id: "logo-1",
    description: "Ishvaa",
    image: "https://ik.imagekit.io/qk2ww553c/tempAssets/clientsImages/ishvaa.png",
  },
  {
    id: "logo-2",
    description: "AQ",
    image: "https://ik.imagekit.io/qk2ww553c/tempAssets/clientsImages/aq.png",
  },
  {
    id: "logo-3",
    description: "Luriox",
    image: "https://ik.imagekit.io/qk2ww553c/tempAssets/clientsImages/luriox.png",
  },
  {
    id: "logo-4",
    description: "Bhartiya",
    image: "https://ik.imagekit.io/qk2ww553c/tempAssets/clientsImages/bhartiya.png",
  },
  {
    id: "logo-5",
    description: "Khush",
    image: "https://ik.imagekit.io/qk2ww553c/tempAssets/clientsImages/khush.png",
  },
  {
    id: "logo-6",
    description: "Astromaya",
    image: "https://ik.imagekit.io/qk2ww553c/tempAssets/clientsImages/astromaya.png",
  }
]

export default function BrandLogos() {
  return (
    <section className="py-8 bg-gradient-to-br from-background via-muted/10 to-background relative">
 
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.5 })]}
            className="w-full"
          >
            <CarouselContent className="flex gap-4">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center items-center md:basis-1/6 lg:basis-1/6"
                >
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border border-primary/20 h-20 flex items-center justify-center">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};