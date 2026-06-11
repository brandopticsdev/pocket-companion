import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/tasting-journal.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/tasting-journal")({
  head: () => ({
    meta: [
      { title: "Ridge Hall Ambler | Tasting Journal" },
      { name: "description", content: "Track your bites and sips with the Ridge Hall Tasting Journal." },
      { property: "og:title", content: "Ridge Hall Ambler | Tasting Journal" },
      { property: "og:description", content: "Your personal Ridge Hall tasting journal." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="Ridge Hall Ambler | Tasting Journal" />,
});
