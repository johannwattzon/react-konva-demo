import * as React from "react";
import { Layer, Stage, Text } from "react-konva";
import ColoredRect from "./ColoredRect";

class App extends React.Component {
  public render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
        </Layer>
      </Stage>
    );
  }
}

export default App;
