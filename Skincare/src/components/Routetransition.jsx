import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Routetransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      className={`transition-opacity duration-[3000ms] ease-in-out transform ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
      }`}
    >
      {children}
    </div>
  );
}

export default Routetransition;
