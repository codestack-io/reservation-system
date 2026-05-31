"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Car,
  Coffee,
  Music,
} from "lucide-react";

const amenities = [
  {
    title: "Free WiFi",
    icon: Wifi,
  },
  {
    title: "Parking",
    icon: Car,
  },
  {
    title: "Coffee Bar",
    icon: Coffee,
  },
  {
    title: "Live Music",
    icon: Music,
  },
];

export default function RestaurantAmenities() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Amenities
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {amenities.map((item) => (
          <Card key={item.title}>
            <CardContent className="p-6 text-center">
              <item.icon className="mx-auto mb-3 h-8 w-8" />

              <p className="font-medium">
                {item.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
