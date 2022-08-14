import { api } from '.'

const BuyService = {
    buy({
        data,
        ...restParam
    } = {}) {
        return api.call().post(`/mobile/orders/save`, {
            data,
            ...restParam
        })
    },
    list({
        code,
        ...restParam
    } = {}) {
        console.log('code', code)
        return api.call().get(`/mobile/orders/${code}`, {
            params: {
                order_code: code,
                ...restParam
            }
        })
    },
}

export default BuyService;