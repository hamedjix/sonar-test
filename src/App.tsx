import { Button, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { AntTheme } from "./theme";

function App() {
  return (
    <AntTheme>
      <Typography>
        <Title>SonarQube</Title>
      </Typography>
      <Space>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </Space>
    </AntTheme>
  );
}

export default App;
