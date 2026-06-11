import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/food-factions.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/food-factions")({
  head: () => ({
    meta: [
      { title: "Ridge Hall Ambler | Food Factions" },
      { name: "description", content: "Meet the vendors and food factions at Ridge Hall Ambler." },
      { property: "og:title", content: "Ridge Hall Ambler | Food Factions" },
      { property: "og:description", content: "Vendors and food factions at Ridge Hall." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="Ridge Hall Ambler | Food Factions" />,
});
