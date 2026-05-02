module.exports.loop = function () {

    if (Game.spawns["Spawn1"].store[RESOURCE_ENERGY] == 300){
        var harvesters = _.filter(Game.creeps,(creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' +harvesters.length);
        if (harvesters.length < 3)
            Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], 'Harvester'+ Game.time, {memory: {role: 'harvester'}} );
        else{
            Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], 'Builder'+Game.time, {memory: { role: 'builder'}});
        }
        
    }
    
    for (var i in Game.creeps) {
        var creep = Game.creeps[i];
        
        if ( creep.memory.role == 'harvester'){
            if (creep.store.getFreeCapacity() > 0){
                var closest_source = creep.pos.findClosestByRange(FIND_SOURCES);
                if (creep.harvest(closest_source) == ERR_NOT_IN_RANGE)
                    creep.moveTo(closest_source);
            }
            else
            {
                if (creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ){
                    creep.moveTo(Game.spawns["Spawn1"]);
                    //creep.say(creep.moveTo(Game.spawns["Spawn1"]));
                }
                else{
                    creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY);
                }
            }
        }
        else if (creep.memory.role == 'builder'){
            creep.say("hi");
        }
    }
}