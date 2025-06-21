"use client"

import { motion } from "framer-motion"
import { HoveredButton } from "../hover-button"

export default function ScreenshotShowcase() {
  return (
    <section className="overflow-hidden pt-16 md:pt-24 pb-16 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[200px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center group"
            style={{ perspective: '1200px' }}
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Heading Section */}
            <motion.div 
              className="text-left mb-8 md:mb-12 absolute top-0 left-0 z-20 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                  Designed
                </span> for Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Experience the clean, modern interface that turns complexity into confidence.
              </p>
              <HoveredButton size="sm"> 
                Book A Demo
              </HoveredButton>
            </motion.div>

            {/* Animated background glow */}
            <motion.div 
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/20 blur-[200px] md:blur-[300px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>

            {/* Screenshot 2 (Front Center) */}
            <motion.div
              className="absolute w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
              translate-x-[140px] sm:translate-x-[200px] md:translate-x-[300px] lg:translate-x-[400px] xl:translate-x-[500px] 
              group-hover:translate-x-[160px] sm:group-hover:translate-x-[220px] md:group-hover:translate-x-[330px] lg:group-hover:translate-x-[440px] xl:group-hover:translate-x-[550px]
              translate-y-[8%]
              translate-z-[50px] 
              rotate-y-[28deg] group-hover:rotate-y-[20deg]
              rotate-x-[40deg] group-hover:rotate-x-[32deg] 
              rotate-z-[-40deg] group-hover:rotate-z-[-32deg]
              transform-3d z-[30] transition-all duration-1000 ease-out border-10 border-primary/50 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45, rotateX: 60, rotateZ: -60 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 28, rotateX: 40, rotateZ: -40 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-[-20px_20px_40px_rgba(0,0,0,0.15)] md:shadow-[-40px_40px_80px_rgba(0,0,0,0.25)] overflow-hidden rounded-2xl border border-border/20">
                <img
                  src="./assets/dashboard3.png"
                  alt="Main Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Screenshot 1 (Back Left) */}
            <motion.div
              className="absolute w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
              translate-x-[80px] sm:translate-x-[120px] md:translate-x-[180px] lg:translate-x-[240px] xl:translate-x-[300px] 
              translate-y-[8%]
              translate-z-[50px] 
              rotate-y-[28deg] group-hover:rotate-y-[20deg] 
              rotate-x-[40deg] group-hover:rotate-x-[32deg] 
              rotate-z-[-40deg] group-hover:rotate-z-[-32deg] 
              transform-3d z-[20] transition-all duration-1000 ease-out border-10 border-primary/50 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45, rotateX: 60, rotateZ: -60 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 28, rotateX: 40, rotateZ: -40 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-[-15px_15px_30px_rgba(0,0,0,0.1)] md:shadow-[-40px_30px_80px_rgba(0,0,0,0.2)] border border-border/20 overflow-hidden rounded-2xl">
                <img
                  src="./assets/dashboard2.png"
                  alt="Client Management Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Screenshot 3 (Back Right) */}
            <motion.div
              className="absolute w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
              translate-x-[20px] sm:translate-x-[30px] md:translate-x-[40px] lg:translate-x-[50px] xl:translate-x-[50px] 
              group-hover:translate-x-[0px] sm:group-hover:translate-x-[0px] md:group-hover:translate-x-[0px] lg:group-hover:translate-x-[0px] xl:group-hover:translate-x-[0px]
              translate-y-[8%]
              translate-z-[50px] 
              rotate-y-[28deg] group-hover:rotate-y-[20deg] 
              rotate-x-[40deg] group-hover:rotate-x-[32deg] 
              rotate-z-[-40deg] group-hover:rotate-z-[-32deg] 
              transform-3d z-[10] transition-all duration-1000 ease-out border-10 border-primary/50 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45, rotateX: 60, rotateZ: -60 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 28, rotateX: 40, rotateZ: -40 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] md:shadow-[0_30px_70px_rgba(0,0,0,0.2)] border border-border/20 overflow-hidden rounded-2xl">
                <img
                  src="./assets/dashboard.png"
                  alt="Analytics Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Floating elements for visual interest */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/30 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/40 rounded-full"
              animate={{
                y: [0, 8, 0],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
