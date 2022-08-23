const Face = ({
  width,
  height,
  strokeWidth,
  eyeRadius,
  eyeOffsetX,
  eyeOffsetY,
  mouthRadius,
  mouthWidth 
}) => (
  <FaceContainer
    width={width}
    height={height}
  >
      <BackgroundCircle 
        radius={height / 2 - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
       eyeRadius={eyeRadius}
       eyeOffsetX={eyeOffsetX}
       eyeOffsetY={eyeOffsetY}
      />
      <Mouth 
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth} 
      />
  </FaceContainer>
)