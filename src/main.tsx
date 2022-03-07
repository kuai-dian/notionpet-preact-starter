import { render } from "preact";
import { App } from "./app";
import { defineRender } from "@notionpet/sdk";

defineRender(({ options = {}, data = {} }) => {
  render(
    <App data={data} options={options} />,
    document.getElementById("app")!
  );
}, process.env.NODE_ENV === "development");
