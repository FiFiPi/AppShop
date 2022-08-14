import { api } from '.'

const SliderService = {
    list({
        offset = 0,
        limit = 3,
        ...restParam
    } = {}) {
        return api.call().get('/mobile/sliders', {
            params: {
                offset,
                limit,
                ...restParam
            }
        })
    }
}
export default SliderService
