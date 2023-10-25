import React, { useState } from "react";
import { Layout, Row, Col, Dropdown } from "antd";
import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = ({ data }) => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <Header
      style={{
        backgroundColor: "white",
        padding: 0,
        margin: 0,
        position: "sticky",
        top: 0,
        width: "100%",
        height: 60,
        zIndex: 1,
      }}
      className="box-shadow-bottom"
    >
      <Row>
        <Col
          span={5}
          style={{
            fontSize: 50,
            fontWeight: "bold",
            paddingLeft: 55,
            color: "var(--color-main)",
          }}
        >
          <Link
            to={"/"}
            style={{ color: "var(--color-main)" }}
            onClick={() => setCurrent("home")}
          >
            Logo
          </Link>
        </Col>
        <Col span={14} style={{ height: 60 }}>
          <Menu
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={data}
          />
        </Col>
        <Col span={5} style={{ paddingRight: 29 }}>
          <Row
            style={{
              justifyContent: "flex-end",
              fontSize: "20px!important",
              gap: 10,
            }}
          >
            <Col>
              <BellFilled style={{ fontSize: "20px" }} className="color-icon" />
            </Col>
            <Col>|</Col>
            <Dropdown menu={menuProps} trigger={["click"]}>
              <Row style={{ gap: 5, cursor: "pointer" }}>
                <Col>
                  <UserOutlined style={{ fontSize: "20px" }} />
                </Col>
                <Col>
                  <div>Name</div>
                </Col>
              </Row>
            </Dropdown>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
