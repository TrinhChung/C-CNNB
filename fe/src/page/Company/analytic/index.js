import { Col, Row, DatePicker } from "antd";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

const Analytic = () => {
  const [job, setJob] = useState([]);
  const [label, setLabel] = useState(
    getDaysInMonth(new Date().getMonth(), new Date().getFullYear())
  );

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };
  const data = {
    labels: label,
    datasets: [
      {
        label: "Số Job",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <Row style={{ padding: "20px 15px" }}>
      <Col span={24}>
        <Row>
          <Col
            span={2}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Tháng thống kê:{" "}
          </Col>
          <Col>
            <DatePicker
              onChange={(date, dateString) => {
                if (
                  date != null &&
                  date.month() != null &&
                  date.year() != null
                ) {
                  let month = date.month();
                  let year = date.year();
                  setLabel(getDaysInMonth(month, year));
                }
              }}
              picker="month"
            />
          </Col>
        </Row>
        <Row>
          <Line options={options} data={data} />
        </Row>
      </Col>
    </Row>
  );
};

export default Analytic;
