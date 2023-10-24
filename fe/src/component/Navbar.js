import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const { Header } = Layout;



const Navbar = ({ data }) => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
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
            }}
            className='box-shadow-bottom'
        >
            <Row>
                <Col span={5} style={{ fontSize: 50, fontWeight: "bold", paddingLeft: 55, color: 'var(--color-main)' }}>
                    Logo
                </Col>
                <Col span={14} style={{ height: 60 }}>
                    <Menu style={{ width: '100%', display: 'flex', justifyContent: 'center' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={data} />
                </Col>
                <Col span={5} style={{ paddingRight: 29 }}>
                    <Row style={{ justifyContent: 'flex-end', fontSize: '20px!important', gap: 10 }}>
                        <Col >
                            <BellFilled style={{ fontSize: '20px' }} className="color-icon" />
                        </Col>
                        <Col>
                            |
                        </Col>
                        <Row style={{ gap: 5 }}>
                            <Col>
                                <UserOutlined style={{ fontSize: '20px' }} />
                            </Col>
                            <Col>
                                <div>Name</div>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Header>
    );
};

export default Navbar;
