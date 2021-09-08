import React, { createContext, useReducer } from 'react';
import { filterReducer, filterInitialTodoState } from './hooks/FilterReducer';
import { productReducer, productInitialTodoState } from './hooks/ProductReducer';
import Layouts from './layouts/Layouts';

export const FilterContext = createContext();
export const ProductContext = createContext();

const App = () => {

    const [filter, filterDispatch] = useReducer(filterReducer, filterInitialTodoState);
    const [products, productsDispatch] = useReducer(productReducer, productInitialTodoState);

    return (
        <ProductContext.Provider value={{ products, productsDispatch }}>
            <FilterContext.Provider value={{ filter, filterDispatch }}>
                <Layouts />
            </FilterContext.Provider>
        </ProductContext.Provider>

    );

}

export default App;