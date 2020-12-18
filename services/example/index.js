const db = require(rootPath + 'database');
const Team = db.general_Team_;
const TeamAliases = db.general_Team__aliases_;
const Op = require('sequelize').Op;


exports.getExampleData = async params => {
    // parameter names and the actually query which is run, don't really make sense, this is just an example
    // TODO: fix that and make this a functional example


    const where = {};
    // if param1 or param2 are passed
    if (params.param1 || params.param2){ 
        const andArray = []; // array of all filters which should be AND-ded together

        if (params.param1) {
            // let's say that param1 represents a username column in the table 
            andArray.push({name: param1}); 
        }

        if (params.param2) {
            // let's say that param2 represents a country column in the table 
            andArray.push({country: param2});
        }
    
        // when added in filter, where[Op.and] will return results which are true for both parameters
        // in case you need to return results true for either parameters, you would use where[Op.or]
        where[Op.and] = andArray;
    }


    const filter = {
        // SELECT name FROM ...
        // if you want all attributes/columns, just omit the attributes entry
        attributes: ['name_'],
        where: {
            // normally you would just put where here since we defined it above, but because the parameters defined there do not exist in Team table,
            // we just manually select one team
            // Again, this is conceptually VERY bad exmample, since we should be returning a list of teams based on some parameter shared between multiple teams
            // For getting team by its name, we should use get command
            name_: 'All of BEST' 
       },
        // This will return the aliases of the team as well (it will join general_Team_ and general_Team__aliases_ under the hood)
        include: [TeamAliases]
    };
    return await Team.findAll(filter);
     
};
