import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/lore/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "Liquipedia",
    icon: "dice-d20",
    link: "https://liquipedia.net/starcraft/AfreecaTV/StarCraft_League_Remastered/17",
  },
]);
