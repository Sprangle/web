export const Words = ({ color = "white", ...props }) => (
  <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.28617 12.214C1.66619 11.5956 1.17453 10.8608 0.839422 10.0518C0.504319 9.24285 0.332385 8.37562 0.333501 7.49998C0.333501 3.81798 3.31817 0.833313 7.00017 0.833313C10.6822 0.833313 13.6668 3.81798 13.6668 7.49998C13.6668 11.182 10.6822 14.1666 7.00017 14.1666H0.333501L2.28617 12.214ZM6.3335 3.49998V11.5H7.66683V3.49998H6.3335ZM3.66683 5.49998V9.49998H5.00017V5.49998H3.66683ZM9.00017 5.49998V9.49998H10.3335V5.49998H9.00017Z"
      fill={color}
    />
  </svg>
);
