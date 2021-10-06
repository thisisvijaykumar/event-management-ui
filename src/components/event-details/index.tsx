import { Button, Card, Row, Col } from "antd";
import moment from "moment";
import React from "react";

const { Meta } = Card;

export default function EventDetail(props: any) {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <img width="300" height="200"
          alt="example"
          src={props.item.event_photo}
        />
      }
      actions={[<Button type="primary">Book Now</Button>]}
    >
      <Meta
        title={props.item.event_name}
        description={
          <Row gutter={16}>
            <Col span={12}>
              <div>Date:</div>
              <div>{moment(props.item.event_date).format("DD-MMM-YYYY")}</div>
            </Col>
            <Col span={12}>
              <div>Seats Available:</div>
              <div>{props.item.available_seats}</div>
            </Col>
          </Row>
        }
      />
    </Card>
  );
}
