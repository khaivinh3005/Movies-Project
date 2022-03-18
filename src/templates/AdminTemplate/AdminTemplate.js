import React, { useState } from 'react'
import { Fragment } from "react";
import { Route } from 'react-router'
import "./AdminTemplate.css"
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, GithubOutlined } from '@ant-design/icons';


export const AdminTemplate = (props) => {
    const { Header, Sider, Content ,Footer } = Layout;
    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return (
            <Fragment>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                nav 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <NavLink to="/admin/user">Dash Board</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <NavLink to="/admin/films">Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UserOutlined />}>
                                <NavLink to="/admin/showtime">Show time</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <Component {...propsRoute}/>              
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }} />
}
