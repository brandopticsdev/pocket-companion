import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/char-lobster.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/char-lobster")({
  head: () => ({
    meta: [
      { title: "CHAR Lobster Rolls | Ridge Hall Ambler" },
      { name: "description", content: "CHAR Lobster Rolls — fire-kissed seafood at Ridge Hall Ambler." },
      { property: "og:title", content: "CHAR Lobster Rolls | Ridge Hall Ambler" },
      { property: "og:description", content: "Fire-kissed seafood at Ridge Hall Ambler." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="CHAR Lobster Rolls | Ridge Hall Ambler" />,
});
