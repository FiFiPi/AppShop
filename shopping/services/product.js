import { api } from '.'

const ProductService = {
    list({
        offset = 0,
        limit = 10,
        special,
        is_new,
        search,
        sortBy,
        order,
        min_price,
        max_price = 500000000,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/products`, {
            params: {
                offset,
                limit,
                special,
                is_new,
                search,
                sortBy,
                order,
                min_price,
                max_price,
                ...restParam
            }
        })
    },
    getSingle({
        id,
        ...restParam
    } = {}) {
        return api.call().get(`/mobile/products/${id}`, {
            params: {
                id,
                ...restParam
            }
        })
    }
}

export default ProductService