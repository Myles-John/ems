import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, PlusCircleOutlined, OrderedListOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
    const navigate = useNavigate();

    const handleMenuClick = ({ key }) => {
        if (key === 'Logout') {
            // Handle logout logic here
            console.log("User logged out");
        } else {
            navigate(`/${key}`);
        }
    };

    return (
        <Menu 
            theme={darkTheme ? 'dark' : 'light'} 
            mode="inline" 
            className='menu-bar'
            onClick={handleMenuClick}
        >
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="AddEquipment" icon={<PlusCircleOutlined />}>
                Add Device
            </Menu.Item>
            <Menu.Item key="EquipmentList" icon={<OrderedListOutlined />}>
                Device List
            </Menu.Item>
            <Menu.Item key="Assignments" icon={<UserOutlined />}>
                Assignments
            </Menu.Item>
            <Menu.Item key="Settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item key="Logout" icon={<LogoutOutlined />}>
                Logout  
            </Menu.Item>
        </Menu>
    );
};

export default MenuList;
