import { Col, Row, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import dayjs from "dayjs";
import {
  dataAnalysisApply,
  dataAnalysisTask,
} from "../../../service/Company/index";
Chart.register(CategoryScale);

const AnalyticApply = () => {
  const [day, setDay] = useState(dayjs());
  const [apply, setApply] = useState([]);
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
    day = day ? day : dayjs();
    const data = await dataAnalysisApply({
      month: day.month() + 1,
      year: day.year(),
    });
    if (data.success === 1) {
      setApply(data.data);
    }
  };

  const fetchDataJobAnalysis = async (day) => {
    day = day ? day : dayjs();

    const data = await dataAnalysisTask({
      month: day.month() + 1,
      year: day.year(),
    });
    if (data.success === 1) {
      setJob(data.data);
    }
  };

  useEffect(() => {
    fetchDataAnalysis(day);
    fetchDataJobAnalysis(day);
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
        label: "Số ứng viên",
        data: [...apply],
        fill: false,
        borderColor: "rgb(132, 32, 40)",
        tension: 0.1,
      },
      {
        label: "Số Job",
        data: [...job],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  console.log(data);

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

export default AnalyticApply;
