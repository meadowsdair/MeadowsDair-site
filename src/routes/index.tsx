import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PARTNERS = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Partner Slot ${String(i + 1).padStart(2, "0")}`,
  category: [
    "Restaurant",
    "Retail",
    "Services",
    "Wellness",
    "Auto",
    "Home",
  ][i % 6],
  href: i === 0 ? "https://www.meadowsdair.com" : `https://partner${i + 1}.meadowsdair.com`,
  available: i >= 12,
}));

function Slot({ partner }: { partner: typeof PARTNERS[0] }) {
  const isTaken = !partner.available;

  if (isTaken) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="slot-taken"
      >
        <h3 className="font-bold text-lg text-primary">{partner.name}</h3>
        <p className="text-sm text-muted-foreground">{partner.category}</p>
      </a>
    );
  }

  return (
    <div className="slot-empty">
      <p className="italic text-center">🚨 Don't let your competitors take this spot! Grab it now before it's gone forever!</p>
    </div>
  );
}

export function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">MeadowsDair Partner Directory</h1>
        <p className="text-xl text-muted-foreground mt-2">Check out our amazing partners or secure your own premium slot today!</p>
      </header>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PARTNERS.map((partner) => (
          <Slot key={partner.id} partner={partner} />
        ))}
      </main>
    </div>
  );
}
