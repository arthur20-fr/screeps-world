

var roleBuilder = {
    run : function(creep){
        var constructionSites = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if (constructionSites.length > 0){
            console.log(constructionSites);
        }
    }
}

module.exports = roleBuilder;