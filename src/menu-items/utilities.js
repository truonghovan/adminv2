// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    DesktopOutlined,
    UserOutlined,
    TagsOutlined,
    UnorderedListOutlined,
    ProjectOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    DesktopOutlined,
    UserOutlined,
    TagsOutlined,
    UnorderedListOutlined,
    ProjectOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Quản lý thương hiệu và sản phẩm',
    type: 'group',
    children: [
        {
            id: 'util-category',
            title: 'Nhãn hàng',
            type: 'item',
            url: '/category',
            icon: icons.TagsOutlined
        },
        {
            id: 'util-product',
            title: 'Sản phẩm',
            type: 'item',
            url: '/product',
            icon: icons.DesktopOutlined
        },
        {
            id: 'util-orders',
            title: 'Đơn hàng',
            type: 'item',
            url: '/orders',
            icon: icons.UnorderedListOutlined
        },
        {
            id: 'accounts',
            title: 'Tài khoản',
            type: 'item',
            url: '/accounts',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
