import { useEffect, useRef, useState } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min';
import { ChildrenProviderProps, VantaEffectType } from '../../types';
import './CustomAnimatedBackground.scss';

function CustomAnimatedBackground({ children }: ChildrenProviderProps) {
  const [vantaEffect, setVantaEffect] = useState<VantaEffectType | null>(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#6d37ff',
        color2: '#6d37ff',
        backgroundColor: '#090416',
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={ myRef } className="animated-bg">{children}</div>
  );
}

export default CustomAnimatedBackground;
