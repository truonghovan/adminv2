// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

import SimpleCard from 'components/CardMUI/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from 'store/actions/category';
import ComponentSkeleton from './ComponentSkeleton';

const ComponentTypography = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push({
                label: category.name,
                value: category._id,
                image: category.image,
                children: category.children.length > 0 && renderCategories(category.children)
            });
        }
        return myCategories;
    };
    return (
        <ComponentSkeleton>
            {/* <Grid container spacing={1}>
                <Grid item xs={12} lg={20}>
                    <Stack spacing={3}>
                        {category.categories && renderCategories(category.categories).map((item) => <SimpleCard item={item} />)}
                    </Stack>
                </Grid>
            </Grid> */}
            <div style={{ display: 'inline-block' }}>
                {category.categories && renderCategories(category.categories).map((item) => <SimpleCard item={item} />)}
            </div>
        </ComponentSkeleton>
    );
};

export default ComponentTypography;
