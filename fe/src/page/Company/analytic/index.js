import { Col, Row, DatePicker } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import dayjs, { Dayjs } from "dayjs";
import { dataAnalysisTask } from "../../../service/Company/index";
Chart.register(CategoryScale);

const Analytic = () => {
  const [day, setDay] = useState(dayjs());
  const [job, setJob] = useState([]);
  const [label, setLabel] = useState(getDaysInMonth(dayjs()));

  function getDaysInMonth(day) {
    let dayCount = day.daysInMonth();
    var days = [];
    for (let i = 1; i <= dayCount; i++) {
      days.push(i);
    }
    return days;
  }

  const fetchDataAnalysis = async (day) => {
    try {
      const data = await dataAnalysisTask({
        month: day.month() + 1,
        year: day.year(),
      });
      if (data.success === 1 && data.data) {
        setJob(data.data);
      }
    } catch (error) {
      console.log(error);
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
        data: [...job],
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
                if (
                  date != null &&
                  date.month() != null &&
                  date.year() != null
                ) {
                  setLabel(getDaysInMonth(date));
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

export default Analytic;
