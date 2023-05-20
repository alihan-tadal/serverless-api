const Responses = require('../common/apiResponses')

exports.handler = async event => {
    console.log('event:', event);
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'Bad request, ID missing.'});
    }
    let ID = event.pathParameters.ID;
    if (data[ID]) {
        return Responses._200(data[ID])
    }

    // failed as ID not in the data.
    return Responses._400({message: 'There is no such user.'});
}

const data = {
    1234: {name: 'Deneme', age: 33},
    3333: {name: 'Deneme 2', age: 23}
};