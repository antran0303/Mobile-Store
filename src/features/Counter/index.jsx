import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increace } from './counterSlice';
import Button from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        padding: '5px 30px',
    },
})




CounterFeature.propTypes = {

};

function CounterFeature(props) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    const handleIncreaseClick = () => {

        const action = increace()
        dispatch(action)


    }

    const handleDecreaseClick = () => {

        const action = decrease()
        dispatch(action)
    }

    return (
        <div>
            Counter {count}

            <div>
                <button className={classes.root} onClick={handleIncreaseClick}>increace</button>
                <button className={classes.root} onClick={handleDecreaseClick}>decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;