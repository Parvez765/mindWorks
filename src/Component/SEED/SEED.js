import React, { useEffect, useState, useRef } from 'react';
import './SEED.css';
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';

const SEED = () => {
  const configs = [
    {
      id: 0,
      percent: 36,
      colorSlice: '#E91E63',
      fontColor: '#F50057',
      fontSize: '1.2rem',
      fontWeight: 700,
      label: 'Production Increase',
    },
    {
      id: 1,
      percent: 30,
      colorSlice: '#2196F3',
      fontColor: '#1976D2',
      fontSize: '1.2rem',
      fontWeight: 700,
      label: 'Cost Reduction',
    },
    {
      id: 2,
      percent: 38,
      colorSlice: '#4CAF50',
      fontColor: '#388E3C',
      fontSize: '1.2rem',
      fontWeight: 700,
      label: 'Defect Rate Reduction',
    },
    {
      id: 3,
      percent: 44,
      colorSlice: '#FF9800',
      fontColor: '#F57C00',
      fontSize: '1.2rem',
      fontWeight: 700,
      label: 'Overtime Hour Reduction',
    },
  ];

  const [update, setUpdate] = useState(configs);
  const progressSectionRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = progressSectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
          }
          animateProgress();
        } else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
          }
        }
      }
    };

    const animateProgress = () => {
      setUpdate((prevUpdate) => {
        return prevUpdate.map((config) => ({
          ...config,
          percent:  config.percent,
        }));
      });

      animationRef.current = requestAnimationFrame(animateProgress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="p-10">
        <h1 className="text-center seedText">SEED</h1>
        <p className="lg:w-[850px] block mx-auto text-center text-[22px] font-medium">
          SEED is Sustainable Efficiency and Employee Development. It is our specialized solution offering to help businesses enhance the 4 Ps – Processes, People, Product, and Purpose. We offer customized strategies to organizations to help them achieve enhanced productivity and reduced costs. We have successfully transformed businesses across industries to achieve operational excellence with SEED.
        </p>
        <div ref={progressSectionRef} className="flex justify-between mt-[50px]">
          {update.map((config) => (
            <div key={config.id} className="relative">
              <div className="circle">
                <CircularProgressBar {...config} />
              </div>
             
              <p className="text-center clircleHeading">{config.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEED;
