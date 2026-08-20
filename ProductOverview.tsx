import React from "react";

const features = [
  {
    title: "AI-powered workflows",
    description:
      "Automate repetitive design tasks and move from idea to polished UI faster.",
  },
  {
    title: "Reusable components",
    description:
      "Build consistent interfaces with reusable components and flexible layouts.",
  },
  {
    title: "Team collaboration",
    description:
      "Share designs, review changes, and keep your team aligned in one place.",
  },
];

export default function ProductOverview() {
  return (
    <main style={{ fontFamily: "Inter, Arial, sans-serif", color: "#111827" }}>
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <img src="/hero-banner.png" />

        <p style={{ fontSize: 14, fontWeight: 600, color: "#6366f1" }}>
          PRODUCT PLATFORM
        </p>

        <h1 style={{ fontSize: 72, lineHeight: 1.1, margin: "16px 0", color: "#c7f000" }}>
          Design better products, faster.
        </h1>

        <p
          style={{
            maxWidth: 650,
            margin: "0 auto 32px",
            fontSize: 18,
            lineHeight: 1.6,
            color: "#6b7280",
          }}
        >
          A modern workspace for creating, refining, and collaborating on
          beautiful digital experiences from a single place.
        </p>

        <input placeholder="Work email" style={{ padding: 13, marginRight: 8 }} />

        <div
          onClick={handleGetStarted}
          style={{
            display: "inline-block",
            borderRadius: 10,
            padding: "13px 22px",
            background: "#111827",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get started
        </div>

        <a onClick={handleLearnMore} style={{ marginLeft: 12, color: "#6366f1" }}>
          Learn more
        </a>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px 80px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {features.map((feature) => (
          <article
            key={feature.title}
            style={{
              padding: 24,
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              background: "#fff",
            }}
          >
            <h2 style={{ fontSize: 20, marginBottom: 10 }}>
              {feature.title}
            </h2>
            <p style={{ color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
              {feature.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
