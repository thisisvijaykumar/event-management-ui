import React, { useEffect, useState } from "react";
// import ErrorBoundary from "react-error-boundary";
import { BrowserRouter, useHistory } from "react-router-dom";

import AppRoutes from "./routes";
import "./App.css";
import { Layout, Menu } from "antd";
import useSessionStorage from "./hooks/use-session-storage";
import LoginPage from "./pages/login-page";
import Middlewares from "./pages/middlewares";

const { Content, Footer, Header } = Layout;
function App() {
  const [token, settoken] =useState<string | null>(window.sessionStorage.getItem("x-token"))

  if(!token) {
    return <LoginPage/>
  }
  return (
    <BrowserRouter>
      <Middlewares>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "50px", marginTop: 64, height: "84vh" }}
          >
            <AppRoutes />
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>

          </Footer> */}
        </Layout>
      </Middlewares>
    </BrowserRouter>
  );
}

export default App;
