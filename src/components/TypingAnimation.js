import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End", "Back-End", "UX-Designer"], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Fragment>
      <span id="type-it" className="subtitle subtitle-typed" ref={el}></span>
    </Fragment>
  );
};
export default TypingAnimation;
