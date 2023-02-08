import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Layout, Typography, Input, Menu, Button, Dropdown} from 'antd'
import {SlackOutlined} from '@ant-design/icons'
import type {MenuProps} from 'antd';

function App() {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    中文
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    English
                </a>
            )
        }
    ]
    return (
        <div className={styles.App}>
            <div className={styles['app-header']}>
                <div className={styles['top-header']}>
                    <div className={styles.inner}>
                        <Typography.Text>让旅游更幸福</Typography.Text>
                        <Dropdown menu={{items}} className={styles['drop-down']} placement="bottomLeft" arrow>
                            <Button><SlackOutlined /></Button>
                        </Dropdown>
                        <Button.Group className={styles['button-group']}>
                            <Button>注册</Button>
                            <Button>登录</Button>
                        </Button.Group>
                    </div>
                </div>
                <Layout.Header className={styles['main-header']}>
                    <img src={logo} className={styles['App-logo']} alt=''/>
                    <Typography.Title className={styles['title']} level={3}>travs</Typography.Title>
                    <Input.Search className={styles['search-input']} placeholder={'请输入目的地'}></Input.Search>
                </Layout.Header>
                <Menu mode={'horizontal'} className={styles['main-menu']}>
                    <Menu.Item key={1}>旅游首页</Menu.Item>
                    <Menu.Item key={2}>周末游</Menu.Item>
                    <Menu.Item key={3}>跟团游</Menu.Item>
                    <Menu.Item key="4"> 自由行 </Menu.Item>
                    <Menu.Item key="5"> 私家团 </Menu.Item>
                    <Menu.Item key="6"> 邮轮 </Menu.Item>
                    <Menu.Item key="7"> 酒店+景点 </Menu.Item>
                    <Menu.Item key="8"> 当地玩乐 </Menu.Item>
                    <Menu.Item key="9"> 主题游 </Menu.Item>
                    <Menu.Item key="10"> 定制游 </Menu.Item>
                    <Menu.Item key="11"> 游学 </Menu.Item>
                    <Menu.Item key="12"> 签证 </Menu.Item>
                    <Menu.Item key="13"> 企业游 </Menu.Item>
                    <Menu.Item key="14"> 高端游 </Menu.Item>
                    <Menu.Item key="15"> 爱玩户外 </Menu.Item>
                    <Menu.Item key="16"> 保险 </Menu.Item>
                </Menu>
            </div>
            <Layout.Footer >
                <Typography.Title level={3} className={styles.mess}>
                    版权所有 @Kim
                </Typography.Title>
            </Layout.Footer>
        </div>
    );
}

export default App;
