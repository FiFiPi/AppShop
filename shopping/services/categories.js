import { api } from '.'

const CategoriesServies = {
    list({
        offset = 0,
        limit = 4,
        ...restparam
    } = {}) {
        return api.call().get('/mobile/categories', {
            params: {
                offset,
                limit,
                ...restparam
            }
        })
    },
    listProduct({
        id,
        offset = 0,
        limit = 20,
        special,
        sortBy,
        order,
        is_new,
        min_price,
        max_price,
        ...resparam
    } = {}) {
        return api.call().get(`/mobile/categories/${id}/products`, {
            params: {
                id,
                offset,
                limit,
                special,
                sortBy,
                order,
                is_new,
                min_price,
                max_price,
                ...resparam
            }
        })
    }
}

export default CategoriesServies