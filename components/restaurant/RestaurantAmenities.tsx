"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Wine,
  CalendarCheck,
  Wifi,
  Car,
  Music,
  LucideIcon,
} from "lucide-react";

interface Props {
  features: string[];
}

const icons: Record<string, LucideIcon> = {
  Rooftop: Building2,
  Reservations: CalendarCheck,
  "Wine Selection": Wine,
  "Free WiFi": Wifi,
  Parking: Car,
  "Live Music": Music,
};

export default function RestaurantAmenities({
  features,
}: Props) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Features
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = icons[feature] ?? Building2;

          return (
            <Card key={feature}>
              <CardContent className="p-6 text-center">
                <Icon className="mx-auto mb-3 h-8 w-8" />
                <p>{feature}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}