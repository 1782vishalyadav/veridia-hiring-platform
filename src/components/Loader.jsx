import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Loader = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <>
      <StyledWrapper>
        <div className="loader">
          <svg
            id="pegtopone"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <filter id="shine">
                <feGaussianBlur stdDeviation={3} />
              </filter>
              <mask id="mask">
                <path
                  d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                  fill="white"
                />
              </mask>
            </defs>
            <g>
              <path
                d="M63,37c-6.7-4-4-27-13-27s-6.3,23-13,27-27,4-27,13,20.3,9,27,13,4,27,13,27,6.3-23,13-27,27-4,27-13-20.3-9-27-13Z"
                fill="currentColor"
              />
            </g>
          </svg>

          <svg
            id="pegtoptwo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <use href="#pegtopone" />
          </svg>

          <svg
            id="pegtopthree"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <use href="#pegtopone" />
          </svg>
        </div>
      </StyledWrapper>

      {/* Countdown */}
      <div className="fixed bottom-6 left-6 flex items-center gap-4 bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-200 font-[Poppins]">
        <div className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-600"></span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-base font-semibold text-gray-800 tracking-wide">
            Loading the Hiring Portal...
          </span>
          <span className="text-sm text-gray-500">
            Redirecting in{" "}
            <span className="font-bold text-blue-600">{countdown}</span>s
          </span>
        </div>
      </div>
    </>
  );
};

const StyledWrapper = styled.div`
  .loader {
    --fill-color: #5c3d99;
    --shine-color: #5c3d9933;
    transform: scale(0.6);
    width: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    filter: drop-shadow(0 0 10px var(--shine-color));
  }

  .loader #pegtopone {
    position: absolute;
    animation: flowe-one 1s linear infinite;
  }

  .loader #pegtoptwo {
    position: absolute;
    opacity: 0;
    transform: scale(0) translateY(-200px) translateX(-100px);
    animation: flowe-two 1s linear infinite;
    animation-delay: 0.3s;
  }

  .loader #pegtopthree {
    position: absolute;
    opacity: 0;
    transform: scale(0) translateY(-200px) translateX(100px);
    animation: flowe-three 1s linear infinite;
    animation-delay: 0.6s;
  }

  .loader svg g path:first-child {
    fill: var(--fill-color);
  }

  @keyframes flowe-one {
    0% {
      transform: scale(0.5) translateY(-200px);
      opacity: 0;
    }
    25% {
      transform: scale(0.75) translateY(-100px);
      opacity: 1;
    }
    50% {
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) translateY(50px);
      opacity: 1;
    }
    100% {
      transform: scale(0) translateY(100px);
      opacity: 0;
    }
  }

  @keyframes flowe-two {
    0% {
      transform: scale(0.5) rotateZ(-10deg) translateY(-200px)
        translateX(-100px);
      opacity: 0;
    }
    25% {
      transform: scale(1) rotateZ(-5deg) translateY(-100px) translateX(-50px);
      opacity: 1;
    }
    50% {
      transform: scale(1) rotateZ(0deg) translateY(0px) translateX(-25px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) rotateZ(5deg) translateY(50px) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotateZ(10deg) translateY(100px) translateX(25px);
      opacity: 0;
    }
  }

  @keyframes flowe-three {
    0% {
      transform: scale(0.5) rotateZ(10deg) translateY(-200px) translateX(100px);
      opacity: 0;
    }
    25% {
      transform: scale(1) rotateZ(5deg) translateY(-100px) translateX(50px);
      opacity: 1;
    }
    50% {
      transform: scale(1) rotateZ(0deg) translateY(0px) translateX(25px);
      opacity: 1;
    }
    75% {
      transform: scale(0.5) rotateZ(-5deg) translateY(50px) translateX(0px);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotateZ(-10deg) translateY(100px) translateX(-25px);
      opacity: 0;
    }
  }
`;

export default Loader;
