const Arrow = ({ width, height, fill, strokeColor }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='-45 -50 340 340'
    fill={fill}
    stroke={strokeColor}
    strokeWidth='18'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect width='240' height='90' fill={fill} stroke={fill} strokeWidth='0' />
    <polyline points='16,72 128,184 240,72' />
  </svg>
)

export default Arrow
