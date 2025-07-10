import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
gsap.registerPlugin(SplitText);

const SplitBanner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const preTitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation on component mount
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Split the title into characters
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word",
    });

    // Animate elements
    tl.from(preTitleRef.current, {
      y: 25,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        splitTitle.chars,
        {
          y: 25,
          opacity: 0,
          stagger: 0.05,
          rotate: "4deg",
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        buttonRef.current,
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );

    return () => {
      splitTitle.revert(); // Clean up SplitText
    };
  }, []);

  return (
    <div className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-black">
      {/* Text Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center relative z-10">
        <div className="text-white max-w-md">
          <h5
            ref={preTitleRef}
            className="text-lg md:text-xl font-light mb-4 opacity-0"
          >
            Magazine
          </h5>

          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-8"
          >
            THE F80 SURPRISES CHARLES AND LEWIS
          </h2>

          <div ref={buttonRef} className="opacity-0">
            <button className="flex items-center group">
              <span className="mr-2 text-lg">Discover</span>
              <span className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute w-full h-full text-white opacity-30 group-hover:opacity-100 transition-opacity"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                <svg
                  viewBox="0 0 8 16"
                  className="w-2 h-4 text-white group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-none z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://cdn.ferrari.com/cms/network/media/img/resize/685e6be41b5d110021e8f85e-ferrari-f80-fiorano-gtw-desk?width=960&height=650"
            alt="Ferrari F80"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SplitBanner;
