import { Col, Row, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import dayjs from "dayjs";
import { dataAnalysisApply } from "../../../service/Company/index";
Chart.register(CategoryScale);

const AnalyticApply = () => {
  const [day, setDay] = useState(dayjs());
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

  const fetchDataAnalysis = async (day) => {
    const data = await dataAnalysisApply({
      month: day.month() + 1,
      year: day.year(),
    });
    if (data.success === 1 && data.data) {
      setJob(data.data);
    }
  };

  useEffect(() => {
    fetchDataAnalysis(day);
  }, [day]);

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
        data: job,
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
              onChange={(date) => {
                if (!date) {
                  date = dayjs();
                }
                if (
                  date != null &&
                  date.month() != null &&
                  date.year() != null
                ) {
                  let month = date.month() + 1;
                  let year = date.year();
                  setLabel(getDaysInMonth(month, year));
                  setDay(date);
                }
              }}
              defaultValue={day}
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

export default AnalyticApply;
