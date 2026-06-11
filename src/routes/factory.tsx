import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/factory.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/factory")({
  head: () => ({
    meta: [
      { title: "The Factory | Ridge Hall Ambler" },
      { name: "description", content: "The Factory — events, programming, and gatherings at Ridge Hall." },
      { property: "og:title", content: "The Factory | Ridge Hall Ambler" },
      { property: "og:description", content: "Events and programming at The Factory." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="The Factory | Ridge Hall Ambler" />,
});
