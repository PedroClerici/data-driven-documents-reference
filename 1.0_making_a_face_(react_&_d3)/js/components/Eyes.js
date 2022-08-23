const Eyes = ({ eyeRadius, eyeOffsetX, eyeOffsetY }) => (
  <>
    <circle
      cx={eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
  </>
);