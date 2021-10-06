import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const noOfSeats = [1, 2, 3, 4, 5, 6];
export default function EventBookingPage() {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Row gutter={16}>
      <Col span={8} offset={8}>
        <Row gutter={32}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240, height: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={16}>
            <Form
              {...layout}
              name="event-registration"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "“Please enter your name",
                  },
                  {
                    type: "regexp",
                    pattern: new RegExp(/^[a-zA-Z ]*$/),
                    message: "Only letters and spaces are allowed",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone No."
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="noOfSeats"
                label="No. of Seats"
                rules={[
                  { required: true, message: "Please select no. of seats" },
                ]}
              >
                <Select placeholder="select no. of seats">
                  {noOfSeats?.map((item) => (
                    <Option key={item} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.List
                name="names"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(
                          new Error("At least 2 passengers")
                        );
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Form.Item
                        {...(index === 0
                          ? formItemLayout
                          : formItemLayoutWithOutLabel)}
                        label={index === 0 ? "Passengers" : ""}
                        required={false}
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={["onChange", "onBlur"]}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message:
                                "Please input attendee's name or delete this field.",
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder="please enter attendee name"
                            style={{ width: "60%" }}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "60%" }}
                        icon={<PlusOutlined />}
                      >
                        Add field
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
