import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Geek SG",
  facebook: "https://www.facebook.com/nahueltaibo",
  instagram: "https://www.instagram.com/taibonahuel",
  twitter: "https://twitter.com/nahueltaibo",
  github: "https://github.com/nahueltaibo",
  linkedin: "https://www.linkedin.com/in/nahueltaibo",
};

story.add("Footer", () => <Footer {...data} />);
