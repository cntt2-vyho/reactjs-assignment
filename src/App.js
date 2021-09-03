import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData, getTotalPageAction } from './redux/reducers/ProductReducer';
import Content from './UI/Content';
import Header from './UI/Header';
import Sidebar from './UI/Sidebar';


const App = () => {

    const filterReducer = useSelector((state) => state.filterReducer);

    const filterA = { ...filterReducer, _limit: 16 };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData(filterA));
        dispatch(getTotalPageAction(filterA));

    }, [filterReducer]);

    return (
        <>
            <Header />
            <div className="content">
                <Sidebar />
                <Content />
            </div>
        </>
    );

}


export default App;