import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Form, Input, notification } from "antd";
import { useHistory } from "react-router-dom";

import HttpService from "../services/http-service";

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const RowWrapper = styled.div`
  text-align: center;
`;

const CardWrapper = styled(Card)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 300px;
  min-width: 300px;
  padding: 1em;
`;
export default function LoginPage() {
  const [isLoading, setisLoading] = useState(false);
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    doLogin(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const doLogin = (val: any) => {
    setisLoading(true);
    debugger;
    HttpService.post("auth/login", val)
      .then((res: any) => {
        debugger;

        window.sessionStorage.setItem(
          "x-token",
          res.data["data"]["token"]
        );
        window.sessionStorage.setItem(
          "user-id",
          res.data["data"]["user"]
        );
        window.sessionStorage.setItem(
            "role",
            res.data["data"]["role"]
          );
        window.location.href = "/listings";
        // history.push("/listings");
      })
      .catch((err) => {
          console.log(err,"err")
        notification.error({
          description: "Username or Password Invalid",
          message: "Oops❗️",
        });
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <LoginWrapper>
      <RowWrapper>
        <CardWrapper hoverable={true}>
          <Form
            layout="vertical"
            name="login"
            initialValues={{ username: null, password: null }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </CardWrapper>
      </RowWrapper>
    </LoginWrapper>
  );
}
