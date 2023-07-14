"use client";

import styles from "./page.module.css";
import downloadSVGasPNG from "@/utills/downloadSVGasPNg";
import { useRef, useState } from "react";
import Ticket from "@/components/Ticket";
import moment from "moment";

type ImageState = {
  src: string;
  cover: boolean;
};

const Home = () => {
  const ref = useRef<SVGSVGElement>(null);

  const [eventName, setEventName] = useState("Event Name");
  const [venueName, setVenueName] = useState("Venue Name");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState(moment().format("HH:mm"));
  const [price, setPrice] = useState(150);
  const [presalePrice, setPresalePrice] = useState(22.5);

  const [mainArt, setMainArt] = useState<ImageState>({ src: "", cover: false });
  const [logoArt, setLogoArt] = useState<ImageState>({ src: "", cover: false });

  const [background, setBackground] = useState("#000000");
  const [color, setColor] = useState<"white" | "black">("white");

  const dateMomentInstance = moment(`${date} ${time}`).locale("it");

  return (
    <main className={styles.main}>
      <div className={styles.ticketContainer}>
        <Ticket
          ref={ref}
          eventName={eventName}
          venueName={venueName}
          date={dateMomentInstance}
          price={price}
          presalePrice={presalePrice}
          background={background}
          color={color}
          mainArt={{
            src: mainArt.src,
            preserveAspectRatio: mainArt.cover ? "cover" : "contain",
          }}
          logoArt={{
            src: logoArt.src,
            preserveAspectRatio: logoArt.cover ? "cover" : "contain",
          }}
        />
      </div>

      <div>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="text"
          value={venueName}
          onChange={(e) => setVenueName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />

        <input
          type="number"
          value={presalePrice}
          onChange={(e) => setPresalePrice(+e.target.value)}
        />
      </div>

      <div>
        <input
          type="color"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
        />
        <input
          type="radio"
          name="color"
          value="white"
          checked={color === "white"}
          onChange={(e) => setColor(e.target.value as "white" | "black")}
        />
        <label htmlFor="white">White</label>
        <input
          type="radio"
          name="color"
          value="black"
          checked={color === "black"}
          onChange={(e) => setColor(e.target.value as "white" | "black")}
        />
        <label htmlFor="black">Black</label>
      </div>

      <div>
        <input
          type="text"
          placeholder="Main Art URL"
          value={mainArt.src}
          onChange={(e) => setMainArt({ ...mainArt, src: e.target.value })}
        />
        <input
          id="mainArtAspectRatio"
          type="checkbox"
          checked={mainArt.cover}
          onChange={(e) => setMainArt({ ...mainArt, cover: e.target.checked })}
        />
        <label htmlFor="mainArtAspectRatio">Cover</label>
      </div>

      <div>
        <input
          type="text"
          placeholder="Logo Art URL"
          value={logoArt.src}
          onChange={(e) => setLogoArt({ ...logoArt, src: e.target.value })}
        />
        <input
          id="logoArtAspectRatio"
          type="checkbox"
          checked={logoArt.cover}
          onChange={(e) => setLogoArt({ ...logoArt, cover: e.target.checked })}
        />
        <label htmlFor="logoArtAspectRatio">Cover</label>
      </div>

      <button
        onClick={() =>
          ref.current &&
          downloadSVGasPNG(ref.current, `${eventName} - Ticket.png`, 4)
        }
      >
        Download image
      </button>
    </main>
  );
};

export default Home;
