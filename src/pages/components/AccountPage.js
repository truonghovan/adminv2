// material-ui
import { styled } from '@mui/material/styles';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Divider, Grid, Stack } from '../../../node_modules/@mui/material/index';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { notification, Space, Popconfirm } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from 'store/actions/auth';
import { getInitialData } from 'store/actions/initialData';

// styles
const IFrameWrapper = styled('iframe')(() => ({
    height: 'calc(100vh - 210px)',
    border: 'none'
}));

// ============================|| ANT ICONS ||============================ //

const AccountPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInitialData());
    }, []);
    const text = 'Bạn có chắc chắn muốn xoá?';
    const columns = [
        { field: 'id', headerName: 'Mã sản phẩm', width: 100 },
        { field: 'name', headerName: 'Tên sản phẩm', width: 300 },
        { field: 'category.name', headerName: 'Hãng', width: 130 },
        { field: 'salePrice', headerName: 'Giá tiền', width: 130 },
        {
            field: 'quantity',
            headerName: 'Số lượng',
            type: 'number',
            width: 90
        },
        {
            field: 'description',
            headerName: 'Mô tả',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160
            // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
        }
    ];
    // eslint-disable-next-line
    const [selectedRows, setSelectedRows] = useState([]);
    const handleView = () => {
        if (selectedRows.length === 0) {
            notification['warning']({
                message: 'Xem sản phẩm',
                description: 'Vui lòng chọn sản phẩm bạn muốn xem.'
            });
        } else if (selectedRows.length >= 2) {
            notification['warning']({
                message: 'Xem sản phẩm',
                description: 'Vui lòng chỉ chọn một sản phẩm.'
            });
        }
    };
    const confirm = () => {
        if (selectedRows.length === 0) {
            notification['warning']({
                message: 'Xoá sản phẩm',
                description: 'Vui lòng chọn sản phẩm bạn muốn xoá.'
            });
        } else {
            notification['success']({
                message: 'Xoá sản phẩm',
                description: 'Xoá sản phẩm thành công.'
            });
        }
    };
    const handleEditProduct = () => {
        if (selectedRows.length === 0) {
            notification['warning']({
                message: 'Chỉnh sửa sản phẩm',
                description: 'Vui lòng chọn sản phẩm bạn muốn chỉnh sửa.'
            });
        } else if (selectedRows.length >= 2) {
            notification['warning']({
                message: 'Xem sản phẩm',
                description: 'Vui lòng chỉ chọn một sản phẩm.'
            });
        } else {
            notification['success']({
                message: 'Chỉnh sửa sản phẩm',
                description: 'Coming Soon'
            });
        }
    };
    return (
        <ComponentSkeleton>
            <MainCard title="Tài khoản">
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{ marginBottom: '20px' }}>
                    <Button variant="outlined" href="/createProduct" color="success" startIcon={<AddIcon />} style={{ cursor: 'pointer' }}>
                        Thêm mới
                    </Button>
                    <Button variant="outlined" style={{ cursor: 'pointer' }} onClick={handleView}>
                        Xem
                    </Button>
                    <Button variant="outlined" style={{ cursor: 'pointer' }} onClick={handleEditProduct}>
                        Chỉnh sửa
                    </Button>
                    <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Đồng ý" cancelText="Không">
                        <Button
                            variant="outlined"
                            color="error"
                            style={{ cursor: 'pointer' }}
                            startIcon={<DeleteIcon />}
                            // onClick={handleDeleteProduct}
                        >
                            Xoá
                        </Button>
                    </Popconfirm>
                </Stack>
                <Grid container spacing={3}>
                    <div style={{ height: 600, width: '100%' }}>
                        <DataGrid
                            rows={[]}
                            columns={columns}
                            pageSize={8}
                            rowsPerPageOptions={[8]}
                            checkboxSelection
                            // onRowClick={(newSelection) => {
                            //     setArraySelect((arraySelect) => [...arraySelect, newSelection]);
                            //     console.log(arraySelect);
                            // }}
                            // onSelectionModelChange={(ids) => {
                            //     const selectedIDs = new Set(ids);
                            //     const selectedRows = product.products.filter((row) => selectedIDs.has(row.id));

                            //     setSelectedRows(selectedRows);
                            // }}
                            // loading={product.loading}
                            // onCellClick={(value) => console.log(value)}
                        />
                    </div>
                </Grid>
            </MainCard>
        </ComponentSkeleton>
    );
};

export default AccountPage;
