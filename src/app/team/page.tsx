import React from "react";
import { WorldMap } from "@/components/ui/world-map";

export default function AboutUs() {
  return (
    <div className="bg-white text-teal-900">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto py-36 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Compliance without borders.
        </h2>
        <p className="text-gray-600 text-lg">
          At WAC, we believe great work happens anywhere. Our team is globally connected and proudly remote-first.
        </p>
      </div>

      {/* Remote Work & Connectivity Map */}
      <div className="max-w-7xl mx-auto mb-12 px-4">
        <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h3 className="text-4xl font-semibold text-center mb-16">Meet Our Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Ava Patel", role: "Chief Compliance Officer" },
            { name: "Liam Thompson", role: "Head of Risk & Governance" },
            { name: "Sophia Chen", role: "Senior Legal Advisor" },
            { name: "Noah Rodriguez", role: "Product & Strategy Lead" },
            { name: "Emma Williams", role: "Policy Analyst" },
            { name: "James Okoro", role: "Regional Compliance Manager" },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-full aspect-square rounded-xl bg-gray-300 mb-2"></div>
              <h5 className="font-medium">{member.name}</h5>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
