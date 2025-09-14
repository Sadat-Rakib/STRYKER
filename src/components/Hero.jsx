import React, { useState } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const drinks = [
  {
    name: 'MangoOrange',
    shortName: 'MO',
    subtext: 'Tropical. Sugar Free. Hydrating.',
    description: 'STRYKER Mango Orange, a German-crafted electrolyte drink, is tailored for Bangladesh’s heat. This vibrant mango-orange blend delivers high-performance hydration with essential electrolytes, sugar-free.',
    image: './images/mangoorange.png',
    imageWidth: '750px',
  imageHeight: 'auto',
    gradient: 'linear-gradient(to bottom,rgb(184, 173, 19) 79%,rgb(48, 70, 133) 50%)',
    backgrounds: [
      { src: './images/c1.png', width: '600px', height: '500px', top: '-100px', left: '-100px' },
      { src: './images/c2.png', width: '600px', height: '500px', top: '-14%', left: '62%' },
      { src: './images/c3.png', width: '600px', height: '500px', top: '190px', left: '40%' },
      { src: './images/c1.png', width: '600px', height: '500px', top: '67%', left: '60%' },
      { src: './images/c3.png', width: '600px', height: '500px', top: '60%', left: '-10%' },

      { src: './images/c2.png', width: '600px', height: '500px', top: '40%', left: '290px' },
    ]
  },
  {
    name: 'BlueRaspberry',
    shortName: 'BR',
    subtext: 'Refreshing. Focused.',
    description: 'STRYKER Blue Raspberry, German-engineered, offers bold hydration for Bangladesh. Sugar-free with key electrolytes, it boosts focus and endurance in humid conditions.',
    image: './images/BLUE_RASPBERRY.png',
    imageWidth: '530px',
    imageHeight: 'auto',
    gradient: 'linear-gradient(to bottom,rgb(8, 14, 97) 79%,rgb(16, 39, 102) 30%)',
    backgrounds: [
      { src: './images/d1.png', width: '300px', height: '300px', top: '-80px', left: '10%' },
      { src: './images/d2.png', width: '300px', height: '300px', top: '-8%', left: '70%' },
      { src: './images/d3.png', width: '300px', height: '300px', top: '30%', left: '50%' },
      { src: './images/d1.png', width: '300px', height: '300px', top: '80%', left: '70%' },
      { src: './images/d2.png', width: '300px', height: '300px', top: '70%', left: '5%' },
      { src: './images/d3.png', width: '300px', height: '300px', top: '64%', left: '34%' },

    ]
  },
  {
    name: 'StrawberryWatermelon',
    shortName: 'SW',
    subtext: 'Fruity. Crisp. Energizing.',
    description: 'STRYKER Strawberry Watermelon, German-developed, provides a refreshing sugar-free hydration boost. Packed with electrolytes, it’s ideal for fitness and daily use.',
    image: './images/STRAWBERRYWATERMELON.png',
    imageWidth: '530px',
    imageHeight: 'auto',
    gradient: 'linear-gradient(to bottom, #C0030E 79%,rgb(39, 17, 121) 30%)',
    backgrounds: [
      { src: './images/s1.png', width: '300px', height: '300px', top: '50px', left: '0' },
      { src: './images/s2.png', width: '300px', height: '300px', top: '6%', left: '75%' },
      { src: './images/s1.png', width: '300px', height: '300px', top: '20%', left: '43%' },
      { src: './images/s2.png', width: '300px', height: '300px', top: '56%', left: '32%' },
      { src: './images/s4.png', width: '300px', height: '300px', top: '65%', left: '65%' },
      { src: './images/s3.png', width: '300px', height: '300px', top: '75%', left: '5%' },

    ]
  }
];

const Hero = () => {
  const [direction, setDirection] = useState(1); 
  const [prev, setPrev] = useState(0);
  const [current, setCurrent] = useState(0);
  const drink = drinks[current];

  const handleNext = () => {
    setDirection(1);
    setPrev(current);
    setCurrent((prev) => (prev + 1) % drinks.length);
  };

  const handlePrev = () => { 
    setDirection(-1);
    setPrev(current);
    setCurrent((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  return (
    <div className="hero">
<div className="gradient-wrapper">
  <div
    className="hero-gradient"
    style={{ background: drinks[prev].gradient }}
  />

  <motion.div
    key={drinks[current].name + '-gradient'}
    className="hero-gradient"
    style={{ background: drinks[current].gradient }}
    initial={{ x: direction === 1 ? '-100%' : '100%' }}
    animate={{ x: 0 }}
    exit={{ x: direction === 1 ? '100%' : '-100%' }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  />
</div>


      <Navbar />

 
      <AnimatePresence mode="wait">
  <motion.div
    key={drink.shortName}
    className="drink-bg-word"
    initial={{ x: direction === 1 ? '-100%' : '100%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: direction === 1 ? '100%' : '-100%', opacity: 0 }}
   transition={{duration:0.9 , ease:'easeInOut'}}
  >
    {drinks.shortName}
  </motion.div>
</AnimatePresence>

      <div className="hero-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={drink.name + '-heading'}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="drink-title">{drink.name}</h1>
            <h3 className="drink-subtext">{drink.subtext}</h3>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={drink.name + '-desc'}
            className="hero-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {drink.description}
          </motion.p>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
  <motion.img
    key={drink.name + '-img'}
    src={drink.image}
    alt={drink.name}
    className="hero-img"
    initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{
      width: drink.imageWidth,
      height: drink.imageHeight,
    }}
  />
</AnimatePresence>

      <div className="arrows">
        <button className="arrow left" onClick={handlePrev}>←</button>
        <button className="arrow right" onClick={handleNext}>→</button>
      </div>
      <AnimatePresence mode="wait">
  {drink.backgrounds.map((bg, index) => {
    const isTop = index < 3;

    return (
      <motion.img
        key={drink.name + '-bg-' + index} 
        src={bg.src}
        alt=""
        className={`bg bg${index}`}
        style={{
          width: bg.width,
          height: bg.height,
          position: 'absolute',
          top: bg.top,
          left: bg.left,
          zIndex: 1,
          opacity: 0.4

        }}
        initial={{ y: isTop ? -100 : 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        exit={{ y: isTop ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    );
  })}
</AnimatePresence>

    </div>
  );
};

export default Hero;
