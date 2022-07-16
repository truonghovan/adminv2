// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'media',
    title: 'Quản lý sản phẩm',
    type: 'group',
    children: [
        {
            id: 'logout',
            title: 'Đăng xuất',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined
        },
        {
            id: 'media',
            title: 'Quản lý media',
            type: 'item',
            url: '/media',
            icon: icons.ProfileOutlined
        }
    ]
};

export default pages;
