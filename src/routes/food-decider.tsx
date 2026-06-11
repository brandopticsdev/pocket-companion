import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/food-decider.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/food-decider")({
  head: () => ({
    meta: [
      { title: "Ridge Hall Ambler | Food Decider" },
      { name: "description", content: "Can't decide what to eat? Let the Ridge Hall Food Decider pick for you." },
      { property: "og:title", content: "Ridge Hall Ambler | Food Decider" },
      { property: "og:description", content: "Let the Food Decider pick your next meal." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="Ridge Hall Ambler | Food Decider" />,
});
