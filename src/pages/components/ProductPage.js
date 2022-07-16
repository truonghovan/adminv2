import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Stack, Typography } from '@mui/material';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from 'store/actions/product';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Divider } from '../../../node_modules/@mui/material/index';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { notification, Space, Popconfirm } from 'antd';

// ===============================|| COLOR BOX ||=============================== //

function ColorBox({ bgcolor, title, data, dark, main }) {
    return (
        <>
            <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 2.5,
                        bgcolor,
                        color: dark ? 'grey.800' : '#ffffff',
                        border: main ? '1px dashed' : '1px solid transparent'
                    }}
                >
                    {title && (
                        <Grid container justifyContent="space-around" alignItems="center">
                            <Grid item>
                                {data && (
                                    <Stack spacing={0.75} alignItems="center">
                                        <Typography variant="subtitle2">{data.label}</Typography>
                                        <Typography variant="subtitle1">{data.color}</Typography>
                                    </Stack>
                                )}
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    {title}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Card>
        </>
    );
}

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool,
    main: PropTypes.bool
};

// ===============================|| COMPONENT - COLOR ||=============================== //

const ComponentColor = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const [selectedRows, setSelectedRows] = useState([]);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    // useEffect(() => {
    //     if (product.products) {
    //         product.products.map((item, index) => (item.id = index + 1));
    //     }
    // }, [dispatch]);
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

    notification.config({
        placement: 'topRight',
        top: 80,
        duration: 3,
        rtl: false
    });
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
                        rows={product.products.length !== 0 ? product.products : []}
                        columns={product.products.length !== 0 ? columns : []}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        checkboxSelection
                        // onRowClick={(newSelection) => {
                        //     setArraySelect((arraySelect) => [...arraySelect, newSelection]);
                        //     console.log(arraySelect);
                        // }}
                        onSelectionModelChange={(ids) => {
                            const selectedIDs = new Set(ids);
                            const selectedRows = product.products.filter((row) => selectedIDs.has(row.id));

                            setSelectedRows(selectedRows);
                        }}
                        loading={product.loading}
                        // onCellClick={(value) => console.log(value)}
                    />
                </div>
            </Grid>
        </ComponentSkeleton>
    );
};

export default ComponentColor;
