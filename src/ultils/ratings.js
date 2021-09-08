export const ratings = (rates) => {

    if (rates <= 5) {
        return <>{[...Array(5)].map((star, key) => {
            return <span className={key + 1 <= rates ? "fa fa-star" : "fa fa-star-o"} />
        })}</>
    }
    else {
        return <>{[...Array(parseInt(rates))].map((star) => {
            return <span className="fa fa-star" />
        })}</>
    }

}

export const getTotalPage = (totalItem, limit) => {

    var whole = (totalItem - totalItem % limit) / limit;
    var totalPage;
    if ((totalItem % limit) === 0) {
        totalPage = whole;
    }
    else {
        totalPage = whole + 1;
    }
    return totalPage;
}

const checkAdd = (array) => {
    var result = array.reduce((acc, o) => (acc[o.name] = (acc[o.name] || 0) + 1, acc), {});
    return result
}

const sort = (arr) => {
    const sortable = Object.entries(arr)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    return sortable;
}


export const renderLvl1 = (array) => {

    let listCategories = {};

    for (let category of array) {
        if (!listCategories[category.hierarchicalCategories.lvl0]) {
            listCategories[category.hierarchicalCategories.lvl0] = {
                name: category.hierarchicalCategories.lvl0,
                lvl1: {},
            };
        }

        if (!category.hierarchicalCategories.lvl1) continue;

        let categoryLvl1 = category.hierarchicalCategories.lvl1.split(" > ")[1];

        listCategories[category.hierarchicalCategories.lvl0].lvl1[
            categoryLvl1
        ] = categoryLvl1;
    }
    return listCategories;

}

export const customListCategories = (array) => {

    var listType = [];
    var listBrand = [];
    var ratings = [];
    var price_range = [];

    array.map((value, key) => {
        
        listType = [...listType,
        {
            name: value.type,
            id: key
        }];
        listBrand = [...listBrand,
        {
            name: value.brand,
            id: key
        }];
        ratings = [...ratings,
        {
            name: value.rating,
            id: key
        }];
        price_range = [...price_range,
        {
            name: value.price_range,
            id: key
        }];
    })

    var listCategories = renderLvl1(array);
    var listTypes = sort(checkAdd(listType))
    var listBrands = sort(checkAdd(listBrand))
    var rate = sort(checkAdd(ratings))
    var price_ranges = sort(checkAdd(price_range))

    return {
        listCategories,
        listTypes,
        listBrands,
        rate,
        price_ranges
    };
}