import { swiss, syntaxHighlighter } from "@mdx-deck/themes";
import Provider from "./Provider";

export default {
  ...swiss,
  ...syntaxHighlighter,
  fonts: {
    body: "Source Sans Pro,sans-serif",
    monospace: '"Roboto Mono", monospace'
  },
  colors: {
    text: "#003e7e"
  },
  Provider
};
