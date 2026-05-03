/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('spawning');
 * mod.thing == 'a thing'; // true
 */

var spawning = {
    run : function(){
        var harvesters = _.filter(Game.creeps,(creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps,(creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps,(creep) => creep.memory.role == 'upgrader');
        
        console.log('Harvesters: ' +harvesters.length);
        
        if (harvesters.length < 3){
            Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], 'Harvester'+ Game.time, {memory: {role: 'harvester'}} );
        }
        else if (builders.length < 2){
            Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], 'Builder'+Game.time, {memory: { role: 'builder'}});
        }
        else if (upgraders.length < 3){
            Game.spawns["Spawn1"].spawnCreep([WORK,CARRY,MOVE,MOVE], 'Upgrader'+Game.time, {memory: { role: 'upgrader'}});
        }
    }
}


module.exports = spawning;