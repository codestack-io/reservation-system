"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Info() {
  console.log("Info component rendered");
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-4">
            About Our Restaurant
          </h2>

          <p className="text-muted-foreground mb-6">
            Experience premium dining with carefully crafted dishes,
            elegant interiors, and exceptional service.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>10:00 AM - 11:00 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={18} />
              <span>4.8 Rating</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}