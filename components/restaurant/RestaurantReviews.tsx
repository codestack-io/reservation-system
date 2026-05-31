"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John",
    review:
      "Amazing food and atmosphere.",
  },
  {
    name: "Sarah",
    review:
      "Excellent customer service.",
  },
  {
    name: "David",
    review:
      "Highly recommended.",
  },
];

export default function RestaurantReviews() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mb-4">
                {review.review}
              </p>

              <h4 className="font-semibold">
                {review.name}
              </h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}