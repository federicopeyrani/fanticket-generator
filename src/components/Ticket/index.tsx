import Details, { TicketDetailsProps } from "@/components/Ticket/Details";
import StaticArtBackground from "@/components/Ticket/StaticArtBackground";
import StaticArtForeground from "@/components/Ticket/StaticArtForeground";
import React, { forwardRef } from "react";
import FontStyles from "@/components/Ticket/FontStyles";
import { ImageParams } from "@/model/ImageParams";

type TicketProps = TicketDetailsProps & {
  ref?: React.Ref<SVGSVGElement>;
  color?: "white" | "black";
  background?: string;
  mainArt: ImageParams;
  logoArt?: ImageParams;
};

const parsePreserveAspectRatio = (
  preserveAspectRatio: ImageParams["preserveAspectRatio"] = "contain"
) => {
  if (preserveAspectRatio === "contain") {
    return "xMidYMid meet";
  }

  if (preserveAspectRatio === "cover") {
    return "xMidYMid slice";
  }
};

const Ticket: React.FC<TicketProps> = forwardRef(function Render(
  {
    color = "white",
    background = "black",
    eventName,
    venueName,
    date,
    price,
    presalePrice,
    mainArt,
    logoArt,
  },
  ref
) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 576 232.4"
    >
      <StaticArtBackground />
      <FontStyles />

      <g id="img">
        <rect
          id="img_background_image"
          width={513}
          height={195}
          fill={background}
          transform="translate(59.2 30.8)"
        />
        <image
          id="img_image"
          width={184}
          height={195}
          transform="translate(234.1 30.8)"
          xlinkHref={mainArt.src}
          preserveAspectRatio={parsePreserveAspectRatio(
            mainArt.preserveAspectRatio
          )}
        />
      </g>

      <g id="cuts">
        <g>
          <line
            x1={498}
            y1={30.6}
            x2={498}
            y2={32.2}
            style={{
              fill: "none",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: "0.30000000000000004px",
            }}
          />
          <line
            x1={498}
            y1={34.9641}
            x2={498}
            y2={223.118}
            style={{
              fill: "none",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: "0.30000000000000004px",
              strokeDasharray: "3.1589322090148926,2.764065742492676",
            }}
          />
          <line
            x1={498}
            y1={224.5}
            x2={498}
            y2={226.1}
            style={{
              fill: "none",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: "0.30000000000000004px",
            }}
          />
        </g>
        <g>
          <line
            x1={418.2}
            y1={30.85}
            x2={418.2}
            y2={32.45}
            style={{
              fill: "none",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: "0.30000000000000004px",
            }}
          />
          <line
            x1={418.2}
            y1={44.3204}
            x2={418.2}
            y2={218.8148}
            style={{
              fill: "none",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: "0.30000000000000004px",
              strokeDasharray: "3.1654322147369385,11.870369911193848",
            }}
          />
          <line
            x1={418.2}
            y1={224.75}
            x2={418.2}
            y2={226.35}
            style={{
              fill: "none",
              stroke: "#fff",
              strokeMiterlimit: 10,
              strokeWidth: "0.30000000000000004px",
            }}
          />
        </g>
      </g>

      <Details
        eventName={eventName}
        venueName={venueName}
        date={date}
        price={price}
        presalePrice={presalePrice}
        fill={color}
      />

      {logoArt && (
        <g id="logo-2" data-name="logo">
          <image
            id="logo_image"
            width={344}
            height={168}
            transform="translate(423.6 37.2) scale(0.2)"
            xlinkHref={logoArt.src}
            preserveAspectRatio={parsePreserveAspectRatio(
              logoArt.preserveAspectRatio
            )}
          />
        </g>
      )}

      <StaticArtForeground color={color} />
    </svg>
  );
});

export default Ticket;
