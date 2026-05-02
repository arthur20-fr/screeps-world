var roleHarvester = require('role.harvester');

module.exports.loop = function () {
    Game.spawns["Spawn1"].spa
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }

}