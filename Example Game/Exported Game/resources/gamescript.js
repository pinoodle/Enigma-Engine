definitions['0,0,0'] = function() {
    gameTitle(`A Fearful Night`);

    pl.introDisplayed = false;
    pl.carvingTaken = false;

    roomName(`Start<br>Screen`);

    print(`Welcome to A Fearful Night, a short exemplar game in which you must find your way out of spooky woods. Press 'Start Game' to begin!`);

    link(`Start Game`, function() {
        teleport(`0,0,1`);
    });
}

definitions['0,0,1'] = function() {
    roomName(`Clearing`);

    if (pl.introDisplayed === false) {
        print(`You wake up to find yourself lying on cold, wet ground. There are trees all around you, and it's pitch-black. Fumbling for your phone, you take it out of your pocket and turn on the flashlight. You are in the middle of a forest, in the dead of night. How did you even get here?!<br><br>To the NORTH is a narrow path. To the SOUTH are dense bushes. There is rustling coming from within them. You hope it's just the wind, though it doesn't sound like it…`);
        pl.introDisplayed = true;
    } else {
        print(`You are in the forest, in the same spot where you woke up.`);
    }

    addExits(north, south);
}

definitions['0,1,1'] = function() {
    roomName(`Narrow<br>Path`);

    print(`You are on a narrow path.`);

    addExits(north, south);
}

definitions['0,-1,1'] = function() {
    roomName(`Dead<br>End`);

    print(`You reach a dead end - there are dense bushes blocking your path. You hear a twig snap somewhere within the bushes, unnaturally loudly, as if someone stepped on it…`);

    addExits(north);

    addRoomObjectAction(`bushes`, `inspect`, function() {
        print(`As you lean in to inspect the bushes, a wolf suddenly jumps out and devours you.`);
        killGame();
    });
}

definitions['0,2,1'] = function() {
    roomName(`Narrow<br>Path`);

    print(`You are on a narrow path.<br><br>To the SOUTH, the path continues. To the north, the path splits in two - the one that goes NORTHWEST is very muddy, while the one that goes NORTHEAST is barely even a path; it's so overgrown that you won't really be able to see where you are going.`);

    addExits(northeast, northwest, south);
}

definitions['1,3,1'] = function() {
    roomName(`Overgrown<br>Path`);

    print(`You make your way down the overgrown path, beginning to feel a little claustrophobic.`);

    addExits(northeast, southwest);
}

definitions['-1,3,1'] = function() {
    roomName(`Muddy<br>Path`);

    print(`You are on a very muddy path. The mud is thick and cold and reaches all the way up to your ankles. Let's just hope you don't get stuck here…`);

    addExits(northwest, southeast);
}

definitions['-2,4,1'] = function() {
    roomName(`Dead<br>End`);

    addExits(southeast);

    if (pl.carvingTaken === false) {

        print(`You reach a dead end. You see a strange, wooden carving half-buried in the mud…`);

        addRoomObjectAction(`wood carving`, `take`, function() {
            clearRoom();
            print(`You take the wooden carving.`);
            pl.carvingTaken = true;
            addInventoryObjectAction(`wood carving`, `inspect`, function() {
                print(`You inspect the wooden carving. It's a squirrel, with strange, tiny symbols all over its body. It gives you the shivers…`);
            });
        });

    } else {

        print(`You reach a dead end.`);

    }
}

definitions['2,4,1'] = function() {
    roomName(`Overgrown<br>Path`);

    print(`You make your way down the overgrown path, regretting your decision; this is giving you anxiety!`);

    addExits(northeast, southwest);
}

definitions['3,5,1'] = function() {
    roomName(`Altar`);

    print(`You reach a strange clearing. In the middle of the clearing is what looks like a small… altar? There are candles arranged in a pentagram around it, burning brightly, fighting off the darkness trying to snuff them out.`);

    addExits(southwest);

    addRoomObjectAction(`altar`, `look at`, function() {
        print(`An eerie altar. You find nothing of use upon inspecting it.`);
    });

    if (pl.carvingTaken === true) {
        addInventoryObjectAction(`wood carving`, `use`, function() {
            print(`You put the wooden carving onto the altar. It immediately begins to glow with a beautiful, purple light. And then…<br><br>…you wake up back home, in your comfy bed. Was this all just a dream? But it felt so real! Either way, you are safe now.<br><br>VICTORY!`);
            killGame();
        });
    }
}