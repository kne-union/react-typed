import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import Typed from 'typed.js';
import { renderToString } from 'react-dom/server';

const ReactTyped = forwardRef(({ children, ...props }, ref) => {
  const domRef = useRef(null);
  const optionsRef = useRef(null);
  optionsRef.current = props;
  const apiRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(
      domRef.current,
      Object.assign({}, optionsRef.current, {
        strings: [renderToString(children)]
      })
    );
    apiRef.current = typed;
    return () => {
      typed.destroy();
    };
  }, [children]);

  useImperativeHandle(ref, () => {
    return { getInstance: () => apiRef.current };
  });
  return <span ref={domRef} />;
});

export default ReactTyped;
