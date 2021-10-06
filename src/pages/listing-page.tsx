import { Col, notification, Row } from "antd";
import React, { useState, useEffect } from "react";
import EventDetail from "../components/event-details";
import HttpService from "../services/http-service";

const testEvents = [
  {
    EventGroup: "EG00314838",
    EventTitle: "Beach Festival - Pondicherry",
    EventAvailableSeats: 150,
    EventDate: "2021-10-01",
  },
  {
    EventGroup: "EG00314838",
    EventTitle: "Beach Festival - Goa",
    EventAvailableSeats: 150,
    EventDate: "2021-10-01",
  },
  {
    EventGroup: "EG00314838",
    EventTitle: "Beach Festival - Bangkok",
    EventAvailableSeats: 150,
    EventDate: "2021-10-01",
  },
  {
    EventGroup: "EG00314838",
    EventTitle: "Beach Festival - Mumbai",
    EventAvailableSeats: 150,
    EventDate: "2021-10-01",
  },
];
export default function ListingPage() {
  const [state, setstate] = useState<any>([]);
  const getAllListings = () => {
    HttpService.get("listings")
      .then((res) => {
        setstate(res["data"]);
      })
      .catch((err: any) => {
        notification.error({
          description: "Failed to retreive listings",
          message: "Oops❗️",
        });
      });
  };
  useEffect(() => {
    getAllListings();
    return () => {
      setstate([]);
    };
  }, []);
  return (
    <div>
      <Row gutter={[16, 16]}>
        {state.length > 0 &&
          state?.map((item: any, index:number) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
              <EventDetail item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
}
