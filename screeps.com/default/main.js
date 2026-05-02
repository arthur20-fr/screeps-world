var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var spawning = require('spawning');

module.exports.loop = function () {

    if (Game.spawns["Spawn1"].store[RESOURCE_ENERGY] == 300){
        spawning.run();
        
    }
    
    for (var name in Game.creeps) {
        
        var creep = Game.creeps[name];
        
        if ( creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        else if (creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
    }
}