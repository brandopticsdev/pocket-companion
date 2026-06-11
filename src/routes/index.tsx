import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/home.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ridge Hall Ambler | Food & Spirits" },
      { name: "description", content: "Flavor-forward social space featuring top regional chefs, craft beverages, and community gatherings in Ambler, PA." },
      { property: "og:title", content: "Ridge Hall Ambler | Food & Spirits" },
      { property: "og:description", content: "Top regional chefs, craft beverages, and community gatherings." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="Ridge Hall Ambler | Food & Spirits" />,
});
