import { Button, ColorPicker, ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import { ReactNode, useEffect, useState } from "react";
export const AntTheme = ({ children }: { children: ReactNode }) => {
  const [colorPrimary, setColorPrimary] = useState("#1890ff");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1F1F1F" : "#FFFFFF"; // Change as needed
  }, [darkMode]);
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary,
        },
      }}
    >
      <header>
        <ColorPicker showText value={colorPrimary} onChangeComplete={(color) => setColorPrimary(color.toHexString())} />
      </header>
      <main>{children}</main>
      <Button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</Button>
    </ConfigProvider>
  );
};
