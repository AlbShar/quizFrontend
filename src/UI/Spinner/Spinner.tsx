import React from "react";

type ISpinner = {
  width: number,
  height: number,
  color: "#fcfdff" | "#1f2ce0",
  margin: string
}

const Spinner = ({width, height, color, margin}: ISpinner) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
        style={{margin, background: "none", display: "block", shapeRendering: "auto", width, 
        height, textAlign: "left"}} 
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(36 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(72 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(108 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(144 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(216 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(252 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(288 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.1s" repeatCount="indefinite">
    </animate>
  </rect>
</g><g transform="rotate(324 50 50)">
  <rect x="47" y="28" rx="2.88" ry="2.88" width="6" height="12" fill={color}>
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite">
    </animate>
  </rect>
</g>        
</svg>

    );


};

export default Spinner;