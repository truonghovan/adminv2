import PropTypes from 'prop-types';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from './ComponentSkeleton';
import OrderTable from 'pages/dashboard/OrdersTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCustomerOrders } from 'store/actions/order';
import { DataGrid } from '@mui/x-data-grid';
import { notification, Space, Popconfirm } from 'antd';
// ===============================|| SHADOW BOX ||=============================== //

function ShadowBox({ shadow }) {
    return (
        <MainCard border={false} sx={{ boxShadow: shadow }}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="h6">boxShadow</Typography>
                <Typography variant="subtitle1">{shadow}</Typography>
            </Stack>
        </MainCard>
    );
}

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

function CustomShadowBox({ shadow, label, color, bgcolor }) {
    return (
        <MainCard border={false} sx={{ bgcolor: bgcolor || 'inherit', boxShadow: shadow }}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="subtitle1" color={color}>
                    {label}
                </Typography>
            </Stack>
        </MainCard>
    );
}

CustomShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired
};

// ============================|| COMPONENT - SHADOW ||============================ //

const ComponentShadow = () => {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getCustomerOrders());
    }, []);
    useEffect(() => {
        if (order.error) {
            notification['error']({
                message: '????n h??ng',
                description: 'Vui l??ng ????ng nh???p.'
            });
        }
    }, [order.error]);

    const columns = [
        { field: 'id', headerName: 'M?? s???n ph???m', width: 100 },
        { field: 'name', headerName: 'T??n s???n ph???m', width: 300 },
        { field: 'category.name', headerName: 'H??ng', width: 130 },
        { field: 'salePrice', headerName: 'Gi?? ti???n', width: 130 },
        {
            field: 'quantity',
            headerName: 'S??? l?????ng',
            type: 'number',
            width: 90
        },
        {
            field: 'description',
            headerName: 'M?? t???',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160
            // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
        }
    ];
    notification.config({
        placement: 'topRight',
        top: 80,
        duration: 3,
        rtl: false
    });
    const handleView = () => {
        if (selectedRows.length === 0) {
            notification['warning']({
                message: 'Xem s???n ph???m',
                description: 'Vui l??ng ch???n s???n ph???m b???n mu???n xem.'
            });
        } else if (selectedRows.length >= 2) {
            notification['warning']({
                message: 'Xem s???n ph???m',
                description: 'Vui l??ng ch??? ch???n m???t s???n ph???m.'
            });
        }
    };
    return (
        <ComponentSkeleton>
            <Grid container spacing={3}>
                <MainCard sx={{ mt: 2 }} content={false}>
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
                        loading={order.loading}
                        // onCellClick={(value) => console.log(value)}
                    />
                </MainCard>
            </Grid>
        </ComponentSkeleton>
    );
};

export default ComponentShadow;
