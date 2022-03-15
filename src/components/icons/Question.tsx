interface QuestionIconProps {
  color?: string;
}

export const QuestionIcon = ({ color = "white" }: QuestionIconProps) => (
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <path d="M0 0h24v24h-24Z"></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.68567 9.68567l-5.26376e-08 2.26865e-07c.236925-1.02113 1.16697-1.72914 2.21433-1.68567l-1.23132e-07 6.82006e-09c1.17217-.0649246 2.17705.828297 2.25 2 0 1.50391-2.15 2-2.15 3"
      ></path>
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2.7614"
        ry="0"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></rect>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.125 15.75v0c0 .0690356-.0559644.125-.125.125 -.0690356 0-.125-.0559644-.125-.125 0-.0690356.0559644-.125.125-.125"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15.625h-5.46392e-09c.0690356-3.01764e-09.125.0559644.125.125"
      ></path>
    </g>
  </svg>
);