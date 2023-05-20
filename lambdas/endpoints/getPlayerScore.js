const Responses = require('../common/apiResponses')
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;
exports.handler = async event => {
    console.log(event)
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: 'Bad request, ID missing.'});
    }
    let ID = event.pathParameters.ID;
    const user = await Dynamo.get(ID, tableName).catch(err => {
        console.log(err);
        return null
    })
    if (!user) {
        return Responses._400({message: 'Failed to get user by ID'})
    }

    return Responses._200({user})
}