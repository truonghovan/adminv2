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
    const text = 'B???n c?? ch???c ch???n mu???n xo???';
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
    const confirm = () => {
        if (selectedRows.length === 0) {
            notification['warning']({
                message: 'Xo?? s???n ph???m',
                description: 'Vui l??ng ch???n s???n ph???m b???n mu???n xo??.'
            });
        } else {
            notification['success']({
                message: 'Xo?? s???n ph???m',
                description: 'Xo?? s???n ph???m th??nh c??ng.'
            });
        }
    };
    const handleEditProduct = () => {
        if (selectedRows.length === 0) {
            notification['warning']({
                message: 'Ch???nh s???a s???n ph???m',
                description: 'Vui l??ng ch???n s???n ph???m b???n mu???n ch???nh s???a.'
            });
        } else if (selectedRows.length >= 2) {
            notification['warning']({
                message: 'Xem s???n ph???m',
                description: 'Vui l??ng ch??? ch???n m???t s???n ph???m.'
            });
        } else {
            notification['success']({
                message: 'Ch???nh s???a s???n ph???m',
                description: 'Coming Soon'
            });
        }
    };
    return (
        <ComponentSkeleton>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{ marginBottom: '20px' }}>
                <Button variant="outlined" href="/createProduct" color="success" startIcon={<AddIcon />} style={{ cursor: 'pointer' }}>
                    Th??m m???i
                </Button>
                <Button variant="outlined" style={{ cursor: 'pointer' }} onClick={handleView}>
                    Xem
                </Button>
                <Button variant="outlined" style={{ cursor: 'pointer' }} onClick={handleEditProduct}>
                    Ch???nh s???a
                </Button>
                <Popconfirm placement="right" title={text} onConfirm={confirm} okText="?????ng ??" cancelText="Kh??ng">
                    <Button
                        variant="outlined"
                        color="error"
                        style={{ cursor: 'pointer' }}
                        startIcon={<DeleteIcon />}
                        // onClick={handleDeleteProduct}
                    >
                        Xo??
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
