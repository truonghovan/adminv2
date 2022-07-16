import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
// import { generatePublicUrl } from 'urlConfig';
import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/styles';
/* eslint-disable */
const SimpleCard = (props) => {
    const { card, image, label, value } = props.item;
    const handleDeleteCategory = (value) => {
        console.log(value);
    };
    return (
        <div style={{ display: 'inline-block', marginBottom: '20px', width: '14%' }}>
            <Card className={card} style={{ width: '95%' }}>
                <CardMedia component="img" height="100" image={image} alt="green iguana" style={{ objectFit: 'cover' }} />
                <CardContent>
                    <Typography className={label} color="textPrimary">
                        {label}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">
                        Chi tiết
                    </Button>
                    <Button size="small" variant="contained" color="error" onClick={() => handleDeleteCategory(value)}>
                        Xoá
                    </Button>
                </CardActions>
            </Card>
        </div>
        /* eslint-enable */
    );
};
SimpleCard.PropTypes = {
    item: PropTypes.object,
    card: PropTypes.string,
    image: PropTypes.string,
    label: PropTypes.string
};
export default SimpleCard;
