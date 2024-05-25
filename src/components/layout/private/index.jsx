import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import useRolePage from "../../../hooks/useRolePage";
import { useDispatch, useSelector } from "react-redux";
const { Header, Sider, Content } = Layout;

import "./style.scss"
import { logout } from "../../../redux/slice/auth";
const AdminLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const rolePage = useRolePage();
  const { pathname } = useLocation();
  const [params, setParams] = useState("");
  const {user} = useSelector(state => state.auth)
  useEffect(() => {
    setParams(pathname);
  }, [pathname]);

  const handleLogout = () =>{
    navigate('/login')
    dispatch(logout())
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" >{user?.role === 'admin' ? "Admin" : `Client: ${user?.username}`}</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[params]}
          items={rolePage.map(({ key, icon: Icon }) => ({
            key: "/" + key,
            icon: <Icon />,
            label: <Link to={`/${key}`}>{key}</Link>,
          })).concat(
            {
              label: <Button type="primary" danger onClick={handleLogout}>Log out</Button>,
            }
          )}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
