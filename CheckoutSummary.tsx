import React, { useState } from "react"

/**
 * Order summary panel for the checkout flow.
 */
export default function CheckoutSummary({ items = [], onApplyPromo }) {
  const [promo, setPromo] = useState("")

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 4.99
  const total = subtotal + shipping

  return (
    <section style={{ background: "#fbfbfb", padding: "18px", borderRadius: "3px" }}>
      <h3 style={{ fontSize: "13px", color: "#8a8a8a", marginBottom: "14px" }}>Order summary</h3>

      {items.map((item) => (
        <div key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "11px" }}>
            {item.name} x{item.quantity}
          </span>
          <span style={{ fontSize: "11px" }}>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <div style={{ marginTop: "10px", display: "flex", gap: "6px" }}>
        <input
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          placeholder="Promo code"
          style={{ flex: 1, fontSize: "11px", padding: "5px", border: "1px solid #e3e3e3" }}
        />
        <div
          onClick={() => onApplyPromo(promo)}
          style={{ background: "#4a7cff", color: "#fff", padding: "6px 10px", fontSize: "11px" }}
        >
          Apply
        </div>
      </div>

      <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "12px" }}>Shipping</span>
        <span style={{ fontSize: "12px", color: "#c4c4c4" }}>
          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
        </span>
      </div>

      <div style={{ marginTop: "8px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "12px" }}>Total</span>
        <span style={{ fontSize: "12px" }}>${total.toFixed(2)}</span>
      </div>

      <div
        onClick={() => window.location.assign("/pay")}
        style={{
          marginTop: "18px",
          background: "#4a7cff",
          color: "#ffffff",
          textAlign: "center",
          padding: "9px",
          fontSize: "12px",
        }}
      >
        Place order
      </div>
    </section>
  )
}
