import React from "react";
import ReactDOM from "react-dom";

import { Container, Row, Col } from "bootstrap-4-react";

import DropdownMenu from "./single-component/DropdownMenu";
import BigCheckbox from "./single-component/BigCheckbox";

import DropdownMenuHoc from "./hoc-version/DropdownMenu";
import BigCheckbox2 from "./hoc-version/BigCheckbox";

import DropdownMenuRenderProp from "./render-prop-version/DropdownMenu";
import BigCheckbox3 from "./render-prop-version/BigCheckbox";

import menu from "./menu";

const App = () => (
  <>
    <Container>
      <Row>
        <Col>
          <b>Single Component</b>
        </Col>
        <Col>
          <b>HoC Version</b>
        </Col>
        <Col>
          <b>RenderProp Version</b>
        </Col>
        <Col>
          <b>Hooks Version</b>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <BigCheckbox>Click to toggle</BigCheckbox>
        </Col>
        <Col>
          <BigCheckbox2>Click to toggle</BigCheckbox2>
        </Col>
        <Col>
          <BigCheckbox3>Click to toggle</BigCheckbox3>
        </Col>
        <Col />
      </Row>
    </Container>

    <Container style={{ borderBottom: "none" }}>
      <Row>
        <Col>
          <DropdownMenu items={menu} />
        </Col>
        <Col>
          <DropdownMenuHoc items={menu} />
        </Col>
        {/* <Col><DropdownMenuHoc initialToggleOn={true}/></Col> */}
        <Col>
          <DropdownMenuRenderProp items={menu} />
        </Col>
        <Col />
      </Row>
    </Container>
  </>
);

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
