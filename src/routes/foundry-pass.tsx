import { createFileRoute } from "@tanstack/react-router";
import html from "../screens/foundry-pass.html?raw";
import { ScreenFrame } from "../components/ScreenFrame";

export const Route = createFileRoute("/foundry-pass")({
  head: () => ({
    meta: [
      { title: "Foundry Pass | Ridge Hall Ambler" },
      { name: "description", content: "Unlock perks at Ridge Hall Ambler with the Foundry Pass membership." },
      { property: "og:title", content: "Foundry Pass | Ridge Hall Ambler" },
      { property: "og:description", content: "Membership perks at Ridge Hall." },
    ],
  }),
  component: () => <ScreenFrame html={html} title="Foundry Pass | Ridge Hall Ambler" />,
});
