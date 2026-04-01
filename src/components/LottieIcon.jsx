import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const LottieIcon = ({ animation, size = 32, loop = true, autoplay = true }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && animation) {
      // Check if animation is a valid Lottie animation data
      if (animation && typeof animation === 'object' && animation.assets) {
        animationRef.current = Lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: loop,
          autoplay: autoplay,
          animationData: animation,
          width: size,
          height: size,
        });
      }

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, [animation, size, loop, autoplay]);

  // Simple fallback icon if no animation provided
  if (!animation) {
    return (
      <div 
        style={{ width: size, height: size }}
        className="flex items-center justify-center"
      >
        <span style={{ fontSize: size * 0.6 }}>📊</span>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      style={{ width: size, height: size }}
      className="flex items-center justify-center"
    />
  );
};

export default LottieIcon;
