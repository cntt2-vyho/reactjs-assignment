import _ from "lodash";

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

export const splitString = (string) => {
    var arr = string.split(' > ');
    return arr.slice(-1)[0];
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

export const getLastObject = (obj) => {
    if (obj) {
        var last = obj[Object.keys(obj)[Object.keys(obj).length - 1]]

        return last;
    }

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

export const customListCategories = (array) => {
    getLastObject();
    var listCategories = [];
    var listType = [];
    var listBrand = [];
    var ratings = [];
    var price_range = [];

    array.map((value, key) => {
        if (!listCategories.some(val => _.isEqual(val, value.hierarchicalCategories))) {

            listCategories = [...listCategories,
            value.hierarchicalCategories
            ];
        }
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
