import { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "../Logo";
import MenuList from "../MenuList";
import "./NavbarSidebar.css";
import ToggleThemeButton from "../ToggleThemeButton";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom"; // Import Outlet for routing

const { Header, Sider, Content } = Layout;

function NavbarSidebar() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo />
        
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>

      {/* Main Content Area */}
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          
        </Header>

        {/* Routed Components Will Appear Here */}
        <Content style={{ margin: "16px", padding: "16px", background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default NavbarSidebar;
