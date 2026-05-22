// ─── OPEN HOUSE DATA (DYNAMIC) ────────────────────────────────────────────────
function getNextTwoSaturdays() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 6 = Sat
  
  // How many days until next Saturday (if today is Saturday and it's past 3pm, skip to next one)
  const isPastSaturday = day === 6 && now.getHours() >= 15;
  const daysUntilNextSat = isPastSaturday
    ? 7
    : (6 - day + 7) % 7 === 0 ? 7 : (6 - day + 7) % 7;

  const sat1 = new Date(now);
  sat1.setDate(now.getDate() + daysUntilNextSat);

  const sat2 = new Date(sat1);
  sat2.setDate(sat1.getDate() + 7);

  return [sat1, sat2].map((date, idx) => ({
    month: date.toLocaleString("en-US", { month: "short" }),
    day: date.getDate(),
    dow: "Sat",
    time: "1:00 PM – 3:00 PM",
    badge: "Open House",
    badgeStyle: "gold",
    featured: idx === 0,
    headline: null,
    subline: "Public Open House · All welcome",
    cta: null,
  }));
}

const openHouses = [
  ...getNextTwoSaturdays(),
  {
    month: null,
    day: null,
    dow: null,
    time: "By Appointment Only",
    badge: "Private Showing",
    badgeStyle: "navy",
    featured: false,
    headline: "Private Showing",
    subline:
      "Want to see it on your schedule? Call Mark directly and we'll make it happen — no waiting for the next open house.",
    cta: { label: "📞 Call Mark: (816) 853-5467", href: "tel:8168535467" },
  },
];
