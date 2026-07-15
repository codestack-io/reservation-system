"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Info() {
  return (
  <Card className="bg-red-500 text-white">
    <CardContent className="p-10">
      <h2 className="text-4xl">
        About Our Restaurant
      </h2>

      <p>Hello World</p>
    </CardContent>
  </Card>
);
}
  