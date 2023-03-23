import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListProductPages from './pages/ListProductPages';
import { Box, makeStyles } from '@material-ui/core';


ProductFeature.propTypes = {

};

const useStyle = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4)
    }
}))

function ProductFeature(props) {

    const math = useRouteMatch()
    const classes = useStyle()



    return (
        <Box className={classes.root}>
            <Switch>
                <Route path={math.url} component={ListProductPages} exact></Route>
            </Switch>

        </Box>
    );
}

export default ProductFeature;