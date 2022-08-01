import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage />
      <CssModules />
    </>
  );
};
