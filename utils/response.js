const _Response = {
    getPositive: 200, // Get HTTP request Positive Scenario
    postPositive: 201, // POST HTTP request Positive Scenario
    putPositive: 204, //PUT HTTP request Positive Scenario
    getNegative: 404, //GET HTTP request Negative Scenario
    postNegative: 400, //POST HTTP request Negative Scenario
    postConflict: 409, //POST HTTP request Negative Scenario
    putNegative: 400, //PUT HTTP request Negative Scenario
    putNotFound: 404 //PUT HTTP request Negative Scenario
};

module.exports = { _Response };
