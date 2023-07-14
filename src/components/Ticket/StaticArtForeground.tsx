import TicketOneLogoWhite from "public/ticket/ticketone_logo_white.png";
import TicketOneLogoBlack from "public/ticket/ticketone_logo_black.png";

export type StaticArtForegroundProps = {
  color?: "white" | "black";
};

const StaticArtForeground: React.FC<StaticArtForegroundProps> = ({
  color = "white",
}) => (
  <g id="ticketone_logo">
    <image
      id="ticketone_logo_image"
      width={311}
      height={81}
      transform="translate(505.8 41.4) scale(0.2)"
      xlinkHref={
        color === "white" ? TicketOneLogoWhite.src : TicketOneLogoBlack.src
      }
    />
  </g>
);

export default StaticArtForeground;
