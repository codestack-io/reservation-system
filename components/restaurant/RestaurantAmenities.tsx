"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Car,
  CalendarCheck,
  Music,
  Building2,
  Trees,
  Armchair,
  Accessibility,
  AirVent,
  Dog,
  ShoppingBag,
  Bike,
  Leaf,
  Salad,
  Utensils,
  ChefHat,
  Beer,
  Baby,
  Cigarette,
  Ban,
  LucideIcon,
} from "lucide-react";

interface Props {
  features: string[];
}

const icons: Record<string, LucideIcon> = {
  Reservations: CalendarCheck,
  Parking: Car,
  WiFi: Wifi,
  "Live Music": Music,
  Rooftop: Building2,
  "Outdoor Seating": Trees,
  "Indoor Seating": Armchair,
  "Private Room": Building2,
  "Wheelchair Accessible": Accessibility,
  "Air Conditioning": AirVent,
  "Pet Friendly": Dog,
  Takeaway: ShoppingBag,
  Delivery: Bike,
  "Vegan Options": Leaf,
  "Vegetarian Options": Salad,
  "Halal Food": Utensils,
  Buffet: ChefHat,
  Bar: Beer,
  "Kids Area": Baby,
  "Smoking Area": Cigarette,
  "Non-Smoking": Ban,
};

const descriptions: Record<string, string> = {
  Reservations: "Reserve your table online with ease.",
  Parking: "Convenient parking for all guests.",
  WiFi: "Free high-speed wireless internet.",
  "Live Music": "Enjoy live performances every week.",
  Rooftop: "Dine with beautiful rooftop views.",
  "Outdoor Seating": "Relax in our open-air dining area.",
  "Indoor Seating": "Comfortable climate-controlled seating.",
  "Private Room": "Ideal for meetings and celebrations.",
  "Wheelchair Accessible": "Accessible entrances and seating.",
  "Air Conditioning": "Cool and comfortable indoor atmosphere.",
  "Pet Friendly": "Your furry friends are welcome.",
  Takeaway: "Order your favorite meals to go.",
  Delivery: "Fast and reliable food delivery.",
  "Vegan Options": "Delicious plant-based dishes available.",
  "Vegetarian Options": "Fresh vegetarian meals every day.",
  "Halal Food": "Prepared with halal-certified ingredients.",
  Buffet: "Unlimited buffet with diverse cuisines.",
  Bar: "Premium beverages and handcrafted cocktails.",
  "Kids Area": "A dedicated play area for children.",
  "Smoking Area": "Separate designated smoking zone.",
  "Non-Smoking": "100% smoke-free dining environment.",
};

export default function RestaurantAmenities({
  features,
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
          Features
        </p>

        <h2 className="mt-3 text-5xl font-bold text-gray-900">
          Everything You Need
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Discover the premium amenities designed to make every visit
          comfortable, convenient, and memorable.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = icons[feature] ?? Building2;

          return (
            <Card
              key={feature}
              className="border border-orange-100 rounded-3xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                {/* Icon */}
                <div className="mb-6 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 p-5">
                  <Icon className="h-9 w-9 text-orange-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-500 leading-6">
                  {descriptions[feature] ??
                    "Enjoy this premium facility during your dining experience."}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}