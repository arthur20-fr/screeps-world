

var roleBuilder = {
    getResource : function(creep){
        if (creep.room.find(FIND_DROPPED_RESOURCES)){
            creep.moveTo(creep.room.find(FIND_DROPPED_RESOURCES));
        }
        else{
            if (creep.withdraw(Game.spawns["Spawn1"], RESOURCE_ENERGY, creep.store.getCapacity()) == ERR_NOT_IN_RANGE){
                creep.moveTo(Game.spawns["Spawn1"]);
            }
        }
    },
    run : function(creep){
        var constructionSites = Object.values(Game.constructionSites); // all construction sites
        if (constructionSites.length > 0){
            if (creep.store.getFreeCapacity() > 0){
                this.getResource(creep);
            }
            //console.log(constructionSites);
            //if (creep.withdraw())
            if (creep.build(constructionSites[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(constructionSites[0]);
                creep.say(constructionSites[0]);
            }
        }
        else{
            Game.spawns["Spawn1"].room.createConstructionSite(Game.spawns["Spawn1"].pos.x,Game.spawns["Spawn1"].pos.y+2 + Game.time%5, STRUCTURE_CONTAINER);
        }
    }
}

module.exports = roleBuilder;