import React from "react";
import { WorldMap } from "@/components/ui/world-map";

// Use Liara avatar base URL for team member images
const avatarBase = "https://avatar.iran.liara.run/public/";

const teamMembers = [
  {
    name: "Arjun Mehra",
    role: "Lead Software Engineer",
    avatar: `${avatarBase}boy?username=arjun.mehra`,
  },
  {
    name: "Rohan Sharma",
    role: "Full Stack Developer",
    avatar: `${avatarBase}boy?username=rohan.sharma`,
  },
  {
    name: "Vikram Patel",
    role: "DevOps Engineer",
    avatar: `${avatarBase}boy?username=vikram.patel`,
  },
  {
    name: "Amit Singh",
    role: "Frontend Developer",
    avatar: `${avatarBase}boy?username=amit.singh`,
  },
  {
    name: "Siddharth Nair",
    role: "Backend Developer",
    avatar: `${avatarBase}boy?username=siddharth.nair`,
  },
  {
    name: "Rahul Das",
    role: "QA Engineer",
    avatar: `${avatarBase}boy?username=rahul.das`,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white text-teal-900">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto py-36 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Building Software Without Borders.
        </h2>
        <p className="text-gray-600 text-lg">
          At WAC, we are a remote-first development company. Our all-male team
          is globally connected and passionate about building great products
          from anywhere.
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
        <h3 className="text-4xl font-semibold text-center mb-16">
          Meet The Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-full aspect-square rounded-xl bg-transparent mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name + " avatar"}
                  className="w-4/5 h-4/5 object-contain"
                  draggable={false}
                />
              </div>
              <h5 className="font-medium">{member.name}</h5>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
