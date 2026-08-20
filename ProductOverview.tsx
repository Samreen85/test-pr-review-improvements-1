import React from "react";

const features = [
  {
    title: "Smart design tools",
    description:
      "Use intelligent tools to turn your ideas into polished product experiences in less time.",
  },
  {
    title: "Flexible building blocks",
    description:
      "Create scalable interfaces with reusable sections, components, and customizable layouts.",
  },
  {
    title: "Built for collaboration",
    description:
      "Work together, share feedback, and keep everyone aligned throughout the design process.",
  },
];

export default function ProductOverview() {
  return (
    <main
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        color: "#111827",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "90px 24px 70px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            display: "inline-block",
            margin: 0,
            padding: "7px 12px",
            borderRadius: 999,
            background: "#eef2ff",
            color: "#4f46e5",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          PRODUCT EXPERIENCE
        </p>

        <h1
          style={{
            maxWidth: 760,
            margin: "20px auto 18px",
            fontSize: 52,
            lineHeight: 1.08,
            letterSpacing: -1.5,
          }}
        >
          Build better digital experiences with ease.
        </h1>

        <p
          style={{
            maxWidth: 680,
            margin: "0 auto 34px",
            fontSize: 18,
            lineHeight: 1.7,
            color: "#6b7280",
          }}
        >
          Bring your ideas, designs, and team together in one streamlined
          workspace built to help you move from concept to launch faster.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <button
            style={{
              border: 0,
              borderRadius: 10,
              padding: "14px 24px",
              background: "#4f46e5",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Start building
          </button>

          <button
            style={{
              border: "1px solid #d1d5db",
              borderRadius: 10,
              padding: "14px 24px",
              background: "#fff",
              color: "#111827",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Learn more
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 90px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {features.map((feature, index) => (
          <article
            key={feature.title}
            style={{
              padding: 28,
              border: "1px solid #e5e7eb",
              borderRadius: 18,
              background: "#fff",
              boxShadow: "0 8px 24px rgba(17, 24, 39, 0.05)",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
                borderRadius: 10,
                background: "#eef2ff",
                color: "#4f46e5",
                fontWeight: 700,
              }}
            >
              {index + 1}
            </div>

            <h2
              style={{
                fontSize: 20,
                margin: "0 0 10px",
              }}
            >
              {feature.title}
            </h2>

            <p
              style={{
                color: "#6b7280",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {feature.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
