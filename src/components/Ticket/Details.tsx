import {
  CarnovaNarrow,
  CarnovaNarrowSemibold,
  PacificStandardLight,
} from "@/components/Ticket/FontStyles";
import moment from "moment";
import React from "react";

export type TicketDetailsProps = {
  eventName: string;
  venueName: string;
  date: moment.Moment;
  price: number;
  presalePrice: number;
  sector?: string;
  sectorDescription?: string;
  row?: string;
  seatNumber?: string;
  fill?: string;
};

const formatPrice = (price: number) => price.toFixed(2);

const Details: React.FC<TicketDetailsProps> = ({
  eventName,
  venueName,
  date,
  price,
  presalePrice,
  sector,
  sectorDescription,
  row,
  seatNumber,
  fill = "#fff",
}) => (
  <g id="fields">
    <defs>
      <filter id="crispify">
        <feComponentTransfer>
          <feFuncA type="discrete" tableValues="0 0.2 1" />
        </feComponentTransfer>
      </filter>
    </defs>

    <style>{`#fields text { filter: url(#crispify); } `}</style>

    <text
      transform="translate(422.4855 90.495) scale(0.9888 1)"
      style={{
        fontSize: "6.797999858856201px",
        fill: fill,
        fontFamily: CarnovaNarrowSemibold,
      }}
    >
      {eventName}
    </text>

    <text
      transform="translate(422.4859 97.566) scale(0.9888 1)"
      style={{
        fontSize: "7.079790115356445px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      Data: {date.format("DD MMMM YYYY")}
    </text>

    <text
      transform="translate(422.4855 104.1451) scale(0.9888 1)"
      style={{
        fontSize: "7.079790115356445px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      Ore: {date.format("HH:mm")}
    </text>

    <text
      transform="translate(503.4907 90.4947) scale(0.9888 1)"
      style={{
        fontSize: "6.797999858856201px",
        fill: fill,
        fontFamily: CarnovaNarrowSemibold,
      }}
    >
      {eventName}
    </text>

    <text
      transform="translate(503.4911 97.5658) scale(0.9888 1)"
      style={{
        fontSize: "7.079790115356445px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      Data: {date.format("DD MMMM YYYY")}
    </text>

    <text
      transform="translate(503.4907 104.1449) scale(0.9888 1)"
      style={{
        fontSize: "7.079790115356445px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      Ore: {date.format("HH:mm")}
    </text>

    <text
      transform="translate(422.4868 122.0044) scale(1.612 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Prezzo:
    </text>

    <text
      transform="translate(422.4863 128.9712) scale(1.5408 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Prev:
    </text>

    <text
      transform="translate(422.4858 136.1617) scale(1.5282 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Totale:
    </text>

    <text
      transform="translate(422.4863 143.2456) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Intero
    </text>

    <text
      transform="translate(443.2467 128.9713) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(452.111 128.9713) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(presalePrice)}
    </text>

    <text
      transform="translate(443.2463 136.1615) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(452.1105 136.1615) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(price + presalePrice)}
    </text>

    <text
      transform="translate(443.2465 122.0044) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(452.1107 122.0044) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(price)}
    </text>

    <text
      transform="translate(503.3753 122.0049) scale(1.612 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Prezzo:
    </text>

    <text
      transform="translate(503.3748 128.9717) scale(1.5408 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Prev:
    </text>

    <text
      transform="translate(503.3743 136.1621) scale(1.5282 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Totale:
    </text>

    <text
      transform="translate(503.3748 143.2461) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Intero
    </text>

    <text
      transform="translate(524.1353 128.9717) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(532.9995 128.9717) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(presalePrice)}
    </text>

    <text
      transform="translate(524.1348 136.162) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(532.9991 136.162) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(price + presalePrice)}
    </text>

    <text
      transform="translate(524.135 122.0048) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(532.9993 122.0048) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(price)}
    </text>

    <text
      transform="translate(65.3862 61.9616) scale(0.8722 1)"
      style={{
        fontSize: "15.595905303955078px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      {eventName}
    </text>

    <text
      transform="translate(65.3863 88.0183) scale(0.8377 1)"
      style={{
        fontSize: "13.258983612060547px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      {venueName}
    </text>

    <text
      transform="translate(65.1254 102.5331) scale(0.8991 1)"
      style={{
        fontSize: "14.06818962097168px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      Data: {date.format("DD MMMM YYYY")}
    </text>

    <text
      transform="translate(178.4297 102.5329) scale(0.8566 1)"
      style={{
        fontSize: "14.06818962097168px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      Ora: {date.format("HH:mm")}
    </text>

    <text
      transform="translate(65.3861 124.7781) scale(1.3895 1)"
      style={{
        fontSize: "9.86618709564209px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Settore:
    </text>

    <text
      transform="translate(92.996 124.7781) scale(0.9769 1)"
      style={{
        fontSize: "13.970664024353027px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      {sector}
    </text>

    <text
      transform="translate(65.1254 139.0164) scale(1.3667 1)"
      style={{
        fontSize: "9.86618709564209px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {sectorDescription}
    </text>

    <text
      transform="translate(65.3861 153.5172) scale(1.3667 1)"
      style={{
        fontSize: "9.86618709564209px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      fila
    </text>

    <text
      transform="translate(94.7376 153.5174) scale(1.3667 1)"
      style={{
        fontSize: "9.86618709564209px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      posto
    </text>

    <text
      transform="translate(79.7941 154.5266) scale(0.9769 1)"
      style={{
        fontSize: "13.970664024353027px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      {row}
    </text>

    <text
      transform="translate(115.2048 154.5266) scale(0.9769 1)"
      style={{
        fontSize: "13.970664024353027px",
        fill: fill,
        fontFamily: CarnovaNarrow,
      }}
    >
      {seatNumber}
    </text>

    <text
      transform="translate(65.1254 167.9725) scale(1.4419 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {sectorDescription}
    </text>

    <text
      transform="translate(151.6713 153.5174) scale(1.612 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Prezzo:
    </text>

    <text
      transform="translate(151.6708 160.4842) scale(1.5408 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Prev:
    </text>

    <text
      transform="translate(151.6703 167.6746) scale(1.5282 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Totale:
    </text>

    <text
      transform="translate(151.6708 174.7586) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Intero:
    </text>

    <text
      transform="translate(65.3863 43.6834) scale(1.1648 1)"
      style={{
        fontSize: "6.835891246795654px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      20 Webshop - TktID: 0123456789 TDL: 0123456789 ET: 0123456789
    </text>

    <line
      x1={65.1254}
      y1={183.5792}
      x2={226.9922}
      y2={183.5792}
      style={{
        fill: fill,
        stroke: fill,
        strokeMiterlimit: 10,
        strokeWidth: "0.75px",
      }}
    />

    <text
      transform="translate(151.6703 206.2441) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Data/ora: {date.format("DD/MM/YYYY HH:mm")}
    </text>

    <text
      transform="translate(65.1254 192.0972) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      CF Org: 00000000000
    </text>

    <text
      transform="translate(65.1254 199.4401) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      CF Tit: 00000000000
    </text>

    <text
      transform="translate(65.1258 206.2441) scale(1.4311 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      S.F: 0000000000abcdef
    </text>

    <text
      transform="translate(65.1254 213.3299) scale(1.4036 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      ID Sistema: 00000000
    </text>

    <text
      transform="translate(151.6713 192.0973) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Carta: A0000000
    </text>

    <text
      transform="translate(151.6717 199.0076) scale(1.5107 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Progressivo: 123456
    </text>

    <text
      transform="translate(172.4312 160.4842) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(181.2955 160.4842) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(presalePrice)}
    </text>

    <text
      transform="translate(172.4308 167.6745) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(181.295 167.6745) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(price + presalePrice)}
    </text>

    <text
      transform="translate(172.431 153.5173) scale(1.467 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      EUR
    </text>

    <text
      transform="translate(181.2952 153.5173) scale(0.8624 1)"
      style={{
        fontSize: "8.28993034362793px",
        fill: fill,
        fontFamily: CarnovaNarrow,
        letterSpacing: "-0.00006829815156732513em",
      }}
    >
      {formatPrice(price)}
    </text>

    <text
      transform="translate(423.0814 157.7938) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"CF O"}
      <tspan
        x={5.8434}
        y={0}
        style={{
          letterSpacing: "-0.010017276350167215em",
        }}
      >
        {"r"}
      </tspan>
      <tspan x={7.1275} y={0}>
        {"g: 00000000000"}
      </tspan>
    </text>

    <text
      transform="translate(423.0814 165.1368) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"CF Tit: 00000000000"}
    </text>
    <text
      transform="translate(423.0818 171.9408) scale(1.4311 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      <tspan
        style={{
          letterSpacing: "-0.04000889971571342em",
        }}
      >
        {"S"}
      </tspan>
      <tspan x={1.6053} y={0}>
        {".F: 0000000000abcdef"}
      </tspan>
    </text>
    <text
      transform="translate(423.0814 179.0265) scale(1.4036 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"ID S"}
      <tspan
        x={5.6508}
        y={0}
        style={{
          letterSpacing: "-0.01002211025817877em",
        }}
      >
        {"i"}
      </tspan>
      <tspan
        x={6.5369}
        y={0}
        style={{
          letterSpacing: "-0.00005417356896312849em",
        }}
      >
        {"s"}
      </tspan>
      <tspan
        x={8.3347}
        y={0}
        style={{
          letterSpacing: "-0.009967936689215641em",
        }}
      >
        {"t"}
      </tspan>
      <tspan x={9.6514} y={0}>
        {"ema: 00000000"}
      </tspan>
    </text>
    <text
      transform="translate(503.3735 157.7937) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"CF O"}
      <tspan
        x={5.8434}
        y={0}
        style={{
          letterSpacing: "-0.010017276350167215em",
        }}
      >
        {"r"}
      </tspan>
      <tspan x={7.1275} y={0}>
        {"g: 00000000000"}
      </tspan>
    </text>
    <text
      transform="translate(503.3735 165.1367) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"CF Tit: 00000000000"}
    </text>
    <text
      transform="translate(503.374 171.9407) scale(1.4311 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      <tspan
        style={{
          letterSpacing: "-0.04000889971571342em",
        }}
      >
        {"S"}
      </tspan>
      <tspan x={1.6053} y={0}>
        {".F: 0000000000abcdef"}
      </tspan>
    </text>
    <text
      transform="translate(503.3735 179.0264) scale(1.4036 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"ID S"}
      <tspan
        x={5.6508}
        y={0}
        style={{
          letterSpacing: "-0.01002211025817877em",
        }}
      >
        {"i"}
      </tspan>
      <tspan
        x={6.5369}
        y={0}
        style={{
          letterSpacing: "-0.00005417356896312849em",
        }}
      >
        {"s"}
      </tspan>
      <tspan
        x={8.3347}
        y={0}
        style={{
          letterSpacing: "-0.009967936689215641em",
        }}
      >
        {"t"}
      </tspan>
      <tspan x={9.6514} y={0}>
        {"ema: 00000000"}
      </tspan>
    </text>
    <text
      transform="translate(423.0812 210.7276) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Data/ora: {date.format("DD/MM/YY HH:mm")}
    </text>
    <text
      transform="translate(423.0822 196.5808) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      <tspan
        style={{
          letterSpacing: "-0.01998155123816423em",
        }}
      >
        {"C"}
      </tspan>
      <tspan x={1.5411} y={0}>
        {"ar"}
      </tspan>
      <tspan
        x={4.8159}
        y={0}
        style={{
          letterSpacing: "-0.019928549775994033em",
        }}
      >
        {"t"}
      </tspan>
      <tspan
        x={6.0684}
        y={0}
        style={{
          letterSpacing: "-0.0000530014621701969em",
        }}
      >
        {"a: A0000000"}
      </tspan>
    </text>
    <text
      transform="translate(423.0826 203.4911) scale(1.5107 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"P"}
      <tspan
        x={1.7337}
        y={0}
        style={{
          letterSpacing: "-0.010016485810609052em",
        }}
      >
        {"r"}
      </tspan>
      <tspan x={3.0179} y={0}>
        {"og"}
      </tspan>
      <tspan
        x={6.614}
        y={0}
        style={{
          letterSpacing: "-0.010016485810609052em",
        }}
      >
        {"re"}
      </tspan>
      <tspan
        x={9.6962}
        y={0}
        style={{
          letterSpacing: "-0.01998263752166731em",
        }}
      >
        {"s"}
      </tspan>
      <tspan
        x={11.3659}
        y={0}
        style={{
          letterSpacing: "-0.00005033409955079927em",
        }}
      >
        {"s"}
      </tspan>
      <tspan
        x={13.1637}
        y={0}
        style={{
          letterSpacing: "-0.009966151711058253em",
        }}
      >
        {"iv"}
      </tspan>
      <tspan
        x={15.6683}
        y={0}
        style={{
          letterSpacing: "-0.00005033409955079927em",
        }}
      >
        {"o: 123456"}
      </tspan>
    </text>
    <text
      transform="translate(503.3727 210.5646) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      Data/ora: {date.format("DD/MM/YY HH:mm")}
    </text>
    <text
      transform="translate(503.3737 196.4178) scale(1.4347 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      <tspan
        style={{
          letterSpacing: "-0.01998155123816423em",
        }}
      >
        {"C"}
      </tspan>
      <tspan x={1.5411} y={0}>
        {"ar"}
      </tspan>
      <tspan
        x={4.8159}
        y={0}
        style={{
          letterSpacing: "-0.019928549775994033em",
        }}
      >
        {"t"}
      </tspan>
      <tspan
        x={6.0684}
        y={0}
        style={{
          letterSpacing: "-0.0000530014621701969em",
        }}
      >
        {"a: A0000000"}
      </tspan>
    </text>
    <text
      transform="translate(503.3741 203.3281) scale(1.5107 1)"
      style={{
        fontSize: "6.421441555023193px",
        fill: fill,
        fontFamily: PacificStandardLight,
      }}
    >
      {"P"}
      <tspan
        x={1.7337}
        y={0}
        style={{
          letterSpacing: "-0.010016485810609052em",
        }}
      >
        {"r"}
      </tspan>
      <tspan x={3.0179} y={0}>
        {"og"}
      </tspan>
      <tspan
        x={6.614}
        y={0}
        style={{
          letterSpacing: "-0.010016485810609052em",
        }}
      >
        {"re"}
      </tspan>
      <tspan
        x={9.6962}
        y={0}
        style={{
          letterSpacing: "-0.01998263752166731em",
        }}
      >
        {"s"}
      </tspan>
      <tspan
        x={11.3659}
        y={0}
        style={{
          letterSpacing: "-0.00005033409955079927em",
        }}
      >
        {"s"}
      </tspan>
      <tspan
        x={13.1637}
        y={0}
        style={{
          letterSpacing: "-0.009966151711058253em",
        }}
      >
        {"iv"}
      </tspan>
      <tspan
        x={15.6683}
        y={0}
        style={{
          letterSpacing: "-0.00005033409955079927em",
        }}
      >
        {"o: 123456"}
      </tspan>
    </text>
  </g>
);

export default Details;
