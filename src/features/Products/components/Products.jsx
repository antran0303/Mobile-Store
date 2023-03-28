import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    item: {
        padding: theme.spacing(1),
    },

    img: {
        width: '100%',
        height: "118"
    },

    price: {
        fontSize: "16px",
        fontWeight: "bold",
        component: "span",
        display: "inline",
        marginRight: theme.spacing(1)
    }


}))

Products.propTypes = {
    product: PropTypes.object
};


function Products(props) {

    const { product } = props
    const classes = useStyle()

    const thumbnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail.url}`
        : 'https://placehold.co/444';

    return (

        <Box className={classes.item}>
            <Box className={classes.item} minHeight="215px">
                <img
                    className={classes.img}
                    src={thumbnailUrl}
                    alt={product.name}>
                </img>
            </Box>
            <Typography varian="body2">{product.name}</Typography>
            <Typography varian="body2">
                <Box className={classes.price}>

                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ` `}
            </Typography>
        </Box>

    );
}

export default Products;