"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";

export default function BlogPage() {
  const Post = ({
    title,
    date,
    description,
  }: {
    title: string;
    date: Date;
    description: string;
  }) => {
    return (
      <Card
        isHoverable
        isPressable
        className="p-4 w-full"
        onPress={() => {
          addToast({
            title: "Hey!",
            description:
              "This doesn't link anywhere. But you can make it so it does!",
            color: "danger",
          });
        }}
      >
        <CardHeader className="flex justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-default-500">
            {date.toLocaleDateString()}
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">{description}</p>
        </CardBody>
      </Card>
    );
  };

  return (
    <div>
      <h1 className={title()}>Sales</h1>
      <div className="mt-20 flex flex-col gap-6">
        <Post
          date={new Date("May 29 2026")}
          description="This includes a tripling of Almond Water sales to an alternate reality storage facility."
          title="7,800 Products Sold This Month"
        />
        <Post
          date={new Date("September 4 2025")}
          description="An influx of orders for sharpened needles strains production."
          title="Encoutered Manufacturing Difficulties"
        />
      </div>
    </div>
  );
}
