import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const menuData: Record<string, MenuItem[]> = {
  starters: [
    {
      id: 1,
      name: "Chicken Wings",
      description: "Spicy grilled wings",
      price: 12,
    },
    {
      id: 2,
      name: "Garlic Bread",
      description: "Fresh baked garlic bread",
      price: 8,
    },
  ],

  "main-course": [
    {
      id: 3,
      name: "Beef Steak",
      description: "Served with vegetables",
      price: 25,
    },
    {
      id: 4,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon",
      price: 28,
    },
  ],

  desserts: [
    {
      id: 5,
      name: "Chocolate Cake",
      description: "Rich chocolate flavor",
      price: 9,
    },
  ],

  drinks: [
    {
      id: 6,
      name: "Fresh Juice",
      description: "Seasonal fruit juice",
      price: 5,
    },
  ],
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const items = menuData[category];

  if (!items) {
    notFound();
  }

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold capitalize mb-10">
        {category.replace("-", " ")}
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-6">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>

                <span className="font-bold">
                  ${item.price}
                </span>
              </div>

              <p className="text-muted-foreground mt-2">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}