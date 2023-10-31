import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Kedôm Lore",
      icon: "scroll",
      prefix: "lore/",
      link: "lore/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
