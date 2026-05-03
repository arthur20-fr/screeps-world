
var roleUpgrader = {
    run : function(creep){
        var target_ressource = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES ); // , _.filter(...)  later filter to only energy for example
        if(target_ressource) {
            if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        else{
            
        }
        //creep.say("upgrader");
    }
}

module.exports = roleUpgrader;