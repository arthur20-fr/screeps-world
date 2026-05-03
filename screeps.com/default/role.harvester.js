
var roleHarvester = {
    run: function(creep){
        if (creep.store.getFreeCapacity() > 0){
            var closest_source = creep.pos.findClosestByRange(FIND_SOURCES);
            if (creep.harvest(closest_source) == ERR_NOT_IN_RANGE)
                creep.moveTo(closest_source);
        }
        else
        {
            //creep.drop(RESOURCE_ENERGY, creep.store.getUsedCapacity())
            if (creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                if (creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_FULL){
                    creep.drop(RESOURCE_ENERGY);
                }
                creep.moveTo(Game.spawns["Spawn1"]);
                //creep.say(creep.moveTo(Game.spawns["Spawn1"]));
            }
            else{
                creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY);
            }
        }
    }
}

module.exports = roleHarvester;