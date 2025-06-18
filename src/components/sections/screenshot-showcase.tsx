"use client"

import { motion } from "framer-motion"
import { HoveredButton } from "../hover-button"

export default function ScreenshotShowcase() {
  return (
    <section className="overflow-hidden pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="relative h-[600px] md:h-[700px] flex items-center justify-center group"
            style={{ perspective: '1200px' }}
            whileHover="hover"
          >

            {/* abs heading */}
            <div className="text-left mb-12 absolute top-0 left-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4"><span className="text-primary">Designed</span> for Results</h2>
              <p className="text-xl text-muted-foreground mx-auto max-w-lg mb-6">
                Experience the clean, modern interface that turns complexity into confidence.
              </p>
              <HoveredButton size="sm"> 
                Book A Demo
              </HoveredButton>
            </div>

            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-96 h-96 bg-primary blur-[300px]"></div>

            {/* Screenshot 2 (Front Center) */}
            <motion.div
              className="absolute w-[1000px] 
              translate-x-[500px] group-hover:translate-x-[550px]
               translate-y-[8%]
               translate-z-[50px] 
               rotate-y-[28deg] group-hover:rotate-y-[20deg]
               rotate-x-[40deg] group-hover:rotate-x-[32deg] 
               rotate-z-[-40deg] group-hover:rotate-z-[-32deg]
               transform-3d z-[30] transition-all duration-1000 border-10 border-primary/50 rounded-2xl"
            >
              <div className="bg-white shadow-[-40px_40px_80px_rgba(0,0,0,0.25)] overflow-hidden">
                <img
                  src="./assets/dashboard3.png"
                  alt="Main Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>


            {/* Screenshot 1 (Back Left) */}
            <motion.div
              className="absolute w-[1000px] 
               translate-x-[300px] 
               translate-y-[8%]
               translate-z-[50px] 
               rotate-y-[28deg] group-hover:rotate-y-[20deg] 
               rotate-x-[40deg] group-hover:rotate-x-[32deg] 
               rotate-z-[-40deg] group-hover:rotate-z-[-32deg] 
               transform-3d z-[20] transition-all duration-1000 border-10 border-primary/50 rounded-2xl"
            >
              <div className="bg-white shadow-[-40px_30px_80px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden">
                <img
                  src="./assets/dashboard2.png"
                  alt="Client Management Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>



            {/* Screenshot 3 (Back Right) */}
            <motion.div
              className="absolute w-[1000px] 
               translate-x-[50px] group-hover:translate-x-[0px]
               translate-y-[8%]
               translate-z-[50px] 
               rotate-y-[28deg] group-hover:rotate-y-[20deg] 
               rotate-x-[40deg] group-hover:rotate-x-[32deg] 
               rotate-z-[-40deg] group-hover:rotate-z-[-32deg] 
               transform-3d z-[10] transition-all duration-1000 border-10 border-primary/50 rounded-2xl"
            >
              <div className="bg-white shadow-[0_30px_70px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden">
                <img
                  src="./assets/dashboard.png"
                  alt="Analytics Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
