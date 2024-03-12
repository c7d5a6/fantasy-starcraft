import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "",
  description: "Fantasy Starcraft",


  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
