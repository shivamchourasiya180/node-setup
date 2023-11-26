const getResponse = () => {
    const array = []
    if (array.length) {
        return ({status:true, data: array, message: null})
    }
    return ({status:false, data: null, message: 'data not found'})
}

const PostResponse = (firstName, lastName, email, password,filename) => {
    const array = [firstName, lastName, email, password,filename]
    if (array.length) {
        return ({status:true, data: array, message: null})
    }
    return ({status:false, data: null, message: 'data not found'})
}

module.exports = {
    getResponse, PostResponse
};