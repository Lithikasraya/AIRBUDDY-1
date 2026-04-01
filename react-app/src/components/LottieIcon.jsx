import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

const LottieIcon = ({ animation, size = 32, loop = true, autoplay = true }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && animation) {
      animationRef.current = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: loop,
        autoplay: autoplay,
        animationData: animation,
        width: size,
        height: size,
      });

      return () => {
        if (animationRef.current) {
          animationRef.current.destroy();
        }
      };
    }
  }, [animation, size, loop, autoplay]);

  // Sample animation data for different sensors
  const getSampleAnimation = (type) => {
    switch (type) {
      case 'temperature':
        return {
          "v": "5.5.7",
          "fr": 30,
          "ip": 0,
          "op": 60,
          "w": 64,
          "h": 64,
          "nm": "Temperature",
          "ddd": 0,
          "assets": [],
          "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Thermometer",
            "sr": 1,
            "ks": {
              "o": { "a": 0, "k": 100 },
              "r": { "a": 1, "k": [{"t": 0, "s": [0], "e": [10]}, {"t": 30, "s": [10], "e": [-10]}, {"t": 60, "s": [-10], "e": [0]}] },
              "p": { "a": 0, "k": [32, 32] },
              "a": { "a": 0, "k": [0, 0] },
              "s": { "a": 0, "k": [100, 100] }
            },
            "ao": 0,
            "shapes": [{
              "ty": "gr",
              "it": [{
                "ty": "rc",
                "d": 1,
                "s": {"a": 0, "k": [20, 40]},
                "p": {"a": 0, "k": [0, 0]},
                "r": {"a": 0, "k": 10},
                "nm": "Rectangle"
              }, {
                "ty": "st",
                "c": {"a": 0, "k": [1, 0.5, 0, 1]},
                "o": {"a": 0, "k": 100},
                "w": {"a": 0, "k": 3},
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "nm": "Stroke"
              }]
            }],
            "ip": 0,
            "op": 60
          }]
        };
      
      case 'humidity':
        return {
          "v": "5.5.7",
          "fr": 30,
          "ip": 0,
          "op": 60,
          "w": 64,
          "h": 64,
          "nm": "Humidity",
          "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "Water Drop",
            "sr": 1,
            "ks": {
              "o": { "a": 0, "k": 100 },
              "r": { "a": 0, "k": 0 },
              "p": { "a": 0, "k": [32, 32] },
              "a": { "a": 0, "k": [0, 0] },
              "s": { "a": 1, "k": [{"t": 0, "s": [100, 100], "e": [110, 110]}, {"t": 30, "s": [110, 110], "e": [90, 90]}, {"t": 60, "s": [90, 90], "e": [100, 100]}] }
            },
            "shapes": [{
              "ty": "gr",
              "it": [{
                "ty": "el",
                "d": 1,
                "s": {"a": 0, "k": [20, 25]},
                "p": {"a": 0, "k": [0, 0]},
                "nm": "Ellipse"
              }, {
                "ty": "fl",
                "c": {"a": 0, "k": [0, 0.5, 1, 1]},
                "o": {"a": 0, "k": 100},
                "nm": "Fill"
              }]
            }],
            "ip": 0,
            "op": 60
          }]
        };
      
      default:
        return null;
    }
  };

  // Use sample animation if no animation provided
  const animationData = animation || getSampleAnimation('temperature');

  return (
    <div 
      ref={containerRef} 
      style={{ width: size, height: size }}
      className="flex items-center justify-center"
    />
  );
};

export default LottieIcon;
