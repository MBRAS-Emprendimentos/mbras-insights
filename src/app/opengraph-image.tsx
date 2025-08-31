import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FEF9EC 0%, #FAFAFA 40%, #0A1E3C 120%)",
          position: "relative",
          fontFamily: "system-ui, Inter, Segoe UI, Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(80% 80% at 20% 20%, rgba(10,30,60,0.12) 0%, transparent 60%), radial-gradient(70% 70% at 80% 10%, rgba(40,81,90,0.10) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 48,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#0A1E3C",
              letterSpacing: -2,
            }}
          >
            MBRAS Conecta
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 28,
              color: "#28515A",
              fontWeight: 600,
            }}
          >
            O essencial, antes do consenso
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

