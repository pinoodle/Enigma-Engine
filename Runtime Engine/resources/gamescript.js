definitions['0,0,0'] = function() {
    // Variables that need to be reset with every life
    pl.health = 50;
    pl.money = 0;
    pl.lives = 5;
    pl.micro = false;
    pl.temp0 = 0;
    pl.temp1 = 0;
    pl.posters = 0;
    pl.bulletin1Done = false;
    pl.bulletin2Done = false;
    pl.bulletin3Done = false;
    pl.bench = 0;
    pl.foxFriend = false;
    pl.foxHorni = false;
    pl.foxCalled = "no";
    pl.foxMoney = false;
    pl.wolfCalled = false;
    pl.wolfPet = 0;
    pl.willingWolf = false;
    pl.wolfNumFound = false;
    pl.ambitious = 0;
    pl.jackalMet = false;
    pl.twoh = 0;
    pl.possumTalk = 0;
    pl.oneCleaned = 0;
    pl.twoCleaned = 0;
    pl.threeCleaned = 0;
    pl.possumHelp = 0;
    pl.possumGone = false;
    pl.jobComplete = false;
    pl.meerCum = 0;
    pl.delivered = 0;
    pl.posscent = 0;
    pl.dingone = 0;
    pl.invite = 0;
    pl.sand = 0;
    pl.gem = 0;
    pl.monCash = 0;

    // Other Vars
    pl.title = "The Chronicles of Nom 2: Nomnesia v1.3";
    gameTitle(pl.title);
    addStat(`lives`, ` Squirrels Remaining`);
    addStat(`health`, `%`);
    addStat(`money`, ` Astleys`);
    pl.disposalOn = false;
    pl.harsh = true;

    // Kill Game Alt

    pl.killGame = function(string) {
        enableInteraction();
        pl.death = string;
        clearAll();
        clearTimer();
        print(`<strong>You died.</strong>`);
        link(`Continue`, function() {
            clearConsole();

            pl.health = 50;
            pl.money = 0;
            pl.lives--;
            pl.micro = false;
            pl.temp0 = 2;
            pl.temp1 = 0;
            pl.posters = 0;
            pl.bulletin1Done = false;
            pl.bulletin2Done = false;
            pl.bulletin3Done = false;
            pl.bench = 0;
            pl.foxFriend = false;
            pl.foxHorni = false;
            pl.foxCalled = "no";
            pl.foxMoney = false;
            pl.wolfCalled = false;
            pl.wolfPet = 0;
            pl.willingWolf = false;
            pl.wolfNumFound = false;
            pl.ambitious = 0;
            pl.jackalMet = false;
            pl.twoh = 0;
            pl.possumTalk = 0;
            pl.oneCleaned = 0;
            pl.twoCleaned = 0;
            pl.threeCleaned = 0;
            pl.possumHelp = 0;
            pl.possumGone = false;
            pl.jobComplete = false;
            pl.meerCum = 0;
            pl.delivered = 0;
            pl.posscent = 0;
            pl.dingone = 0;
            pl.invite = 0;
            pl.sand = 0;
            pl.gem = 0;
            pl.monCash = 0;

            teleport(`0,0,2`);
        });
    };

    pl.victory = function() {
        pl.lives = 0;
        pl.health = 0;
        pl.money = 0;
        dom_scene.innerHTML += `<div style="color: lime; font-weight: bold; text-align: center;">🎉🎉🎉 VICTORY!!! 🎉🎉🎉</div><br>`;
        print(`Congratulations! You have successfully completed the game! Thank you so much for playing :)`);
        killGame();
    };

    // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Health Function
    pl.modHealth = function(num) {
        pl.health = pl.health + num;
        if (pl.health < 0) pl.health = 0;
        if (pl.health > 100) pl.health = 100;
    };

    // Bulletin Board Function - 1
    pl.bulletinFun = function(num, bul) {
        addInventoryObjectAction(`poster #${num}`, `put up`, function() {
            print(`You put up Monty's poster on the bulletin board.`);
            pl.posters--;
            if (pl.posters === 0) pl.posters = -1;
            removeInventoryObject(`poster #${num}`);
            eval(`pl.bulletin${bul}Done = true;`);
            removeInventoryObjectAction(`poster #1`, `put up`);
            removeInventoryObjectAction(`poster #2`, `put up`);
            removeInventoryObjectAction(`poster #3`, `put up`);
        });
    };

    pl.crow = function() {
        print(`As you walk along the path, a group of female skunks suddenly come out of nowhere, trodding right towards you!<br><br>You quickly try to scamper out of the way, but you're not fast enough, and you suddenly find a huge footpaw looming over you. <br><br>"Hey!" you shout, trying to get its owner's attention, but it's no use; they're too engrossed in their conversation to notice.<br><br>So the paw comes down on you in full force, ending your life with a sad, pathetic squelch.<br><br>"Eww, what was that?" the skunk exclaims, lifting up her footpaw to reveal your flattened self, blood dripping from the tips of her claws. <br><br>"Some kinda mouse? <em>Tiny</em> mouse. Weird. What was it doing in the middle of the path in broad daylight?"<br><br>The skunk who stepped on you shrugs, taking a sip of her cold beverage as she casually wipes her paw against the ground, then the group continues on as if nothing had happened, as if your life wasn't just embarrassingly crushed out of existence underfoot.`);
        pl.killGame("skunk");
    };

    changeColor(`#5D0000`);

    roomName(`Start<br>Screen`);

    dom_scene.innerHTML += `<h1 style='text-align: center'>The Chronicles of Nom 2: Nomnesia</h1>`;

    print(`Welcome!<br><br>This game is a semi-sequel to The Chronicles of Nom, which you can play for free <a href="https://www.furaffinity.net/view/46901869/">here</a>.<br><br>Note that this game is much more anthro than The Chronicles of Nom. Expect a much more civilized society!<br><br>Also, you do NOT need to have played the previous game to enjoy this one. This game is very casual, and the plot only really kicks in at the end. If you haven't played the first game, you can just ignore it. But, if you have - enjoy the extra lore!<br><br>I won't lie, these two games are so different in tone I should have made them two separate things, but it is what it is 😅<br><br>With all that out of the way - enjoy the game! I hope you'll have as much fun playing it as I had making it <3<br><br>Additional info:`);

    print0(`🎮 `);

    link(`Controls`, function() {
        print(`If you're playing on PC, in addition to the mouse, you can use the following keys to interact with the game:<br><br>&nbsp;&nbsp;• WASD to move in all 8 directions<br><br>&nbsp;&nbsp;• Space + S to go DOWN<br><br>&nbsp;&nbsp;• Space + W to go UP<br><br>&nbsp;&nbsp;• Left Shift to bring up the ROOM menu<br><br>&nbsp;&nbsp;• Left CTRL to bring up the INVENTORY menu`);
    });

    print0(`📖 `);

    link(`Credits`, function() {
        print(`Game created by <a href="https://www.furaffinity.net/user/furvoreite/">furvoreite</a>, aka Nash, using the <a href="https://github.com/pinoodle/Enigma-Engine">Enigma Engine</a>, my own text adventure engine I developed as an alternative to Quest.`);
    });

    print0(`👅 `);

    link(`List of Kinky Scenes`, function() {
        print(`The game contains the following kinky scenes:<br><br>&nbsp;&nbsp;• Wolf: Stomp (willing/unwilling), Paw Licking (willing), Hard Vore (third party), Hard Vore (willing)<br><br>&nbsp;&nbsp;• Dingo: Pawplay (willing/unwilling), Soul Vore (semi-willing/unwilling), Soft Vore (you as a pred)<br><br>&nbsp;&nbsp;• Jackal: Hard Vore (unwilling), Soft Vore (willing/unwilling), Blended into a Protein Shake (unwilling), Stomp (unwilling)<br><br>&nbsp;&nbsp;• Meerkat: Kissing, Soft Vore (willing/unwilling), Pawplay (willing), Hugz ’n’ Licks, Blowjob (willing/semi-willing), Yiff (willing), Paw Licking, Cock Vore (unwilling)<br><br>&nbsp;&nbsp;• Fox: Hugz, Paw Licking, Soft Vore (willing/unwilling), Head Suckling<br><br>&nbsp;&nbsp;• Bear: Soft Vore (normal size/micro size – both unwilling), Hard(ish) Vore, Accidental Stomp<br><br>&nbsp;&nbsp;• Possum: Soft Vore (willing/unwilling), Paw Licking, Cuddling, Head Suckling <br><br>&nbsp;&nbsp;• Snake: Soft Vore (unwilling)<br><br>&nbsp;&nbsp;• Squirrel: Soft Vore (willing), Soft Vore (third party, unwilling), Hard Vore (willing), Hard Vore (third party, unwilling), Paw Licking (willing/unwilling)<br><br>&nbsp;&nbsp;• Raven: Soft Vore (unwilling)<br><br>&nbsp;&nbsp;• Skunk: Accidental Stomp (unwilling)`);
    });

    print(`Once you're ready, choose your preferences below, then go ahead and start the game!`);

    print0(`💩 `);

    link(`Disposal Switch`, function() {
        print(`Please choose whether or not you wish to see disposal scenes. If this option is turned off, scenes will normally end once you pass out in the pred's stomach. If this option is turned <em>on</em>, you will get some additional content, letting you know what happened to you - as well as the pred - after you've been gurgled up. It's just an extra paragraph or so of bonus text - other than that, all the scenes are the same.`);
        link(`Disposal On`, function() {
            pl.disposalOn = true;
            print(`Disposal has been enabled.`);
        });
        link(`Disposal Off`, function() {
            pl.disposalOn = false;
            print(`Disposal has been disabled.`);
        });
    });

    print0(`▶️ `);

    link(`Start Game`, function() {
        clearConsole();
        teleport(`0,0,1`);
    });
}

definitions['0,0,10'] = function() {
    roomName(`Dark<br>Alley`);

    if (pl.gem === 0) {

        if (pl.temp0 === 2) {
            pl.temp0 = 1;
            print(`"Oh, hold on, hold on! Don't forget to pick a name!"`);
            link(`Choose name`, function() {
                nukeHyperlinks();
                pl.name = prompt("Please choose your name...");
                if (pl.name === null || pl.name === "") pl.name = "xxNutNibbler69xx";
                print(`"${pl.name}? Good…"`);
                link(`Fella`, function() {
                    nukeHyperlinks();
                    pl.sex = "m";
                    print(`"…fella! Now, off you go!"`);
                    link(`Continue`, function() {
                        teleport(`0,0,10`);
                    });
                });
                link(`Lady`, function() {
                    nukeHyperlinks();
                    pl.sex = "f";
                    print(`"…lady! Now, off you go!"`);
                    link(`Continue`, function() {
                        teleport(`0,0,10`);
                    });
                });
            });
        } else {
            print(`You are standing in a dark alley. All that's here is the bin you crawled out of. Standing in a dark alley for too long probably isn't a good idea. Perhaps you should head NORTH…`);

            addExits(north);

            addRoomObjectAction(`bin`, `look at`, function() {
                print(`An unassuming bin. Ugh, you're gonna have to crawl back into it when it's time to return, aren't you. Yuck!`);
            });
        }

    } else {

        print(`You are standing in a dark alley. All that's here is the bin you crawled out of. Standing in a dark alley for too long probably isn't a good idea. Perhaps you should head NORTH…`);

        addExits(north);

        addRoomObjectAction(`bin`, `look at`, function() {
            print(`An unassuming bin. Ugh, you're gonna have to crawl back into it when it's time to return, aren't you. Yuck!`);
        });

        addRoomObjectAction(`bin`, `jump in`, function() {
            disableInteraction();
            print(`"You did it!" the bin - uhh, the <em>Doctor</em> - says as you approach the bin, gem in hand. "Just hop into the bin when you're ready."<br><br>With an exasperated sigh, you do so.`);
            link(`Continue`, function() {
                enableInteraction();
                teleport(`0,0,5`);
            });
        });

    }
}

definitions['0,0,1'] = function() {
    dom_scene.innerHTML += `<h2 style='text-align: center'>The White Room</h2>`;

    roomName(`White<br>Room`);

    print(`Groaning, you slowly open your eyes. They are immediately assaulted by harsh, bright, white light, and it takes a long moment for them to finally adjust to it.<br><br>You find yourself in a white room. There is nothing here, except for large screens, and… other squirrels! You don't recognize any of them, but you're glad to have some company in this alien room. Just like you, they're beginning to wake up, looking very confused as they sit up in their beds.<br><br>It dawns on you that you have no idea where you are, how you got here, or even <em>who</em> you are! As in… you don't even remember your name!!!<br><br>"Goooooood morning, everyone!" a smooth voice says, echoing around the barren room.<br><br>"Wha… who said that? Where are you?" one of the squirrels squeaks, looking around frantically.<br><br>"Relax, friend. You are safe here."<br><br>"But… where is <em>here</em>? I don't remember anything!"<br><br>"You're in the hospital. I'm a doctor. There has been a strange outbreak of amnesia. All five of you in this room here have been affected. I've been trying to cure you, but I'm going to need you to help me with that. <em>All</em> of you."<br><br>It is <em>you</em> who speaks now. "What do you mean? What can <em>we</em> do?"<br><br>"I tried everything, but it all failed. There is just one thing that can help you now - a very special gem called the Chrophenite. Only two or three of these exist in the world, as far as I am concerned. And I only know the location of <em>one</em>. This gem emits strange but powerful waves that can manipulate the mind. With it, I will be able to restore your memories."`);

    link(`&quot;Why can't you get them yourself?&quot;`, function() {
        print(`The voice sighs sadly. "I cannot, I'm afraid. I am… crippled, you see."`);
    });

    link(`&quot;Can't I just start my life from scratch?&quot;`, function() {
        print(`"Ahh, if only it were that simple, my friend. But I've been observing your brain activity over the last few days while you were unconscious, and it's not looking good. If left untreated, you will soon lose much more than just your memory; you will forget how to do the most basic of things, you will become lost, <em>confused</em>. Your body will forget the most <em>vital</em> things, like how to breathe and how to keep your heart beating. And, well, I'm sure I don't need to tell you what will happen <em>then</em>…"`);
    });

    link(`&quot;Alright. Where do we get the gem?&quot;`, function() {
        nukeHyperlinks();
        print(`"Good question!" Suddenly, one of the screens in the room flickers to life. It's <em>huge</em>, almost covering an entire wall. On it, an island appears. A <em>tropical</em> island, full of sunshine and palm trees, with creatures relaxing in the sun and bathing in the crystal-clear ocean. <br><br>"Behold… the Isle of Zing!"<br><br>"They're all… <em>predators</em>!" you exclaim.<br><br>"<em>Most</em>," the Doctor corrects. "It's a predator town, and most prey species stay as far away from it as possible. They prefer a <em>wilder</em> lifestyle, anyway - they don't care for towns. But <em>some</em> individuals of preyish species do dare venture into it. The town has a rule against hunting within its perimeter. Of course, there's no real punishment if you break it, but most predators honor it. You should be quite safe, but I won't sugarcoat it - it's not risk-free. But be smart, stay vigilant, and you should be just fine."`);
        link(`&quot;Sooooo… where is the gem?&quot;`, function() {
            nukeHyperlinks();
            print(`"Ah, yes. Apologies. Went on a tangent there! There is a snake on the island, right on the beach, selling all kinds of trinkets. He's currently got the gem for sale, most likely clueless about its pow… about its <em>healing abilities</em>." <br><br>"It costs 1000 Astleys," the Doctor continues. "That's the currency they use over there. Unfortunately, I don't have a single Astley I can give you, and <em>our</em> money is worthless there. I'm afraid you'll have to do some odd jobs around town, and buy the gem once you have enough money."`);
            link(`&quot;And how do we get there?&quot;`, function() {
                nukeHyperlinks();
                print(`"This screen is in fact a teleportation device. Ahh, but only one of you may go - the teleporter can only handle one person at a time, and it has a long cooldown period. The rest of us will stay here and watch. And, seeing as you are the one asking all the questions, why don't <em>you</em> go? You seem like a smart squirrel."<br><br>"Umm… sure."<br><br>"Jolly good! Just step through the screen once you're ready."`);
                link(`Step through the screen`, function() {
                    print(`You touch the screen. It chills your fingertips to the bone.<br><br>"Uhh…"<br><br>"It's a bit chilly, but you'll be fine. Warm sunshine awaits on the other side!"<br><br>Taking a deep breath, you step through the screen…<br><br>…and find yourself climbing out of a bin in a dark alleyway. Not the <em>grandest</em> of entrances…<br><br>You are shaking from the cold, pretty sure that the teleporter came close to cartoonishly spitting out a squirrel frozen solid in an ice cube. However, this is immediately remedied by a warm, tropical breeze. You sigh in relief.`);
                    clearConsole();
                    dom_scene.innerHTML += `<h2 style='text-align: center'>The Isle of Zing</h2>`;
                    teleport(`0,0,10`);
                });
            });
        });
    });
}

definitions['0,1,10'] = function() {
    roomName(`Dark<br>Alley`);

    if (pl.gem === 0) {

        print(`You are standing in a dark alley. There's nothing interesting here.`);

        addExits(north, south);

    } else if (pl.gem === 1 && pl.lives === 1) {
        print(`As you run towards the dark alley with your prize, eager to have this entire adventure behind you and return to a normal, peaceful life, in your rush you don't hear the gentle flapping of wings overhead, don't see a dark, feathery shape rush through the air towards you.<br><br>You shriek as sharp claws dig into your soft body, and rip you off the ground and into the air, causing you to drop the gem.<br><br>"Noooooooo!" you scream. So close, and yet so far! This can't be!<br><br>But it can, for life has no regard for such things, and the world is an unfair, cruel place. So the raven takes you high up onto the roof of some building, where it drops you. You instantly get back up on your feet and try to run away, only to trip and fall on your face with a thud, as you failed to realize that the raven had your fluffy tail still pinned down with its claws. <br><br>As soon as you lift your head back up, a black, shiny beak opens and snatches it up. Your squirms and struggles do you no good as the bird tilts its head back and begins to swallow you whole, its neck bulging to seemingly impossible dimensions, your struggles clearly visible through the thinly stretched skin of its throat.<br><br>You find more and more of yourself inside its body with every jerky move of its head, descending deeper and deeper into the oppressive darkness of its insides, until you're nicely curled up in its crop. But the bird doesn't want to eat <em>later</em>; it's hungry <em>right now</em>, so it immediately pushed you further in, into the stomach.<br><br>There you lie, squeezed so much from all sides that moving a finger is about all you can do, completely helpless as the bird's digestive juices begin to liquify you. The desire to scratch your itchy, irritated skin is <em>maddening</em>. After what felt like an eternity of listening to the bird's heartbeat and the flapping of its wings to try and forget your immeasurable desire to scratch yourself, the stomach walls around you begin to shift, and you find yourself being pushed <em>even deeper</em> into the raven's digestive system.<br><br>Huh… shouldn't you be <em>dead</em> by now? Aren't the intestines next?!<br><br>But no. Understandably, your squirrely self is not very aware of bird biology, and what comes next isn't the intestines, but rather the second chamber of the bird's stomach - the <em>gizzard</em>. And if you thought the previous chamber was hell, then you don't even know what to call <em>this</em>, as it's so much worse; the thick stomach walls begin to rub and grind against you, crushing your bones and finally turning your soft, half-digested, jelly-like flesh into liquid chyme, your shrieks barely audible outside the bird. After only a few minutes, you finally go silent, as the gizzard continues pulverizing your bones to extract as many nutrients out of them as possible.`);
        if (pl.disposalOn) print(`Later on in the day, the bird would dispose of whatever parts of you it wasn't able to digest mid-flight, and they would land with a disgusting splat right inside a bin, where they would rot together with old, unwanted trash, becoming a feast for the local flies.`);
        pl.killGame("raven");
    } else {
        print(`You are standing in a dark alley. There's nothing interesting here.`);

        addExits(north, south);
    }
}

definitions['0,2,10'] = function() {
    roomName(`Edge<br>of<br>Beach`);

    if (pl.temp0 === 0) {
        print(`Just as you are about to exit the alleyway, you hear the Doctor's voice behind you.<br><br>"Hold up! Don't forget to come up with a name for yourself! The last thing you want is an awkward silence when someone asks you your name!"<br><br>The Doctor's voice is ear-splittingly loud as it exits the portal, loud enough to lift the lid of the bin a little with every "p" or "t" or similar sound. This makes it look like the bin itself is talking to you, which you find rather hilarious.`);
        link(`Choose name`, function() {
            nukeHyperlinks();
            pl.name = prompt("Please choose your name...");
            if (pl.name === null || pl.name === "") pl.name = "xxNutNibbler69xx";
            print(`"${pl.name}? A perfect name for such a handsome…"`);
            link(`Fella`, function() {
                nukeHyperlinks();
                pl.sex = "m";
                print(`"…fella! Now, off you go! Become someone's lunch!"<br><br>"Huh?"<br><br>"Well, it's bad luck to wish someone <em>good</em> luck! It's like 'break a leg'. Don't worry about it. Shoo, now! You've got gems to acquire!"`);
                link(`Continue`, function() {
                    pl.temp0++;
                    teleport(`0,2,10`);
                });
            });
            link(`Lady`, function() {
                nukeHyperlinks();
                pl.sex = "f";
                print(`"…lady! Now, off you go! Become someone's lunch!"<br><br>"Huh?"<br><br>"Well, it's bad luck to wish someone <em>good</em> luck! It's like 'break a leg'. Don't worry about it. Shoo, now! You've got gems to acquire!"`);
                link(`Continue`, function() {
                    pl.temp0++;
                    teleport(`0,2,10`);
                });
            });
        });
    } else {
        addExits(south, east, west, north);
        print(`You are standing at the edge of the beach. It's mostly empty, with the exception of a few patrons sunbathing and splashing about in the glimmering ocean.`);
    }
}

definitions['0,3,10'] = function() {
    addExits(south, north, northeast, northwest);
    print(`You're on the beach. Your footpaws sink pleasantly into warm, soft, golden sand. The beach is quite crowded, with patrons of all kinds splashing about in the ocean, sunbathing, playing various ball games, burying each other in the sand… you name it!`);
    roomName(`Beach`);

    addRoomObjectAction(`sand`, `search through`, function() {
        print(`You don't find anything.`);
    });
}

definitions['1,2,10'] = function() {
    roomName(`Edge<br>of<br>Beach`);
    print(`You are standing at the edge of the beach. It's mostly empty, with the exception of a few patrons sunbathing and splashing about in the glimmering ocean.`);
    addExits(west, northeast);
}

definitions['-1,2,10'] = function() {
    roomName(`Edge<br>of<br>Beach`);

    addExits(east, northwest);

    print(`You are standing at the edge of the beach. It's mostly empty, with the exception of a few patrons sunbathing and splashing about in the glimmering ocean.`);

    removeInventoryObjectAction(`poster #1`, `put up`);
    removeInventoryObjectAction(`poster #2`, `put up`);
    removeInventoryObjectAction(`poster #3`, `put up`);
}

definitions['2,3,10'] = function() {
    roomName(`Edge<br>of<br>Beach`);

    if (!pl.micro) {
        print(`You are standing at the edge of the beach. It's mostly empty, with the exception of a few patrons sunbathing and splashing about in the glimmering ocean.`);
        addExits(southwest, northeast);
    } else pl.crow();
}

definitions['3,4,10'] = function() {
    roomName(`Seaside<br>Path`);

    if (!pl.micro || pl.temp1 === 1) {
        print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.<br><br>To the EAST is an outdoor bar. You can go around it by going SOUTHEAST, or you can go SOUTHWEST towards the beach.`);
    } else {
        print(`You leave Monty's bar in your new, tiny form, marveling at the world around you. But your marveling suddenly turns to horror as a giant paw stomps the ground right in front of you. You topple backwards and stare at it, your heart hammering in fear - just a few inches to the left, and you would have been smooshed right under it! Its owner - a vixen - doesn't even seem to have noticed you. You should be more careful - it's a dangerous world out there for such a tiny creature. Perhaps you should wait for the potion's effects to wear off back at Monty's?`);
        pl.temp1++;
    }

    addExits(southwest, east, southeast);

    clearTimer();
}

definitions['4,4,10'] = function() {
    roomName(`Monty's<br>Bar`);
    print(`You stand in front of an outdoor bar. A big, wooden sign hangs from the roof, with "Monty's Bar" roughly scrawled on it in red paint. Behind the counter stands a chubby bear.`);
    addExits(west);

    if (pl.sex === "m") pl.word = "sir";
    else pl.word = "ma'am";
    if (pl.sex === "m") pl.word2 = "he";
    else pl.word2 = "she";

    // If you are not a micro
    if (!pl.micro) {

        if (pl.wolfCalled && pl.wolfPet === 0) {
            setTimer(`20`, function() {
                clearExits();
                nukeHyperlinks();
                clearRoom();
                pl.wolfComes();
            });
        }

        // Look at Monty
        addRoomObjectAction(`monty`, `look at`, function() {
            print(`A chubby bear, wearing nothing but a light blue vest and a baseball cap of the same colour. He doesn't see you, he's too busy polishing glasses. And probably daydreaming.`);
        });

        // Order Drink
        addRoomObjectAction(`monty`, `order drink`, function() {
            clearRoom();
            clearExits();
            print(`"Hello."<br><br>The bear looks up, startled. "Oh! Didn't see you there. Can I get you something, ${pl.word}?"<br><br>"Umm…"<br><br>Two items on the menu catch your eye:`);
            link(`Treesap of Life - 50 Astleys`, function() {
                nukeHyperlinks();
                print(`"I'll have the Treesap of Life for 50 Astleys, please."<br><br>"Coming right up!"<br><br>The bear puts various questionable-looking liquids into his shaker, then shakes them all together. And when I say <em>shakes</em>, I mean it! He's putting all he's got into that shake, and he's got <em>plenty</em>, being a strong bear. You half-expect the shaker to explode, but it doesn't; instead, the bear pours its contents into a glass, plops some ice cubes in, and serves you the drink, which you guzzle down quickly, as it's absolutely <em>delicious</em>! It tasted a bit like a strawberry milkshake, only richer and thicker and sweeter, with a faint, flowery aftertaste.<br><br>"Did you enjoy it, ${pl.word}?"<br><br>"Delicious!"<br><br>"Awesome! That'll be 50 Astleys, please."<br><br>The bear holds out his paw expectantly.`);
                if (pl.money < 50) pl.bearNom();
                else {
                    link(`Pay for drink`, function() {
                        nukeHyperlinks();
                        pl.money -= 50;
                        pl.modHealth(50);
                        print(`"Thanks for your patronage!" the bear says, beaming. "Hope to see you again soon!"<br><br>With that, the bear returns to polishing glasses.<br><br>>&gt; MONEY: -50 ASTLEYS<br><br>>&gt; HEALTH: +50%`);
                        link(`Continue`, function() {
                            teleport(`4,4,10`);
                        });
                    });
                }
            });
            link(`Microhol - 100 Astleys`, function() {
                nukeHyperlinks();
                clearTimer();
                print(`"I'll have the Microhol for 100 Astleys, please."<br><br>"Coming right up!"<br><br>The bear puts various questionable-looking liquids into his shaker, then shakes them all together. And when I say <em>shakes</em>, I mean it! He's putting all he's got into that shake, and he's got <em>plenty</em>, being a strong bear. You half-expect the shaker to explode, but it doesn't; instead, the bear pours its contents into a glass, plops some ice cubes in, and serves you the drink, which you guzzle down quickly, as it's absolutely <em>delicious</em>! It tasted a bit like… like a smooth, milky mango smoothie?<br><br>"Did you enjoy it, ${pl.word}?"<br><br>"Oh, yes! Delicious!"<br><br>"Awesome! That'll be 100 Astleys, please."<br><br>The bear holds out his paw expectantly.`);
                if (pl.money < 100) pl.bearNomMicro();
                else {
                    link(`Pay for drink`, function() {
                        nukeHyperlinks();
                        pl.money -= 100;
                        pl.micro = true;
                        print(`"Thanks for your patronage!" the bear says, beaming. "Hope to see you again soon! The drink should start working in a few moments. You'll be a micro for about 2 hours, then return to normal."<br><br>With that, the bear returns to polishing glasses.<br><br>>&gt; MONEY: -100 ASTLEYS`);
                        setTimer(`3`, function() {
                            print(`Suddenly…`);
                            setTimer(`2`, function() {
                                print(`...you begin to feel dizzy...`);
                                setTimer(`2`, function() {
                                    print(`...you collapse onto the floor…`);
                                    setTimer(`2`, function() {
                                        print(`...you close your eyes…`);
                                        setTimer(`2`, function() {
                                            print(`…and when you open them again, you find that you are the size of… uhh… a cockroach?`);
                                            setTimer(`2`, function() {
                                                print(`It feels…`);
                                                setTimer(`2`, function() {
                                                    print(`<strong>AMAZING!!!</strong>`);
                                                    setTimer(`2`, function() {
                                                        print(`Seriously, this is an entirely new perspective! Everything is so <em>huge</em>!<br><br>No need to find a hotel or rent a room - you could just crawl into a hole in someone's wall, and you'd be just fine! No need to afford food either - just some crumbs from someone's plate, and you're good to go! Such <em>freedom</em>!`);
                                                        link(`Continue`, function() {
                                                            teleport(`4,4,10`);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
            });
            link(`Never mind…`, function() {
                nukeHyperlinks();
                print(`"Uhh… never mind."<br><br>"Alrighty! Give me a shout if you need anything, ${pl.word}!"<br><br>With that, the bear returns to polishing glasses.`);
                link(`Continue`, function() {
                    teleport(`4,4,10`);
                });
            });
        });

        // Ask for Job
        if (pl.posters === 0) {
            addRoomObjectAction(`monty`, `ask for a job`, function() {
                clearRoom();
                clearExits();
                print(`"Huh? A job? Umm… I do, in fact. I need to put up some posters around town, to bring in new customers. But I keep forgetting. I'll give you three posters, and I want you to put each one up on a separate bulletin board. As for the payment… umm…"<br><br>The bear opens the cash register, and counts the sad little pile of coins in there. "I'll give you 200 Astleys. Deal?"`);
                link(`Accept offer`, function() {
                    nukeHyperlinks();
                    print(`"Wonderful! Here you go, buddy. Put them up on bulletin boards around town."<br><br>&gt;&gt; YOU RECEIVED 3 POSTERS`);
                    pl.posters = 3;
                    addInventoryObjectAction(`poster #1`, `inspect`, function() {
                        print(`A poster advertising Monty's Bar. It's… pretty rough. Hand-drawn. You doubt it's gonna attract a lot of customers. But what do <em>you</em> know? You're not from around here. Maybe the locals will think it's the greatest piece of art they ever saw…`);
                    });
                    addInventoryObjectAction(`poster #2`, `inspect`, function() {
                        print(`A poster advertising Monty's Bar. It's… pretty rough. Hand-drawn. You doubt it's gonna attract a lot of customers. But what do <em>you</em> know? You're not from around here. Maybe the locals will think it's the greatest piece of art they ever saw…`);
                    });
                    addInventoryObjectAction(`poster #3`, `inspect`, function() {
                        print(`A poster advertising Monty's Bar. It's… pretty rough. Hand-drawn. You doubt it's gonna attract a lot of customers. But what do <em>you</em> know? You're not from around here. Maybe the locals will think it's the greatest piece of art they ever saw…`);
                    });
                    link(`Continue`, function() {
                        teleport(`4,4,10`);
                    });
                });
                link(`Decline offer`, function() {
                    nukeHyperlinks();
                    print(`"No worries, buddy. Come back if you change your mind!"<br><br>With that, the bear returns to polishing glasses.`);
                    link(`Continue`, function() {
                        teleport(`4,4,10`);
                    });
                });
            });
        }

        // Come back after having done the job
        else if (pl.posters === -1) {
            addRoomObjectAction(`monty`, `posters`, function() {
                clearRoom();
                clearExits();
                print(`"All done?" the bear asks. "Perfect! Thanks so much! Hopefully, this place will become a little more lively now! Here is your payment."<br><br>The bear offers you 50 Astleys.`);
                link(`Take`, function() {
                    nukeHyperlinks();
                    print(`"Thanks again!" the bear says as you take the coins, then gets back to work.<br><br>>&gt; MONEY: +200 ASTLEYS`);
                    pl.money += 200;
                    link(`Continue`, function() {
                        teleport(`4,4,10`);
                    });
                    pl.posters = -2;
                });
                link(`Refuse`, function() {
                    nukeHyperlinks();
                    print(`"Keep it. I'm just glad I could help you out!"<br><br>"Huh? But…"<br><br>"You need it more than I do."<br><br>"Gee. Thanks! I'll remember that!"<br><br>With that, the bear returns to work.`);
                    link(`Continue`, function() {
                        teleport(`4,4,10`);
                    });
                    pl.posters = -3;
                });
            });
        }

    }

    // If you are a micro
    else {
        addRoomObjectAction(`monty`, `look at`, function() {
            print(`If Monty looked big and intimidating to you when you were squirrel-sized, now he's a positively <em>terrifying</em> mountain of a beast! You can feel the ground vibrating ever so slightly beneath you with every step he takes.`);
        });
        addRoomObjectAction(`monty`, `talk to`, function() {
            print(`No matter how much you scream and shout at the bear, waving your arms about, he doesn't hear you. Perhaps he <em>would</em> if he paid attention, but he's daydreaming again…`);
        });
        addRoomObjectAction(`monty`, `approach`, function() {
            teleport(`5,4,10`);
        });
        setTimer(`30`, function() {
            nukeHyperlinks();
            clearRoom();
            clearExits();
            if (!pl.wolfCalled || pl.wolfPet !== 0) {
                pl.micro = false;
                print(`The potion's effects wear off. You are once again normal-sized.`);
                link(`Continue`, function() {
                    teleport(`4,4,10`);
                });
            } else {
                pl.wolfSmoosh();
            }
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pl.bearNom = function() {
        clearTimer();
        link(`&quot;Umm… I don't have enough money…&quot;`, function() {
            nukeHyperlinks();
            print(`"Umm… I… don't have enough money…"<br><br>"What?! Then why did you order the drink?"<br><br>"Well… I needed the health…"<br><br>"But you can't just… this isn't a charity! My business is on the brink of collapse as is, without thieves stealing from me! Although… maybe it <em>is</em> the reason why it's failing. Hmm. This place isn't short on thieves, after all. Maybe it's <em>not</em> my math skills that are to blame…"<br><br>You slowly begin to retreat, hoping to make a dash for it while the bear is lost in thought.<br><br>"Oi! Get back here!" Monty lunges at you and grabs you by the scruff of your neck. "Enough is enough. I need to stop being a wimp. I'm gonna make it clear once and for all that I am <em>not</em> to be messed with."<br><br>Your heart skips a beat as the bear opens his maw, revealing a large, dark, purplish cavern full of yellowish - but healthy - teeth.<br><br>"W-W-Wait, we can-"<br><br>Monty crams you head-first into his gaping maw, before tilting his head back and admitting you into his throat. You effortlessly slide into the huge, dark, slippery cave; he doesn't even need to push or force you in. Your struggles prove to be futile, too; the walls of the bear's throat are too slippery, they're covered in too much icky slime for you to be able to gain any purchase, and your puny claws might as well be made of marshmallows as they struggle to make the tiniest scratch on the tough, fleshy walls of the bear's muscular neck.<br><br>Speaking of which…<br><br>The bear seals your fate with a single, powerful <em>gulp</em>, and now, as if in retaliation, this muscular throat squeezes you tightly from all sides, pushing you deep, deep down into the bear. They squeeze all air out of your lungs and threaten to crush you before you even reach the stomach, but you manage to withhold the pressure - for better or for worse - and find yourself dumped into a pitch-black chamber filled with… uhh… <em>everything</em>. <br><br>Though you can't see anything, your nose tells you there's bits of <em>everything</em> in here! Fruit, vegetables, meat, bread, cheese, sugary things - you name it, it's here! And there's <em>lots</em> of it, all semi-digested and mixed with digestive juices, forming one big, slimy, disgusting lake of goop that reaches all the way to your neck. Clearly, the bear <em>loves</em> to eat. Maybe <em>he's</em> the reason his business is failing…<br><br><strong>BURRRRP!</strong><br><br>"Oop! Sorry!" The bear pats his belly and smacks his lips before returning to polishing his glasses. His stomach is groaning and churning around you, eager to make you become one with all the slop surrounding you.`);
            link(`Continue`, function() {
                teleport(`4,4,9`);
            });
        });
    };

    pl.bearNomMicro = function() {
        clearTimer();
        link(`&quot;Umm… I don't have enough money…&quot;`, function() {
            nukeHyperlinks();
            print(`"Umm… I… don't have enough money…"<br><br>"What?! Then why did you order the drink?"<br><br>"Uhh… I was just curious, I guess…"<br><br>"But you can't just… this isn't a charity! My business is on the brink of collapse as is, without thieves stealing from me! Although… maybe it <em>is</em> the reason why it's failing. Hmm. This place isn't short on thieves, after all. Maybe it's <em>not</em> my math skills that are to blame…"<br><br>You slowly begin to retreat, hoping to make a dash for it while the bear is lost in thought.<br><br>But then…`);
            setTimer(`2`, function() {
                print(`…you begin to feel dizzy…`);
                setTimer(`2`, function() {
                    print(`…you collapse onto the floor…`);
                    setTimer(`2`, function() {
                        print(`…you close your eyes…`);
                        setTimer(`2`, function() {
                            print(`…and when you open them again, you find that you are the size of… uhh… a cockroach? It's so disorientating. Everything is so… so huge! And Monty is… like a furry <em>mountain</em>! A furry mountain who's glaring down at you disapprovingly, and reaching for you with his massive paw. <br><br>The paw grabs you tight, and it does not budge, no matter how much you wiggle and squirm.<br><br>"Put me dowwwwwn!"<br><br>"Sorry, but I don't think I will. I'm tired of being trodden on all the time. I'll show all you pesky thieves what happens when you mess with Monty the bear!"<br><br>Monty tilts his head back and opens his maw, revealing a dark, purplish cavern lined with strong, yellowish teeth, every square inch of its surface covered in yucky bear drool, some strands of which are stretching from his tongue to the roof of his mouth. You find yourself held in-between two of his sharp, pointy claws, dangling over the abyss, hot bear breath surfacing from its dark, treacherous depths. <br><br>"W-Wait, can't we talk about th-AAAAH!"<br><br>You find yourself falling down, down, down towards the slobbering maw, past the pointy teeth, and plop face-first onto his soft tongue with a loud splat. The bear's mouth closes behind you, instantly taking away the slim chance of escape.<br><br>The bear wastes no time; as soon as his mouth closes, he lifts his tongue, and you find yourself pressed between his tongue and the roof of his mouth. Monty rubs his tongue back and forth against your body as he tastes you, forcing thick bear spit into your mouth and your nose, making you gag and gasp for air, but rancid bear breath is the only air you get. <br><br>But this becomes the least of your problems as the force his tongue exerts on your small, fragile body becomes unbearable, threatening to crush you. With how slippery his tongue is, you know you might just be able to slide down into his throat if you try hard enough, but… what good would that do? It would seem there's nothing you can do to save yourself; you can only choose which <em>death</em> you prefer.`);
                            link(`Stay put`, function() {
                                print(`Resigning to your fate, you relax, letting the bear do what he wills with you.<br><br>"Mmm," Monty mumbles as you pop in his mouth like a grape, your juices spilling out onto his tongue and mixing with bear spit. "I always wondered why micros taste so much better than normal-sized prey."<br><br>With a soft <em>gulp</em>, Monty sends you down to your final resting place.`);
                                if (pl.disposalOn) print(`With the sheer amount of food that was in the bear's belly at the time, your processed remains - or, rather, what was left of them - could never be identified in the large log he produces at the end of the day, not even with the world's most advanced science. You were lost, erased from existence, before you even left the bear.<br><br>But, to add insult to injury, the log you now form a part of is dropped onto a huge pile of other logs just like you, many of them formed of other unfortunate preythings like yourself, as the bear does his business in an outhouse. Lost deep underground in this pile of processed preythings, not even God himself could find you. If he had any reason to look for you, that is.`);
                                pl.killGame("bear nom micro");
                            });
                            link(`Go down his throat`, function() {
                                teleport(`4,4,8`);
                            });
                        });
                    });
                });
            });
        });
    };

    pl.wolfComes = function() {
        print(`Suddenly, you hear the revving of an engine behind you. You turn around to see a wolf on a motorcycle. What a rare sight! From what you've seen, everyone on this island commutes either by foot, or - if they're feeling particularly adventurous - by bicycle. The noise is not exactly welcomed, if the dirty looks people are giving the wolf are anything to go by.<br><br>The wolf himself is wearing an unzipped leather jacket and a golden chain around his neck, clearly going for that "badass" look, though his long, gray fur looks clean and brushed, which seems to go <em>against</em> that look as far as you are concerned, but what do <em>you</em> know…<br><br>Those are the <em>only</em> things he's wearing, though, and you can see why; his body is well-toned, and he seems proud of it, eager to show it off, if his confident stride is anything to go by.<br><br>With his motorcycle safely parked, the wolf approaches you with a smug grin on his face. "Hello, pet. Ready to begin your new life of serving a hot wolf~?"`);
        link(`Yes`, function() {
            nukeHyperlinks();
            print(`"There's a good pet. Name's Axel. But you shall call me Master. Understood?"<br><br>"Y-Yes…"<br><br>"Yes, <em>what</em>?"<br><br>"Yes, Master."<br><br>The wolf nods in approval, then turns to Monty the bear. "Gimme a pint of ginger beer."<br><br>As the bear prepares his drink, Axel sits on one of the stools by the bar. It was clearly intended for creatures bigger than him - bears, probably - and so his paws are forced to dangle in the air instead of touching solid ground. You get that Monty probably doesn't have the money to get stools of different sizes, but… how is he gonna <em>make</em> money when barely anyone can even <em>sit</em> here?! It's just one of those unfortunate loops, isn't it…`);
            pl.footstool();
        });
        link(`No`, function() {
            nukeHyperlinks();
            print(`"A joker, huh? Good. I could use a jester. Name's Axel. But you shall call me Master."<br><br>Axel turns to Monty the bear. "Gimme a pint of ginger beer."<br><br>As the bear prepares his drink, Axel sits on one of the stools by the bar. It was clearly intended for creatures bigger than him - bears, probably - and so his paws are forced to dangle in the air instead of touching solid ground. You get that Monty probably doesn't have the money to get stools of different sizes, but… how is he gonna <em>make</em> money when barely anyone can even <em>sit</em> here?! It's just one of those unfortunate loops, isn't it…<br><br>"And just in case you <em>weren't</em> joking, well, tough luck. You gave yourself to me as soon as you dialed that number. You're mine now, sweetheart, whether you like it or not. And don't even <em>think</em> about escaping; there's plenty of space on me for a squirrel, if you catch my drift~"`);
            pl.footstool();
        });
    };

    pl.wolfSmoosh = function() {
        print(`Suddenly, you hear the revving of an engine behind you. You turn around to see a wolf on a motorcycle. What a rare sight! From what you've seen, everyone on this island commutes either by foot, or - if they're feeling particularly adventurous - by bicycle. The noise is not exactly welcomed, if the dirty looks people are giving the wolf are anything to go by.<br><br>The wolf himself is wearing an unzipped leather jacket and a golden chain around his neck, clearly going for that "badass" look, though his long, gray fur looks clean and brushed, which seems to go <em>against</em> that look as far as you are concerned, but what do <em>you</em> know…<br><br>Those are the <em>only</em> things he's wearing, though, and you can see why; his body is well-toned, and he seems proud of it, eager to show it off, if his confident stride is anything to go by.<br><br>"Sup, Monty," he says as he approaches the bar, not even noticing the tiny squirrel frantically avoiding his feet. You breathe a sigh of relief when you finally reach one of the bar stools and hide under it.<br><br>"Oh. Axel. Hi. Umm… what can I get you?"<br><br>"You haven't seen a squirrel around here, huh?"<br><br>"Squirrel? Umm… there was a squirrel here a while ago, yeah. Dunno where ${pl.word2} went, though."<br><br>"Tsk. Well, that's great, ain't it. Now I'm gonna have to hunt them down. Get me a pint of ginger beer, will ya?"<br><br>"Coming right up."<br><br>Axel sits on the bar stool you're hiding under, his footpaws dangling right in front of you.`);
        link(`Try to get his attention`, function() {
            nukeHyperlinks();
            print(`You get out from under the barstool.<br><br>"Hey! Axel! Over here!" you shout, waving your arms about.<br><br>He doesn't seem to hear you, though; he guzzles down his drink in one go, then burps unashamedly, not even bothering to cover his mouth. "I've had better," he says to the bear.<br><br>"I'm <em>trying</em>," the bear grumbles under his breath. Whether Axel heard him or not is anyone's guess, though, as the wolf's attention shifts… to <em>you</em>.<br><br>"Ugh. Bug. Gross fuckers; always get in my fur and my teeth when I ride. The world would be better off without 'em."<br><br>To your horror, the wolf twists around on the stool, and you suddenly find one of his giant footpaws hovering over you, which he promptly brings down onto your tiny form. It squeezes you hard, and you begin to sweat from the warmth of the wolf pads pressing against you. Luckily, though, they don't press hard enough to actually <em>squish</em> you…`);
            pl.choices();
        });
        link(`Hug his footpaws`, function() {
            nukeHyperlinks();
            print(`Unable to help yourself, you hug one of the paws dangling in front of you, pressing your face into the spongy wolf pads, and gratefully inhaling their scent.<br><br>"What the…"<br><br>Axel shakes his paw, launching you into the air. When you land on the ground with a thud, you find yourself no longer protected by the stool.<br><br>"Ugh. Bug. Gross fuckers; always get in my teeth when I ride. Now they want my <em>paws</em>, too? Well, <em>that</em> you can have," Axel says with a malicious grin. "I'll give you all the paws you want. More than you can handle, in fact."<br><br>The wolf twists around on the stool, and you suddenly find one of his giant footpaws hovering over you, which he promptly brings down onto your tiny form. It squeezes you hard, and you begin to sweat from the warmth of the wolf pads pressing against you. Luckily, though, they don't press hard enough to actually <em>squish</em> you…`);
            pl.choices();
        });
    };

    pl.choices = function() {
        link(`Struggle`, function() {
            nukeHyperlinks();
            print(`You struggle frantically under Axel's paw, not feeling like becoming a red stain on someone's foot. When that doesn't get you anywhere, you <em>bite</em> him.<br><br>"Ack!" The paw comes up again, and you breathe in the cool, fresh air gratefully. Once you calm down, you open your eyes again to see that Axel is no longer sitting down on the stool; he's standing up now, glaring down at you, his arms crossed. "Urgh. Is <em>that</em> all you've got?" He spits on you. Being so small, however, it's less of an insult, and more of a deadly attack as you struggle to wipe the slimy liquid off your face so you can <em>breathe</em> again!<br><br>Axel once again lifts his footpaw, but you're too caught up in his spit to do anything; the paw comes down on you hard, squeezing any remaining air out of your lungs. This time, however, it doesn't stop here; no longer sitting down, the wolf is able to transfer <em>all</em> of his weight onto you, which is far too much for your fragile body to handle.<br><br>Axel grins as he feels a satisfying <em>pop</em> under his foot, then he twists it back and forth, left and right, just to make sure not the tiniest sliver of life remains in your pulverized body. When he lifts his paw up again, you are indeed nothing more than a red stain on his paw pad. "Pathetic creatures," he mumbles, shaking his head, before twisting on his heel and walking back towards his motorcycle, your smooshed self decorating the underside of his footpaw for the rest of the day, until he takes a shower in the evening and washes you off.`);
            pl.killGame("wolf smoosh");
        });
        link(`Lick his footpaws`, function() {
            nukeHyperlinks();
            print(`Blushing profusely, you lick Axel's paw. It tastes salty, and a little sour, and you <em>love</em> it. It's a big, sexy wolf paw, after all - how could you not?!<br><br>"What-" To your dismay, the paw goes back up again, and you find yourself having to breathe cool, bland air instead of the warm, soothing musk of wolf paws. Axel gets up from the stool and stands over you, his arms crossed. "Urgh. What <em>was</em> that?! Bugs <em>disgust</em> me…"<br><br>Axel once again lifts his footpaw, but you don't even <em>try</em> to escape, instead just staring up in awe at the giant paw that's about to end your life. Such power, such strength - it's an honor to be crushed under it! You sigh with pleasure as you are once again pressed firmly under wolf paw, This time, however, it doesn't stop here; no longer sitting down, the wolf is able to transfer <em>all</em> of his weight onto you, which is far too much for your fragile body to handle.<br><br>Axel grins as he feels a satisfying <em>pop</em> under his foot, then he twists it back and forth, left and right, just to make sure not the tiniest sliver of life remains in your pulverized body. When he lifts his paw up again, you are indeed nothing more than a red stain on his paw pad. "Pathetic creatures," he mumbles, shaking his head, before twisting on his heel and walking back towards his motorcycle, your smooshed self decorating the underside of his footpaw for the rest of the day, until he takes a shower in the evening and washes you off.`);
            pl.killGame("wolf smoosh");
        });
    };

    pl.footstool = function() {
        link(`Offer yourself as a footstool`, function() {
            nukeHyperlinks();
            print(`Without saying a word, you crawl under Axel's dangling footpaws and curl up into a ball. Axel grins and rests them on top of you. "Now, that's what I call a pet! Previous one was completely clueless."<br><br>Once he guzzles down his drink, he jumps off the stool and orders you to follow him.<br><br>"Sit behind me and hold on tight! This baby's <em>fast</em>!"<br><br>Sitting behind the wolf on the leathery seat, you hold onto him for dear life as he speeds across the island, your face buried in his soft fur, wind lashing past you. It's only a moment before things calm down again, however, and the motorcycle comes to a stop.<br><br>"We're here."`);
            link(`Continue`, function() {
                teleport(`-7,2,10`);
            });
        });
        link(`Just wait`, function() {
            nukeHyperlinks();
            print(`You decide to just wait, standing next to the wolf awkwardly. <br><br>"Well, don't just stand there! Damn, y'all preys are so dim." He shakes his head disapprovingly, the turns his attention to the drink Monty just placed in front of him. He guzzles it down, then lets out a loud, unapologetic belch and hops off the stool.<br><br>"I've gotta teach you how to be a pet. Come along, now." You follow him to his motorcycle. "Sit behind me and hold on tight! This baby's <em>fast</em>!"<br><br>Sitting behind the wolf on the leathery seat, you hold onto him for dear life as he speeds across the island, your face buried in his soft fur, wind lashing past you. It's only a moment before things calm down again, however, and the motorcycle comes to a stop.<br><br>"We're here."`);
            link(`Continue`, function() {
                teleport(`-7,2,10`);
            });
        });
    }
}

definitions['5,4,10'] = function() {
    clearTimer();

    roomName(`Monty`);

    print(`You approach Monty. He's even more intimidating up close. Just look at the size of those paws!!!<br><br>You swallow nervously. These paws pose a real threat to you right now; you're completely exposed, and you bet the bear wouldn't even notice if he stepped on you. Fortunately, he's standing still… <em>for now</em>.`);

    if (pl.monCash === 0) {
        print(`You see some money on the ground.`);

        addRoomObjectAction(`money`, `take`, function() {
            removeRoomObject(`money`);
            print(`You take the money.<br><br>&gt;&gt; MONEY: +200 ASTLEYS`);
            pl.money += 200;
            pl.monCash++;
        });
    }

    addRoomObjectAction(`monty`, `poke`, function() {
        clearRoom();
        clearTimer();
        print(`You poke Monty's footpaw.<br><br>"Huh? Hey, no micros here, little fella!" The bear crouches, scooping you up with his paws. He then takes you back to the front of the bar, and gently plops you onto the ground. "Careful now. I could have stepped on you!"`);
        link(`Continue`, function() {
            teleport(`4,4,10`);
        });
    });

    setTimer(`15`, function() {
        clearConsole();
        print(`Suddenly, you hear a <em>clunk</em> as Monty puts down the glass he was polishing, which also happens to be the <em>last</em> one that needed polishing.<br><br>"Aww," you hear the bear mutter. "I was enjoying that. Oh, well. Time to go shopping!"<br><br>Your heart skips a beat as the bear twists on his heel, lifting his right footpaw off the ground…`);
        setTimer(`3`, function() {
            print(`…and brings it down right on top of you. You don't even get a chance to react; before your brain even registers what is happening, the bear's paw is a mere inch away from your face, so close that you can feel its warmth on your whiskers and see the intricate ridges on the black skin of his pawpads. <br><br>A split second later, you are no more; the bear's paw came down on you in full force, his weight flattening you instantly. Not a single bone in your body could resist his great weight. There was a loud crunch as his paw made you two-dimensional, but it was completely muffled between his pawpads and the soft earth. <br><br>As the bear walks off to go shopping for liqueurs, you find your lifeless self still stuck to his paw, getting stepped on over and over. While it's impossible to get any flatter than you already are, friction does its magic and, by the time the bear comes back to Monty's Bar, you are barely anything more than dust, strewn about all across the path he walked through, only a few sad particles of what was once <em>you</em> still clinging to his footpaw.`);
            pl.killGame("bear stomp");
        });
    });
}

definitions['0,0,2'] = function() {
    clearConsole();

    dom_scene.innerHTML += `<h2 style='text-align: center'>The White Room</h2>`;

    roomName(`White<br>Room`);

    if (pl.sex === "m") pl.word = "him";
    else pl.word = "her";
    if (pl.sex === "m") pl.word2 = "he";
    else pl.word2 = "she";
    if (pl.sex === "m") pl.word3 = "his";
    else pl.word3 = "her";

    if (pl.lives >= 2) {

        // START

        if (pl.death === "bear stomp")
            print(`The Doctor siiiiiiiiighs in frustration. "Really? Was ${pl.word2} <em>trying</em> to become squirrel purée? Promise me none of <em>you</em> will drink Microhol. If you don't have anyone to take care of you, it's a death wish!"<br><br>"We promise!" one of the squirrels watching the stream says. "I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "bear nom")
            print(`The Doctor siiiiiiiiighs in frustration. "Well, ${pl.word2} was either an idiot for messing with a <em>bear</em>, or horribly bad at math. I hope <em>you</em> lot can count your Astleys…"<br><br>"Of course we can!" one of the squirrels watching the stream says. "I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "bear nom micro")
            print(`The Doctor siiiiiiiiighs in frustration. "Drinking Microhol next to a grizzly bear without having enough money to pay for it, huh. If I didn't know any better, I'd think ${pl.word2} <em>wanted</em> to boil in bear guts…"<br><br>"But <em>we</em> certainly don't!" one of the squirrels watching the stream chitters. "I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "wolf smoosh")
            print(`The Doctor siiiiiiiiighs in frustration. "Signing up to be a wolf's pet? Drinking Microhol before meeting him? Dear oh dear, ${pl.word2} <em>yearned</em> to stain those wolf beans, huh."<br><br>"But <em>we</em> certainly don't!" one of the squirrels watching the stream chitters. "I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "fox nom")
            print(`The Doctor siiiiiiiiighs in frustration. "I never ever <em>ever</em> thought I'd see a squirrel willingly walk into a fox maw. That blasted fox must have used some trickery! Never trust foxes."<br><br>"But you can trust <em>us</em>!" one of the squirrels watching the stream says. "I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "jackal crunch")
            print(`"Ooh. Ouch. Oof," all the squirrels watching the stream say simultaneously, flinching at every crunch as they watch you get turned to mush in the jackal's maw.<br><br>The Doctor siiiiiiiiighs in frustration. "Well, ${pl.word2} tried."<br><br>"And we'll try even harder!" one of the squirrels watching the stream says. "Uhh… no pun intended. I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "jackal smoothie")
            print(`The Doctor siiiiiiiiighs in frustration. "Well, that just happened. I'll add 'getting blended into a protein shake' to my list of the worst ways to go."<br><br>"You have a list like that?" one of the squirrels watching the stream asks.<br><br>"Well… of course! But we're not here to talk about <em>me</em>. Who's going next? Any volunteers?"<br><br>"I'll go. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "jackal simp")
            print(`The Doctor siiiiiiiiighs in frustration. "Oh really, now. Here I am, thinking that this is the first guy I have ever encountered that makes me wanna <em>punch him in the face</em> as soon as he opens his mouth, and ${pl.word2} just waltzes in there and happily drops into his maw like it's the best thing ever. You squirrels…"<br><br>"We're not all like that!" one of the squirrels watching the stream says. "I'll go next. I can do a <em>much</em> better job!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "jackal nom")
            print(`The Doctor siiiiiiiiighs in frustration. "Well, that's just life. Those on top feasting on the little ones. No happy ending to be found here…"<br><br>"Oh, quit brooding," one of the squirrels watching the stream says. "I'll go next. I <em>will</em> bring us a happy ending! You'll see."<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "jackal stomp")
            print(`The Doctor siiiiiiiiighs in frustration. "Well, that's gross. I'd never let myself be humiliated like that. Squished underfoot. Ugh…"<br><br>"And neither would we!" one of the squirrels watching the stream says. "I'll go next. You won't see <em>me</em> getting turned into squirrel purée under someone's paw…"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "meerkat nom")
            print(`"That was hooooooooot~" one of the squirrels watching the stream says. <br><br>The Doctor siiiiiiiiighs in frustration. "No, it wasn't <em>hot</em>, it was a <em>disaster</em>."<br><br>"A hot, <em>gurgly</em> disaster," the squirrel replies, chuckling. "I'll go next. Don't worry, Doc - I won't be diving into any meerkat bellies."<br><br>"I sure hope so. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "meercum")
            print(`The Doctor siiiiiiiiighs in frustration. "You know, I used to think getting eaten was the worst and the most humiliating way to go. That's no longer the case…"<br><br>"Well, <em>I'm</em> not gonna let some dumb desert rat turn me into jizz!" one of the squirrels watching the stream says, getting up. "I'll go next. I won't disappoint ya, Doc!"<br><br>"I sure hope so. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "possum simp")
            print(`The Doctor siiiiiiiiighs in frustration. "Seriously? Wanting to get eaten is one thing. It's weird, but… I guess I can somewhat wrap my head around it. But wanting to be eaten by a greasy… ratty… trash varmint?! Who would want that?! I mean-"<br><br>The Doctor stops as he notices one of the squirrels that was watching the stream touching themselves. He sighs again. "Well, <em>you're</em> certainly not going next…" <br><br>"I'll go!" a different squirrel says, getting up. "I'll go next. Don't worry, Doc - I'm not planning on diving into any possum guts."<br><br>"Good. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "possum nom")
            print(`The Doctor siiiiiiiiighs in frustration. "Ugh. Gross. If I had to be eaten, I'd much rather the pred be a fox or something, not a greasy, lazy trash dweller…"<br><br>"As would I!" one of the squirrels watching the stream says, getting up. "I'll go next, Doc! I'll do a much better job than that possum snack!"<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "cat")
            print(`The Doctor siiiiiiiiighs in frustration. "Well, that's disturbing. Remember not to eat any pizzas while you're down there, guys…"<br><br>"I don't even like pizza," one of the squirrels watching the stream says, getting up. "I'll go next, Doc. I promise not to end up on pizzas all over town."<br><br>"Good good. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "wolf crunch")
            print(`The Doctor siiiiiiiiighs in frustration. "Well, that looked painful. But life goes on. Who wants to go next?"<br><br>"Nooooo!" one of the squirrels watching the stream exclaims in horror. "Why would you serve us to a wolf?! We were supposed to be getting the gem!"<br><br>"That's not what I meant," the Doctor replies, exasperated. "Who wants to go down there next and try getting the gem?"<br><br>"I'll go," says another one of the squirrels. <br><br>"Good good. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "dingo")
            print(`"Hmm. How curious," the Doctor says. "Knowledge absorption, huh. That snake sure meddles with strange things…"<br><br>"Lesson learned" one of the squirrels watching the says, getting up. "Never show people how smart you are. I'll go next, Doc. I won't fall for a trick like that."<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "snake")
            print(`"Well, that was a rather foolish move," the Doctor says thoughtfully. "Stealing in broad daylight…"<br><br>"Lesson learned," one of the squirrels watching the says, getting up. "No stealing from sneks. I'll go next, Doc. I'll be smarter."<br><br>"Jolly good. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else if (pl.death === "skunk")
            print(`"How embarrassing," the Doctor says with a tired sigh. "And all ${pl.word2} had to do was wait a few more seconds for the potion's effects to wear off."<br><br>"Lesson learned," one of the squirrels watching the says, getting up. "Patience good. I'll go next, Doc. I'll be nice and patient."<br><br>"Jolly good. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);
        else
            print(`The Doctor siiiiiiiiighs in frustration. "It would appear that the creator of this game forgot to write a post-death comment for this ending. If you're reading this, go slap him with a mackerel."<br><br>"In the meantime," one of the squirrels watching the stream says, getting up. "I'll go and continue the adventure, pretending this never happened."<br><br>"Very well. The teleporter should be up and running again. Just step through it when ready."<br><br>And that's precisely what you do, stepping through the portal as the new hero of this adventure.`);

        // END
        link(`Continue`, function() {
            clearConsole();
            dom_scene.innerHTML += `<h2 style='text-align: center'>The Isle of Zing</h2>`;
            teleport(`0,0,10`);
        });
    } else if (pl.lives === 1) {
        print(`"Noooooo!" the Doctor exclaims. "Not another one! Holy Mother of pecan pie, why do I always get such <em>idiots</em>?!"<br><br>You - the last squirrel left, who watched the demise of every single one of your peers - put your bag of popcorn aside and get up, yawning and stretching.<br><br>"You don't seem too perturbed," the Doctor remarks.<br><br>"Nah. I'll be just fine, Doc. Is the portal ready?"<br><br>"<em>Teleporter</em>," the Doctor corrects. "Yes, it's ready. Don't screw up. You are the last one left. Your fate is in your own paws now. Let's hope you don't end up like the others…"<br><br>"On it!"<br><br>You step through the portal as the new hero of this adventure. The <em>final</em> hero of this adventure.`);
        link(`Continue`, function() {
            clearConsole();
            dom_scene.innerHTML += `<h2 style='text-align: center'>The Isle of Zing</h2>`;
            teleport(`0,0,10`);
        });
    } else {
        print(`"Well, this is it," the Doctor says to himself. "My plans have once again been foiled by idiot squirrels. And I was so close. So, <em>so</em> close. Very well. Let them stew in guts, that's all they're good for. I will get my paws on you, my precious gem, one way or another. Just hang on a little longer. Papa's coming for you~"`);
        killGame();
    }
}

definitions['4,4,9'] = function() {
    clearConsole();

    pl.belli = 0;

    roomName(`Monty's<br>Stomach`);

    print(`You are in Monty's stomach. It's shifting and groaning around you, the thick, slimy slop you're swimming in bubbling slightly as it's broken down into nutrients for the bear.`);

    addRoomObjectAction(`stomach walls`, `attack`, function() {
        if (pl.belli === 0) print(`You kick and claw against the walls of your fleshy prison, but all it does is humiliate you even further, as the bear doesn't even feel it. No one could probably even tell you're in here from the outside…`);
        if (pl.belli === 1) print(`"Let. Me. Out. Of. Here!" you demand, punching the bear's gut from the inside with every word.<br><br><em>Burrrrrrp</em> is the only response you get.`);
        if (pl.belli === 2) print(`You pound against the stomach walls in defiance, but all you manage to achieve is lose your balance as the bear moves, causing you to splash face-first into all the slop, completely submerging yourself in the bear's previous meals, which get into your mouth and your nose and your ears. You cough and sputter as you resurface, gagging in disgust.`);
        pl.belli++;
        if (pl.belli === 3) pl.belli = 0;
    });

    if (pl.harsh) {
        setTimer(`20`, function() {
            print(`Monty's stomach is starting to get a little more active now, the muscles surrounding you contracting more powerfully. You have to watch out not to get your fingers or your tail stuck in-between any of the stomach folds, lest they get crushed…`);
            setTimer(`25`, function() {
                print(`Things are getting serious now; the bear's stomach is clearly unhappy that you're trying to avoid it, and is now permanently beginning to contract, the stomach walls getting closer and closer, eager to crush you into mush…`);
                setTimer(`25`, function() {
                    clearRoom();
                    print(`In the end, you never stop trying to resist getting turned into mush, as hopeless as your situation is. But no one can defy a bear's powerful digestive system. Sure enough, you soon find yourself squeezed tightly by powerful, merciless muscles, which knead and grind against you, crushing your bones and pulverizing your flesh. <br><br>You open your mouth to scream but, instead of sound coming <em>out</em>, disgusting slop floods <em>in</em> and makes its way down into your lungs. Despite your earlier determination, you let yourself go limp, just wanting for the suffering to be over, just wanting to be nothing more than minced meat already. Sure enough, that's exactly what you soon become; with nothing more to grind, it settles down to gurgle away at the now red-coloured slop and turn it into nutrients.`);
                    pl.end();
                });
                link(`Submit`, function() {
                    clearRoom();
                    nukeHyperlinks();
                    clearTimer();
                    print(`Sighing in resignation, you decide that it's better if you just give up rather than prolong your suffering. And so, you let yourself go limp, and immediately sink into all the slop, which turns a reddish colour as your limbs get caught in-between the folds of the bear's stomach and instantly get turned into minced meat by its powerful muscles. Soon, you indeed end up thoroughly mixed into all the slop, as if you were nothing more than bear food all along.`);
                    pl.end();
                });
            });
        });
    } else {
        setTimer(`20`, function() {
            print(`Monty's stomach is starting to get a little more active now, the muscles surrounding you contracting more powerfully. You have to watch out not to get your fingers or your tail stuck in-between any of the stomach folds, lest they get crushed…`);
            setTimer(`25`, function() {
                print(`Things are getting serious now; the bear's stomach is clearly unhappy that you're trying to avoid it, and is now permanently beginning to contract, the stomach walls getting closer and closer…`);
                setTimer(`25`, function() {
                    clearRoom();
                    print(`In the end, you never stop trying to resist getting turned into mush, as hopeless as your situation is. But no one can defy a bear's powerful digestive system. What happens next deep in the belly of the beast is anyone's guess, but you can bet it isn't pretty! No one would ever know though, as the bear's chubby belly would muffle any sounds coming from within, and your puny self doesn't form the tiniest of bulges on his stomach. Not like that bulge would last long, anyway; bears are always hungry, and so their stomachs waste no time in digesting their prey.`);
                    pl.end();
                });
                link(`Submit`, function() {
                    clearRoom();
                    nukeHyperlinks();
                    clearTimer();
                    print(`Sighing in resignation, you decide that it's better if you just give up rather than prolong your suffering. And so, you let yourself go limp, and immediately sink into all the slop, never to resurface again. <br><br>What happens next deep in the belly of the beast is anyone's guess, but you can bet it isn't pretty! No one would ever know though, as the bear's chubby belly would muffle any sounds coming from within, and your puny self doesn't form the tiniest of bulges on his stomach. Not like that bulge would last long, anyway; bears are always hungry, and so their stomachs waste no time in digesting their prey.`);
                    pl.end();
                });
            });
        });
    }

    pl.end = function() {
        if (pl.disposalOn) {
            print(`Monty finishes polishing his glasses, and then goes shopping for ingredients. As one would expect, on his way back he eats a lot of them, further diluting you in a sea of chewed-up food. You stew deep in his guts for the entire day as he runs the bar, more and more customers walking in as evening arrives. The bear can feel you wanting to come out an hour or so before closing time, but he's too busy. You'll have to wait. <br><br>And that's exactly what you do; you wait as more and more digested food joins you, making the bear more and more uncomfortable. As closing time arrives, the bear quickly shuts the place down and then rushes to a nearby outhouse, where he drops his load with a relieved sigh. You form a beautifully smooth, uniform log, the bear's digestive system having processed you well. No one would ever get to appreciate its beauty though, as it falls deep underground onto a pile of many, many other digested preythings, who would never see the light of day again, lying forgotten at the bottom of a random outhouse hole.`);
        }
        pl.killGame("bear nom");
    }
}

definitions['4,4,8'] = function() {
    roomName(`Monty's<br>Stomach`);
    print(`You're not about to just lie there as the bear crushes you to death! If you can extend your life by even the tiniest moment, you will fight for it!<br><br>And so, you muster all your strength, and force yourself towards the bear's throat. It's hard work, but, aided by the sea of spit surrounding you, you manage to slip into his throat. <br><br><em>GULP!</em><br><br>A look of confusion crosses the bear's face, who wasn't expecting to swallow you so soon. But then, he just shrugs and returns to polishing his glasses, already forgetting the tiny squirrel in his stomach, who has fallen face-first and with a loud splat into the contents of his stomach - a sea of slimy, chewed-up food and digestive juices. It's so thick that said squirrel is unable to stay on the surface, and instead sinks deep, deep into the sea of gunk, never to resurface again.`);
    if (pl.disposalOn) print(`With the sheer amount of food that was in the bear's belly at the time, your processed remains - or, rather, what was left of them - could never be identified in the large log he produces at the end of the day, not even with the world's most advanced science. You were lost, erased from existence, before you even left the bear.<br><br>But, to add insult to injury, the log you now form a part of is dropped onto a huge pile of other logs just like you, many of them formed of other unfortunate preythings like yourself, as the bear does his business in an outhouse. Lost deep underground in this pile of processed preythings, not even God himself could find you. If he had any reason to look for you, that is.`);
    pl.killGame("bear nom micro");
}

definitions['-2,3,10'] = function() {
    roomName(`Bulletin<br>Board`);
    print(`You are standing at the edge of the beach. It's mostly empty, with the exception of a few patrons sunbathing and splashing about in the glimmering ocean.<br><br>There is a bulletin board here.`);
    addExits(northwest, southeast);

    addRoomObjectAction(`bulletin board`, `look at`, function() {
        if (pl.bulletin1Done === false) print(`"Strong, handsome, badass wolf looking for a submissive, full-time pet. Prey species only. Be good, and I will keep you well-fed and safe from all other predators. Cross me, and you'll answer to my teeth. You better hurry! A sexy wolf like me won't stay on the market for long. Your new Master is waiting~"<br><br>Hmm. That wolf must be pretty well off, to be able to afford a pet. Maybe you could exploit this somehow…<br><br>That's the only ad on here. At the bottom is a phone number: 'iamyours'`);
        else print(`"Strong, handsome, cool wolf looking for a submissive, full-time pet. Prey species only. Be good, and I will keep you well-fed and safe from all other predators. Cross me, and you'll answer to my stomach. You better hurry! A sexy wolf like me won't stay on the market for long. Your new Master is waiting~"<br><br>Hmm. That wolf must be pretty well off, to be able to afford a pet. Maybe you could exploit this somehow…<br><br>That's the only ad on here. Apart from the one you put up yourself, that is. At the bottom is a phone number: 'iamyours'`);
        pl.wolfNumFound = true;
    });

    // Monty Quest
    if (pl.posters >= 1 && pl.bulletin1Done === false) {
        if (isInInventory("poster #1")) pl.bulletinFun(1, 1);
        if (isInInventory("poster #2")) pl.bulletinFun(2, 1);
        if (isInInventory("poster #3")) pl.bulletinFun(3, 1);
    }
}

definitions['-3,4,10'] = function() {
    roomName(`Seaside<br>Path`);
    print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.`);
    addExits(southeast, west);

    removeInventoryObjectAction(`poster #1`, `put up`);
    removeInventoryObjectAction(`poster #2`, `put up`);
    removeInventoryObjectAction(`poster #3`, `put up`);

    pl.bench = 0;
}

definitions['-4,4,10'] = function() {
    roomName(`Bench`);
    addExits(east, west);

    if (!pl.foxFriend) {

        if (!pl.foxMet) {

            print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.<br><br>There is also an empty bench here.`);

            addRoomObjectAction(`bench`, `sit down`, function() {
                if (pl.bench === 0) {
                    print(`You sit down on the bench with a contented sigh. It feels good to rest, especially with the big, blue ocean right in front of you. It's so majestic. Just looking at it reminds you of how insignificant you are in the grand scheme of things, how vast the world is out there.<br><br>But, alas, you can't sit and daydream here all day - you've got things to do! So you get up, ready to continue on your quest.`);
                }
                if (pl.bench === 1) {
                    print(`On second thought…<br><br>You once again sit down on the bench and relax. So what if you waste a few moments - life is all about having fun! If all you ever do is rush from one place to the next, are you even living?!<br><br>Eventually, though, you once again get up. After all, if all you ever do is sit on a bench, you're not really living either, are you…`);
                }
                if (pl.bench === 2) {
                    print(`Ahhhhhhhhh. This is the life. You <em>are</em> starting to get a little sleepy, though, having sat on this bench for so long now…`);
                }
                if (pl.bench === 3) {
                    clearRoom();
                    clearExits();
                    print(`Oh, who caaaaaares.<br><br>You once again plop your fluffy ass on the bench. You yawn, and your eyes start to get droopy. You really shouldn't be sleeping now, but… but…<br><br>"Zzzzzzzzzz."`);
                    setTimer(`4`, function() {
                        print(`"Zzzzzz. Sea yotes. Zzzzzz."`);
                        setTimer(`4`, function() {
                            print(`"Nooo, there's no better GPU than an apple pie. It will run any game in existence. Zzzzzz."`);
                            setTimer(`4`, function() {
                                print(`"I wonder if you can eat clouds. Zzzzzz."`);
                                setTimer(`4`, function() {
                                    print(`You wake up some time later to find a fox sitting next to you.<br><br>"Ack!"<br><br>"Hello there," the fox says, his voice soft and gentle. "Sorry, didn't mean to startle you. It's just my favourite spot, and you don't take much space on this bench, heh."<br><br>Having calmed down, you sit up and take in the vulpine before you. He's wearing a grey shirt with a quote on it, which says: "Never let it be said that to dream is a waste of one's time, for dreams are our realities in waiting."<br><br>Apart from the shirt, he's wearing nothing else. Well, apart from some headphones. Your sensitive ears can pick up some gentle music coming from them. The fox is also reading a book, titled "Greenwall".`);
                                    pl.foxTalk();
                                });
                            });
                        });
                    });
                }
                pl.bench++;
            });

        } else {

            print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.<br><br>There is a bench here, with the fox still sitting on it and reading a book.`);

            addRoomObjectAction(`fox`, `talk to`, function() {
                clearRoom();
                clearExits();
                print(`You approach the fox. He looks up from his book, and uncertainly takes his headphones off as you make eye contact.`);
                pl.foxTalk();
            });

        }

    } else {

        print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.<br><br>There is an empty bench here.`);

        addRoomObjectAction(`bench`, `sit down`, function() {
            print(`Are you kidding me right now?! You spent way too much time on this bench already.`);
        });

    }

    // Talking with foxy :D
    pl.foxTalk = function() {
        link(`Introduce yourself`, function() {
            nukeHyperlinks();
            if (pl.foxMet) {
                print(`"Hello. I'm ${pl.name}."<br><br>"I'm Liam," the fox replies. "Nice to meet ya! I thought I upset ya earlier, heh."<br><br>"No, not at all. Can I sit down?"<br><br>"Of course! It's a public bench, after all! I didn't ask <em>you</em> if I could sit down, heh. Though you <em>were</em> sleeping, so that would have been difficult. Come!" He pats the empty space next to him encouragingly.`);
                pl.phrase = "Sit down";
            } else {
                print(`"Hello. I'm ${pl.name}."<br><br>"I'm Liam," the fox replies. "Nice to meet ya!"`);
                pl.phrase = "Make small talk";
            }
            link(pl.phrase, function() {
                nukeHyperlinks();
                print(`"What are you reading?" you ask, in an attempt to make small talk.<br><br>"Greenwall," the fox replies. "I checked it out of the library just yesterday. It's not often you find a book written by mice! It's fascinating, to see the world from the perspective of your foo-"<br><br>The fox chokes on the word as he realizes his mistake. "…from the perspective of another creature."`);
                link(`&quot;You were gonna say 'food'…&quot;`, function() {
                    nukeHyperlinks();
                    print(`"You were gonna say 'food', weren't you…"<br><br>The fox grins at you sheepishly. "Weeeeeeeeell, yeah. Sorry. It's the truth, though. Foxes eat mice. It's the natural order of things. You squirrels eat mice too, don't you?"<br><br>"Umm… we won't go out of our way to do that, but… yeah, if we're hungry and the opportunity presents itself, I suppose we will…"<br><br>"Heh. Poor mice. <em>Everyone</em> wants to eat them! I probably wouldn't be saying that if I was a mouse myself, but… it sounds like a thrilling life, don't you think? <em>Exhilarating</em>. Danger lurking behind every corner!"`);
                    link(`&quot;I think you're just bored…&quot;`, function() {
                        nukeHyperlinks();
                        print(`"I think you're just bored," you respond. <br><br>The fox chuckles. "Yep. You hit the nail on the head. I gotta do something interesting with my life. I just don't know what. And when I <em>do</em> make some plans, I still end up just sitting with a book somewhere, heh."<br><br>You sit with the fox for the next ten minutes or so, just chatting and enjoying the sunshine, until there is a loud beeping noise. The fox looks at a watch on his arm, which you haven't noticed before. "Oh my!" he says, his eyes wide. "It's that late already?! I've gotta go! Umm… it's been nice chatting with you, ${pl.name}. Here, have my number. Gimme a call if you ever wanna hang out, okay?"<br><br>The fox gives you his number - which is 'foxyfren' - then runs off.`);
                        pl.foxFriend = true;
                        link(`Continue`, function() {
                            teleport(`-4,4,10`);
                        });
                    });
                    link(`&quot;Everyone loves to eat <em>squirrels</em>, too&quot;`, function() {
                        nukeHyperlinks();
                        print(`"Everyone loves to eat <em>squirrels</em>, too," you reply.<br><br>"Ehehe. Well, you <em>are</em> related to mice. It's not that surprising, I suppose!"<br><br>He subconsciously licks his lips as he says that.<br><br>"<em>You</em> seem to love eating them too," you say, crossing your arms.<br><br>"Uhh…" He drops his gaze abashedly. "Maybe a little." He thinks intently for a moment before continuing: "Oh, alright. I'm not a good liar. Honestly, a plump squirrel is my favourite food in the world. You've no idea how delicious you are~"`);
                        link(`&quot;<em>I'm</em> plump~…&quot;`, function() {
                            nukeHyperlinks();
                            print(`"<em>I'm</em> plump~" you reply, grinning mischievously at the fox.<br><br>"Uhh…" The fox's stomach growls. After a moment of awkward silence, you both laugh. <br><br>"I don't know what you're playing at," the fox finally says, "but you better stop, silly! It might be illegal to eat prey within the town's perimeter, but there's only so much self-control us preds can muster, you know. If you keep teasing me, I might just gobble you up."<br><br>He sticks his tongue out at you playfully.`);
                            link(`Ask him to eat you`, function() {
                                nukeHyperlinks();
                                print(`"Well… but what if I <em>want</em> you to eat me?"<br><br>The fox puts his book down and just stares at you, his head tilted to the side, trying to decipher if you mean it, or if you're playing some bizarre game with him. "Hmm. And why would you want that?"<br><br>"Umm… because you're cute?"<br><br>The fox laughs, not unkindly. <br><br>"Cute enough to <em>die</em> for~?"<br><br>You nod sheepishly. Liam leans towards you, then gently grabs your head and pulls it towards him. His lips part and a long, wet, pink tongue lolls out from in-between them, which he slowly drags across your face. You blush profusely as the warm, soft tongue makes contact with your face, leaving a trail of slimy fox drool in its wake. You can feel the fox's warm breath on your whiskers, which smells faintly of long-gone mint chocolate. <br><br>"Y-Yes," you finally respond, staring at him dreamily as he withdraws. <br><br>He hugs you. "I mean, if that's-"<br><br>Suddenly, there is a loud beeping noise. The fox looks at a watch on his arm, which you haven't noticed before. "Oh my!" he says, his eyes wide. "It's that late already?! I've gotta go! Umm… why don't I give you my number. If, after you cool down a little, you still wanna become chub for this silly fox, well… all you gotta do is call, little snack."<br><br>The fox winks at you playfully, then gives you his number - which is 'foxyfren' - and runs off.`);
                                pl.foxFriend = true;
                                pl.foxHorni = true;
                                link(`Continue`, function() {
                                    teleport(`-4,4,10`);
                                });
                            });
                            link(`Excuse yourself`, function() {
                                nukeHyperlinks();
                                print(`"Well, I better get going, then! Better not tease the hungry fox!"<br><br>Liam chuckles. "Absolutely. And <em>I</em> might have to go grab a snack now, thanks to a certain naughty squirrel! But it's been nice chatting with you, ${pl.name}. Umm… here, have my number. Gimme a call if you ever wanna hang out, okay?"<br><br>The fox gives you his number - which is 'foxyfren' - then walks off to find something to eat. Or some<em>one</em>~`);
                                pl.foxFriend = true;
                                link(`Continue`, function() {
                                    teleport(`-4,4,10`);
                                });
                            });
                        });
                        link(`&quot;It's a good thing there's a no-hunting rule here, then!&quot;`, function() {
                            nukeHyperlinks();
                            print(`"It's a good thing there's a no-hunting rule here, then!"<br><br>"There is indeed, yes. But it's not that simple, you know. Some of us have more self-control than others. I happen to have a lot of it, but if a cheeky squirrel keeps teasing me, I might just lose it!" He sticks his tongue out at you playfully. "Maaaan, all this talking with food - I mean, a <em>squirrel</em> - sure made me hungry. I think I might go grab a snack. But it's been nice chatting with you, ${pl.name}. Umm… here, have my number. Gimme a call if you ever wanna hang out, okay?"<br><br>The fox gives you his number - which is 'foxyfren' - then walks off to find something to eat. Or some<em>one</em>~`);
                            pl.foxFriend = true;
                            link(`Continue`, function() {
                                teleport(`-4,4,10`);
                            });
                        });
                    });
                });
                link(`&quot;You read any other ones?&quot;`, function() {
                    nukeHyperlinks();
                    print(`"You read any other ones?"<br><br>"Oh, yeah. They're all the same - they portray foxes as these evil, soulless monsters, who only ever think about killing, and food, and killing for food. I don't like it. But I guess I can see their point of view. That's what fascinates me about these books - I love seeing things from different perspectives. It keeps your mind open!"<br><br>You sit with the fox for the next ten minutes or so, just chatting and enjoying the sunshine, until there is a loud beeping noise. The fox looks at a watch on his arm, which you haven't noticed before. "Oh my!" he says, his eyes wide. "It's that late already?! I've gotta go! Umm… it's been nice chatting with you, ${pl.name}. Here, have my number. Gimme a call if you ever wanna hang out, okay?"<br><br>The fox gives you his number - which is 'foxyfren' - then runs off.`);
                    pl.foxFriend = true;
                    link(`Continue`, function() {
                        teleport(`-4,4,10`);
                    });
                });
            });
        });
        if (!pl.foxMet) {
            link(`Excuse yourself`, function() {
                nukeHyperlinks();
                print(`"Sorry, I… uhh… I need to go. I fell asleep by accident…"<br><br>"Hehe. No worries, friend. Stay safe!"<br><br>With that, the fox returns to reading.`);
                pl.foxMet = true;
                link(`Continue`, function() {
                    teleport(`-4,4,10`);
                });
            });
        }
    }
}

definitions['-5,4,10'] = function() {
    roomName(`Seaside<br>Path`);
    print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.`);
    addExits(east, south);

    pl.bench = 0;
}

definitions['4,3,10'] = function() {
    roomName(`Path`);

    if (!pl.micro) {
        print(`You are walking along a path.`);
        addExits(northwest, east);
    } else pl.crow();
}

definitions['5,3,10'] = function() {
    roomName(`Path`);
    print(`You are walking along a path.<br><br>Go NORTHEAST or WEST to continue along the path. Or, you can go SOUTHEAST onto Cozy Street.`);
    addExits(northeast, west, southeast);
}

definitions['6,4,10'] = function() {
    roomName(`Seaside<br>Path`);
    print(`You are walking along a sandy, seaside path. There is a railing here to prevent people from accidentally falling into the crashing waves.<br><br>To the west is the back of an outdoor bar. You can go around it by going SOUTHWEST. To the EAST is a steep path leading up to the cliffs.`);
    addExits(southwest, east);
}

definitions['6,2,10'] = function() {
    roomName(`Cozy<br>Street`);

    print(`You are on Cosy Street, a rather standard, ordinary-looking residential street. There's quite a few people walking about, but they don't seem to pay much attention to you.<br><br>To the SOUTHWEST, you see a cinema.`);

    addExits(southeast, southwest);

    if (isInInventory(`cleaning supplies`) || isInInventory(`janitor's key`)) {
        addFakeExits([northwest], function() {
            print(`You don't feel like prancing around town in your janitor's uniform…`);
        });
    } else {
        addExits(northwest);
    }
}

definitions['7,1,10'] = function() {
    roomName(`Cozy<br>Street`);

    print(`You are on Cosy Street, a rather standard, ordinary-looking residential street. There's quite a few people walking about, but they don't seem to pay much attention to you.`);

    addExits(northwest, southeast);

    if (isInInventory(`cleaning supplies`) || isInInventory(`janitor's key`)) {
        addFakeExits([south], function() {
            print(`You don't feel like prancing around town in your janitor's uniform…`);
        });
    } else {
        addExits(south);
    }
}

definitions['8,0,10'] = function() {
    roomName(`Phone<br>Booth`);

    print(`You are on Cosy Street, a rather standard, ordinary-looking residential street. There's quite a few people walking about, but they don't seem to pay much attention to you.<br><br>There is a phone booth here.`);

    addExits(northwest);

    addRoomObjectAction(`phone booth`, `use`, function() {
        if (pl.money < 20) print(`You don't have enough money. A phone call costs 20 Astleys.`);
        else {
            print(`Make a phone call for 20 Astleys?`);
            link(`Make phone call`, function() {
                nukeHyperlinks();
                disableInteraction();
                pl.money -= 20;
                pl.phoneNumber = prompt(`Please enter below the number you wish to dial...`);
                if (pl.phoneNumber === `36993736`) {
                    pl.foxCall();
                } else if (pl.phoneNumber === `42696877`) {
                    pl.wolfCall();
                } else if (pl.phoneNumber === `92683674`) {
                    pl.rickRoll();
                } else if (pl.phoneNumber === `35673547`) {
                    pl.gurgles();
                } else {
                    print(`"Sorry, you have dialed an incorrect number. Please insert another 20 Astleys and try again."<br><br>"What?! What a rip-off!"<br><br>"Phone booths don't run on sunshine, sweetheart! We need the money. Deal with it."<br><br>"Wait, wha-"<br><br>The line disconnects.<br><br>>&gt; MONEY: -20 ASTLEYS`);
                    enableInteraction();
                }
            });
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pl.foxCall = function() {
        if (pl.foxFriend === false || pl.foxCalled !== "no") {
            print(`You ring 36993736, but nobody answers.<br><br>&gt;&gt; MONEY: -20 ASTLEYS`);
            enableInteraction();
        } else {
            if (pl.foxHorni === true) {
                print(`You call 36993736.<br><br>"Hello?" The fox's gentle voice is like music to your ears.<br><br>"Umm… hi, Liam. It's ${pl.name}."<br><br>"Oh, hey! Didn't expect ya to call so soon! Don't tell me you still wanna be fox chub~?"`);
                link(`&quot;I do…&quot;`, function() {
                    pl.foxCalled = "food";
                    nukeHyperlinks();
                    print(`"Is that so? Well, I always have space for a <em>squirrel</em>, heh. I'm chilling up on the cliffs. Come here, ya sweet little nut-nibbler, and foxy will gurgle you up good~"<br><br>>&gt; MONEY: -20 ASTLEYS`);
                    enableInteraction();
                });
                link(`&quot;Nah, just wanna hang out…&quot;`, function() {
                    pl.foxCalled = "normal";
                    nukeHyperlinks();
                    print(`"Heh. See? You just needed to cool down a little. You've gotta learn some self-control! Can't willingly go sliding into people's guts just because you're a little horny! Well, I mean… you <em>can</em>. You'd certainly make a fox very happy! But you'd probably get a dose of reality as soon as you reached the stomach, heh. Anyway, I'm chilling up on the cliffs. Come hang out!"<br><br>>&gt; MONEY: -20 ASTLEYS`);
                    enableInteraction();
                });
            } else {
                pl.foxCalled = "normal";
                nukeHyperlinks();
                print(`You call 36993736.<br><br>"Hello?" The fox's gentle voice is like music to your ears.<br><br>"Umm… hi, Liam. It's ${pl.name}."<br><br>"Oh, hey! Didn't expect ya to call so soon! Wanna hang out? I'm chilling up on the cliffs. Come!"<br><br>>&gt; MONEY: -20 ASTLEYS`);
                enableInteraction();
            }
        }
    };

    pl.wolfCall = function() {
        if (pl.wolfCalled === true || pl.wolfNumFound === false) {
            print(`You ring 42696877, but nobody answers.<br><br>&gt;&gt; MONEY: -20 ASTLEYS`);
            enableInteraction();
        } else {
            pl.wolfCalled = true;
            print(`You call 42696877.<br><br>The line opens to the sound of… muffled protests? "Hello there, new pet," a gruff voice says. "Perfect timing! I'm just about to deal with my <em>current</em> traitorous pet. Wait for me at Monty's. I'll come get ya."<br><br>Before you can get a word in, the line disconnects.<br><br>>&gt; MONEY: -20 ASTLEYS`);
            enableInteraction();
        }
    };

    pl.rickRoll = function() {
        print(`You ring 92683674.<br><br>As the line connects, music start playing.`);
        link(`Listen to music`, function() {
            nukeHyperlinks();
            print(`Listening…`);
            playSound(`data1.dat`);
            setTimer(`8`, function() {
                print(`Wow. Just wow. Money well spent...`);
                enableInteraction();
            });
        });
    };

    pl.gurgles = function() {
        print(`You call this Elisa, the likely owner of the handbag you found.<br><br>After a few rings, the call is answered.<br><br>"Hello?" you say.<br><br>No response. All you hear is… a strange ambient noise. Sounds a bit like… stomach noises, for lack of a better comparison.<br><br>However, a muffled belch you hear a moment later makes you realize that your comparison may have been spot on. A little <em>too</em> spot on. You put the phone down, concerned.`);
        enableInteraction();
    };
}

definitions['7,4,10'] = function() {
    roomName(`Steep<br>Path`);

    print(`You are walking along a steep, rocky path. To the EAST, the path leads up to the cliffs. To the WEST, the path leads down towards the beach.`);

    addExits(east, west);
}

definitions['8,4,10'] = function() {
    roomName(`Steep<br>Path`);

    print(`You are walking along a steep, rocky path. To the EAST, the path leads up to the cliffs. To the WEST, the path leads down towards the beach. To the NORTH is a platform of sorts, which juts out over the ocean. It contains a few picnic tables.`);

    addExits(east, west, north);
}

definitions['9,4,10'] = function() {
    roomName(`Steep<br>Path`);

    print(`You are walking along a steep, rocky path. To the EAST, the path leads up to the cliffs. To the WEST, the path leads down towards the beach.`);

    addExits(east, west);
}

definitions['10,4,10'] = function() {
    roomName(`Cliffs`);

    print(`You are standing on top of the cliffs. You swallow nervously as you look down at the roaring sea far, far below, crashing into the sharp rocks at the bottom of the cliffs. Then, you quickly look over your shoulder, as if to make sure there is no one there that could push you off.`);

    if (pl.foxCalled === "no") {
        print(`Go NORTH to jump off the cliff. To the SOUTH, there is a nice bit of grassy ground. To the EAST is a bulletin board. To the WEST is the path that leads off the cliffs.`);
    } else {
        print(`Go NORTH to jump off the cliff. To the SOUTH, there is a nice bit of grassy ground - you see Liam lying there on the juicy grass, listening to music. To the EAST is a bulletin board. To the WEST is the path that leads off the cliffs.`);
    }

    addExits(north, south, east, west);

    removeInventoryObjectAction(`poster #1`, `put up`);
    removeInventoryObjectAction(`poster #2`, `put up`);
    removeInventoryObjectAction(`poster #3`, `put up`);
}

definitions['10,5,10'] = function() {
    roomName(`Sea`);

    print(`Weeeeeeeeeee!<br><br>I have no idea why you just did that, but I'm just the narrator. What do I know.<br><br>Falling fast towards the jagged rocks at the bottom, you suddenly notice your speed… decreasing? Yes, your descent is getting slower and slower, until you stop <em>mid-air</em>, then begin to float <em>up</em>!<br><br>As you look around in confusion, you notice a couple of fairies holding you by your arms and legs. With no effort at all, they plop you back down onto the cliffs from which you jumped.`);

    if (pl.foxCalled === "food") {
        print(`"We're the Gurgle Fairies," one of the fairies explains. "We're here to protect you until you fulfil your destiny as food. Why would you jump when there's a cute, soft, hungry fox boi just a few steps away?! Trust us, his guts are a much more suitable resting place for a tasty squirrel like yourself."<br><br>With that, the fairies disappear. Or maybe they weren't even there in the first place; maybe you ate something funny and were simply hallucinating. I guess we'll never know…`);
    } else {
        print(`"We're the Gurgle Fairies," one of the fairies explains. "We're here to protect you until you fulfil your destiny as food. Trust us, a fluffy boi's guts are a much more suitable resting place for a tasty squirrel like yourself."<br><br>With that, the fairies disappear. Or maybe they weren't even there in the first place; maybe you ate something funny and were simply hallucinating. I guess we'll never know…`);
    }

    link(`Continue`, function() {
        teleport(`10,4,10`);
    });
}

definitions['10,3,10'] = function() {
    if (pl.sex === "m") pl.word = "boi";
    else pl.word = "girl";
    if (pl.sex === "m") pl.word2 = "he's";
    else pl.word2 = "she's";
    if (pl.sex === "m") pl.word3 = "Mr";
    else pl.word3 = "Ms";

    roomName(`Grassy<br>Spot`);

    addExits(north);

    print(`You are standing in a lusciously grassy, sunny spot.`);

    if (pl.foxCalled !== "no") {
        print(`You see Liam.`);

        addRoomObjectAction(`liam`, `look at`, function() {
            print(`Liam is lying on his back on the juicy grass; he's still wearing his headphones, but his shirt is nowhere to be seen. In other words, he's completely nude. Well, as nude as a fluffy fox can get…<br><br>His eyes are closed, and his face is adorned by a content smile.`);
        });

        addRoomObjectAction(`liam`, `talk to`, function() {
            clearExits();
            clearRoom();
            print(`"Oh, hi! Come, lie down next to me. It's such a beautiful day!"<br><br>You do so, sighing with content at the feeling of the warm, spongy grass beneath you.`);
            pl.action4();
        });
    }

    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    pl.action4 = function() {

        link(`Hug him`, function() {
            nukeHyperlinks();
            print(`"Aww. Come 'ere, you~"<br><br>The fox turns towards you and holds you in a tight embrace. With your ear pressed against his chest, you can hear his heart beating slowly but loudly, and you find its rhythm soothing.`);
            pl.action4();
        });

        link(`Hug his footpaws`, function() {
            nukeHyperlinks();
            print(`You quietly shuffle away to lie next to Liam's footpaws. They are slightly moist - presumably from stomping on the juicy grass around you - and rather dusty, as any paws would be after walking all over town.<br><br>You timidly press your right cheek against the cool pads of his left footpaw. To your relief, the fox doesn't seem to mind; he just chuckles warmly, and curls his toes a little in acknowledgement.`);
            link(`Kiss his footpaws`, function() {
                print(`Blushing, you firmly press your lips against Liam's footpaw and give it a biiiiiiiig smooch.<br><br>"Rrrrr~. This is nice. I never had anyone pay attention to my paws before~"`);
            });
            link(`Lick his footpaws clean`, function() {
                print(`Your face beet-red beneath all the fur, you lick Liam's footpaw, your tongue collecting dust and sweat off his beans.<br><br>"Gooooooood ${pl.word}. Clean foxy's beans. This feels so good~"<br><br>He spreads his toes out for you, and you eagerly lick in-between them, eagerly breathing in their foxy scent.`);
            });
            link(`Go back`, function() {
                nukeHyperlinks();
                print(`You go back to lying next to Liam. The fox grins at you playfully. "Enjoyed your bean adventure?"<br><br>You nod shyly, getting a friendly fox lick on the nose in return.`);
                if (pl.foxCalled === "food") print(`"Well, I'm glad you like them! After all, you're gonna be food for them fox beans soon," the fox continues with a mischievous wink. "Make 'em nice and plump for foxy, okay? Will make walking much more pleasant~"`);
                pl.action4();
            });
        });

        if (!pl.foxMoney) {
            link(`Ask for a job`, function() {
                nukeHyperlinks();
                if (pl.foxCalled === "food") {
                    print(`"A job, huh? Of course I do, silly!" The fox embraces you possessively, pressing his nose against yours. "I employ you as fox food. And - in just one day! - you will be promoted to fox <em>chub</em>~"<br><br>Liam licks your face teasingly, then winks, and ruffles the fur on your head.`);
                    pl.action4();
                } else {
                    print(`"A job, huh? Can't think of anything, really. Although… we <em>could</em> play a little game if you need money! I call it 'Rock, Feather, Claws'. Basically, we both pick one of the three, and present our choices at the same time. Rock beats Claws, Claws beat Feather, Feather beats Rock. We do this three times, and the person with the most wins is the overall winner. If you win, I give you 50 Astleys. If <em>I</em> win, I get to suck on a delicious little squirrel named ${pl.name} like ${pl.word2} a popsicle, heh. Deal?"`);
                    link(`Deal`, function() {
                        nukeHyperlinks();
                        print(`"Perfect! Let's go then! Pick one in your head. Then, I shout 'Rock, Feather, Claws!' The moment I say 'Claws', we both reveal our choices."<br><br>"Sounds good!"`);
                        pl.randomize();
                        pl.rps();
                    });
                    link(`No deal`, function() {
                        nukeHyperlinks();
                        print(`"Aww. Fair enough. I wouldn't eat you, if that's what you're worried about. But I understand. Let me know if you change your mind, though!"`);
                        pl.action4();
                    });
                }
            });
        }

        link(`Peek into his maw`, function() {
            nukeHyperlinks();
            print(`You shift your attention to Liam's muzzle. Unfortunately, it's closed, so you can't peek inside. You're so preoccupied with imagining what it must look like in there that you don't even realize he's looking at you; only when he clears his throat do you notice his radiant, green eyes peering at you curiously.`);
            link(`Inch closer`, function() {
                nukeHyperlinks();
                print(`You inch closer under his gaze, gently nuzzling his lips with your nose. Liam grins, pulling you in so that you lay belly-down on his chest.<br><br>"You know, we foxes have a saying. 'Curiosity is the first step to hell.' And let me tell you - the place foxy maws lead to is nothing short of that~"<br><br>He winks at you mischievously, then opens his maw wide. You stare, transfixed, into the dark cavern, hot, sweet fox breath filling your lungs as you do so. It's certainly one of the <em>drooliest</em> maws you've ever seen; strands of saliva extend from his tongue and teeth to the roof of his mouth, and a stream of clear, runny drool is making its way down his wonderfully smooth tongue to the back of his throat, where it is swallowed, the motion creating new, thick strands of drool at the back of his throat.<br><br>You lean in closer and closer. Such a <em>welcoming</em> maw…<br><br>However, just as you are about to put your head in his maw, the fox snaps his jaws shut. "Nah-ah! Careful, now. There's a <em>reason</em> why I'm drooling so much, heh. Unless you're ready to depart this world, don't stick your head in there~"`);
                link(`Offer yourself as food`, function() {
                    nukeHyperlinks();
                    if (pl.foxCalled === "food") {
                        print(`"But… I am," you say, avoiding his gaze.<br><br>"Grrrrrr~. I wish <em>all</em> squirrels were so eager to become foxy chub, heh. Then again… I wouldn't be able to keep my paws off all those tasty morsels begging to be eaten! I'd have squirrels churning in my gut 24/7! Wouldn't be very good for my physique, heh. Or my hunting instincts - those can be life-saving." A long, glistening tongue slips out from in-between Liam's lips, and all that drool you were watching mere moments ago is smeared right onto your face. You blush as he withdraws, leaving your face dripping with gooey fox drool.<br><br>"S-Sorry," you stammer. "Umm… you can hunt me, if you prefer to c-catch your prey…"<br><br>The fox chuckles. "Oh, no. I don't feel like hunting right now. You'll be my guilty pleasure~" Another fox lick, even wetter than before. "I really made you chase after me today, huh. And yet, you never gave up. There is nothing to distract us now - it's finally time for foxy to gurgle you up~"<br><br>The fox once again opens his maw wide, as drooly as ever, and looks at you expectantly. You feel like you're in a dream as you crawl inside, and the fox's jaws close over your chest. His sharp teeth grip you firmly, but not enough to hurt you. The fox's tongue rubs against your face as he tastes you, thoroughly rubbing his drool into your already wet fur. "Mmm~"`);
                        pl.mouthAction();
                    } else {
                        print(`"But what if… theoretically speaking… I <em>am</em>?" you ask, avoiding his gaze.<br><br>"Hmm? You really <em>want</em> to be fox food? I'd be only too happy to accommodate, but I hope you know what you're getting into. Becoming fox chub is not a pretty process. And, I'm sure I do not need to remind you, it's <em>irreversible</em>~"<br><br>You don't reply, instead just nuzzling the fox's lips. Liam grins, understanding. "Alright. But this is your final warning - set one paw inside my mouth, and you become fox food. No going back. Even if you change your mind~."<br><br>Liam once again opens his maw wide, as drooly as ever, and looks at you expectantly.`);
                        link(`Go in`, function() {
                            nukeHyperlinks();
                            print(`You feel like you're in a dream as you crawl inside hesitantly, and the fox's jaws close over your chest. His sharp teeth grip you firmly, but not enough to hurt you. The fox's tongue rubs against your face as he tastes you, thoroughly rubbing his drool into your fur. "Mmm. All mine now~."`);
                            pl.mouthAction();
                        });
                        link(`Withdraw`, function() {
                            nukeHyperlinks();
                            print(`"On second thought… it's not a good idea. I need to cool down…"<br><br>The fox gives you a friendly lick.<br><br>"Close call. You should be more careful - not every predator will give you so many opportunities to change your mind. Had I been any other fox, you'd likely be stewing in my gut right now~"`);
                            pl.action4();
                        });
                    }
                });
                link(`Withdraw`, function() {
                    nukeHyperlinks();
                    print(`"Heh. Sorry, I got carried away."<br><br>"Oh, no need to apologize to <em>me</em>. <em>I</em> wouldn't be sorry if you did that~" Liam says, sticking his tongue out at you playfully.`);
                    pl.action4();
                });
            });
            link(`Change the subject`, function() {
                nukeHyperlinks();
                print(`"Oh. Sorry, I've just been staring into space," you lie. <br><br>"Riiiiiiiiiiiight…"<br><br>"Yeah, hehe. Anyway, what do you do? What's your job?"<br><br>"Job? Pfffffffft. I wouldn't have so much time to lay about if I had a <em>job</em>. I'm still a student. My free trial of adulthood hasn't expired yet, heh."<br><br>"What are you studying?"<br><br>"Numberology."<br><br>"What's that?"<br><br>The fox shrugs. "How should I put it… it's trying to explain everything around us - the world itself - using numbers. Trying to quantify everything. Might turn out to be useless, but our professor insists that the humans would never have gotten as far as they have without it, that their biggest inventions are based on Numberology. And, if we're to carry on living like them, we must learn how to make all these things too. The ones we inherited from them when they all disappeared won't last forever…"`);
                pl.action4();
            });

        });

        link(`Leave`, function() {
            nukeHyperlinks();
            if (pl.foxCalled !== "food") {
                print(`"Bye, now! I'll see you later, I hope!"`);
            } else {
                print(`"Oh? You're leaving? Got some loose ends to take care of before your grand transformation into fox chub~? Well, I'll be here when you're ready~"`);
            }
            link(`Continue`, function() {
                teleport(`10,3,10`);
            });
        });

    };

    pl.rps = function() {
        if (pl.turns <= 2) {
            print(`"Ready? Rock, Feather, Claws!"`);
            link(`Choose Rock`, function() {
                nukeHyperlinks();
                if (pl.turns <= 1) {
                    if (pl.foxoChoice === "Rock") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"It's a draw."`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoChoice === "Feather") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"Aww. You win, Mr Fox."`);
                        pl.turns++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoChoice === "Claws") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"Yus! I win!" you exclaim.`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.rps();
                    }
                } else if (pl.turns === 2) {
                    if (pl.foxoOpp === "Rock") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"It's a draw."`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoOpp === "Feather") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"Aww. You win, Mr Fox."`);
                        pl.turns++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoOpp === "Claws") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"Yus! I win!" you exclaim.`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.rps();
                    }
                }
            });
            link(`Choose Feather`, function() {
                nukeHyperlinks();
                if (pl.turns <= 1) {
                    if (pl.foxoChoice === "Rock") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"Yus! I win!" you exclaim.`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.rps();
                    }
                    if (pl.foxoChoice === "Feather") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"It's a draw."`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoChoice === "Claws") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"Aww. You win, Mr Fox."`);
                        pl.turns++;
                        pl.foxWins++;
                        pl.rps();
                    }
                } else if (pl.turns === 2) {
                    if (pl.foxoOpp === "Rock") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"Yus! I win!" you exclaim.`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.rps();
                    }
                    if (pl.foxoOpp === "Feather") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"It's a draw."`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoOpp === "Claws") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"Aww. You win, Mr Fox."`);
                        pl.turns++;
                        pl.foxWins++;
                        pl.rps();
                    }
                }
            });
            link(`Choose Claws`, function() {
                nukeHyperlinks();
                if (pl.turns <= 1) {
                    if (pl.foxoChoice === "Rock") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"Aww. You win, Mr Fox."`);
                        pl.turns++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoChoice === "Feather") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"Yus! I win!" you exclaim.`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.rps();
                    }
                    if (pl.foxoChoice === "Claws") {
                        print(`The fox chose ${pl.foxoChoice}.<br><br>"It's a draw."`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.foxWins++;
                        pl.rps();
                    }
                } else if (pl.turns === 2) {
                    if (pl.foxoOpp === "Rock") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"Aww. You win, Mr Fox."`);
                        pl.turns++;
                        pl.foxWins++;
                        pl.rps();
                    }
                    if (pl.foxoOpp === "Feather") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"Yus! I win!" you exclaim.`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.rps();
                    }
                    if (pl.foxoOpp === "Claws") {
                        print(`The fox chose ${pl.foxoOpp}.<br><br>"It's a draw."`);
                        pl.turns++;
                        pl.yourWins++;
                        pl.foxWins++;
                        pl.rps();
                    }
                }
            });
        } else pl.results();
    }

    pl.randomize = function() {
        pl.random = Math.floor(Math.random() * 10);
        pl.random = Math.floor(Math.random() * 10);
        pl.random = Math.floor(Math.random() * 10);
        if (pl.random <= 2) {
            pl.foxoChoice = "Rock";
            pl.foxoOpp = "Claws";
        } else if (pl.random >= 6) {
            pl.foxoChoice = "Feather";
            pl.foxoOpp = "Rock";
        } else {
            pl.foxoChoice = "Claws";
            pl.foxoOpp = "Feather";
        }
        pl.turns = 0;
        pl.yourWins = 0;
        pl.foxWins = 0;
    }

    pl.results = function() {
        if (pl.yourWins < pl.foxWins) pl.foxSlurp();
        else if (pl.yourWins > pl.foxWins) pl.cashMoney();
        else {
            print(`"Hmm, looks like we're at a stalemate," Liam says. "Let's do the whole thing from scratch, shall we?"<br><br>"Sure thing!"`);
            pl.randomize();
            pl.rps();
        }
    }

    pl.foxSlurp = function() {
        pl.foxMoney = true;
        print(`"Hmm. Hehehe. Ya lose! You're <em>foxy's</em> now~"<br><br>Liam pulls you towards him in a hug as he lies down again. You then stare wide-eyed as he opens his maw, revealing a dark, slime-covered cavern lined with brilliantly white, pointy teeth. You don't get to admire it for too long though, as he crams your head inside, which is immediately flooded with sticky fox drool. <br><br>For the next five minutes or so, it's like your head is in a washing machine; a puddle of fox drool is dumped on your head, followed by the fox rubbing his tongue all over it, making sure his spit penetrates every nook and cranny of your body and robs it of its squirrely taste, and then he sucks it all out of you, relishing in your taste. Rinse and repeat, until your head doesn't have the faintest scent of squirrel left on it, just yucky fox drool.<br><br>You feel dizzy when Liam finally spits you out, and your neck feels a little sore. You're pretty sure he was nibbling on you as well, though you're not sure - it was all a blur of fox spit and tongue.<br><br>"Deeeeeelicious!" he says, a string of drool still connecting your nose to his mouth. "Have to stop, though - I almost bit your head off a few times, hehe. Predatory instincts…"`);
        pl.action4();
    }

    pl.mouthAction = function() {
        link(`Kiss his tongue`, function() {
            print(`Unable to help yourself, you kiss the fox's slimy tongue.<br><br>"Grrrr. Good ${pl.word}~"<br><br>He rubs more spit into your face in response.`);
        });
        link(`Lick his tongue`, function() {
            print(`Beet-red under all your fur, you lick the fox's smooth tongue, welcoming his gooey spit in your mouth, letting it smoothly go down your throat. Some could consider that gross, but… this fox is too darn <em>cute</em> to be gross! You just want him all around you, all <em>inside</em> you - you want to be <em>his</em>, serve him with your very <em>life</em>.`);
        });
        link(`Hug his tongue`, function() {
            print(`You hug Liam's tongue, smiling as its delightful warmth seeps into your very bones. You could literally stay like this forever. Buuuuut you can't. You have foxy bellies to fill! Which Liam reminds you of as well, as he gives you an ever so gentle nip when you've been hugging his tongue for too long.`);
        });
        link(`Submit`, function() {
            nukeHyperlinks();
            print(`You relax in submission, letting the fox do as he pleases. And that he does, as he soon tilts his head back, letting gravity do its job. Covered head-to-toe in fox spit, you find yourself sliding effortlessly along his tongue and towards the dark depths of his waiting throat. You do not resist as his throat muscles welcome you with a tight embrace.<br><br>A few soft gulps later, and you fully disappear down his gullet, on your way to his growling stomach. His heart beats loud and steady against your ears, creating a soothing, intimate rhythm. Everything finally stops squirming and shifting about as you are dropped into Liam's gut, which is surprisingly peaceful, apart from the growling. Having reached your final destination, you make yourself comfortable and wait to be turned into fox chub.`);
            link(`Continue`, function() {
                teleport(`10,3,9`);
            });
        });
    }

    pl.cashMoney = function() {
        pl.money += 50;
        pl.foxMoney = true;
        print(`"Heheeee. You win, ${pl.word3} Squirrel! As promised, you get 50 Astleys."<br><br>&gt;&gt; MONEY: +50 ASTLEYS`);
        pl.action4();
    }
}

definitions['11,4,10'] = function() {
    roomName(`Bulletin<br>Board`);

    print(`There is a bulletin board here. You can't even go on a relaxing walk these days without having ads shoved in your face, apparently.`);

    addExits(west);

    addRoomObjectAction(`bulletin board`, `look at`, function() {
        print(`All the ads on here seem to be pretty old, and are almost certainly no longer valid. One seems relatively new, though: "We're giving away 2,000 Astleys to one random caller! Call us now on 'wantdosh' to avoid disappointment!"`);
    });

    // Monty Quest
    if (pl.posters >= 1 && pl.bulletin2Done === false) {
        print(`And it would appear you are about to become the very thing you hate as you add Monty's poster to the large collection of other ads already on here.`);
        if (isInInventory("poster #1")) pl.bulletinFun(1, 2);
        if (isInInventory("poster #2")) pl.bulletinFun(2, 2);
        if (isInInventory("poster #3")) pl.bulletinFun(3, 2);
    }
}

definitions['10,3,9'] = function() {
    roomName(`Liam's<br>Stomach`);

    print(`The fox lets out all the excess air he swallowed along with you with a stifled burp, then sighs happily and pats his belly.<br><br>"You were wonderful, little squirrel. I trust you enjoyed yourself too?"<br><br>Your skin begins to tingle ever so slightly as Liam's stomach works on making you a part of him.`);

    link(`&quot;Absolutely!&quot;`, function() {
        nukeHyperlinks();
        print(`"Absolutely! I loved every second of it. It was… um… it was an honour to be your meal, Mr Fox."<br><br>"Pfffft. You flatter me. I'm only a silly fox, ya know. Most people don't even notice me. And then there's <em>you</em>, who waltzes up to me and begs to become a part of me forever." He pats his belly affectionately. "You're a strange one, alright, but I'm not complaining! I wish stuff like that happened more often. It's a predator's dream~"`);
        pl.bellyActions();
    });

    link(`&quot;It was okay...&quot;`, function() {
        nukeHyperlinks();
        print(`"It was okay…"<br><br>"Just okay? Aww. I'm sorry to hear that. Umm… no refunds, though. I… I don't spit prey back out. That's kinda gross. Sorry!"`);
        link(`&quot;I'm only kidding!&quot;`, function() {
            nukeHyperlinks();
            print(`"I'm just kidding, silly! As if I'd ever <em>not</em> want to become one with such a handsome fox boi~. It was amazing. I loved every second of it. It was… um… it was an honour to be your meal, Mr Fox."<br><br>"Pfffft. You flatter me. I'm only a silly fox, ya know. Most people don't even notice me. And then there's <em>you</em>, who waltzes up to me and begs to become a part of me forever." He pats his belly affectionately. "You're a strange one, alright, but I'm not complaining! I wish stuff like that happened more often. It's a predator's dream~"`);
            pl.bellyActions();
        });
        link(`Struggle`, function() {
            nukeHyperlinks();
            print(`You begin to kick and squirm, trying to <em>force</em> Liam to spit you back out. All it does is make him belch, though.<br><br>"Heyyyyy. Calm down in there."<br><br>"I'm afraid the only way you'll get peace is if you spit me back out!"<br><br>"Oh, I don't care what's happening down there; you won't last very long in there anyway. It's just… so unnecessary. You're just stressing yourself out, when your fate has already been decided, and you can't change it. If it were me, I'd prefer to spend my last few moments in <em>peace</em>, not in <em>stress</em>."<br><br>Your skin is no longer tingling. Instead, it's <em>itching</em> like crazy, and scratching only seems to make it worse.<br><br>"Well, that's just the thing, I <em>don't</em> want these to be my last moments!"<br><br>"But I've already eaten you. You <em>let</em> me eat you. Like I said - I'm <em>not</em> spitting you back out! That feels awful! I did it once before, and I promised to myself - never again!"<br><br>The good news is - your skin is no longer itching. And the <em>bad</em> news is that you can't feel anything at all! You're completely numb!<br><br>"But-"<br><br>Liam sighs. "Here I thought I finally found some prey that won't whine in my stomach, but I guess I was wrong. Well… okay, maybe that was a little harsh. You <em>are</em> getting digested, after all. I just don't feel like listening to it. I'm putting my headphones back on."<br><br>"Liam? Liam!"<br><br>But he can no longer hear you. With his headphones back on his ears, he's reading his book again, humming quietly. If one were to look at his belly up close, they could just about see a squirrely shape wiggling about in there, but it grows still after a few minutes, and then the squirrely shape becomes less and less defined as time goes on, eventually disappearing entirely.<br><br>"Poor squirrel," he murmurs, his nose still in his book. "I didn't think they'd kill her off. Such a nasty way to go, too - getting eaten alive by a frog. Gross…"`);
            pl.killGame("fox nom");
        });
    });

    pl.bellyActions = function() {
        link(`Massage his belly from within`, function() {
            nukeHyperlinks();
            print(`You begin rubbing the stomach walls around you. You don't even know if he can feel that, but you are determined to be the best prey ever, and give him a five-star dining experience.<br><br>"Ooh, that feels nice. It's gonna stimulate my belly, though, and make you digest faster. But, if you don't mind that, don't stop~"<br><br>"Doesn't matter what <em>I</em> want. I'm just food. I'll do anything as long as it makes foxy happy~"<br><br>"Grrrrrr~. Well, if that's the case, keep rubbing, ya delicious fluffball~"<br><br>And that you do, massaging the fox's belly even after your arms begin to ache, after all the fur is burned off your body, after your skin becomes raw, and even after Liam falls asleep from how relaxing your massage was. You don't stop massaging until his stomach juices sap all strength out of you, and you drown in the acids, no longer able to even keep your head above the surface.`);
            pl.killGame("fox nom");
        });
        link(`Ask him to read`, function() {
            nukeHyperlinks();
            print(`You ask the fox to read his book aloud, so that you may fall asleep while listening to his soothing voice.<br><br>"Mmm. With pleasure, little squirrel. I shall honor your last wish~"<br><br>With that, the fox begins to read. As it happens, he reads a scene in which a squirrel is running away from a fox; she had discovered that the fox was a traitor, that he was only <em>pretending</em> to be a doctor, but - in reality - he was there only to find vulnerabilities in the abbey, so that his kind could take over and live in this giant fortress, feasting on the mice and squirrels within. The mouse screamed and fought hard, but, in an unusual turn of events, was eventually eaten by the fox, who sneered at her, telling her how she just failed her entire kind.<br><br>"Silly squirrel," you murmur weakly, already half-digested and barely resembling a squirrel at all. "Doesn't she know how much of an honor it is to become foxy food~?"<br><br>Liam chuckles and pats his belly. "Sounds like you'll be joining her soon! Why don't you educate her, hmm? Maybe she'll remember your words when she's reincarnated and will give a hungry foxy an easy meal~"<br><br>"Mmm. I know <em>I</em> will. Being fox food is my destiny~"<br><br>No longer having the strength to keep your head out of the acids, you succumb to Liam's stomach, and peacefully gurgle away into chyme.`);
            pl.killGame("fox nom");
        });
    };
}

definitions['-5,3,10'] = function() {
    roomName(`Royal<br>Street`);

    addExits(north, south, east, west);

    print(`You are on Royal Street. The houses here are big, and the street is wide and clean, with palm trees growing in neat rows to either side of it. It's eerily quiet. Or wonderfully peaceful. Depends on what kind of person you are…`);
}

definitions['-5,2,10'] = function() {
    roomName(`Royal<br>Street`);

    addExits(north, south, west, east);

    print(`You are on Royal Street. The houses here are big, and the street is wide and clean, with palm trees growing in neat rows to either side of it. It's eerily quiet. Or wonderfully peaceful. Depends on what kind of person you are…`);
}

definitions['-5,1,10'] = function() {
    roomName(`Royal<br>Street`);

    addExits(north, south, east, west);

    print(`You are on Royal Street. The houses here are big, and the street is wide and clean, with palm trees growing in neat rows to either side of it. It's eerily quiet. Or wonderfully peaceful. Depends on what kind of person you are…`);
}

definitions['-5,0,10'] = function() {
    roomName(`Royal<br>Street`);

    addExits(north, south, east, west);

    print(`You are on Royal Street. The houses here are big, and the street is wide and clean, with palm trees growing in neat rows to either side of it. It's eerily quiet. Or wonderfully peaceful. Depends on what kind of person you are…`);
}

definitions['-5,-1,10'] = function() {
    roomName(`Skyscraper`);

    addExits(north);

    print(`You're standing in front of a ginormous skyscraper. It looks like it's made entirely of glass. You guess that only the richest of the rich live here.<br><br>The building is surrounded by a large electric fence.`);

    if (pl.jackalMet === false) {

        print(`On the other side of it, you see a jackal pacing back and forth.`);

        addRoomObjectAction(`jackal`, `look at`, function() {
            print(`The jackal is pacing back and forth energetically, grumbling something under his breath. He wears nothing but a pair of new-looking, shiny, black boots and aviator sunglasses.<br><br>Suddenly, the jackal turns to look at you, the motion so swift and unexpected that it almost makes you jump.<br><br>"Hey! You there! Do you like music?"`);
            disableInteraction();
            link(`Yes`, function() {
                nukeHyperlinks();
                print(`"You do? Sweeeeeeeeet." He approaches the fence and looks you up and down. There is a sweet, flowery aroma emanating from him, some kind of… perfume? It doesn't smell artificial at all, though. Must be some expensive brand. "Can you <em>write</em> music? Did you ever dream of writing your own song, perhaps? Seeing it on TV? Hearing it on the radio?"`);
                link(`Yes`, function() {
                    nukeHyperlinks();
                    print(`"Niiiiiiiiice. Listen, I've got a proposition for you, mate. Why don't you come up to my studio and show me what you got? If I like what I hear, I'll buy your song from you for 100 Astleys. Maybe I'll even hire you again in the future. It could be your first step into the world of music! And if I don't, well… you'll just go back to your sad, little life. You've nothing to lose, really. What do you say?"`);
                    link(`Deal`, function() {
                        nukeHyperlinks();
                        print(`"Ssssssplendid! Come on in!" The jackal opens the gate, and you hesitantly walk inside. "Relax! I don't bite. Follow me."<br><br>You hear a loud beep as the jackal swipes his card and the door slides open with a hiss. The inside of the building is very tidy and business-like, with shiny, spotless floors and various perfectly-trimmed plants to either side of the red carpet you're walking along towards the elevator. Off to the right is a reception desk, and the lizard receptionist sitting behind it is looking at you with an amused expression on her face. <br><br>The elevator doors slide open with a hiss.`);
                        link(`Enter elevator`, function() {
                            nukeHyperlinks();
                            print(`You follow the jackal into the elevator. As the doors slide shut, awkward elevator silence ensues. Awkward for <em>you</em>, at least; the jackal doesn't seem to be bothered by it. He just leans against the mirrored wall, his arms crossed, and yawns unashamedly, not even bothering to cover his mouth, revealing an impeccable little maw with a perfectly clean tongue and shiny, sharp, white teeth, if only for a moment. You feel compelled to make small talk.`);
                            pl.talk();
                        });
                    });
                    link(`No deal`, function() {
                        nukeHyperlinks();
                        print(`"Ah, well. Never mind, then. Go back to your peasant life. I guess fame isn't for everyone."<br><br>With that, the jackal returns to pacing back and forth.`);
                        enableInteraction();
                    });
                });
                link(`No`, function() {
                    nukeHyperlinks();
                    print(`"Ah, well. Never mind, then. Go back to your peasant things, I'm busy here."<br><br>With that, the jackal returns to pacing back and forth.`);
                    enableInteraction();
                });
            });
            link(`No`, function() {
                nukeHyperlinks();
                print(`"Ah, well. Never mind, then. Go back to your peasant things, I'm busy here."<br><br>With that, the jackal returns to pacing back and forth.`);
                enableInteraction();
            });
        });

    }

    pl.talk = function() {
        link(`&quot;Who are you?&quot;`, function() {
            print(`"What do you mean? Who am <em>I</em>? If that's a joke, it's not a very funny one."<br><br>You insist that you indeed don't know who he is.<br><br>"Wow. The ignorance! I'm only the most popular singer on the island! <em>Everyone</em> loves my songs! I'm guessing you're not from around here, then. Oh, well. I suppose you having never heard any of my songs is a good thing. At least <em>your</em> song is gonna feel fresh! Uninspired by my earlier works! I struggle with that. I've written so many songs by now that, whatever I come up with, it just feels like a rehash of one of my older songs. <em>Song</em>writer's block, or something."`);
            killHyperlink(`&quot;Who are you?&quot;`);
        });
        link(`&quot;Why are you wearing shoes?&quot;`, function() {
            print(`"Why are you <em>not</em> wearing shoes?" He looks down at your bare paws in disapproval. <br><br>"Because it's <em>hot</em>!"<br><br>"Perhaps. But I hate having dirty, dusty paws. It's gross. I prefer to keep them nice and clean and soft in my shoes."`);
            killHyperlink(`&quot;Why are you wearing shoes?&quot;`);
        });
        link(`&quot;This elevator's taking its time…&quot;`, function() {
            print(`"Of course!" the jackal replies. "I live at the very top, after all. I'd never settle for anything less."`);
            killHyperlink(`&quot;This elevator's taking its time…&quot;`);
        });
        setTimer(`25`, function() {
            print(`The elevator has stopped.`);
            link(`Exit elevator`, function() {
                enableInteraction();
                print(`"Oh, umm… what's your name?" you ask as the elevator doors hiss open again.<br><br>The jackal sighs. "Justin."<br><br>"Cool. I'm ${pl.name}. Nice to meet you."`);
                teleport(`-5,-1,11`);
            });
        });
    };
}

definitions['-6,2,10'] = function() {
    roomName(`House #3:<br>Front Porch`);
    addExits(east);

    if (pl.wolfPet === 0) {
        print(`You are standing in front of House #3. Just like all other houses here, it's expensive-looking. <em>Un</em>like all the other houses here, it's clearly not looked after very well; there are vines climbing up the walls, the lawn is way too long, and there are weeds growing on the driveway. Evidently, whoever lives here has better things to do than look after their house…`);
        link(`Go in`, function() {
            print(`The door is locked.`);
        });

    } else if (pl.wolfPet === 1 || pl.wolfPet === 2) {
        print(`You are standing in front of Axel's house. Just like all other houses here, it's expensive-looking. <em>Un</em>like all the other houses here, it's clearly not looked after very well; there are vines climbing up the walls, the lawn is way too long, and there are weeds growing on the driveway. Evidently, the wolf has better things to do than look after his house…`);
        link(`Go in`, function() {
            teleport(`-7,2,10`);
        });
    } else {
        print(`You are standing in front of Axel's house. Just like all other houses here, it's expensive-looking. <em>Un</em>like all the other houses here, it's clearly not looked after very well; there are vines climbing up the walls, the lawn is way too long, and there are weeds growing on the driveway. Evidently, the wolf has better things to do than look after his house…`);
        link(`Go in`, function() {
            print(`Yeeeeeeah, better not push your luck…`);
        });
    }
}

definitions['-7,2,10'] = function() {
    pl.accept = function() {
        link(`Accept task`, function() {
            nukeHyperlinks();
            print(`You accept the task and proceed to leave Axel's house.<br><br>"Wait up!" the wolf says just as you open the front door. "Here, have 100 Astleys. That's your daily allowance."<br><br>&gt;&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
            link(`Continue`, function() {
                pl.wolfPet++;
                teleport(`-6,2,10`);
            });
        });
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    roomName(`Axel's<br>House`);

    //Initiation
    if (pl.wolfPet === 0) {

        print(`For the next hour or so, Axel teaches you what he expects of his new pet. What it boils down to is: don't touch any of his stuff without permission, never question him, obey his every command, and spend every waking moment thinking about how to make his life more comfortable.<br><br>"Alright. I'm gonna go and work out now. Gotta stay handsome! Your first task: find me a mouse to eat. Nothing beats a protein-packed, squeaking, wiggling mouse going down your throat after an intense workout~"`);

        pl.accept();

        link(`Remind him that hunting is not allowed`, function() {
            nukeHyperlinks();
            print(`Axel growls threateningly. <br><br>"What did I just say? No questioning my orders. I will let it go this once as you're new, but you better not make this mistake again. Or you'll go where my old pet went earlier today." He pats his stomach. "He's in there right now, helping build wolf muscles~"`);
            pl.accept();
        });

        link(`Offer yourself in place of the mice`, function() {
            nukeHyperlinks();
            pl.willingWolf = true;
            print(`"Don't joke like that, pet. Or I just might do it~"<br><br>"Who said I'm joking?"<br><br>"You're <em>serious</em>?" <br><br>You nod sheepishly. Axel grins, grabbing your hand and guiding it towards his now open maw. You stare wide-eyed into it, at his white, fearsome teeth and his purplish tongue, and watch your hand enter the dark, fleshy cavern, then disappear as Axel closes his mouth. He stares at you smugly as he sucks on your paw; you can feel his tongue sliding over the palm of your hand and in-between your fingers, warm drool filling his mouth and soaking into your fur at your taste. Eventually, Axel spits your hand back out, dripping with slimy wolf drool.<br><br>"Not yet, pet. You only just got here. But don't worry - every single pet I ever had eventually ended up in my gut. And I am certain you will, too~. Now go get me those mice."`);
            pl.accept();
        });

    }

    //Come back with no mice
    else if (pl.wolfPet === 1) {
        if (pl.willingWolf) {
            print(`You come back to find Axel in his home gym, lying on his back and doing some heavy lifting, his fur drenched in sweat, plastered against his skin.<br><br>"I don't smell any mice on you, pet," Axel says, not looking at you, too preoccupied with torturing himself, apparently. "If you don't want to displease your Master, you better hurry. I'm almost done with working out, and I'm <em>starving</em>."<br><br>As if in agreement, his stomach growls loudly.<br><br>"Oh, I know what you're thinking," the wolf continues. "No, I'm not gonna eat <em>you</em> instead. Now that I know you <em>want</em> this, it's not a very fitting punishment, don't you think? Nah, you're gonna have to be a <em>good</em> pet if you wanna nourish this sexy wolf! Be a bad pet, and I <em>skin</em> you instead, and line my motorcycle seat with your pelt; instead of nourishing me, your new destiny will be soaking up my ass sweat."`);
        } else {
            print(`You come back to find Axel in his home gym, lying on his back and doing some heavy lifting, his fur drenched in sweat, plastered against his skin.<br><br>"I don't smell any mice on you, pet," Axel says, not looking at you, too preoccupied with torturing himself, apparently. "If you don't want to displease your Master, you better hurry. I'm almost done with working out, and I'm <em>starving</em>."<br><br>As if in agreement, his stomach growls loudly.<br><br>"Perhaps I'll eat <em>you</em> instead~"`);
        }
        link(`Leave`, function() {
            teleport(`-6,2,10`);
        });
    }

    //Come back with mice
    else if (pl.wolfPet === 2) {
        disableInteraction();
        print(`As soon as you enter Axel's house, you spot him lying flat on the floor, belly-down, panting, drenched in sweat, looking like a drowned rat. Orrrrr a wolfy rug. Or a mix of both. He sniffs the air, his whiskers twitching, and his eyes snap open.<br><br>"Ahhhh, you brought me a mousie! Good pet."<br><br>The mouse in your jaws stiffens with fear as Axel gets back up and makes his way towards you on all fours. Somehow, this feral position makes him even more menacing, his steps so much more stable and intimidating than when he walked on only two feet. He half-lies in front of you like a sphinx, and opens his maw, revealing a pinkish-purple cavern covered in thick wolf drool, which begins to ooze out of the corners of his mouth and drip onto the floor. His eyes look at you expectantly, <em>daringly</em>…`);
        link(`Feed him the mouse`, function() {
            pl.wolfPet++;
            removeInventoryObject(`mouse`);
            nukeHyperlinks();
            print(`Slowly, carefully, your head enters the wolf's maw and places the mouse on his tongue, before quickly retreating. The mouse is quick to act, getting up onto its feet and running towards freedom, but it slips on Axel's drooly, smooth tongue, landing with a splat head-first into a puddle of spit. That gives Axel enough time to clack his jaws shut, sealing the mouse's fate.<br><br>Crunch. Crunch. Crunch. <br><br>A small trickle of blood mixed with wolf spit oozes out of one corner of his mouth, which Axel is quick to wipe off with the fur on his wrist.`);
            if (pl.willingWolf === true) {
                print(`Axel leans towards you.<br><br><strong>BWAAAAAAAARP!</strong><br><br>You stare wide-eyed into his maw, painted red with mouse blood. Drool flies out of his maw and sprays your face. <br><br>"Don't worry, pet. Your time will come," Axel teases.<br><br>"W-When?" you ask.<br><br>"When I find another loser who wants to give up his life to serve someone else," Axel replies with a mean smirk.`);
            }
            print(`"Anyway," the wolf continues. "I'm gonna go take a nap, so do whatever the fuck you want. But remember, not all days as my pet are gonna be so relaxed."<br><br>The wolf walks off, and you soon hear his loud snores coming from the bedroom.`);
            link(`Search his house for some cash`, function() {
                nukeHyperlinks();
                print(`You search Axel's house and find 200 Astleys!<br><br>>&gt; MONEY: +200 ASTLEYS`);
                pl.money += 200;
                link(`Leave`, function() {
                    enableInteraction();
                    teleport(`-6,2,10`);
                });
            });
            link(`Leave`, function() {
                nukeHyperlinks();
                print(`You leave Axel's house, deciding not to risk angering vicious beasts…`);
                enableInteraction();
                teleport(`-6,2,10`);
            });
        });
        link(`Feed yourself to him`, function() {
            nukeHyperlinks();
            print(`You were only supposed to place the <em>mouse</em> in his maw, but… his maw proves to be too irresistible for you, and - hardly able to believe what you're doing - you find yourself entering the maw <em>yourself</em>, breaking intricate strands of wolf drool with your muzzle as you go. You lie on his tongue, staring into the dark depths of his throat, only your legs and your tail sticking out of his maw.<br><br>The mouse in your jaws suddenly stirs to life, thrashing about and clawing at your tongue. "Let go of me, you absolute idiot! I'm not horny, I wanna <em>live</em>!!!"`);
            link(`Bite down on the mouse`, function() {
                nukeHyperlinks();
                print(`No way are you letting the mouse go. What kind of pet denies extra nutrition to their Master?!<br><br>And so, you bite down on the rodent, your sharp incisors sinking into its delicate body like a hot knife through butter. The mouse shrieks, then goes still; you can still feel it breathing, but it knows it's done for, knows it's best to stay still to avoid any further pain. <br><br>But the nightmare is far from over; up until now, Axel has been thinking whether or not to grant your wish. After all, he normally kept his pets around for much longer before sending them down into his gut to be recycled into high-quality protein for his body. But he <em>is</em> starving, and exhausted, and his body <em>desperately</em> needs protein to rebuild all those muscle fibers he damaged during his workout, so, in the end, he accepts your request, shutting his jaws with a decisive clack. <br><br>He then lies down on his belly on the hard floor again and begins to chew. Your arms are the first to go; unable to help yourself, you shriek into the dark depths of his throat as his teeth begin to pulverize your flesh, turning it into a bloody mix of minced squirrel meat and gelatinous wolf spit. <br><br>Once that's all nice and mushed up, you watch your chewed up limbs get pushed to the back of his throat, and swallowed with a soft gulp. You have no more strength to hold onto the mouse, and it slips out of your mouth and onto Axel's tongue, which quivers in response to the feeling of mouse claws walking over it. The injured mouse begins to drag itself across Axel's tongue towards the exit, only to be chucked to the side of his mouth with one flick of his tongue, and then…<br><br>Crunch. Crunch. Crunch. Gulp!<br><br>The mouse helped delay the inevitable, but the time has come. You try to control your fear. <em>It's for my Master</em>, you tell yourself. And you <em>are</em> honored to become his snack, but still can't keep your body from shaking fearfully as Axel flicks his tongue again, sending you right under his fearsome teeth. You grit your own teeth and close your eyes as Axel bites down.<br><br>CRRRRUNCH! Crunch. Crunch. Crunch. Crunch.<br><br>Axel couldn't remember the last time he had a squirrel, but he knew one thing - it's been <em>way</em> too long since he last had one. The wolf forgot how delicious they were! He could hear your pained squeaks, barely audible over the crunching of your bones. He had to give it to you, you were <em>brave</em>; he could tell you were <em>trying</em> to stay quiet and show appreciation for getting to become his food. A malicious grin spreads across his handsome face. <em>But no one could ever stay completely silent under the fearsome power of my gnashing teeth!</em><br><br>He slurps up your tail, crunches it up with the rest of your broken body, then sends it all down with a final, decisive gulp.<br><br><strong>BUAAAAAAARP!</strong><br><br>"Good pet," he says, patting his belly. "Looks like I'm gonna need to find a new one again…"`);
                if (pl.disposalOn) {
                    print(`Later on in the day, Axel is riding his motorcycle outside of town, through the wilderness inhabited almost exclusively by prey, who weren't very fond of city life and preferred to live in the wild, just like their ancestors. At some point during his scenic journey, he could feel his bowels getting a little too full for comfort. So he stops his motorcycle, and makes his way over to the nearest bush. Behind it, he finds a deep hole. How handy! He sits on it and releases a perfectly smooth log, his body having digested you and the mouse extremely well, with the only thing it wasn't able to process being your fur. <br><br>Little did Axel know - or care - that the whole was in fact inhabited by a bunch of rabbits at the time, who watched in horror the giant wolf butt leaving a nasty surprise on their doorstep. If they wanted to get out, they'd need to dig through the warm, stinky wolf pile. After the wolf himself was gone, of course, lest they become one themselves…`);
                }
                pl.killGame("wolf crunch");
            });
            link(`Let the mouse go`, function() {
                nukeHyperlinks();
                print(`You let the mouse go. After all, what difference does a little mouse make when he's got a whole, juicy squirrel to munch on~?<br><br>The mouse quickly scuttles out of the wolf's maw, and runs out the door. Axel growls and chomps down on you to keep you in place as he chases after it. He catches it in no time at all, stepping on it with his right footpaw as he rears up onto his hind legs again. He searches his pockets, then produces a miniature cage hanging from a golden chain. Picking the mouse up from under his paw, he crams it into the cage, shutting the door behind it and locking it with a small key. Then he hangs the chain around his neck, and the mouse would stay in this cramped little cage, bouncing against Axel's fuzzy chest as he walked, until the wolf felt hungry again, at which point the mouse would be sent on a one-way trip to Gurgleland.<br><br>For now, though, Axel still has a certain squirrel to dispatch there. All this time, you've been lying on his tongue, his fangs digging painfully into your flesh to keep you in place, gelatinous wolf drool threatening to drown you.<br><br>Axel sits on luscious, green grass, leaning against an oak tree, and begins to chew. Your arms are the first to go; unable to help yourself, you shriek into the dark depths of his throat as his teeth begin to pulverize your flesh, turning it into a bloody mix of minced squirrel meat and thick wolf spit, all the while the mouse stares in horror at the droplets of hot squirrel blood dripping from the wolf's muzzle.<br><br>Once that's all nice and mushed up, you watch your chewed up limbs get pushed to the back of his throat, and swallowed with a soft gulp. The mouse can't help but look down at the wolf's fuzzy stomach. <em>That's my final destination</em>, it thinks to itself. It tries to pick the lock with its claws, but it proves to be impossible. <br><br>The mouse helped delay the inevitable, but the time has finally come. You try to control your fear. <em>It's for my Master</em>, you tell yourself. And you <em>are</em> honored to become his snack, but still can't keep your body from shaking fearfully as Axel flicks his tongue, sending you right under his fearsome teeth. You grit your own teeth and close your eyes as Axel bites down.<br><br>CRRRRUNCH! Crunch. Crunch. Crunch. Crunch.<br><br>Axel couldn't remember the last time he had a squirrel, but he knew one thing - it's been <em>way</em> too long since he last had one. The wolf forgot how delicious they were! He could hear your pained squeaks, barely audible over the crunching of your bones. He had to give it to you, you were <em>brave</em>; he could tell you were <em>trying</em> to stay quiet and show appreciation for getting to become his food. A malicious grin spreads across his handsome face. <em>But no one could ever stay completely silent under the fearsome power of my gnashing teeth!</em><br><br>He slurps up your tail, crunches it up with the rest of your broken body, then sends it all down with a final, decisive gulp.<br><br><strong>BUAAAAAAARP!</strong><br><br>The mouse covers its nose, feeling dizzy from the stench of wolf stomach mixed with squirrel blood.<br><br>"Good pet," he says, patting his belly. "Looks like I'm gonna need to find a new one again…"`);
                if (pl.disposalOn) {
                    print(`Later on in the day, Axel is riding his motorcycle outside of town, through the wilderness inhabited almost exclusively by prey, who weren't very fond of city life and preferred to live in the wild, just like their ancestors. The mouse was still in a cage around his neck. It looked at the fields they passed by. Home! He was home! But he wasn't <em>free</em>. No, he would never run through these fields again. His destiny was to boil alive in wolf guts…<br><br>At some point during his scenic journey, Axel could feel his bowels getting a little too full for comfort. So he stops his motorcycle, and makes his way over to the nearest bush. Behind it, he finds a deep hole. How handy! He sits on it and releases a perfectly smooth log, his body having digested you extremely well, with the only thing it wasn't able to process being your fur. <br><br>Little did Axel know - or care - that the whole was in fact inhabited by a bunch of rabbits at the time, who watched in horror the giant wolf butt leaving a nasty surprise on their doorstep. If they wanted to get out, they'd need to dig through the warm, stinky wolf pile. After the wolf himself was gone, of course, lest they become one themselves…<br><br>"Behold your destiny, my fuzzy little snack," the wolf teases, tapping a claw against the metal cage around his neck. "Next time I take a dump, it will be <em>your</em> gurgled remains coming out~"`);
                }
                pl.killGame("wolf crunch");
            });
        });
    }
}

definitions['-4,2,10'] = function() {
    roomName(`House #4:<br>Front Porch`);

    print(`You are standing in front of House #4. Just like all other houses here, it's expensive-looking.`);

    link(`Go in`, function() {
        print(`The door is locked.`);
    });

    addExits(west);
}

definitions['-4,3,10'] = function() {
    roomName(`House #2:<br>Front Porch`);

    print(`You are standing in front of House #2. Just like all other houses here, it's expensive-looking.`);

    addExits(west);

    if (pl.dingone === 0) {

        link(`Go in`, function() {
            print(`The door is locked.`);
        });

    } else if (pl.dingone === 1) {

        link(`Knock`, function() {
            disableInteraction();
            nukeHyperlinks();
            print(`You knock on the door. Only a few seconds pass before the door is opened by a small, female skunk.<br><br>"Umm… hello," she says timidly. "Can I help you?"<br><br>"I'm here to see… uhh…"<br><br>Shoot! You didn't even ask the dingo's name!<br><br>"Heyyyyy! It's my squirrel mate!" The skunk steps aside and disappears into the shadows as the dingo hops down from the stairs to greet you. "Didn't think you'd actually come back, but I'm glad you did! This reminds me… I never introduced myself! Name's Jayden."<br><br>"${pl.name}," you respond, shaking his paw. <br><br>"${pl.name}, eh? Well, come on in! We've got lots of work to do!"<br><br>You do so, feeling rather awkward as you pass strangers scuttling about the house. Fellow students, probably. Grouped up and rented this house together. <br><br>"Aaaaand my room's over here! After you," Jayden says, beckoning you inside. You open the door and find yourself in… a bathroom?<br><br>"Hey, Jayden…" you begin, turning around, but never get to finish your sentence as Jayden smacks his skateboard over your head, and you lose consciousness.`);
            link(`Continue`, function() {
                nukeHyperlinks();
                enableInteraction();
                teleport(`-3,3,10`);
            });
        });

    } else {

        link(`Knock`, function() {
            print(`No answer.`);
        });

    }
}

definitions['-6,3,10'] = function() {
    roomName(`House #1:<br>Front Porch`);

    print(`You are standing in front of House #1. Just like all other houses here, it's expensive-looking.`);

    link(`Go in`, function() {
        print(`The door is locked.`);
    });

    addExits(east);
}

definitions['-4,1,10'] = function() {
    roomName(`House #6:<br>Front Porch`);

    print(`Hold up, this isn't a house at all, but a pizza shop! Pizzarella. Ugh. What an obnoxious name…`);

    link(`Go in`, function() {
        teleport(`-3,1,10`);
    });

    addExits(west);
}

definitions['-6,1,10'] = function() {
    roomName(`House #5:<br>Front Porch`);

    print(`You are standing in front of House #5. Just like all other houses here, it's expensive-looking.`);

    link(`Go in`, function() {
        print(`The door is locked.`);
    });

    addExits(east);
}

definitions['-4,0,10'] = function() {
    roomName(`House #8:<br>Front Porch`);

    print(`You are standing in front of House #8. Just like all other houses here, it's expensive-looking.`);

    link(`Go in`, function() {
        print(`The door is locked.`);
    });

    addExits(west);
}

definitions['-6,0,10'] = function() {
    roomName(`House #7:<br>Front Porch`);

    print(`You are standing in front of House #7. Just like all other houses here, it's expensive-looking.`);

    link(`Go in`, function() {
        print(`The door is locked.`);
    });

    addExits(east);
}

definitions['-5,-1,11'] = function() {
    roomName(`Penthouse`);

    pl.jackalMet = true;

    print(`For a moment you just stand there, awestruck at what you're seeing. Justin's penthouse is <em>huge</em>, with delightfully luscious, clean, <em>glittery</em> carpets, an incredibly high ceiling, and walls seemingly made of glass, surrounding you with incredible views of the island. You can see a large telescope on the balcony. You bet he can spy on everyone on the island from up here! That's far from the most impressive thing out there, though, as he's also got an entire swimming pool and a private, outdoor gym on that balcony.<br><br>Indoors, he's got lots of comfy-looking leather sofas, a home cinema of sorts, and-<br><br>"Heyyyyy, enough gawking. I don't have all day."<br><br>As you are about to exit the elevator, Justin stops you. "Holllllld up. Wipe your paws, at least. This ain't a stable."`);

    link(`Oblige`, function() {
        nukeHyperlinks();
        print(`You oblige, wiping your paws on the doormat.`);
        pl.start();
    });

    link(`Ignore him`, function() {
        nukeHyperlinks();
        print(`You ignore the jackal and walk right in, stomping all over his clean carpets with your dusty paws. Justin growls unhappily, but doesn't confront you.`);
        pl.start();
    });

    pl.start = function() {
        print(`"Alright," Justin says, motioning for you to follow him. He opens a door to reveal a studio of sorts, with all sorts of instruments in it. "It's not a full-blown studio, but you can certainly produce songs in here! Anyway, here's the deal: the studio's all yours for now. Come up with a fresh, exciting, new song for me, and I'll buy it from you for 100 Astleys, as agreed."`);
        link(`Ask for more`, function() {
            killHyperlink(`Ask for more`);
            pl.delHyp();
            print(`Justin frowns. "You want <em>more</em>? You know, I have many fans all over the island who would happily pay <em>me</em> just to be in my presence! You should be grateful I'm paying you at all! And 100 Astleys is a decent amount for a few hours of work amongst you peasants."`);
            link(`Insist`, function() {
                print(`"Grrrrrr. Fine, you can have <em>200</em> Astleys. Final offer. And that's provided I like the song you write for me."`);
                pl.ambitious++;
                pl.twoh++;
                pl.delHyp();
            });
            link(`Back down`, function() {
                print(`You apologize, and agree to stick with 100 Astleys. Justin nods approvingly.`);
                pl.delHyp();
            });
        });
        link(`Ask for royalties`, function() {
            killHyperlink(`Ask for royalties`);
            pl.delHyp();
            print(`"Royalties?! That wasn't the deal! The deal was 100 Astleys. One-off payment, and that's that. I've had some of my fans write songs for me before. <em>They</em> paid <em>me</em> to have me consider their songs! For the chance that they may one day hear me sing their songs on the radio in my beautiful voice. You're lucky you're getting paid at all! So no. No royalties."`);
            link(`Insist`, function() {
                print(`"I said no! So deal with it."`);
                pl.ambitious++;
                pl.delHyp();
            });
            link(`Back down`, function() {
                print(`You apologize, and agree not to take any royalties. Justin nods approvingly.`);
                pl.delHyp();
            });
        });
        link(`Ask to be credited`, function() {
            killHyperlink(`Ask to be credited`);
            pl.delHyp();
            print(`"Hmmmmm. That's a biiiiiiig no. My fans think I write all of my songs myself. Which I used to. And I still write <em>some</em> of them. But they must never know I get others to help me. It ruins the magic."`);
            link(`&quot;The magic, or your ego?&quot;`, function() {
                print(`"Grrrrrrr. You've got some nerve, squirrel. I'm far from being a ruffian, but I'm still a predator, you know~"`);
                pl.ambitious++;
                pl.delHyp();
            });
            link(`Back down`, function() {
                print(`You apologize, and agree for him to take full credit for your song. Justin nods approvingly.`);
                pl.delHyp();
            });
        });
        link(`Get started`, function() {
            print(`"You're ready to start? Splendid! I'll leave you to it, then. Gimme a shout when you're done!"<br><br>With that, Justin leaves, closing the door to the music room behind him. Though you <em>did</em> have some song ideas in the past, you're far from being a real musician. You can't play any instruments, either. Lucky for you, Justin has a fancy musical keyboard that should help you in your endeavor. After all, anyone could compose a simple melody on one of those.`);
            teleport(`-5,-1,12`);
        });
    };

    pl.delHyp = function() {
        killHyperlink(`Insist`);
        killHyperlink(`Back down`);
        killHyperlink(`"The magic, or your ego?"`);
    }
}

definitions['-5,-1,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You are standing in Justin's music room. You can look around, or start composing music on the keyboard to the NORTH.`);

    addExits(north, south, east, west, northeast, northwest, southeast, southwest);
}

definitions['-5,0,12'] = function() {
    pl.pop = false;

    addExits(south, east, west, southeast, southwest);

    roomName(`Music<br>Room`);

    print(`You're at the edge of Justin's music room. There is a musical keyboard here.`);

    addRoomObjectAction(`keyboard`, `compose music`, function() {
        disableInteraction();
        print(`You only get one chance at creating a piece of music for Justin. Are you sure you're ready to proceed?`);
        link(`Yes`, function() {
            nukeHyperlinks();
            print(`Which genre of music do you wish to compose?`);
            link(`Rock`, function() {
                nukeHyperlinks();
                print(`You choose to compose a Rock piece.`);
                pl.styles();
            });
            link(`Pop`, function() {
                nukeHyperlinks();
                print(`You choose to compose a Pop piece.`);
                pl.pop = true;
                pl.styles();
            });
            link(`New Age`, function() {
                nukeHyperlinks();
                print(`You choose to compose a New Age piece.`);
                pl.styles();
            });
        });
        link(`No`, function() {
            nukeHyperlinks();
            enableInteraction();
            print(`Okay! Come back when you're ready!`);
        });
    });

    pl.styles = function() {
        print(`Now, choose the <em>feel</em> of the song.`);
        link(`Happy`, function() {
            nukeHyperlinks();
            if (pl.pop === false) {
                print(`You choose to write a happy song.<br><br>It takes you a few hours of hard work to compose the melody and write all the lyrics, but, eventually, you're happy enough with what you've got and call for Justin to come over.<br><br>He listens to your recording…`);
                setTimer(`15`, function() {
                    print(`"No, no, no!" he finally says. "This doesn't go with my brand! Like, at all!" He sighs. "Eh. I should have known taking some rando off the street wouldn't do me any good. The things you do when you're desperate…"<br><br>You tell him that you're happy to try again.<br><br>Justin shakes his head. "Nah. We're done here."<br><br>With that, he shows you out of his house.`);
                    link(`Leave`, function() {
                        enableInteraction();
                        teleport(`-5,-1,10`);
                    });
                });
            } else {
                print(`You choose to write a happy song.<br><br>It takes you a few hours of hard work to compose the melody and write all the lyrics, but, eventually, you're happy enough with what you've got and call for Justin to come over.<br><br>He listens to your recording…`);
                setTimer(`15`, function() {
                    print(`"Hmmmm. Not bad. Not bad at all! Very amateurish. Rough around the edges. But I can certainly make this into something. Yeeeeeees. This might be my next big hit, actually! The more I listen to it, the more potential I see in this piece. Alright! It's a deal, mate. Here is your money. As promised."`);
                    link(`Take the money and leave`, function() {
                        enableInteraction();
                        print(`You take the money, thank him, and leave.`);
                        if (pl.twoh === 0) {
                            print(`>> MONEY: +100 ASTLEYS`);
                            pl.money += 100;
                        } else {
                            print(`>> MONEY: +200 ASTLEYS`);
                            pl.money += 200;
                        }
                        teleport(`-5,-1,10`);
                    });
                    if (pl.ambitious === 3) {
                        link(`Take the money, but threaten to tell people that he steals others' songs`, function() {
                            nukeHyperlinks();
                            print(`You take the money. "Soooo… you won't credit me?"<br><br>"I already said no. That's final. Now shoo. I've got lots of work to do!"<br><br>You glower at him. "I'll tell everyone. I'll tell people you steal others' songs!"<br><br>The jackal just laughs. "As if they'd believe you! Just some no-name. Beat it."`);
                            if (pl.twoh === 0) {
                                print(`>> MONEY: +100 ASTLEYS`);
                                pl.money += 100;
                            } else {
                                print(`>> MONEY: +200 ASTLEYS`);
                                pl.money += 200;
                            }
                            link(`Leave`, function() {
                                enableInteraction();
                                teleport(`-5,0,13`);
                            });
                        });
                    }
                    link(`Don't take the money (simp)`, function() {
                        enableInteraction();
                        print(`"Nah. You keep the money, sir. Just being able to meet you in person is enough of a reward."<br><br>"That's right, my nut-nibbling friend! I'm glad you realize this. Not everyone does! If your song does well, maybe you'll get to work with me again. But not a word to anyone, got it? As far as you are concerned, I am the sole creator of this song."<br><br>You nod eagerly. "Yes, of course. My lips are sealed, and the song is yours. It's an honor."<br><br>The jackal nods approvingly, and bids you farewell as you leave.`);
                        teleport(`-5,-1,10`);
                    });
                });
            }
        });
        link(`Sad`, function() {
            nukeHyperlinks();
            print(`You choose to write a sad song.<br><br>It takes you a few hours of hard work to compose the melody and write all the lyrics, but, eventually, you're happy enough with what you've got and call for Justin to come over.<br><br>He listens to your recording…`);
            setTimer(`15`, function() {
                print(`"No, no, no!" he finally says. "This doesn't go with my brand! Like, at all!" He sighs. "Eh. I should have known taking some rando off the street wouldn't do me any good. The things you do when you're desperate…"<br><br>You tell him that you're happy to try again.<br><br>Justin shakes his head. "Nah. We're done here."<br><br>With that, he shows you out of his house.`);
                link(`Leave`, function() {
                    enableInteraction();
                    teleport(`-5,-1,10`);
                });
            });
        });
    };
}

definitions['-5,-2,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're at the edge of Justin's music room. There exit door is here.`);

    addExits(north, east, west, northeast, northwest);

    addRoomObjectAction(`door`, `use`, function() {
        print(`You get the feeling Justin wouldn't appreciate it if you waltzed around his house without permission...`);
    });
}

definitions['-4,-1,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're at the edge of Justin's music room. There is a poster on the wall here.`);

    addExits(north, south, west, northwest, southwest);

    addRoomObjectAction(`poster`, `look at`, function() {
        print(`A <em>questionable</em> poster of Justin on a beach hammock, looking smugly at the camera. His bare footpaws take center stage, though, taking up most of the image. Clearly, he's not shy to cater to his fans. Of course, his paws are unrealistically clean and sand-free. Was that just for the picture, or does he wear shoes at the beach, too? You wouldn't be surprised, to be honest…`);
    });
}

definitions['-6,-1,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're at the edge of Justin's music room. There is a poster on the wall here.`);

    addExits(north, south, east, northeast, southeast);

    addRoomObjectAction(`poster`, `look at`, function() {
        print(`The poster is what appears to be a collage of all of Justin's album covers. As expected, Justin is the main subject on every single one of them. They're all quite cheerful, too - lots of palm trees and beaches and blue, glimmering oceans in the backgrounds.`);
    });
}

definitions['-4,0,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're at the edge of Justin's music room. There is a CD player here.`);

    addExits(south, west, southwest);

    addRoomObjectAction(`cd player`, `listen to`, function() {
        print(`You listen to the CD. Of course, it's one of Justin's albums. What else would it be?<br><br>It's very much a pop album. As much as you may hate to admit it, given the jackal's sky-high ego, he <em>does</em> have a lovely voice. You could probably listen to it for hours on end and not get tired of it.`);
    });
}

definitions['-6,0,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're in the corner of Justin's music room. There is nothing of interest here - just a lot of drums.`);

    addExits(south, east, southeast);
}

definitions['-4,-2,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're in the corner of Justin's music room. There is nothing of interest here - just a lot of mixed instruments. You don't even know what half of them are...`);

    addExits(north, west, northwest);
}

definitions['-6,-2,12'] = function() {
    roomName(`Music<br>Room`);

    print(`You're in the corner of Justin's music room. There is nothing of interest here - just a lot of guitars.`);

    addExits(north, east, northeast);
}

definitions['-5,0,13'] = function() {
    if (pl.sex === "m") pl.word = "Dude.";
    else pl.word = "Girl.";

    roomName(`Penthouse`);

    print(`You turn and leave the music room, walking along the luscious carpet towards the elevator, when, all of a sudden, something stings the back of your arm. Turning your head to see what it was, you see a… dart? Yes, a small, reddish dart. You pluck it out of your arm. Looking up, you see Justin standing a few meters away, holding something… but you can't tell what, as your vision has gone all blurry. You collapse onto the floor, closing your eyes from a sudden massive headache.`);

    setTimer(`10`, function() {
        print(`…`);
        setTimer(`3`, function() {
            print(`…`);
            setTimer(`3`, function() {
                print(`…`);
                setTimer(`3`, function() {
                    pl.stuff();
                });
            });
        });
    });

    pl.stuff = function() {
        print(`The headache only lasts for a few seconds. When you open your eyes again, you find yourself lying on your back in-between Justin's footpaws. The jackal himself is <em>towering</em> over you. He's like a <em>mountain</em>! As is… everything else. It's almost like…<br><br>"I've shrunk!"<br><br>"Corrrrrrrect!" the jackal responds. "On second thought… you're right. I <em>don't</em> want you spreading rumors about me. Yeah, most people wouldn't believe you, but one or two might. And once a rumor is started, it can quickly get out of control." <br><br>He lifts his right footpaw, then gently places it on top of you. It's very moist and warm, as if he had just taken it out of a shoe. Did he go somewhere while you were composing music? Were you alone in his frickin' penthouse?!<br><br>Eh, who cares. You've got other things to worry about at the moment. Like the giant paw resting on top of you. It does so gently, but you can <em>feel</em> its weight, its enormous crushing power, and you look up at the jackal nervously from in-between his claws.<br><br>"Any last words, pipsqueak?"`);
        link(`Bite his paw`, function() {
            nukeHyperlinks();
            print(`You bite his paw, hoping this will take him by surprise and allow you to escape. His paw tastes salty from sweat, but, luckily, it's not dirty, and it doesn't even smell bad, which makes the experience a little less unpleasant.<br><br>"Ayyyyy. You little monster!"<br><br>It worked! He lifted his paw off of you and is now inspecting it for damage.<br><br>"You made me bleed!"<br><br>Unfortunately, you can't use the elevator at your current size. Quick, you must hide somewhere, and wait for the shrinking potion to wear off!`);
            link(`Run to the kitchen`, function() {
                nukeHyperlinks();
                print(`The kitchen is the closest room, and you don't have much time. So, off to the kitchen you run!<br><br>You quickly climb up onto the countertop, and now must make a decision: where will you hide?<br><br>On one paw, you imagine the jackal has a good sense of smell. So, perhaps you should hide in something that will mask your scent. The only thing reachable to you that will do this is a chocolate éclair.<br><br>Buuuuuut what if he suddenly gets hungry and decides to eat it? You shudder at the thought of being eaten alive whilst stuck in a pastry.<br><br>Perhaps you should hide in some pot or something? They're all closed, though. You <em>could</em> hide in the blender, but… you don't fancy the idea of being close to them blades. Though Justin would probably never suspect that you'd hide in <em>there</em>…`);
                link(`Hide in the éclair`, function() {
                    nukeHyperlinks();
                    print(`You decide to hide in the éclair. You open the pastry up and squeeeeeeze inside, into all that vanilla-flavored whipped cream. The whole process makes you feel… umm… <em>dirty</em>, making you think of something similar, yet very very different. You try not to think about that. You settle down inside the pastry, only your nose sticking out, just as you hear the clicking of jackal claws on the cold tiles of the kitchen floor. <br><br>Dammit! You entered the éclair from the <em>back</em>, from where it's facing the wall, so that Justin wouldn't see a suspicious hole in it when he entered the kitchen. But now your <em>nose</em> is sticking out from the front! You should have climbed in backwards! Oh, well. Everyone makes mistakes when they're in a hurry. Let's just hope he won't notice you…<br><br>"Helloooooo? Squirreeeeeel! <em>sniff sniff</em> Heeeeere's Justin! <em>sniff sniff</em>"<br><br>You hold your breath. It's hard to see with all this whipped cream in your eyes, but you don't think he saw you. He's presently standing in front of you, opening and closing cupboards. You breathe a sigh of relief. Evidently, he has <em>not</em> seen you.<br><br>"Dear oh dear. Finding that darned squirrel is gonna be more difficult than I thought. I'll need all the energy I can get for this!"<br><br>Your heart skips a beat as you see a giant jackal paw reaching for you. His fingers curl around the éclair, his sharp claws digging into the soft pastry and poking at your skin. And, as he lifts the pastry up to his eye level, all you can think of is: <br><br><em>Why does he wear a watch? In this day and age, where clocks are literally everywhere, including the phone in your pocket?</em><br><br>You are instantly brought back to the horror at hand as the jackal looks right at you, a huge, victorious grin on his face. "Ahhh, a chocolate éclair. My favorite!" Your eyes grow wide as he opens his maw, his hot breath wafting over you. His teeth - previously so innocent-looking as he yawned back at the elevator - now send a shiver down your spine as they loom over you, ready to bite down on your feeble form.<br><br>You try to wiggle out of the pastry, but his claws have a firm grasp on you, preventing your escape. All you can do is watch as that gaping maw gets closer and closer and closer, until…<br><br>CHOMP!<br><br>You squeak in terror, but feel no pain. Slowly, you open your eyes. Justin has bitten into the éclair, narrowly avoiding your feet. Intentionally, you guess. He's toying with you, trying to scare you out of your wits. As much as you hate to admit it, it's working; your heart is beating so fast it feels like it's about to explode. You stare into the dark abyss of the jackal's throat. Is that your destiny? Is that really the last thing you'll ever see? Is his hot, musty breath the last thing you'll ever smell?<br><br>You wipe sticky drool from your face, replacing it with whipped cream. It's a case of 'pick your poison', you suppose. How did his drool get on your face, anyway? You haven't touched his tongue or anything. Your face must have broken a few of those gleaming strands of saliva you saw earlier as it entered the jackal's maw, you suppose. <br><br>Everything's still for now. Why isn't he doing anything? Is he letting you ponder on your fate, stew in your fear before he chomps down on you? That's cruel, even for a heartless bastard like him. Just as you think that, Justin's teeth come down and bite off a chunk of the éclair. He begins to chew, purposefully avoiding you… for now. His mouth begins to water, the previously solid pastry around you soaking it all up, slowly turning into mush.<br><br><em>Squelch. Squelch. Squelch.</em><br><br>There is no more éclair to shield you now - it's just you in a sea of jackal spit and chewed-up pastry, and you plop onto his soft, warm, drool-covered tongue. It's all you can do to try and keep your head out of all this muck, try to <em>breathe</em>. And when you do, there is no fresh air, just Justin's hot, oxygen-deprived breath. You're so focused on fighting for air and avoiding his teeth that it doesn't occur to you that you should be thinking of a way to escape!<br><br>It's too late now, though; Justin's tongue pushes you to the side of his mouth and, before you can so much as utter the quietest of squeaks, his teeth come down on you with a satisfying crunch.<br><br><em>Crunch. Crunch. Crunch. Crunch</em><br><br>Justin looks thoughtful at the bizarre combination of pastry and squirrel in his mouth. It's not great, but it's not awful either. It just <em>is</em>. Protein. You're just some lovely protein to get him through the next few hours, as he works your half-baked song into his next big hit, and then takes full credit for it. <br><br>And who's to stop him? The only person in the world who knows that this song isn't his is currently being sent down to the jackal's gut with a wet <em>gulp!</em><br><br>For the next few hours, you churn violently in the jackal's stomach, which dissolves your flesh and your bones with ease. However, Justin coughs up your skull before it has a chance to digest. He rinses it and puts it off to one side. It would come in handy later!`);
                    if (pl.disposalOn === true) {
                        print(`As he goes back to composing the song, your digested remains are transferred to stew in his <em>guts</em> now, together with the various other foods he had eaten earlier in the day. Slowly, surely, you all become indistinguishable from each other, just brown sludge bubbling away in his gut, which then becomes one, uniform, brown log as all the water is drained from you. <br><br>"Perfect timing!" the jackal chirps as he feels you yearning to come out, all processed and ready to be reborn into the world as something entirely different to what you used to be. He had just finished making the music track! All that remains now is the lyrics. But that can wait for now, as he needs to go and send you down into your new temporary home - the island's sewer system!<br><br>Once he did that, he would get his crew together and, over the next few days, they would record a music video for the song. Justin would be dressed in a gorgeous, glittery, purple tuxedo in it, with a tiny squirrel-like skull pinned to it. This baffled the jackal's crew, but he insisted. Justin loved this ironic twist; you'd be forgotten about forever and no one would ever utter your name again. And yet, they'd all be listening to their favorite new song and <em>watching</em> you, without ever knowing you were the writer. Buried and forgotten in the spotlight.`);
                    }
                    pl.killGame("jackal crunch");
                });
                link(`Hide in the blender`, function() {
                    print(`You decide to hide in the blender. No way you're hiding in freaking <em>food</em>. That's <em>asking</em> to be eaten! You drop down into it, carefully avoiding the blades, and then lie flat on your stomach so that the jackal won't see you. However, as you lay there, you feel like this was a really bad idea. Not that you had much choice, though. And you most definitely can't change your mind <em>now</em>, as you can already hear the jackal's claws clicking against the cold, tiled kitchen floor. All you can do now is hold your breath and hope he doesn't find you.<br><br>"Helloooooo? Squirreeeeeel! <em>sniff sniff</em> Heeeeere's Justin! <em>sniff sniff</em>"<br><br><em>Click. Click. Click. Click.</em><br><br>"Dear oh dear. Finding that darned squirrel is gonna be more difficult than I thought. I'll need all the energy I can get for this!"<br><br>Your heart skips a beat as you hear thudding around you, and something hits your back. You look up to see strawberries falling on top of you, followed by bananas, yogurt, honey, and who knows what else. With your heart in your throat, you get up and try to climb out of there, not even bothered if Justin sees you or not. And see you he does; he grins at you maliciously as he puts the lid on the blender, and hovers his finger over the 'on' button. <br><br>You shake your head viciously.<br><br>He nods in response, his finger even closer to the button.<br><br>You shake your head again, your eyes wide with fear. He's only messing with you… right?<br><br>Your question is answered as Justin once again nods teasingly, then presses the button.<br><br><em>Bzzzzzzzzzzzzzzzzzzz.</em><br><br>A few seconds later, he pours the delicious-looking protein smoothie into a tall glass, its vibrant, red color looking truly appetizing. He chugs it down, then belches, expelling all excess air he swallowed down with the smoothie. <br><br>"Good stuff! Who knew squirrels made such good protein smoothies."<br><br>All fueled up, he goes on to work your half-baked song into his next big hit for the next few hours, a song he will take full credit for.<br><br>And who's to stop him? The only person in the world who knows that this song isn't his is currently bubbling in the jackal's gut. Then again… he <em>ate</em> you. Or, well, <em>drank</em> you, to be more precise. You are his prey now, and all that was once yours is now rightfully his. You belong to him now.<br><br>It doesn't take long for the jackal's stomach to process you, what with you already being a liquid. You begin to nourish his body mere minutes after entering his stomach.`);
                    if (pl.disposalOn === true) {
                        print(`As the jackal continues to work on the song, your pulverized, digested self is transferred to stew in his <em>guts</em> now, together with the various other foods he had you blended with. You were already all indistinguishable from each other, just one uniform smoothie, and it's no different now - just brown sludge bubbling away in his gut, which then becomes one, uniform, brown log as all the water is drained from you. <br><br>"Perfect timing!" the jackal chirps as he feels you yearning to come out, all processed and ready to be reborn into the world as something entirely different to what you used to be. He had just finished making the music track! All that remains now is the lyrics. But that can wait for now, as he needs to go and send you down into your new temporary home - the island's sewer system!`);
                    }
                    pl.killGame("jackal smoothie");
                });
            });
        });
        link(`Tell him he'll make his carpet dirty`, function() {
            nukeHyperlinks();
            print(`The jackal laughs at this.<br><br>"Oh, don't worry about that. You're not on my carpet, you're lying on the <em>doormat</em>. But I appreciate your concern. Very thoughtful of you."<br><br>Without further ado, the jackal shifts his full weight onto you. It all happens as if in slow motion, your brain unable to process the fact that it's being crushed underfoot, and will soon cease to function. The jackal's pawpads are all you can see, all you can smell, all you can feel, all you can <em>taste</em>. They've become your whole world now, taking over most of your senses. As for hearing, well… the crunching of your bones and the ironically peaceful chirping of a bird coming in through an open window are the only things you pick up. <br><br>Justin's full weight is upon you now, and yet… you're still alive. Somehow. Broken, but alive, and pressed firmly into his paw. That explains it, probably; his paws are surprisingly soft, apparently too soft to crush you completely with Justin's weight alone.<br><br>Relief washes over you as his footpaw goes back up. You try to breathe in the fresh air, but find that you can't.<br><br>"Ayyyy. You're still alive? Guess I'm lighter than I thought. Ah, well. Let's try this again, shall we?"<br><br>You look in dismay at the footpaw coming back down to step on you, once again overwhelming your vision. This time, Justin twists it left and right to grind you down against the rough doormat. The friction heats you up almost instantly, and you feel like you're not only being ground into minced meat, but also <em>cooked</em> at the same time.<br><br>A few seconds later, Justin lifts up his paw again to find that you're now nothing more than a reddish stain on his doormat. And the underside of his paw, of course.<br><br>"Oh, great. I didn't get anything to wash my paw…"<br><br>He awkwardly jumps on one paw towards the bathroom, where he rinses whatever was left of you on his paw down into the sewers. The original idea was that he would throw the doormat out after he was done with you, but he was way too busy turning your half-baked song into his next big hit for the rest of the day to get a new doormat, so he just left you there for now.<br><br>Many critters would come into the jackal's penthouse over the next few days, wiping their grimy paws on the doormat - and <em>you</em> -, to help with the production of the song. Even after the song was released to massive success, the mat was still there, as the jackal was too busy with other things to think about a silly doormat, and his cleaner apparently wasn't bothered by it. It's a doormat, after all - it's <em>meant</em> to be dirty. <br><br>Sometimes, if they were lucky and had something that the jackal was interested in, some of his fans got the opportunity to visit him in his penthouse. As soon as they entered, they rattled on about how amazing he is and how genius his new song was. They were saying that even as they wiped their grimy paws against the doormat, unknowingly wiping the dirt from them into the song's actual writer.`);
            pl.killGame("jackal stomp");
        });
        link(`Beg him for mercy`, function() {
            nukeHyperlinks();
            print(`Swallowing your pride, you beg the jackal for mercy, promising that you won't utter a word to <em>anyone</em>, that he can have your song for free and claim it as his own.<br><br>To your relief, the paw comes off. Justin leans down and picks you up.<br><br>"Lies," he says as you dangle from his claws right in front of his muzzle. "You'll say anything to save your skin. But, once you're safely well away from me, you'll quickly go back on your promises."<br><br>You insist that you won't, but he just shakes his head. "Listen, I'm not taking any risks. I have a lot to lose. Fame! Money! Reputation! You, on the other hand, have <em>nothing</em> to lose, just your dumb, pointless peasant life. So I'm afraid you have to go."<br><br>"But-"<br><br>He gently squeezes your mouth shut in-between two claws. "No buts. But! I do appreciate your ability to swallow your pride. So, I'm willing to grant you a better fate than being squished underfoot like some dumb bug. I'll <em>swallow</em> you."`);
            link(`Accept his offer (willing)`, function() {
                nukeHyperlinks();
                print(`"I'm… I'm okay with that."<br><br>"You are?" the jackal asks, looking at you quizzically.<br><br>You nod.<br><br>"First, you try to get more money from me, then you threaten me… and now you're eager to go down my throat? You're a strange one, alright."<br><br>"Well… I hated the idea of you stealing my song, and taking all credit for it. But… if you eat me, I essentially become a part of you. And, if I become a part of you, then… well… I guess I'll get my share of glory. Vicariously. It's a win-win situation."<br><br>"Correction: I didn't <em>steal</em> your song. I offered payment. But you're right! You shall have more glory in death than you could ever dream of in your pathetic, little life. I'm glad you finally came to your senses. It always saddens me when people don't realize how honored they are to even lay their <em>eyes</em> on me."<br><br>Without another word, he simply tilts his head back and plops you onto his tongue. His maw is… perfection, to put it bluntly. Teeth snow-white and gleaming dangerously, tongue perfectly clean and vibrantly pink, his breath pleasantly warm and sweet. You feel like you could sit and stare for <em>hours</em>, just taking in its beauty, but you only get a few seconds before his jaws snap shut with a satisfying click of his teeth. That's okay, though, as you now get to experience it with a <em>different</em> sense - the sense of <em>touch</em>, as his tongue rubs against you, rubbing drool into your fur and analyzing your flavor. It feels like heaven, his warm, soft, slippery tongue pressing against your body like that.`);
                link(`Compliment him`, function() {
                    print(`You tell him that he's got the most beautiful maw in the whole wide world. He grins at that. "I'm the most beautiful <em>person</em> in the world. No one even comes close."`);
                });
                link(`Kiss his tongue`, function() {
                    print(`You kiss his tongue. Justin smirks at that, and responds by giving your face a new coat of fresh, hot jackal spit.`);
                });
                link(`Relax`, function() {
                    nukeHyperlinks();
                    print(`You relax, letting Justin do as he pleases to you. He doesn't play around; once he registers your taste and lubricates you enough, he simply tilts his head back and swallows. Down his tight gullet you go, past his beating heart, and into his stomach, which is full of green mush, which - judging by the smell - is half-digested salad. No surprises there - you're certain he eats as healthily as he can, wanting to always look his best. You just sit there in darkness, the green mush reaching all the way up to your chest, your small toes already tingling from digestion.<br><br>Though peaceful at first, the jackal's stomach soon realizes that it's got something more concrete inside it than a measly salad, and the grinding and churning and growling intensifies. For the next few hours, you churn violently in the jackal's stomach, which dissolves your flesh and your bones with ease. Meanwhile, the jackal works on turning your half-baked song into his next masterpiece, the song that is now truly <em>his</em>; he claimed you, he devoured you, so all that ever belonged to you is now rightfully his. He <em>owns</em> you.`);
                    if (pl.disposalOn === true) {
                        print(`After a while, your digested remains are transferred to stew in his <em>guts</em> now, together with the now digested salad he ate earlier in the day. Slowly, surely, you all become indistinguishable from each other, just brown sludge bubbling away in his gut, which then becomes one, uniform, brown log as all the water is drained from you. <br><br>"Perfect timing!" the jackal chirps as he feels you yearning to come out, all processed and ready to be reborn into the world as something entirely different to what you used to be. He had just finished making the music track! All that remains now is the lyrics. But that can wait for now, as he needs to go and send down your undesirables to where they belong, while everything else that was once you is now just high-quality protein and nutrition that will serve his body well.`);
                    }
                    pl.killGame("jackal simp");
                });
            });
            link(`Try to wiggle free of his grasp`, function() {
                nukeHyperlinks();
                print(`Justin just laughs at your pathetic attempt at escaping.<br><br>"${pl.word} Even if you <em>did</em> manage to pry my claws off your head, what then? You'd just fall to your death. Not very smart, are you…"<br><br>"Better than stewing in your stinking gut!" you retort.<br><br>Justin frowns, looking offended. "Don't you realize how much of an <em>honor</em> this is? I'm giving you a chance to become a part of me. Me! The greatest jackal who ever existed! The greatest <em>person</em> who ever existed! I've even had a couple of fans come up to me in the past, <em>begging</em> to go down my throat, paying <em>millions</em> for the privilege of becoming a part of my divine body!" He shakes his head, his pupils dilating. He looks genuinely <em>sad</em>. "It hurts when someone doesn't appreciate a gift. This was my <em>reward</em> for you, for writing such an awesome song. Oh, well. Your loss. Let's just get this over with. I'm starving."<br><br>You just stare at him, utterly confused by what he said, but the sight of his gaping maw under your feet quickly stirs you into action, and you begin to flail about. Not that this does you any good, of course; you're completely at his mercy now.<br><br>Without another word, he plops you onto his tongue. As much as you hate to admit it, his maw is, well, <em>flawless</em>. Teeth snow-white and gleaming dangerously, tongue perfectly clean and vibrantly pink, his breath warm and sweet. At the very least, it's not as gross in here as you feared it would be. But that doesn't make it any less dangerous, and it doesn't change the fact you're about to become <em>meat</em>. <br><br>Justin's jaws snap shut with a satisfying click of his teeth, your only way of escape taken away in an instant. His tongue rubs against you, rubbing drool into your fur and analyzing your flavor. You try to resist it, but it's too strong, so, in the end, all you can do is lay still as you are enveloped in jackal spit, and tasted as if you're some candy, and not a living person.<br><br>He doesn't play around; once he registers your taste and lubricates you enough, he simply tilts his head back and swallows. Down his tight gullet you go, past his beating heart, and into his stomach, which is full of green mush, which - judging by the smell - is half-digested salad. No surprises there - you're certain he eats as healthily as he can, wanting to always look his best. You just sit there in darkness, the green mush reaching all the way up to your chest, your small toes already tingling from digestion.<br><br>Though peaceful at first, the jackal's stomach soon realizes that it's got something more concrete inside it than a measly salad, and the grinding and churning and growling intensifies. For the next few hours, you churn violently in the jackal's stomach, which digests your flesh and your bones with ease. However, Justin coughs up your skull before it has a chance to digest. He rinses it and puts it off to one side. It would come in handy later!`);
                if (pl.disposalOn === true) {
                    print(`Soon, your digested remains are transferred to stew in his <em>guts</em> now, together with the salad he had eaten earlier in the day. Slowly, surely, you all become indistinguishable from each other, just brown sludge bubbling away in his gut, which then becomes one, uniform, brown log as all the water is drained from you. <br><br>"Perfect timing!" the jackal chirps as he feels you yearning to come out, all processed and ready to be reborn into the world as something entirely different to what you used to be. He had just finished making the music track! All that remains now is the lyrics. But that can wait for now, as he needs to go and send you down into your new temporary home - the island's sewer system!<br><br>Once he did that, he would get his crew together and, over the next few days, they would record a music video for the song. Justin would be dressed in a gorgeous, glittery, purple tuxedo in it, with a tiny squirrel-like skull pinned to it. This baffled the jackal's crew, but he insisted. Justin loved this ironic twist; you'd be forgotten about forever and no one would ever utter your name again. And yet, they'd all be listening to their favorite new song and <em>watching</em> you, without ever knowing you were the writer. Buried and forgotten in the spotlight.`);
                }
                pl.killGame("jackal nom");
            });
        });
    };
}

definitions['5,1,10'] = function() {
    roomName(`Cinema`);

    print(`You are standing in front of the cinema. It's a big, old building, which - in your opinion - would work better as a church or something than a cinema. There is a note stuck to the large, wooden doors.`);

    addExits(northeast);

    if (pl.jobComplete === true) {
        link(`Enter cinema`, function() {
            print(`No point going back there…`);
        });
    } else {

        if (isInInventory(`cleaning supplies`) || isInInventory(`janitor's key`)) {
            link(`Enter cinema`, function() {
                teleport(`5,1,12`);
            });
        } else {
            addRoomObjectAction(`note`, `read`, function() {
                print(`The note reads:<br><br><strong>WE'RE HIRING!<br><br>We have one vacancy open for a janitor. 50 Astleys per day, paid daily! Extra 50 Astleys as a bonus for your first shift! Inquire within!</strong>`);
                link(`Enter cinema`, function() {
                    teleport(`5,1,11`);
                });
            });
        }

    }
}

definitions['5,1,11'] = function() {
    roomName(`Cinema`);

    print(`You come into the cinema and inquire about the vacancy. They give you the job instantly, no questions asked. You are given a blue uniform and a key to the storage room, where you will find all the cleaning supplies. Your job for tonight is to clean Rooms 1 and 2, as well as the toilets.<br><br>>&gt; YOU RECEIVED JANITOR'S KEY`);

    link(`Get started!`, function() {
        teleport(`5,1,12`);
    });

    addInventoryObjectAction(`janitor's key`, `look at`, function() {
        print(`A dark blue key. Quite an unusual color for a key, huh. It's supposed to open the cinema's storage cupboard, where you will find all the necessary cleaning supplies to do your job.`);
    });
}

definitions['5,1,12'] = function() {
    roomName(`Lobby`);

    print(`You are standing in the lobby, by the entrance door.`);

    addExits(north, east, west, northeast, northwest);

    link(`Leave`, function() {
        teleport(`5,1,10`);
    });
}

definitions['5,2,12'] = function() {
    roomName(`Lobby`);

    print(`You are standing in the lobby, by the main desk. There's a queue of 5 people here, all waiting to buy their tickets.`);

    addExits(south, east, west, southeast, southwest);
}

definitions['6,1,12'] = function() {
    roomName(`Lobby`);

    print(`You are standing in the corner of the lobby. There's nothing here.`);

    addExits(north, west, northwest);
}

definitions['4,1,12'] = function() {
    if (pl.sex === "m") pl.word = "pal";
    else pl.word = "lass";

    roomName(`Lobby`);

    if (pl.possumGone === false) {

        print(`You are standing in the lobby, by the food counter. The smell of hot, fresh popcorn is making your mouth water. A bored-looking possum is standing behind the counter.`);

        addRoomObjectAction(`possum`, `look at`, function() {
            print(`The scruffy-looking possum is wearing nothing but an apron of the same color as your uniform, revealing plenty of his unbrushed, messy fur. He's tapping his claws against the counter, staring at something. When you follow his line of sight, you realize he's staring at a <em>clock</em> on the opposite wall.`);
        });

        addRoomObjectAction(`possum`, `talk to`, function() {
            if (pl.possumTalk === 0)
                print(`"Welcome to the Valley of Boredom," he says, not taking his eyes off the clock.`);
            else if (pl.possumTalk === 1)
                print(`"Don't feel like talkin'."`);
            else if (pl.possumTalk === 2)
                print(`"Don't you have cleaning to do?"`);
            else if (pl.possumTalk === 3)
                print(`"I just wanna go home already. The sequel to my favorite video game came out just a few hours ago…"`);
            else
                print(`"Still four hours to go," the possum says with a sigh.`);
            pl.possumTalk++;
        });

    } else print(`You are standing in the lobby, by the food counter. The smell of hot, fresh popcorn is waning.`);

    addExits(north, east, northeast);

    if (pl.possumHelp === 1) {
        disableInteraction();
        print(`Deciding to use your remaining time to cover the possum's shift so that he can go and play his game, you go up to the popcorn stand and tell him so.<br><br>He raises an eyebrow, surprised at your kind gesture. "Eck. You want money, don't ya. Nuffin's free. I'm afraid I need it too, ${pl.word}."`);
        link(`Do it for free`, function() {
            nukeHyperlinks();
            print(`You explain to the possum that no, you don't want any money. You just wanna help out, since you finished all your work already anyway.<br><br>The possum blinks in surprise. And again.<br><br>"Eep!" you exclaim fearfully as he grabs you by the shoulders. Whatever you were expecting, it certainly wasn't a kiss.<br><br>"I could kiss you right now," the possum says, his demeanor having changed entirely. "Well, I guess I have. Anyway. Cheerio."<br><br>He takes off his apron, shoves it into your paws, then scuttles out of the cinema, on all fours no less. You are left to take over the popcorn stand. The possum hasn't even shown you how to do anything here! Luckily for you, there are instructions plastered right onto the wall. <br><br>You are worried that your boss might show up and question you on this "arrangement", but, luckily, he doesn't. When he comes down at the end of the possum's shift, everything that needed to be cleaned was cleaned (well, apart from that one toilet…), and all the popcorn that needed to be served was served, so all was good. He gives you money for your work. <br><br>>&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
            pl.possumGone = true;
            pl.possumHelp++;
            pl.jobComplete = true;
            enableInteraction();
            clearRoom();
            removeInventoryObject(`cleaning supplies`);
        });
        pl.moovee();
    }
}

definitions['6,2,12'] = function() {
    roomName(`Lobby`);

    print(`You are standing in the corner of the lobby. There's nothing here.`);

    addExits(south, west, southwest);
}

definitions['4,2,12'] = function() {
    roomName(`Lobby`);

    print(`You are standing in the lobby, right by the hallway that leads to the movie rooms.`);

    addExits(south, east, southeast);

    if (pl.jobComplete === false) {
        addExits(north);
    } else {
        addFakeExits([north], function() {
            print(`No point going back there…`);
        });
    }
}

definitions['4,3,12'] = function() {
    roomName(`Hallway`);

    print(`You are in the hallway that leads to the various movie rooms. The red carpet lining the floor is torn and dirty from the dozens of clawed feet that trampled it during its lifetime.`);

    addExits(north, south);
}

definitions['4,4,12'] = function() {
    roomName(`Hallway`);

    print(`You are in the hallway that leads to the various movie rooms. The red carpet lining the floor is torn and dirty from the dozens of clawed feet that trampled it during its lifetime.<br><br>To the WEST is Room 1. To the EAST is Room 2.`);

    addExits(north, south, east, west);

    removeInventoryObjectAction(`janitor's key`, `use`);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pl.cleaningDone = function() {
        if (pl.oneCleaned === 1 && pl.twoCleaned === 1 && pl.threeCleaned === 1) {
            disableInteraction();
            print(`Having completed all your cleaning duties for the night, you look at the clock. Huh… you still have one hour left of your shift! You <em>could</em> go to your boss and ask if anything else needs to be cleaned.<br><br>But naaaaaaah. Who does that?! No way you're taking on more work! You get paid minimum wage, you put in the minimum effort required. Nonetheless, you can't just stand around - you'll get told off! You're tempted to ask your boss if you can go home, but… you know he won't let you. A shift is a shift; even if you finished all your duties, you're expected to stay for its entire duration.<br><br>So… what are you gonna do?`);
            pl.moovee();
            if (pl.possumTalk >= 3) {
                link(`Cover the possum so he can go play his game`, function() {
                    enableInteraction();
                    pl.possumHelp++;
                    teleport(`4,1,12`);
                });
            }
        }
    };

    pl.moovee = function() {
        link(`Hide; go watch a movie!`, function() {
            nukeHyperlinks();
            print(`With nothing better to do for the rest of your shift, you decide to go ahead and sneak into one of the movie rooms to watch a movie. Your boss will never find you in such darkness! Out of sight, out of mind. He'll just assume you've been somewhere cleaning something.<br><br>Hopefully.<br><br>Anyway, what's on tonight? Hmm…<br><br>"Rat at Louie's" is currently playing in Room 3, and "The Emperor's New Hooves" in Room 4.<br><br>Where will you go?`);
            link(`Room 3`, function() {
                enableInteraction();
                teleport(`3,6,12`);
            });
            link(`Room 4`, function() {
                enableInteraction();
                teleport(`5,6,12`);
            });
        });
    };

    pl.cleaningDone();
}

definitions['4,5,12'] = function() {
    roomName(`Hallway`);

    print(`You are in the hallway that leads to the various movie rooms. The red carpet lining the floor is torn and dirty from the dozens of clawed feet that trampled it during its lifetime.<br><br>To the WEST is the storage room.`);

    addExits(north, south);

    if (isInInventory(`janitor's key`)) {

        addInventoryObjectAction(`janitor's key`, `use`, function() {
            teleport(`3,5,12`);
        });

        addFakeExits([west], function() {
            print(`The door is locked.`);
        });

    } else {

        addFakeExits([west], function() {
            teleport(`3,5,12`);
        });

    }
}

definitions['5,4,12'] = function() {
    roomName(`Room 2`);

    addExits(west);

    print(`You enter Room 2. It's pitch black in here, and completely empty.`);

    if (pl.twoCleaned === 0) {
        link(`Start cleaning`, function() {

            nukeHyperlinks();

            if (!isInInventory(`cleaning supplies`)) {
                print(`You don't have any cleaning supplies!`);
            } else {
                print(`You turn on the lights and begin cleaning the room. You won't lie, it's a <em>little</em> spooky; the lights are so dim and yellowish, you might as well be cleaning by candlelight! <br><br>You pick up a few half-eaten bags of popcorn, vacuum trampled popcorn off the floor, collect a few empty soda cans, the usual…<br><br>Having finished with the cleaning, you are ready to leave the room.`);
                pl.twoCleaned++;
            }

        });
    }
}

definitions['3,4,12'] = function() {
    roomName(`Room 1`);

    addExits(east);

    print(`You enter Room 1. It's pitch black in here, and completely empty.`);

    if (pl.oneCleaned === 0) {
        link(`Start cleaning`, function() {

            nukeHyperlinks();

            clearExits();

            if (!isInInventory(`cleaning supplies`)) {
                print(`You don't have any cleaning supplies!`);
                addExits(east);
            } else {
                print(`You turn on the lights and begin cleaning the room. Well. "Lights" might be an overstatement. With the amount of light they're actually putting out, they might as well be glowsticks…<br><br>You pick up a few half-eaten bags of popcorn, vacuum trampled popcorn off the floor, collect a few empty soda cans, the usual…<br><br>"Huh…" you mutter as you stumble upon someone's belongings: a beige coat hanging from the back of one of the seats, with a pink handbag standing dutifully on the floor, waiting for its owner. Why would someone walk out without taking any of their belongings? Strange…`);
                link(`Search the handbag`, function() {
                    print(`You search the handbag for anything that may help you identify or get in touch with its owner. No phone, no wallet… you do manage to fish out a business card, though! <br><br>"Elisa - Florist - Tel. 'florelis'"`);
                });
                link(`Put it all into the Lost and Found box`, function() {
                    nukeHyperlinks();
                    print(`You put it all into the Lost and Found box. Having finished with the cleaning, you are ready to leave the room.`);
                    addExits(east);
                    pl.oneCleaned++;
                });
            }

        });
    }
}

definitions['4,6,12'] = function() {
    roomName(`Hallway`);

    print(`You are in the hallway that leads to the various movie rooms. The red carpet lining the floor is torn and dirty from the dozens of clawed feet that trampled it during its lifetime.<br><br>To the WEST is Room 3. To the EAST is Room 4. To the NORTH are the toilets.`);

    addExits(north, south);

    removeInventoryObjectAction(`janitor's key`, `use`);

    addFakeExits([east, west], function() {
        print(`No point going in there…`);
    });

    pl.cleaningDone();
}

definitions['4,7,12'] = function() {
    if (pl.sex === "m") pl.word = "boi";
    else pl.word = "girl";

    roomName(`Toilets`);

    if (pl.meerCum === 0) {

        addExits(south);

        print(`You enter the toilets. The bright, white light inside is flickering and buzzing ever so quietly. There is no one here.`);

        if (pl.threeCleaned === 0) {
            link(`Start cleaning`, function() {

                nukeHyperlinks();

                if (!isInInventory(`cleaning supplies`)) {
                    print(`You don't have any cleaning supplies!`);
                } else {
                    print(`You never thought you'd be cleaning public toilets, but here you are. Oh, well. Better get this done and over with. You flush the first toilet, then begin scrubbing it clean. Luckily, it's not as dirty as you expected it to be, and it doesn't take long for you to finish the job.<br><br>Then, you move onto toilet number 2. Heh. No pun intended…<br><br>However, when you flush it, something comes floating back up from the pipe.<br><br>You stare in horror at the rabbit skull bobbing up and down in the toilet water. What a terrible fate. You make a mental note not to end up like this poor rabbit…<br><br>Not wanting to deal with this, you leave this toilet as is. Who cares if you get fired; you're not planning on <em>staying</em> here, and you'll get money for this one shift either way.<br><br>You hope…<br><br>You mop the floors and clean the wash basins. Now that you're done with the cleaning, you're ready to leave.`);
                    pl.threeCleaned++;
                }

            });
        }

    } else {

        print(`When you open your eyes again, you see the familiar flickering of the toilet lights. You are wrapped in something warm. It's… it's a paw. A giant meerkat paw, its fingers curled tightly around you. <br><br>"Hey, you! You're finally awake~!"<br><br>The paw's grip on you loosens - if only a little -, allowing you to twist around and look at your captor. Or, well, at least <em>try</em> to. But you find that your feet are stuck in something… warm? And wet? You look down and, to your horror, see that they're stuck in the meerkat's once again rock-hard member.<br><br>"What the…" you manage to say before the meerkat covers your mouth with a finger. <br><br>"Shhhh. Relax, friend. It'll make this so much easier for both of us." You feel the meerkat pushing you in even deeper, so that you're up to your <em>knees</em> inside his member now. "You took away my moment of bliss, so it's only fair that I should take it back, you know. I'm actually glad you did that. This is gonna be so much better than any blowjob~"<br><br>His member is slowly swallowing you whole like some musky, sticky snake. You're up to your waist inside it now, and you try to struggle, but it's pointless; his grip on you is way too strong.`);

        link(`Bite him`, function() {
            nukeHyperlinks();
            print(`You try to bite him, but it's hard; his grip on you is way too tight. He can feel your teeth nibbling meekly at his skin, trying to bite into it, and smirks.<br><br>"Oh no, you don't," he says, pressing his claws threateningly into your back. "Unless you wanna become a shish kebab, that is~"<br><br>Having no choice, you stop trying to bite him. Still, as pointless as it is, you never stop squirming about as the meerkat stuffs you further and further into his cock; it swallows you up to your chest, then your neck, and then…<br><br>You hear the door to the toilets creak open. The meerkat goes still.<br><br>"${pl.name}?" a voice calls. It's your boss! You try to call back, but the meerkat squeezes your muzzle shut. You struggle and squirm with renewed vigor, your salvation so close and yet so far. "Dear oh dear. Where has that squirrel gotten to…"<br><br>The door to the toilets creaks open again as your boss leaves, leaving you in utter despair. The toilets are once again silent. That is, until the meerkat stirs into action again. "Phew! That was close!" he says cheerfully. "You <em>almost</em> got out of atoning for your terrible deeds! Tsk, tsk, tsk. We can't have that!"<br><br>With one final push, he sends your head into his cock, never to be seen again. It's dark and wet and musky in here, not to mention tight and <em>slimy</em>. All the air is forced out of your lungs as you make your way down the meerkat's member, to eventually be deposited into a tight sack with a measly puddle of cum at the bottom.<br><br>"Hmmmmm. Keep that up, sweetheart. That feels good~" the meerkat says as he feels you thrashing around in his ballsack, trying to escape. Still sitting on the toilet, he leans back and relaxes, stroking his member, thinking what it must be like for you; confined to a stranger's ballsack, melting into cum in complete darkness, dying only to give your captor a few seconds of bliss… you must feel so, so powerless and humiliated. Which in turn makes the meerkat feel <em>powerful</em>. Your entire life, your entire existence is now in his paws. He's like a <em>god</em>! Well, more like in his <em>balls</em>, but the point still stands…<br><br>Over time, he feels your solid form become softer and softer, until you go completely still and he can no longer feel your squirrelly form when he fondles with his balls. The pressure he feels is immense, all that fresh, new cum that was once <em>you</em> wanting <em>out</em>. The meerkat chuckles. "Want out already? You haven't been in there for even 10 minutes! Surely, it can't be <em>that</em> bad in sexy meerkat balls~?"<br><br>He waits a few moments more to make sure every last bit of you has been liquefied. He's surprised at how quickly the serum worked - the guy he bought it from said that the "digestion" into cum can take anything from five minutes to an hour, and he expected that that was marketing talk for "it's always gonna be one hour, unless you do it under perfect lab conditions", but apparently not. <br><br>Ohhhh, he can no longer wait! The meerkat begins to stroke his member more intensely, and it only takes a few seconds of this to send him over the edge. With so much built-up pressure, his seed shoots out of his member like it's a pressure washer, splattering the sticky, musky ex-squirrel all over the walls and the ceiling and the floor. He didn't <em>mean</em> to do that, but the feeling of ecstasy was so strong he forgot everything in that moment, even his own name. For that short, short snippet of time, he had transcended reality. <br><br>Even as his member began to go flaccid, seed still kept pouring out of it, and he turned to let it pour down into the toilet. Not much point to that, considering the entire cubicle was splattered with his seed now, but whatever…<br><br>Right at the very end, a tiny squirrel skull comes oozing out with the seed, and lands with a soft plop in the toilet water.`);
            if (pl.disposalOn) {
                print(`Feeling sleepy after what must have been the most intense orgasm of his life, the meerkat pees on top of "you", then sends the vile mixture of his bodily fluids down into the sewers with a single flush, and so you begin your new life as random, unrecognizable, anonymous sludge.`);
            }
            pl.killGame("meercum");
        });

        link(`Resign to your fate`, function() {
            nukeHyperlinks();
            print(`Knowing that it's pointless to resist, that you're entirely at his mercy now and there is no way out of this, you resign to your fate, your body relaxing, going limp.<br><br>"Gooooood ${pl.word}," the meerkat coos, loosening his grip on you. "I knew you'd come around~"<br><br>You don't respond, you don't struggle, you don't do <em>anything</em> as the meerkat stuffs you further and further into his cock; it swallows you up to your chest, then your neck, and then…<br><br>You hear the door to the toilets creak open. The meerkat goes still, his eyes wide. He tightens his grip on you once again, squeezing your muzzle shut. <br><br>"${pl.name}?" a voice calls. It's your boss! Not that it matters. You know he won't hear your muffled cries for help, so you don't even try, instead just continuing to lie limp and quiet in your captor's sweaty paw. "Dear oh dear. Where has that squirrel gotten to…"<br><br>The door to the toilets creaks open again as your boss leaves. "Phew! That was close!" the meerkat says cheerfully. "You know, with how good you're being right now, I'm almost willing to let you go. But I'm way too excited now~"<br><br>A thought pops into your head. Maybe you can bargain with him? But… what can you offer? That intense smell of musk is clouding your thoughts, making it difficult to think. Maybe you can-<br><br>With one final push, the meerkat pushes your head into his cock, never to be seen again. It's dark and wet and musky in here, not to mention tight and <em>slimy</em>. All the air is forced out of your lungs as you make your way down the meerkat's member, to eventually be deposited into a tight sack with a measly puddle of cum at the bottom.<br><br>"Ahh. All done, sweetheart. Now all you need to do is just sit back, relax, and melt into cum for me~." Still sitting on the toilet, the meerkat leans back and himself relaxes as well, stroking his member, thinking what it must be like for you; confined to a stranger's ballsack, melting into cum in complete darkness, dying only to give your captor a few seconds of bliss… you must feel so, so powerless and humiliated. Which in turn makes the meerkat feel <em>powerful</em>. Your entire life, your entire existence is now in his paws. He's like a <em>god</em>! Well, more like in his <em>balls</em>, but the point still stands…<br><br>Over time, he feels your solid form become softer and softer, until you go completely still and he can no longer feel your squirrelly form when he fondles with his balls. The pressure he feels is immense, all that fresh, new cum that was once <em>you</em> wanting <em>out</em>. The meerkat chuckles. "Want out already? You haven't been in there for even 10 minutes! Surely, it can't be <em>that</em> bad in sexy meerkat balls~?"<br><br>He waits a few moments more to make sure every last bit of you has been liquefied. He's surprised at how quickly the serum worked - the guy he bought it from said that the "digestion" into cum can take anything from five minutes to an hour, and he expected that that was marketing talk for "it's always gonna be one hour, unless you do it under perfect lab conditions", but apparently not. <br><br>Ohhhh, he can no longer wait! The meerkat begins to stroke his member more intensely, and it only takes a few seconds of this to send him over the edge. With so much built-up pressure, his seed shoots out of his member like it's a pressure washer, splattering the sticky, musky ex-squirrel all over the walls and the ceiling and the floor. He didn't <em>mean</em> to do that, but the feeling of ecstasy was so strong he forgot everything in that moment, even his own name. For that short, short snippet of time, he had transcended reality. <br><br>Even as his member began to go flaccid, seed still kept pouring out of it, and he turned to let it pour down into the toilet. Not much point to that, considering the entire cubicle was splattered with his seed now, but whatever…<br><br>Right at the very end, a tiny squirrel skull comes oozing out with the seed, and lands with a soft plop in the toilet water.`);
            if (pl.disposalOn) {
                print(`Feeling sleepy after what must have been the most intense orgasm of his life, the meerkat pees on top of "you", then sends the vile mixture of his bodily fluids down into the sewers with a single flush, and so you begin your new life as random, unrecognizable, anonymous sludge.`);
            }
            pl.killGame("meercum");
        });

    }
}

definitions['3,5,12'] = function() {
    roomName(`Storage<br>Room`);

    if (isInInventory(`janitor's key`)) {
        removeInventoryObject(`janitor's key`);
        print(`You use the Janitor's Key and enter the storage room, grabbing various cleaning supplies, ready to begin your shift.`);
        addInventoryObjectAction(`cleaning supplies`, `inspect`, function() {
            print(`A bunch of ol' cleaning supplies.`);
        });
    } else {
        print(`You are in the Storage Room. There is nothing of interest here.`);
    }

    addFakeExits([east], function() {
        teleport(`4,5,12`);
    });
}

definitions['3,6,12'] = function() {
    roomName(`Room 3`);

    print(`You go over to Room 3, but it's full. You're not surprised, really; this movie came out just yesterday!<br><br>Guess you'll have to go to Room 4 after all…`);

    link(`Go to Room 4`, function() {
        teleport(`5,6,12`);
    });
}

definitions['5,6,12'] = function() {
    if (pl.sex === "m") pl.word = "sir";
    else pl.word = "ma'am";

    if (pl.sex === "m") pl.word2 = "boiiiiiii";
    else pl.word2 = "giiiiiiiiirl";

    if (pl.sex === "m") pl.word3 = "him";
    else pl.word3 = "her";

    if (pl.sex === "m") pl.word4 = "tailhole";
    else pl.word4 = "lady parts";

    roomName(`Room 4`);

    print(`Wow. You knew that this movie was old, but there's not a single person watching it here! In fact, if no one's watching it, why is it still being screened?!<br><br>Oh, well. Shrugging it off, you plop down onto one of the Premium seats with a content sigh. This is quite cool, actually - a whole cinema room just for you!<br><br>After a good while, you see movement in the corner of your vision. You turn to see that someone has entered the room. Your heart skips a beat. It's too dark for you to see who it is from up here, but you pray to the great squirrel in the sky that it's not your boss.<br><br>To your relief, as the person comes closer, you see that it's not. It's just some meerkat. Phew! Bullet dodged. But… you watch in confusion as the meerkat gets closer and closer… and sits right behind you!!!<br><br>Seriously, an entire, empty cinema room, dozens of seats to choose from, and he picks the one directly behind you?! You sigh in exasperation and try not to think about it, turning your attention back to the movie.<br><br>That is…<br><br>Until the meerkat props his footpaws on the backs of the two seats either side of you. With a meerkat paw to your left and to your right, you find it difficult to focus on the movie, because…`);

    link(`It's frickin' rude! What an asshole!`, function() {
        nukeHyperlinks();
        print(`Yeah, you're not just gonna sit here and put up with that! You turn around and ask him what his problem is. <br><br>"Me? I have no problem, ${pl.word}," he responds with a smug smile. "Just enjoying the movie. It's quite a classic! One of my favorites."<br><br>"Can you please keep your paws to yourself?"<br><br>He looks lazily at his left footpaw, then at his right one. "My paws?" he says with mock confusion. "What do you mean? They are right where they need to be!"<br><br>You roll your eyes.`);
        link(`Push his paws off`, function() {
            nukeHyperlinks();
            print(`Realizing that talking with this guy isn't going to get you anywhere, you take hold of his right footpaw and try to push it off, but to no avail; the meerkat is keeping it firmly planted there, and he chuckles as he watches you struggle. <br><br>"Drop the act already. What is your problem?!" you demand again.<br><br>"Nothing. Annoyed squirrels are simply amusing."<br><br>You glare at him incredulously. <br><br>"Say, do you wanna make some extra cash?" he asks.<br><br>"Huh?"<br><br>"A janitor like you doesn't earn much money. I should know, I used to be a janitor here, before I got fired for eating a customer. If you want some extra cash, I have a proposition for you~"`);
            pl.txt = "uno";
            pl.blowJob();
        });
        link(`Move seats`, function() {
            nukeHyperlinks();
            print(`Realizing that arguing with this guy is gonna be pointless, you get up to move to a different seat.<br><br>"Ohhhhhhh, nutty ${pl.word2}!"<br><br>You turn around to see that the meerkat has smeared something all over his footpaws. It smells like… blackcurrant jam?!<br><br>"Come back! My paws appear to be covered in jam for some reason! If you don't lick it off my paws, I'm gonna stomp all over the carpets like that and make a mess, which you'll then have to clean up! It's your job, after all :O"<br><br>You roll your eyes at that. "Go ahead. Cleaning this room isn't on my worklist today."<br><br>The meerkat grins at you mischievously, his teeth gleaming in the relative darkness of the room. "That's what <em>you</em> think! I worked here before, you know. Also as a janitor. If there's a particularly large mess somewhere, they'll force you to clean it up before you leave, whether said room is on your worklist or not!"`);
            link(`Lick his paws clean`, function() {
                nukeHyperlinks();
                print(`With an exasperated sigh, you come back to your seat, the meerkat grinning victoriously as you do so. <br><br>"Smart choice!" he says as you grumpily collapse onto the seat. "Better not dawdle! I need to pee~"<br><br>With an even louder sigh, you take hold of one of his footpaws and begin to lick, the sweet jam mixed with salty meerkat sweat and grit tasting vile in your mouth, though… it's not as bad as you imagined. <br><br>You lick it all - the fur, the claws, the pawpads - until there is not the tiniest trace of jam left on either one of his footpaws, while the meerkat just sits back, relaxes, and enjoys the movie, occasionally spreading his toes for you to let you clean in-between them, which he finds most pleasurable.<br><br>"Good job!" the meerkat says once you're done, inspecting his footpaws. "Sayyyyy… while you're at it, wanna do something else for me, sweetheart? I'll pay you for this, though~"`);
                pl.txt = "dos";
                pl.blowJob();
            });
            link(`Leave`, function() {
                nukeHyperlinks();
                print(`"Hah. In your dreams!"<br><br>The meerkat looks incredibly disappointed as you leave the room. Your shift is almost over, anyway - you'll just go around, pretending to clean things as you wait for it to end. Better that than to have to lick meerkat paws. Yuck!<br><br>"Ahh, there you are!" you turn around to see your boss approaching you. "Good job today. Here's your payment. You can go home now."<br><br>Phew! Luckily for you, seems like your boss did not find the meerkat's fruity mess. Either that, or the meerkat didn't deliver on his promise. Doesn't matter. All that matters is that you got your cash, and you're finally freeeeeee!<br><br>>&gt; MONEY: +100 ASTLEYS`);
                pl.money += 100;
                pl.jobComplete = true;
                removeInventoryObject(`cleaning supplies`);
                teleport(`4,2,12`);
            });
        });
    });

    link(`Yummy meerkat paws @_@`, function() {
        nukeHyperlinks();
        print(`How can you focus on some dumb movie when you can feel the warmth of two beautiful meerkat paws on your whiskers?! @_@<br><br>You subconsciously rest your head against one of the meerkat's footpaws, unable to resist the temptation. But then your brain processes what you just did and you freeze, face flushed with embarrassment. Great, you're being a total perv. Then again, <em>he's</em> the one who sat right behind you in a completely empty cinema room and shoved his feet in your face…<br><br>Your mind stops whirring as the meerkat, without saying a single word, presses your head in-between his footpaws and begins to rub them all over your face. You close your eyes, your mind suddenly a dark, empty void as the warmth of those soft pawpads seeps into your skin, your lungs filling with the scent of meerkat. <br><br>You have no idea how long this lasts for - could have been a few seconds, could have been centuries - but, eventually, his footpaws let go of your head. For the first time, you turn around and get a good look at the meerkat. His emerald green eyes peer at you curiously, a smug, toothy grin on his face. He's wearing nothing but shorts, which he probably hasn't washed in quite a while, as you can smell their ripeness even from down here. <br><br>"My my, looks like a certain squirrel could use with some affection. But is it willing to risk getting some from a very hungry meerkat~?"<br><br>He opens his arms to you, beckoning you towards him.`);
        link(`Cuddle against him`, function() {
            nukeHyperlinks();
            print(`Evidently not put off by his remark, you climb over the back of your seat and right into the meerkat's warm, fluffy embrace. You blush as he squeezes you against him, nibbling on your ear possessively. <br><br>"Gooooood squirrel. You're all mine now, ya nut-nibbler. To do with as I please~"<br><br>You utter a timid squeak of agreement, your head pressed against his chest, listening to the soothing sounds of his heartbeat. He begins to groom you, licking your head slowly, teasingly. You can feel his drool soak into your fur, making it heavier, and eventually so soaked it can absorb no more drool, causing it to ooze onto your skin. You shudder at its sticky warmth.<br><br>Feeling something hard poking at your behind, you look down to see that an impressive tent has formed at the meerkat's crotch.<br><br>"Oh dear," the meerkat says, sounding anything but sorry. "I think you should go down and fix that~"<br><br>Without waiting for your permission, the meerkat uncrosses his legs. Without them there to support you, you slowly slide down to the floor, and the meerkat's crotch is now right by your snout. The ripeness of his shorts together with the scent of his erection create a truly formidable mix, one that makes you feel a little dizzy.`);
            link(`Nuzzle his crotch`, function() {
                nukeHyperlinks();
                print(`You draw closer, nuzzling at his crotch. Suddenly, you feel a paw at the back of your head, pushing you in. You turn bright red as your muzzle is shoved right in, and your nose is buried deep in the meerkat's crotch, his musky, masculine, undiluted scent all you can breathe now. If it was dizzying before, it is now downright <em>fatal</em> as his pheromones flood your system, leaving you a limp, euphoric mess. In this state, he could tell you to make your way down his throat and stay in his stomach until you're nothing but a pile of bleached bones, and you would willingly do so, no questions asked, no hesitation. He's got you fully in his grasp now.<br><br>Slowly, the meerkat slides his shorts off, revealing a hard, pink member, fully out of its sheath. "All yours, my bushy-tailed friend~" the meerkat coos. You lean in and admit it into your mouth, its warmth and slickness feeling good on your tongue. In and out of your mouth it goes, faster and faster, pressed firmly in-between your tongue and the roof of your mouth, its tip poking uncomfortably at the back of your throat. As the meerkat becomes more and more excited, he begins to thrust, his member going deep into your throat with each thrust, and you do your best not to gag. <br><br>It doesn't take long for the meerkat to go over the edge. "S-Swallow it!" he demands as his member begins to throb in your mouth.<br><br>Pfffft. As if you could do otherwise! You're not gonna waste a single drop of his precious seed~. <br><br>That's easier said than done, though, as powerful burst after powerful burst of his thick, gooey, hot seed threaten to make you choke. You succeed, though, ending up with a slightly distended belly full of musky meerkat cum.`);
                pl.nomFin();
            });
            link(`Back away`, function() {
                nukeHyperlinks();
                print(`You back away timidly, having never done anything like this before. What if you're terrible at it? What if it triggers your gag reflex, and… and…<br><br>"That's alright," the meerkat says with a soft chuckle. "We can do it another way~"<br><br>You watch the meerkat in confusion as he gets up and kneels on the floor next to you. Without a word, he gently pushes you, and you lie on your belly on the floor. It occurs to you what he's about to do, and you close your eyes in embarrassment. Sure enough, you feel your tail being pushed aside, and then something hot, wet and hard poking at your ${pl.word4}. <br><br>"Eep!"<br><br>The squeak comes out of your mouth involuntarily as the meerkat crams his member into you, already too excited for gentleness.<br><br>"Shhhh!" he says, covering your mouth with a sweaty paw. "We don't want anyone coming in and ruining the fun!"<br><br>And, just like that, you find yourself lying face-down underneath a fuzzy meerkat on a dirty, carpeted cinema floor, bits of old, stale popcorn digging into your ribs, the meerkat's rock-hard member murdering your behind, unable to squeal with neither pleasure nor discomfort as the meerkat's paw is holding your mouth shut tight, his claws digging deep into the flesh of your muzzle. However, there was certainly more pleasure than discomfort, and you find yourself sighing blissfully as the meerkat finally goes over the edge, pumping your insides full of hot, sticky meerkat seed.<br><br>Feeling blissful himself, he relaxes, his full weight now on top of you, making it hard for you to breathe. When he feels you trying to push him off, he gets up shakily and slumps back onto the chair. "Ahhh. That was glorious~"`);
                pl.nomFin();
            });
        });
        link(`Leave`, function() {
            nukeHyperlinks();
            print(`As much as you'd love to cuddle up against his soft, warm fur, his remark takes you aback. He might be ridiculously handsome (for you, at least; you're fond of meerkats), but definitely not worth <em>dying</em> for…<br><br>"Heyyyyy, I was only kidding! Come back!"<br><br>But you know that you can't. Something about his scent was clouding your mind, increasing your excitement to the point where you're pretty sure you'd willingly climb into his maw if he asked you to. Pheromones? Was he excited as well? <br><br>Who knows. But, unless you wanna end up as a pile of bones bubbling away in his gut (which you most certainly don't), you need to leave <em>right now</em>. And you do!<br><br>The meerkat looks incredibly disappointed as you leave the room. Your shift is almost over, anyway - you'll just go around, pretending to clean things as you wait for it to end. Better that than to end up like that poor fellow whose skull you discovered in the toilets…<br><br>"Ahh, there you are!" you turn around to see your boss approaching you. "Good job today. Here's your payment. You can go home now."<br><br>>&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
            pl.jobComplete = true;
            removeInventoryObject(`cleaning supplies`);
            teleport(`4,2,12`);
        });
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pl.blowJob = function() {

        link(`&quot;What is it?&quot;`, function() {
            nukeHyperlinks();
            if (pl.txt === "uno") print(`The meerkat just grins at you, revealing a set of deadly-looking teeth. You watch in horror as he takes off his shorts - which is the only piece of clothing he was wearing - to reveal his rock-hard, pink member, fully out of his sheath.<br><br>"Annoyed squirrels are also <em>hot</em>~. Especially when they swallow their pride and suck me off for some extra cash~. So, what do you say? 100 Astleys for giving me a blowjob~."`);
            else print(`The meerkat just grins at you, revealing a set of deadly-looking teeth. You watch in horror as he takes off his shorts - which is the only piece of clothing he was wearing - to reveal his rock-hard, pink member, fully out of his sheath.<br><br>"100 Astleys for giving me a blowjob. Interested~?"`);
            link(`Accept`, function() {
                nukeHyperlinks();
                print(`You nod uncertainly, avoiding his gaze.<br><br>"Come on then, sweetheart. Don't make me wait~"<br><br>You step over the back of your seat and kneel in front of him, his musk assaulting your nose. It's so strong, you're certain he hasn't showered today.<br><br>For a moment, you just stare hesitantly at his glistening member, but then you feel a soft paw press against the back of your head, gently pushing you towards it.<br><br>"Better hurry," the meerkat says. "I haven't eaten yet. And I'm getting hungry~"<br><br>You feel like you made a terrible choice, but there's nothing you can do now, really. Now that you are in the meerkat's grasp, you doubt he'd let you go before you fulfilled your end of the deal…<br><br>It's now or never. You close your eyes and admit his member into your mouth.<br><br>"Thaaaaaaat's the ticket~"<br><br>In and out of your mouth it goes, over and over again, only its tip never leaving your maw. Luckily for you, it doesn't take long for him to go over the edge.<br><br>"S-Swallow it!" he demands as his member begins to throb in your mouth.`);
                link(`Swallow`, function() {
                    nukeHyperlinks();
                    print(`You swallow, begrudgingly gulping down his thick, salty seed. Once his member is done with pumping it down your throat, you withdraw, the meerkat's musk still strong on your tongue, his seed weighing down your belly. You can feel it sloshing around within you, and you frown at this.<br><br>"Ahh. Good squirrel~" He leans back and relaxes with a content sigh. His stomach growls loudly. "Take the money and go. You're looking tastier by the second~"<br><br>&gt;&gt; MONEY: +100 ASTLEYS`);
                    pl.money += 100;
                    link(`Leave`, function() {
                        nukeHyperlinks();
                        print(`Your shift isn't quite over yet when you leave, so you just go around, pretending to clean things as you wait for it to end. After first taking a trip to the toilet, that is, and trying to wash the taste of Meercum® from your mouth, to no avail; even if you manage to rinse your mouth enough to make the taste fainter, it comes back with a vengeance every time you burp, and you do that quite a lot as the meerkat's seed gurgles away in your gut.<br><br>"Ahh, there you are!" you turn around to see your boss approaching you. "Good job today. Here's your payment. You can go home now."<br><br>>&gt; MONEY: +100 ASTLEYS`);
                        pl.money += 100;
                        pl.jobComplete = true;
                        removeInventoryObject(`cleaning supplies`);
                        teleport(`4,2,12`);
                    });
                });
                link(`Don't swallow`, function() {
                    nukeHyperlinks();
                    print(`No. Frickin'. Way. Enough is enough. As soon as you feel him going over the edge, you withdraw, leaving his seed to spill all over his crotch and his shorts, as well as the seat. Dammit, you'll be forced to clean this up later, you bet.<br><br>"Noooooo!" the meerkat exclaims, looking dismayed at the mess forming at his crotch. It's not the mess he's concerned about at the moment, though, but rather getting the pleasure he was hoping for; he quickly grabs his member and begins to rub it up and down to make up for your sudden withdrawal, but the moment is gone, and he's left unsatisfied and disappointed. <br><br>He looks up at you, growling. You back away, forgetting for a second about the row of seats behind you. You tumble over them, but the meerkat grabs your footpaw, stopping you from tumbling down to the floor. <br><br>"Ouch!" you exclaim as something pricks your pawpad. Your vision goes blurry and you pass out, if only for a moment.`);
                    pl.meerCum++;
                    teleport(`4,7,12`);
                });
            });
            link(`Leave`, function() {
                nukeHyperlinks();
                print(`"Pffffft. In your dreams. I'm not <em>that</em> desperate for cash."<br><br>The meerkat looks incredibly disappointed as you get up and leave the room. Your shift is almost over, anyway - you'll just go around, pretending to clean things as you wait for it to end. Better that than to have meerkat cum pumped down your throat. Ugh.<br><br>"Ahh, there you are!" you turn around to see your boss approaching you. "Good job today. Here's your payment. You can go home now."<br><br>&gt;&gt; MONEY: +100 ASTLEYS`);
                pl.money += 100;
                pl.jobComplete = true;
                removeInventoryObject(`cleaning supplies`);
                teleport(`4,2,12`);
            });
        });

        link(`&quot;Not interested…&quot;`, function() {
            nukeHyperlinks();
            print(`"Whatever it is, I am not interested," you say, getting up.<br><br>"But… I'll pay you well!"<br><br>You don't respond as you walk out of the room, leaving the meerkat to slouch on the seat in disappointment. He had never had someone walk out like that when cash was offered, without at least hearing what the deal was…<br><br>With your shift being almost over, you just go around, pretending to clean things as you wait for it to end. Better that than deal with that meerkat. So full of himself! Whatever it is he wanted from you, you doubt it'd be worth it.<br><br>"Ahh, there you are!" you turn around to see your boss approaching you. "Good job today. Here's your payment. You can go home now."<br><br>>&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
            pl.jobComplete = true;
            removeInventoryObject(`cleaning supplies`);
            teleport(`4,2,12`);
        });

    };

    pl.nomFin = function() {
        print(`"Mmmmm. That was goooood~" the meerkat coos, patting your head. "You better go now, sweetheart. I always get hungry after pumping someone full of my milk~"`);
        link(`Kiss him`, function() {
            nukeHyperlinks();
            print(`Ignoring his warning, you kiss the meerkat. He seems surprised, but doesn't resist. In fact, he kisses you back, taking control of the kiss, not liking it when someone else is in charge; holding your head, he pushes his mouth firmly against yours, forcing his tongue into your mouth, which you are only too happy to accept. You sigh in pleasure at the feeling of his warm, slippery tongue exploring your mouth, his warm drool seeping into your maw and forcing its way down your throat…<br><br>Huh. Is that supposed to happen during a kiss? He's <em>really</em> salivating. You open your eyes, concerned, and notice that the meerkat's eyes are open too, now. They stare at you fiercely, <em>hungrily</em>. "I'm going to eat you," they say with conviction as the meerkat's jaws clamp around your muzzle, his teeth digging possessively into your flesh.`);
            link(`That's fine~`, function() {
                nukeHyperlinks();
                print(`You relax in the meerkat's grasp, looking up at him expectantly.<br><br>Your submission only seems to make him even hungrier as his jaws open again to this time clamp over your entire <em>head</em>. The last thing you see before your head is forced into the dark depths of his throat is his tongue, quivering in anticipation of your taste, a pretty shade of pink with the exception of a yellowish residue down its middle, most likely from ice cream, judging by the faint vanilla scent in his maw. <br><br>A few gulps later, you find yourself curled up in a fetal position in the meerkat's stomach, thick chyme eating away at your skin. The smell of vomit is so strong that you can't tell what this sludge surrounding you once used to be; it's all just digested goop now, and you will soon be too. <br><br><em>Buuuuuurp!</em><br><br>The meerkat slouches on his chair, scratching his full, distended belly. "Don't say I didn't warn ya!" he says after a huge yawn. You wish you could do something else for this hot bastard during your last moments, like… maybe rub his belly from within? But you can't. The stomach walls are pressed way too tightly against you, so tightly that you feel like you're about to be crushed. You're just food now, your only purpose to nourish him. You gave him your life, and there is nothing more you can give him, nothing more you can do, just lie down peacefully and await your imminent death.`);
                if (pl.disposalOn) {
                    print(`The last thing you hear before becoming anonymous chyme is the meerkat's soft snores as he naps in the cinema room, waking up ten minutes or so after the movie ends as your boss switches on the lights and inspects the room. <br><br>"Kane? What are you doing here?!"<br><br>Kane the Meerkat yawns, stretching lazily. You have fully digested into slop by now (with the exception of some bones), so it's not very obvious that there is someone presently gurgling away in his gut. "Just watching a movie, boss! Just another paying customer, I am!"<br><br>Your boss looks around the room suspiciously. "Not <em>eating</em> any of my customers, I hope? Or my janitor? I can't find ${pl.word3} anywhere."<br><br>"I'd never, boss!" Kane lies. "I'm full of delicious innocence. Well, I'll be going now! I've got some business to attend to."<br><br>And this business was a journey to the toilets, to dispose of your remains, anything that the meerkat's body considered useless. That included your skull, which actually got stuck in the pipe and would come bobbing up as soon as someone flushed the toilet, just like the skull of one of the meerkat's previous victims came bobbing up when <em>you</em> flushed the toilet in the cubicle next door.`);
                }
                pl.killGame("meerkat nom");
            });
            link(`Pull back`, function() {
                nukeHyperlinks();
                print(`You try to pull your muzzle out of his jaws, but all it does is make his teeth dig in even deeper, causing little droplets of blood to drip from your muzzle.<br><br>The meerkat's jaws open again to this time clamp over your entire <em>head</em>. The last thing you see before your head is forced into the dark depths of his throat is his tongue, quivering in anticipation of your taste, a pretty shade of pink with the exception of a yellowish residue down its middle, most likely from ice cream, judging by the faint vanilla scent in his maw. <br><br>A few gulps later, you find yourself curled up in a fetal position in the meerkat's stomach, thick chyme eating away at your skin. The smell of vomit is so strong that you can't tell what this sludge surrounding you once used to be; it's all just digested goop now, and you will soon be too. <br><br><em>Buuuuuurp!</em><br><br>The meerkat slouches on his chair, scratching his full, distended belly. "Don't say I didn't warn ya!" he says after a huge yawn. You try your best to wiggle around, kick, beat your fists against the stomach walls - <em>anything</em>! Anything that could make the meerkat throw you back up. But you can't. The stomach walls are pressed way too tightly against you, so tightly that you feel like you're about to be crushed. You're just food now, your only purpose to nourish him. There is nothing more you can do, just lie down peacefully and await your imminent death in the deep, oppressing darkness of his gut, hearing nothing but the sounds of digestion.`);
                if (pl.disposalOn) {
                    print(`The last thing you hear before becoming anonymous chyme is the meerkat's soft snores as he naps in the cinema room, waking up ten minutes or so after the movie ends as your boss switches on the lights and inspects the room. <br><br>"Kane? What are you doing here?!"<br><br>Kane the Meerkat yawns, stretching lazily. You have fully digested into slop by now (with the exception of some bones), so it's not very obvious that there is someone presently gurgling away in his gut. "Just watching a movie, boss! Just another paying customer, I am!"<br><br>Your boss looks around the room suspiciously. "Not <em>eating</em> any of my customers, I hope? Or my janitor? I can't find ${pl.word3} anywhere."<br><br>"I'd never, boss!" Kane lies. "I'm full of delicious innocence. Well, I'll be going now! I've got some business to attend to."<br><br>And this business was a journey to the toilets, to dispose of your remains, anything that the meerkat's body considered useless. That included your skull, which actually got stuck in the pipe and would come bobbing up as soon as someone flushed the toilet, just like the skull of one of the meerkat's previous victims came bobbing up when <em>you</em> flushed the toilet in the cubicle next door.`);
                }
                pl.killGame("meerkat nom");
            });
        });
        link(`Leave`, function() {
            nukeHyperlinks();
            print(`You thank the meerkat, give him one final hug, and then leave the room, feeling mildly nauseous from the amount of liquid in your insides.<br><br>"Ahh, there you are!" you turn around to see your boss approaching you. "Good job today. Here's your payment. You can go home now."<br><br>As you walk down the hall towards the exit, it occurs to you that you could have asked the meerkat for his number, so you can meet again! Unfortunately, when you go back to Room 4, he is nowhere to be found. Dammit. Maybe you'll bump into him again at some point…<br><br>>&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
            pl.jobComplete = true;
            removeInventoryObject(`cleaning supplies`);
            teleport(`4,2,12`);
        });
    };
}

definitions['7,0,10'] = function() {
    roomName(`Footpath`);

    addExits(north, south);

    print(`You are walking along a tidy, wide footpath. Next to it, separated by a thin strip of grass, is an equally wide bicycle path, its color a brownish red to make it clear to pedestrians that it's not a footpath.`);

    removeInventoryObjectAction(`poster #1`, `put up`);
    removeInventoryObjectAction(`poster #2`, `put up`);
    removeInventoryObjectAction(`poster #3`, `put up`);
}

definitions['7,-1,10'] = function() {
    roomName(`Bulletin<br>Board`);

    addExits(north, south);

    print(`You are walking along a tidy, wide footpath. Next to it, separated by a thin strip of grass, is an equally wide bicycle path, its color a brownish red to make it clear to pedestrians that it's not a footpath.`);

    print(`There is a bulletin board here.`);

    addRoomObjectAction(`bulletin board`, `look at`, function() {
        print(`Just your normal bulletin board. No ads catch your attention - just lots of random junk.`);
    });

    // Monty Quest
    if (pl.posters >= 1 && pl.bulletin3Done === false) {
        if (isInInventory("poster #1")) pl.bulletinFun(1, 3);
        if (isInInventory("poster #2")) pl.bulletinFun(2, 3);
        if (isInInventory("poster #3")) pl.bulletinFun(3, 3);
    }
}

definitions['7,-2,10'] = function() {
    roomName(`Footpath`);

    addExits(north);

    print(`You are walking along a tidy, wide footpath. Next to it, separated by a thin strip of grass, is an equally wide bicycle path, its color a brownish red to make it clear to pedestrians that it's not a footpath.<br><br>To the NORTH, the footpath continues. To the SOUTH are the ever-open gates that mark the entry to the University of Worthless Degrees. The University is open to the public, though there's not much reason to go there if you're not a student…`);

    if (!isInInventory(`pizza`)) {

        addFakeExits([south], function() {
            print(`No point in going there, really. If there <em>are</em> any jobs there that you could do, you can bet they've all been taken already by the plethora of students needing extra cash…`);
        });

    } else {

        addExits(south);

    }

    removeInventoryObjectAction(`poster #1`, `put up`);
    removeInventoryObjectAction(`poster #2`, `put up`);
    removeInventoryObjectAction(`poster #3`, `put up`);
}

definitions['-3,1,10'] = function() {
    roomName(`Pizzarella`);

    addFakeExits([west], function() {
        teleport(`-4,1,10`);
    });

    print(`You enter Pizzarella. There are plenty of tables here - most are empty, some are occupied by patrons gorging on delicious-smelling pizzas.`);

    if (!isInInventory(`pizza`) && pl.delivered === 0) {

        addRoomObjectAction(`counter`, `ask for job`, function() {
            print(`You approach the counter.<br><br>"Hello. Can I help you?" asks the cat behind the counter.<br><br>You ask him if they have any jobs that you could do for some extra cash.`);
            if (pl.jobComplete === false) {
                print(`"I'm afraid we don't, sir," the cat replies. "But do check back later, if you're still interested. There are times when we could use some one-off assistance!"`);
            } else {
                disableInteraction();
                print(`"We do, in fact!" the cat replies enthusiastically. "We received a pizza order, but our delivery guy is running late. His bike malfunctioned. We were about to cancel the order, as there's no way we can get it delivered on time. But, if you're up for the task, you could deliver it for us! We'll pay you 100 Astleys. What do you say?"`);
                link(`Accept`, function() {
                    nukeHyperlinks();
                    print(`"Wonderful! Here is the pizza, and the customer's address is on the label. Good luck!"<br><br>&gt;&gt; YOU RECEIVED A PIZZA`);
                    addInventoryObjectAction(`pizza`, `inspect`, function() {
                        print(`A piping hot pizza. It smells delicious, but something about the smell bothers you. You can't put your finger on what it is, though…`);
                    });
                    addInventoryObjectAction(`pizza`, `read label`, function() {
                        print(`The label reads:<br><br><strong>Raiden the Possum<br>Room 115<br>Wilde College <br>University of Worthless Degrees</strong>`);
                    });
                    enableInteraction();
                });
                link(`Decline`, function() {
                    nukeHyperlinks();
                    print(`"Aww. That's a shame. I guess we're losing one more customer…"`);
                    enableInteraction();
                });
            }
        });

    } else if (pl.delivered === 1) {

        addRoomObjectAction(`counter`, `report back`, function() {

            pl.delivered++;
            removeRoomObject(`counter`);

            if (pl.money >= 30) {
                print(`"The pizza has been delivered? Wonderful!" He holds out a paw. "Money, please!"<br><br>You wonder why he won't just give you 70 Astleys, as he promised you 100 for this emergency delivery, and the pizza only cost 30. Nonetheless, with an internal shrug, you give him the 30 Astleys that the possum gave you.<br><br>The cat holds them up to his nose, sniffing at them. "Ahh. The unmistakable scent of possum. Glad to see you didn't try anything funny! Here is your reward."<br><br>&gt;&gt; MONEY: -30 ASTLEYS<br><br>&gt;&gt; MONEY: +100 ASTLEYS`);
                pl.money += 70;
            } else {
                disableInteraction();
                print(`"The pizza has been delivered? That was… suspiciously quick, I must say." He holds out a paw. "Money, please!"<br><br>"Umm… can't you just give me the 70 Astleys? Pizzas cost 30, and you promised to give me 100 for this emergency delivery…"<br><br>"Yeeeeeees. But I must verify that you actually delivered the pizza first."<br><br>"But how is that proof-"<br><br>"The money will have the possum's scent on it, silly. Raiden is our regular customer. I know his scent."<br><br>"Well, the thing is… I already spent the money…"<br><br>"Ahh. I see." The cat crosses his arms. "Which is code for 'I chucked the pizza in the trash and just came back for the money'…"<br><br>"No! I-"<br><br>You don't get to finish your sentence as the cat unsheathes his claws and pounces on you. Your eyes widen in horror as his jaws clamp around your delicate neck.`);
                if (pl.posscent === 0) {
                    link(`…`, function() {
                        nukeHyperlinks();
                        print(`He bites down hard on your neck with a loud crunch. You try to push him off, but to no avail. He bites three more times.<br><br>Crunch. Crunch. Crunch.<br><br>Even if you somehow managed to push him off, your throat is already destroyed. It would be pointless. With his teeth still deep in your neck, you fall limp and succumb to the darkness. The last thing you register before your world goes dark is his rough tongue hungrily licking warm blood off your neck.<br><br>"You don't mess with me, squirrel! If you didn't want to deliver to our customers, then I guess we'll deliver <em>you</em> to our customers instead."<br><br>And that's exactly what he does, as you end up on countless pizzas that day, feeding many critters all over the island with your fresh, tender meat. In fact, many of them would say that that was the best pizza they have ever had.`);
                        enableInteraction();
                        pl.killGame("cat");
                    });
                } else {
                    link(`…`, function() {
                        nukeHyperlinks();
                        print(`"Huh…"<br><br>*sniff sniff*<br><br>"I <em>do</em> smell Raiden on you! My apologies, I thought you were trying to trick me."<br><br>He helps you off the floor. "Here ya go. 70 Astleys for your troubles. Do forgive our little misunderstanding."<br><br>&gt;&gt; MONEY: +70 ASTLEYS`);
                        pl.money += 70;
                        enableInteraction();
                    });
                }
            }

        });

    }
}

definitions['7,-3,10'] = function() {
    pl.delivered++;

    roomName(`University<br>of<br>Worthless<br>Degrees`);

    print(`You arrive at the University of Worthless Degrees. It's like a small, self-contained town, a collection of buildings that includes student halls, some small shops, a gym, a bookshop, a library, and many other things. But you're not here to explore, you're here to deliver a pizza! Luckily for you, the University is signposted well, and you find Wilde College in no time. It looks quite sad, tucked away in a corner of the University's grounds, with its bare brick walls and the pathway leading up to it somewhat neglected, overgrown with weeds and whatnot.<br><br>It's not <em>terrible</em> by any means, but it certainly doesn't compare to all those luxurious student halls you passed to get here. Like Hopps' College, a colorful building with large, gorgeous windows, in which every student appeared to have their own balcony.<br><br>Anyway, the door to Wilde College is closed. There is an intercom, however, which lets you type in a room number…`);

    link(`Enter number`, function() {
        pl.room = ask(`Please enter the room number you wish to connect to...`);
        if (pl.room === `115`) {
            nukeHyperlinks();
            print(`You hear a buzzing sound as the occupant of Room 115 opens the door for you, without even verifying who you are…`);
            link(`Enter`, function() {
                nukeHyperlinks();
                print(`You enter the building, and swiftly make your way up the stairs to the third floor. There, you make your way down a long corridor, with dirty carpets and exposed pipes running across the ceiling. You pass several closed doors, some completely silent, others somewhat muffling music coming from within the rooms they lead to. You also pass a shared kitchen, which is quite messy, with bits of food on the floor and sinks full of unwashed pots and pans.<br><br>Finally, you come to Room 115.`);
                link(`Knock`, function() {
                    nukeHyperlinks();
                    print(`The door opens to reveal Raiden - the very same possum who was working at the popcorn stand back at the cinema. His fur is somehow even scruffier than before, and he's completely naked. Well. As naked as someone covered in fur can be… <br><br>He looks you up and down, frowning.<br><br>"You ordered pizza?"<br><br>He snatches the box from you. "Yeeeeah. Two jobs? One's more than enough, if you ask me," he grumbles under his nose.`);
                    link(`Snarky`, function() {
                        nukeHyperlinks();
                        print(`"If <em>you</em> had two jobs, you wouldn't live in such a dump!"<br><br>Raiden just shrugs. "I'd rather live in a dump than be worked like a slave. And this place is far from a dump. I don't need pretty, sparkly colors everywhere. I just need a roof over my head."<br><br>As the possum is about to shut the door, you remind him that he needs to pay for the pizza.<br><br>"Oh, yeah. Here."<br><br>He gives you the perfect amount. No tip, unfortunately…<br><br>"Heyyyy, actually… wanna make some extra cash?"<br><br>"Huh?"<br><br>"I'm playin' a game. Been waitin' years for it. You can feed me the pizza while I play. So I can get right back into it. 10 Astleys. Deal?"<br><br>"Only 10?"<br><br>"Ugh, fine. 50. Final offer."<br><br>>&gt; MONEY: +30 ASTLEYS`);
                        pl.money += 30;
                        removeInventoryObject(`pizza`);
                        pl.choices();
                    });
                    link(`Honest`, function() {
                        nukeHyperlinks();
                        print(`"Oh, they're not full-time jobs. Just one-off ones."<br><br>Raiden nods. "That makes more sense."<br><br>As the possum is about to shut the door, you remind him that he needs to pay for the pizza.<br><br>"Oh, yeah. Here."<br><br>He gives you the perfect amount. No tip, unfortunately…<br><br>"Heyyyy, actually… wanna make some extra cash?"<br><br>"Huh?"<br><br>"I'm playin' a game. Been waitin' years for it. You can feed me the pizza while I play. So I can get right back into it. 10 Astleys. Deal?"<br><br>"Only 10?"<br><br>"Ugh, fine. 50. Final offer."<br><br>>&gt; MONEY: +30 ASTLEYS`);
                        pl.money += 30;
                        removeInventoryObject(`pizza`);
                        pl.choices();
                    });
                });
            });
        } else {
            print(`You enter ${pl.room}. No one answers.`);
        }
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pl.choices = function() {
        link(`Accept`, function() {
            nukeHyperlinks();
            print(`"Huh. Really? Cool. Come in."<br><br>The possum's room is a bit of a mess; clothes are strewn all over the floor, so much that you give up trying to go around them after only two steps, and just trample right over them. Raiden doesn't seem to mind. He does the same, after all. He hops onto his bed, causing the few empty cans of soda on it to jump up, small droplets of the sweet, sweet liquid they were once filled with before they were sucked dry by the possum spilling out onto the duvet. Again, if the possum notices, he doesn't care. He sits on the bed cross-legged, plops the pizza box next to him, and picks up the controller. <br><br>You sit down next to him and watch as he plays… uhh… "Cod of Duty", according to the loading screen that just popped up. It's a strange little game, for sure; from what you gather, you control a cod trying to protect his shoal of fellow cod from sharks. It's pretty graphic. Well… if you can consider fish blowing each other up <em>graphic</em>…<br><br>"Heyyyyy, the pizza's getting cold," Raiden complains, just as his cod is gobbled up by a huge shark. The possum grumbles unhappily under his breath as his cod is being crunched up, rather graphically, and "Mission Failed!" appears on the screen. Meanwhile, you look away from the game and open the pizza box.<br><br>Raiden's whiskers twitch as he sniffs the air, then his nose wrinkles. "Waiiiiit, what is that? I ordered a Mighty Mousy. I don't smell any mice. Just-"<br><br>"Veggies…"<br><br>Not that you have anything against veggie pizzas. They can be truly delicious when done right. But they can also be quite gross when done wrong. And, judging by the mixture of completely random, watery, unseasoned vegetables on this one, whoever made it had no idea what they were doing…<br><br>The possum sighs as the game finishes loading and he immediately goes back to blowing up sharks. "Whatever. I'll eat it. Don't have much choice. I'm starving."`);
            link(`Feed him the pizza`, function() {
                nukeHyperlinks();
                print(`You pick up a pizza slice and offer it to the possum. Without taking his eyes off the game, he leans towards you and takes a big bite. You did not anticipate such a big bite, in fact, so your <em>fingers</em> end up in his mouth as well. You squeak in surprise and quickly pull them out before the possum has a chance to bite down. He winces at the taste as he chews, but doesn't say anything, soon apparently getting used to it as gobbles up the rest of the pizza expressionless.<br><br>"Where's the bin?" you ask, holding the now empty pizza box.<br><br>"Just chuck it on the floor," he replies. With a shrug, you do so. Now that you fed him, you should really be going. But he seems so engrossed in the game… Maybe you shouldn't disturb him for now, and just wait until he dies or something? But that could take ages…`);
                link(`Ask for your money and leave`, function() {
                    nukeHyperlinks();
                    print(`"Hold on," the possum replies, murdering his gamepad. "Not now…"<br><br>A minute or so later, after completing a particularly difficult segment, the possum pauses the game, then jumps off his bed and sniffs around the room.<br><br>"Ahh, here it is." He picks up a little plastic bag full of coins, and gives you 50 Astleys."<br><br>&gt;&gt; MONEY: +50 ASTLEYS`);
                    pl.money += 50;
                    link(`Leave`, function() {
                        teleport(`7,-2,10`);
                    });
                });
                link(`Wait patiently`, function() {
                    nukeHyperlinks();
                    print(`<em>He knows I'm waiting</em>, you tell yourself. <em>He'll give me the money when he can.</em><br><br>Not that you mind. It's been a rough day. It feels nice to just sit on a cozy bed and watch someone play a video game for a change. A little bit of normality in this crazy day. You yawn, stretching yourself lazily.<br><br>One minute passes, then two, then thirty… It feels like you've only been waiting for five minutes or so, but, when you take your eyes off the game, you realize in horror that it's already night-time!!!<br><br>But what was it that made you look away from the game? It was a loud sound. Something like… oh. The growling of a possum's stomach…`);
                    link(`Offer to feed him again`, function() {
                        nukeHyperlinks();
                        print(`The possum's ears twitch, letting you know he heard you. He's silent for a moment as he finishes off a boss. Then, still not taking his eyes off the game, he turns around, and…<br><br>…you see a flash of sharp fangs and a glistening tongue as your head is enveloped in hot, slimy darkness. Having just sucked the life out of yet another soda can, Raiden burps, treating you to the "wonderful", undiluted stench of his stomach - the stench of vomit and digested pizza, mixed with the sickly sweet scent of half-digested cola. The force of the belch also caused some half-swallowed spit to be expelled out of his throat and sprayed onto your face.`);
                        link(`Nuzzle his tongue`, function() {
                            nukeHyperlinks();
                            print(`You nuzzle the possum's tongue. It feels soft and delicate against your muzzle, still a bit greasy from the pizza. <br><br>"Huh…" is the only response you get as the possum bites down gently to take hold of you, then in one swift motion drags the rest of you towards him, so that you sit comfortably in his lap as he suckles on your head and continues his shenanigans in the digital world. Your taste stimulates his tongue, and possum drool floods the fleshy cavern that imprisons your head; it soaks into your fur and steals your flavor, to then be promptly sucked out and swallowed by the possum with a loud, wet <em>gulp</em>.<br><br>Once he sucks out all the flavor out of it, he releases the grip he had on you with his teeth, only to shove you deeper into his body, your head entering the dark confines of his throat. Then another push, and your head is now behind his chest, his heart hammering deafeningly against your ear. You blush at the intimacy, but don't get to ponder on it for too long as another push sends you close to your final destination; your head is pressed right against the sphincter leading into the stomach, and you can hear its loud growls and grumbles as it prepares itself for the incoming meal.<br><br>Another push, and into the stomach your head goes, right into all the digestive fluids and gooey chyme. You thrash about, trying to get some air, but there's nothing you can do; save for your footpaws, which are still in the possum's mouth, your entire body is squeezed tight by the possum's gullet, and it's all you can do not to laugh and inhale all this caustic goop into your lungs as the possum's tongue tickles your footpaws as it tastes them. <br><br>Finally, though, he sends them down with a decisive <em>gulp</em>, and you soon find your entire body packed tightly in his gut, and you breathe in the (rancid) air greedily as you are finally free to get your head out of the churning acids. When you do so, you find that you cannot see a thing. Whether it's from the darkness in the possum's stomach, or the acids possibly having eaten away at your eyes, you've no idea. Either way, your journey is complete - all that's left to do now is lie still and await your painful, inevitable death.`);
                            link(`Feel around`, function() {
                                print(`You feel around with your paws, trying to build a picture of your confines in your mind. The stomach walls surrounding you are thick and slimy; no matter how hard you press against them, they don't seem to budge. The chyme you lie in is thick and goopy from digested pizza, which you'd say is just about ready to continue its journey down the possum's digestive tract. Now that you're here, though, it'll likely remain here until you become digested goop yourself, at which point you'll both go even deeper into the possum and be absorbed by the marsupial…`);
                            });
                            link(`Ask to be let out`, function() {
                                print(`"What?! Hell no. You made your choice."`);
                            });
                            link(`Massage his belly`, function() {
                                print(`You start rubbing his belly from within, a final act of kindness before your demise. The possum huffs, relaxing his grip on the controller. He watches as sharks surround his character, ready to tear him apart, but he doesn't care. He yaaaaaaaaawns, suddenly feeling extremely tired.<br><br>"Right. Time for bed."<br><br>He switches off the gaming console, turns off the lights, opens the window, then crawls under his duvet. With him lying on his belly, you find the stomach walls pressing even more against you, so much that you're no longer able to rub his belly. In fact, you're quite sure you heard some of your bones crack, but it's hard to say, as a possum's stomach is a very disorientating place; it could have simply been the possum's own bones creaking as he made himself comfortable. You can't tell by <em>feel</em> either, as your entire body is now burning painfully from the digestive fluids, so much that a bone breaking here or there would probably go unnoticed.<br><br>Now that the possum is no longer sitting down, you find yourself in an awkward position, barely able to keep your nose out of the chyme. At first, you exert a lot of your energy trying to keep it out of the acids, but then it occurs to you that you're just delaying the inevitable, and exerting your energy for nothing. Energy that the possum <em>needs</em> to satisfy his hunger. And so you relax, your head once again surrounded by chyme, and surrender to the gurgles just as the possum begins to snore softly, his whiskers swaying gently from the cool breeze coming in through the window.`);
                                if (pl.disposalOn === true) {
                                    print(`Raiden wakes up the next day feeling relaxed and blissful. He was used to going to bed hungry as, since he started University, he developed this bad habit of staying up way too late, for hours after dinner. By the time he finally decided to go to sleep, he would be way too tired to do the smallest of things, let alone have a snack. But, with a big, nutritious squirrel in his stomach to get him through the night, he finally slept well, after months of waking up feeling like a zombie. <br><br>"Morning," he says to Sasha, a fellow student who lived next door to the possum, as he passes her in the corridor on his way to the bathroom. She freezes in her tracks, staring at him with her mouth open. Raiden? Saying good morning to someone?! What is this sorcery!!!<br><br>Once in the bathroom, Raiden sits on the toilet and finally releases the monster that was trying to push its way out from the moment he woke up. In fact, he's pretty sure it's the <em>reason</em> he woke up in the first place. Otherwise, he would have probably been sound asleep until at least noon. When he flushes the monster - formed of the processed, unabsorbed remains of squirrel and pizza - the toilet is clogged, and Raiden watches the water level rise with a frown on his face. Luckily for him, though, the clog was only temporary, and the water level once again goes down with a gurgle as the monster makes its way down into the sewers, never to be seen again.`);
                                }
                                pl.killGame("possum simp");
                            });
                        });
                        link(`Try to pull away`, function() {
                            nukeHyperlinks();
                            if (pl.possumHelp === 0) {
                                print(`"That's not what I meant!" you exclaim, pushing at the possum's fuzzy chest, trying to pull your head out of his drooling jaws. The possum bites down just in time to prevent your escape, his fangs digging painfully into your chest. Then, in one swift motion, he drags the rest of you towards him, so that you sit comfortably in his lap as he proceeds to devour you while still continuing his shenanigans in the digital world.<br><br>You squeak in horror as you find your head pressed between his teeth. He bites down hard, but you manage to pull it out from in-between his nibblers just in time…<br><br>…only to find his tongue shove your head to the <em>other</em> side of his maw, where he tries the same thing once again, with the same result.<br><br>Raiden growls unhappily. Then, realizing he won't get anywhere without putting down his controller, he simply begins to swallow you whole, cramming your head into the dark depths of his throat. Then another push, and your head is now behind his chest, his heart hammering deafeningly against your ear. You can't decide if it's fascinating or horrifying, being <em>inside</em> another person like that, but don't get to ponder on it for too long as another push sends you close to your final destination; your head is pressed right against the sphincter leading into the stomach, and you can hear its loud growls and grumbles as it prepares itself for the incoming meal.<br><br>Another push, and into the stomach your head goes, right into all the digestive fluids and gooey chyme. You thrash about, trying to get some air, but there's nothing you can do; save for your footpaws, which are still in the possum's mouth, your entire body is squeezed tight by the possum's gullet, and it's all you can do not to laugh and inhale all this caustic goop into your lungs as the possum's tongue tickles your footpaws as it tastes them. <br><br>Finally, though, he sends them down with a decisive <em>gulp</em>, and you soon find your entire body packed tightly in his gut, and you breathe in the (rancid) air greedily as you are finally free to get your head out of the churning acids. When you do so, you find that you cannot see a thing. Whether it's from the darkness in the possum's stomach, or the acids possibly having eaten away at your eyes, you've no idea. Either way, your journey is complete - all that awaits you now is a painful, inevitable death.`);
                                link(`Feel around`, function() {
                                    print(`You feel around with your paws, trying to build a picture of your confines in your mind. The stomach walls surrounding you are thick and slimy; no matter how hard you press against them, they don't seem to budge. The chyme you lie in is thick and goopy from digested pizza, which you'd say is just about ready to continue its journey down the possum's digestive tract. Now that you're here, though, it'll likely remain here until you become digested goop yourself, at which point you'll both go even deeper into the possum and be absorbed by the marsupial…`);
                                });
                                link(`Ask to be let out`, function() {
                                    print(`The possum belches unashamedly, depriving you of some of your highly limited oxygen supplies. <br><br>"No can do. I'm starving."<br><br>"Find something else to eat, then!!!"<br><br>"Can't. I'm outta food."<br><br>"Well, then <em>order</em> something!!!"<br><br>The possum shakes his head. Not that you can see that… "Meh. You took <em>ages</em> to arrive. Don't wanna wait that long again."<br><br>"I'll get you something, I'll be quick, just let. Me. Out!"<br><br>The possum rolls his eyes. "Just shut up and digest." He contracts his stomach, and you grit your teeth as the stomach walls press hard against you, threatening to crush you.`);
                                });
                                link(`Struggle`, function() {
                                    print(`You start struggling, squirming about in his belly and kicking at the stomach walls with your legs. Maybe, if you do that enough, he'll get nauseous and spit you back out! The possum huffs, relaxing his grip on the controller. He watches as sharks surround his character, ready to tear him apart, but he doesn't care. He yaaaaaaaaawns, suddenly feeling extremely tired.<br><br>"Right. Time for bed."<br><br>He switches off the gaming console, turns off the lights, opens the window, then crawls under his duvet. With him lying on his belly, you find the stomach walls pressing even more against you, so much that you're no longer able to struggle. In fact, you're quite sure you heard some of your bones crack, but it's hard to say, as a possum's stomach is a very disorientating place; it could have simply been the possum's own bones creaking as he made himself comfortable. You can't tell by <em>feel</em> either, as your entire body is now burning painfully from the digestive fluids, so much that a bone breaking here or there would probably go unnoticed.<br><br>"Oh…" The possum turns onto his back, allowing you to struggle once more, which you do with renewed ferocity, oblivious to the fact that he <em>wants</em> you to do it. Raiden just lies there, drooling at how good it feels. Soon, the possum's soft snores begin to vibrate around you, and your struggles begin to feel pointless. Feeling weak and exhausted, you finally relax and close your eyes, awaiting your demise, trying to ignore the burning all over your body. Luckily for you, it soon turns to total numbness, which you actually find rather pleasant. It's very relaxing. So relaxing, you could fall into an eternal sleep and never wake up again…`);
                                    if (pl.disposalOn === true) {
                                        print(`Raiden wakes up the next day feeling relaxed and blissful. He was used to going to bed hungry as, since he started University, he developed this bad habit of staying up way too late, for hours after dinner. By the time he finally decided to go to sleep, he would be way too tired to do the smallest of things, let alone have a snack. But, with a big, nutritious squirrel in his stomach to get him through the night, he finally slept well, after months of waking up feeling like a zombie. <br><br>"Morning," he says to Sasha, a fellow student who lived next door to the possum, as he passes her in the corridor on his way to the bathroom. She freezes in her tracks, staring at him with her mouth open. Raiden? Saying good morning to someone?! What is this sorcery!!!<br><br>Once in the bathroom, Raiden sits on the toilet and finally releases the monster that was trying to push its way out from the moment he woke up. In fact, he's pretty sure it's the <em>reason</em> he woke up in the first place. Otherwise, he would have probably been sound asleep until at least noon. When he flushes the monster - formed of the processed, unabsorbed remains of squirrel and pizza - the toilet is clogged, and Raiden watches the water level rise with a frown on his face. Luckily for him, though, the clog was only temporary, and the water level once again goes down with a gurgle as the monster makes its way down into the sewers, never to be seen again.`);
                                    }
                                    pl.killGame("possum nom");
                                });
                            } else {
                                print(`"That's not what I meant!" you exclaim, pushing at the possum's fuzzy chest, trying to pull your head out of his drooling jaws. The possum lets go, the force of your pull causing you to fall off the bed and land with a thud on the floor. There you lie on your back, gasping for air, your heart still hammering in your chest, the possum's footpaws dangling over your head.<br><br>"Meh. I was only kiddin'," the marsupial says. He doesn't strike you as much of a kidder… "It's night already, huh. Didn't even notice. You can stay for the night if you want. Don't worry, I won't eat ya. You've been… you've been nice to me. Anyway, it's safer here with me than out there. Who knows what hungry predators are lurking out there in the dark…"`);
                                link(`Look at his footpaws`, function() {
                                    print(`Pretty, pink possum paws, if a bit dirty; the possum clearly hasn't showered in a while, causing them to become somewhat greasy, with more dirt than usual clinging to them.`);
                                    link(`Lick his paws clean`, function() {
                                        nukeHyperlinks();
                                        print(`Silly possum, neglecting his wonderful paws like that. You can't possibly leave them in this state! Who knows when his lazy ass will finally decide to take a shower!<br><br>You take hold of his right footpaw and touch it gently with your tongue, acquainting yourself with its salty taste as you watch the possum for any signs of displeasure. His eyes briefly flick to you, then back to the screen. He grunts, but doesn't pull his paw away. Taking that as permission, you begin to lick his paw wholeheartedly, your tongue collecting possum-flavored dirt and grease, which you swallow. You lick the whole underside of his footpaw, in-between his toes and every single one of his claws, before moving onto the other one. Once you're done, Raiden's footpaws are squeaky clean.<br><br>"No no, carry on…" he says as you begin to withdraw. You oblige, licking his paws until he finishes playing and is ready for bed. "You're staying, then? Cool. Sleep wherever you want." He switches off the gaming console, turns off the lights, opens the window, then crawls under his duvet.`);
                                        pl.sleepsies();
                                    });
                                });
                                link(`Stay with Raiden`, function() {
                                    nukeHyperlinks();
                                    print(`"You're staying? Cool. Sleep wherever you want." He yawns wide, wider than should be possible, giving you a good look into his gaping maw. "I'm done for the night." he switches off the gaming console, turns off the lights, opens the window, then crawls under his duvet.`);
                                    pl.sleepsies();
                                });
                                link(`Ask for your money and leave`, function() {
                                    nukeHyperlinks();
                                    print(`"Hold on," the possum replies, murdering his gamepad. "Not now…"<br><br>A minute or so later, after completing a particularly difficult segment, the possum pauses the game, then jumps off his bed and sniffs around the room.<br><br>"Ahh, here it is." He picks up a little plastic bag full of coins, and gives you 50 Astleys."<br><br>&gt;&gt; MONEY: +50 ASTLEYS`);
                                    pl.money += 50;
                                    link(`Leave`, function() {
                                        teleport(`7,-2,10`);
                                    });
                                });
                            }
                        });
                    });
                });
            });
        });
        link(`Decline`, function() {
            nukeHyperlinks();
            print(`The possum shrugs. "Fair enough. See you around."<br><br>He shuts the door.`);
            link(`Leave`, function() {
                teleport(`7,-2,10`);
            });
        });
    };

    pl.sleepsies = function() {
        link(`Sleep on the floor`, function() {
            nukeHyperlinks();
            print(`Not wanting to be a bother, you decide to sleep on the floor. It's not so bad, really; the carpet coupled with Raiden's clothes covering it make for a soft enough bed. When morning comes, Raiden gives you 50 Astleys, as promised, and you go on your way.<br><br>&gt;&gt; MONEY: +50 ASTLEYS`);
            pl.money += 50;
            link(`Leave`, function() {
                teleport(`7,-2,10`);
            });
        });
        link(`Sleep with the possum`, function() {
            nukeHyperlinks();
            print(`He did say <em>anywhere</em>, sooooooo…<br><br>You wiggle your way under the duvet as well, and make yourself comfortable next to the possum. It's not a large bed by any means, but you're not that big - and neither is Raiden, for that matter - so it works out.<br><br>You don't know what reaction you expected, but it certainly wasn't the possum grabbing you and cuddling with you like you're a teddy bear…<br><br>"Uhh…"<br><br>He seems to be half-asleep already. Figures.`);
            link(`Cuddle with him`, function() {
                nukeHyperlinks();
                print(`No harm in cuddles!<br><br>You hug the possum back, burying your face in his greasy fur. Once you get used to the overwhelming smell of possum, it's actually quite pleasant. He definitely needs a shower, though. You'll probably be smelling of possum for <em>weeks</em> after that…<br><br>But that doesn't matter. It feels nice to be cuddled up against another furry body. So nice, that you fall asleep in no time.<br><br>When morning comes, you wake up to find Raiden playing his game again, sitting cross-legged on the floor. <br><br>He clears his throat purposefully. "Uhh… sorry about that. Sometimes I…" He shakes his head. "Here, your money." He gives you 50 Astleys, as promised, and you go on your way.<br><br>>&gt; MONEY: +50 ASTLEYS`);
                pl.money += 50;
                link(`Leave`, function() {
                    pl.posscent++;
                    teleport(`7,-2,10`);
                });
            });
            link(`Try to pull away`, function() {
                nukeHyperlinks();
                print(`You try to pull away, but the possum has you firmly in his embrace. What you <em>do</em> succeed in, however, is causing the possum to pop your head in his mouth.<br><br>"<em>My</em> lollipop. You ain't going anywhere~" he says sleepily as he suckles on your head.<br><br>You sweat profusely, too scared to move, worried that any more movement might cause him to chomp down on you. So you lie there all night, your head in the possum's maw. Most of the time, he's completely still, but sometimes he stirs awake - just a little - and proceeds to lick and suckle on your head. You fall asleep eventually, though.<br><br>When morning comes, you wake up to find Raiden playing his game again, sitting cross-legged on the floor, your head all sticky and smelling of possum spit.<br><br>He chuckles as he sees your disheveled face. "Uhh… sorry?" Once you shower off, he gives you 50 Astleys, as promised, and you go on your merry way.<br><br>>&gt; MONEY: +50 ASTLEYS`);
                pl.money += 50;
                link(`Leave`, function() {
                    pl.posscent++;
                    teleport(`7,-2,10`);
                });
            });
        });
    };
}

definitions['8,5,10'] = function() {
    pl.ans = 0;

    roomName(`Platform`);

    addExits(south);

    if (pl.dingone === 0) {

        print(`You are standing on a platform jutting out over the ocean. All of the picnic tables here are empty, except for one, which is occupied by a frowning dingo typing furiously at his laptop.`);

        addRoomObjectAction(`dingo`, `look at`, function() {
            print(`A male dingo, likely a student from the nearby University. He's sitting at one of the wooden picnic tables, typing furiously at his laptop. Next to the laptop stands a half-empty bottle of Fountain Dew, with a few other empty energy drink bottles lying lifeless on the table, and some on the ground, most likely having rolled off.<br><br>You hear squeaks coming from below the table. At first, you don't see anything. But then… you notice that the dingo has a mouse under his right footpaw. He's playing with it, gently squishing it and curling his toes around the poor creature. An improvised stress ball?<br><br>He's not wearing anything, but that's not surprising - it's scorching hot today. You also see a skateboard leaning against the table, apparently the dingo's preferred method of transportation. It's quite scratched up from his claws.`);
        });

        addRoomObjectAction(`dingo`, `talk to`, function() {
            disableInteraction();
            print(`He looks up from his laptop, his blue eyes gleaming in the sun.<br><br>"Wassup!"`);
            link(`Ask for a job`, function() {
                nukeHyperlinks();
                print(`The dingo laughs. "You're asking a <em>student</em> for a <em>job</em>? We're broke, dude! Although… I could spare a few Astleys, I guess. Depends on what you have to offer!"`);
                link(`Offer to help him with his work`, function() {
                    nukeHyperlinks();
                    print(`"Heh. It's an online exam. I have 2 hours left to finish it. I've been too busy… umm… <em>doing stuff</em> to study," he says, grinning sheepishly. "I mean, University <em>is</em> the first time a lot of us get to experience true freedom, ya know. But yeah… I have three questions left, and I just can't work out what the frickin' answer is. So I might as well let <em>you</em> try instead, I guess. If you get all three of them right, I'll give you 100 Astleys. If you get all three of them <em>wrong</em>, however, then… umm… I eat ya!"<br><br>"Uhh…"<br><br>"Haha! Just kidding. You should have seen your face! Ahh, you preythings never fail to entertain. If you get all three wrong, <em>you</em> pay <em>me</em> 100 Astleys."<br><br>"And if I'm somewhere in-between?"<br><br>The dingo shrugs. "Then it's neutral. No cash is exchanged. Deal?"`);
                    link(`Deal`, function() {
                        nukeHyperlinks();
                        print(`"Wonderful! Okay, here is the first question:"`);
                        image(`data2.dat`);
                        print(`Shown above are four squirrels buried up to their necks in the ground. They cannot move, so they can only look forward. Between A and B is a brick wall which cannot be seen through.<br><br>They all know that, between them, they are wearing four hats - two black, and two green - but they do not know what color they are wearing themselves, or what color any of the other squirrels are wearing, unless they can see them. Each of them know where the other three squirrels are buried, though.<br><br>In order to avoid being eaten, one of them must call out to their fox captor the color of their own hat. If they get it wrong, everyone will be eaten. They are not allowed to talk to each other, and have 10 minutes to fathom it out.<br><br>After one minute, one of them calls out, being 100% certain of the color of his hat, and he is correct.<br><br>Question: Which one of them calls out? I.e. which one of them is the only one who can answer correctly without guessing?<br><br>This is not a trick question. There are no outside influences nor other ways of communicating. They cannot move and are buried in a straight line; A &amp; B can only see their respective sides of the wall, C can see B, and D can see B &amp; C.`);
                        link(`Answer`, function() {
                            nukeHyperlinks();
                            pl.answer = ask(`Enter your answer below...`);
                            if (pl.answer === 'c') {
                                print(`"Correct! OMG! How did you figure that out?! Okay, let's see the solution!"<br><br>*click*<br><br>C calls out that he is wearing a black hat. Why is he 100% certain of the color of his hat?<br><br>After a while, C comes to the realization that he must answer.<br><br>This is because D can't answer, and neither can A nor B.<br><br>D can see C and B, but can't determine his own hat color. B can't see anyone, and also can't determine his own hat color. A is in the same situation as B, where he can't see anyone and can't determine his own hat color.<br><br>Since A, B, and D are silent, that leaves C. C knows he is wearing a black hat because, if D saw that both B and C had a hat of the same color, he would know what his <em>own</em> hat would have the <em>other</em> color, and would have called out. Since he's not calling out, that means B and C have different-colored hats. And since C can see that B has a green hat, this must mean that he - C - has a <em>black</em> hat!`);
                                pl.ans++;
                            } else {
                                print(`"Noooope. Wrong. Dammit. Let's see the solution, shall we?"<br><br>*click*<br><br>C calls out that he is wearing a black hat. Why is he 100% certain of the color of his hat?<br><br>After a while, C comes to the realization that he must answer.<br><br>This is because D can't answer, and neither can A nor B.<br><br>D can see C and B, but can't determine his own hat color. B can't see anyone, and also can't determine his own hat color. A is in the same situation as B, where he can't see anyone and can't determine his own hat color.<br><br>Since A, B, and D are silent, that leaves C. C knows he is wearing a black hat because, if D saw that both B and C had a hat of the same color, he would know what his <em>own</em> hat would have the <em>other</em> color, and would have called out. Since he's not calling out, that means B and C have different-colored hats. And since C can see that B has a green hat, this must mean that he - C - has a <em>black</em> hat!`);
                            }
                            print(`"Hmm. Clever," the dingo says. "I'd never have thought of that…"`);
                            link(`Next question`, function() {
                                nukeHyperlinks();
                                print(`"Alright, here comes the next question:"`);
                                print(`I left my campsite and hiked south for 3 miles. Then I turned east and hiked for 3 miles. I then turned north and hiked for 3 miles, at which point I arrived back at my campsite and saw a bear eating my food! What color was the bear?`);
                                link(`Answer`, function() {
                                    nukeHyperlinks();
                                    pl.answer = ask(`Enter your answer below...`);
                                    if (pl.answer === 'white' || pl.answer === 'transparent' || pl.answer === 'translucent') {
                                        print(`"Correct?! What the hell, man?! That doesn't even physics! Okay, let's see the solution…"<br><br>*click*<br><br>White. The only place you can hike 3 miles south, then 3 miles east, then 3 miles north, and end up back at your starting point, is the North Pole. Polar bears are the only bears that live at the North Pole, and they are white. Orr… transparent. Orr… translucent. All three are correct, but we won't get into bear biology here…<br><br>That's because that route would look like a triangle:`);
                                        pl.ans++;
                                    } else {
                                        print(`"Wroooooooong. Okay, let's see the solution…"<br><br>*click*<br><br>White. The only place you can hike 3 miles south, then 3 miles east, then 3 miles north, and end up back at your starting point, is the North Pole. Polar bears are the only bears that live at the North Pole, and they are white. Orr… transparent. Orr… translucent. All three are correct, but we won't get into bear biology here…<br><br>That's because that route would look like a triangle:`);
                                    }
                                    image(`data3.dat`);
                                    print(`"Hmm. I <em>guess</em> that makes sense?"`);
                                    link(`Next question`, function() {
                                        nukeHyperlinks();
                                        print(`"Alright, last question. Math puzzle this time. Here we go…"`);
                                        print(`Turn me on my side and I am everything. Cut me in half and I am nothing. What am I?`);
                                        link(`Answer`, function() {
                                            nukeHyperlinks();
                                            pl.answer = ask(`Enter your answer below...`);
                                            if (pl.answer === '8' || pl.answer === 'eight') {
                                                print(`"You did it! Yes! It's eight! Not that I understand <em>why</em>, heh."<br><br>*click*<br><br>If you turn 8 on its side, you get ∞, the infinity symbol. If you cut 8 in half horizontally, you get two zeros.<br><br>"Huh. That <em>does</em> make sense! I'm so dumb…"`);
                                                pl.ans++;
                                            } else {
                                                print(`"Nope. That's a fail."<br><br>*click*<br><br>If you turn 8 on its side, you get ∞, the infinity symbol. If you cut 8 in half horizontally, you get two zeros.<br><br>"Huh. That <em>does</em> make sense! I'm so dumb…"`);
                                            }
                                            link(`Finish`, function() {
                                                nukeHyperlinks();
                                                pl.finish();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                    link(`No deal`, function() {
                        nukeHyperlinks();
                        print(`"Fair enough, mate. I'll catch you later! Gotta try and figure this shit out…"`);
                        enableInteraction();
                    });
                });
            });
            link(`Ask about the mouse`, function() {
                print(`"Huh? Oh!" He lifts his footpaw off the poor mouse he was rubbing and squishing with it. "Stress ball. Stress <em>mouse</em>. I just find mice much more stimulating than dumb, rubber balls, ya know. Don't worry, not planning to eat it or anything. I hate the taste of mice. I'll let it go eventually. Once I'm done with this stupid test…"`);
            });
            link(`&quot;Never mind…&quot;`, function() {
                nukeHyperlinks();
                print(`The dingo shrugs, turning his attention back to his laptop.`);
                enableInteraction();
            });
        });

    } else {
        print(`You are standing on a platform jutting out over the ocean. All of the picnic tables here are empty.`);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pl.finish = function() {
        if (pl.ans === 3) {
            pl.money += 100;
            pl.dingone++;
            pl.invite++;
            enableInteraction();
            removeRoomObject(`dingo`);
            if (pl.wolfPet === 1) {
                print(`"Crikey. You got them all correct, mate! I'm impressed! As promised, here's 100 Astleys for you. Sayyyyy… since you're so smart, you wouldn't mind helping me with one more assignment, would you? I'll… pay you, of course. I'd really appreciate it. <em>Reeeeeeally</em> appreciate it~"<br><br>The dingo is quiet for a moment. He just stares at you, his mind who knows where. Eventually, though, he returns to his senses with a shake of his head, and continues. "Anyway, I live at #2 Royal Street. Come pay me a visit if you want to make some extra cash. See ya!"<br><br>With that, he gets up and walks off. <br><br>Suddenly, you remember the mouse! The poor rodent is still there, lying dazed on the ground.<br><br>"Bleuuuuuugh. I never wanna see paws ever again for the rest of my life…" it whines, trying to get up on shaky legs. You lean down and pick it up with your jaws. "H-Hey! Put me down!"<br><br>>&gt; MONEY: +100 ASTLEYS<br><br>&gt;&gt; YOU RECEIVED A MOUSE`);
                pl.addMouse();
            } else {
                print(`"Crikey. You got them all correct, mate! I'm impressed! As promised, here's 100 Astleys for you. Sayyyyy… since you're so smart, you wouldn't mind helping me with one more assignment, would you? I'll… pay you, of course. I'd really appreciate it. <em>Reeeeeeally</em> appreciate it~"<br><br>The dingo is quiet for a moment. He just stares at you, his mind who knows where. Eventually, though, he returns to his senses with a shake of his head, and continues. "Anyway, I live at #2 Royal Street. Come pay me a visit if you want to make some extra cash. See ya!"<br><br>With that, he gets up and walks off.<br><br>>&gt; MONEY: +100 ASTLEYS`);
            }
        } else if (pl.ans === 0) {
            print(`"Crikey. You didn't get a single one right. You're just as dumb as me, huh. Well, that's okay. At least I earned 100 Astleys, right?"<br><br>He winks at you, presenting his paw in expectation.`);
            if (pl.money >= 100) {
                pl.money -= 100;
                pl.dingone++;
                enableInteraction();
                removeRoomObject(`dingo`);
                if (pl.wolfPet === 1) {
                    print(`You give him the money.<br><br>"Thanks, matey! I'll see you around! Gotta go and chill after so much stress!"<br><br>With that, he gets up and walks off. <br><br>Suddenly, you remember the mouse! The poor rodent is still there, lying dazed on the ground.<br><br>"Bleuuuuuugh. I never wanna see paws ever again for the rest of my life…" it whines, trying to get up on shaky legs. You lean down and pick it up with your jaws. "H-Hey! Put me down!"<br><br>>&gt; MONEY: -100 ASTLEYS<br><br>>&gt; YOU RECEIVED A MOUSE`);
                    pl.addMouse();
                } else {
                    print(`You give him the money.<br><br>"Thanks, matey! I'll see you around! Gotta go and chill after so much stress!"<br><br>With that, he gets up and walks off. <br><br>>&gt; MONEY: -100 ASTLEYS`);
                }
            } else {
                print(`You make a show of searching your pockets, but, after a while, it's clear that you don't have 100 Astleys…<br><br>"Hmmmm. So you made a bet for 100 Astleys, but didn't even have enough money for that? Naughty squirrel. Well, a deal is a deal. If you don't have enough cash, you'll have to pay by other means. Let's see… how about you hop under this table and replace the poor mouse as my stress ball, hmm? I need to relax a little after all this stress, and you look like you would make a <em>wonderful</em> stress ball. Big enough to satisfy <em>both</em> of my paws~"`);
                link(`Accept (willingly)`, function() {
                    nukeHyperlinks();
                    print(`Without a second thought, you dive under the table, all but pushing the dazed mouse out of the way, wanting his paws all to yourself. He smirks at your willingness, and you are treated to a face-full of hot, sweaty, sand-coated dingo paw. <br><br>The dingo sits back, pops some headphones on and relaxes, all while his paws knead you under the table, his toes curling around your various parts, squishing them mercilessly. No wonder the mouse was dazed; after a while of this, you lose all track of time, the moist dingo paws becoming your entire world as they leave not a single strand of your fur unmarked with their scent.<br><br>"This'll do," the dingo says eventually, sounding far away. "That was lovely, mate. I'll see you around!"<br><br>With that, the dingo leaves. Slowly, dizzily, you get back up, ready to continue on your quest… though what you <em>really</em> want is to be a plaything for the dingo's paws for all eternity~`);
                    pl.dingone++;
                    enableInteraction();
                    removeRoomObject(`dingo`);
                });
                link(`Accept (begrudgingly)`, function() {
                    nukeHyperlinks();
                    print(`You hesitantly crawl under the table, not really wanting to smell all day of dingo paws, but not really having much choice. You did make a deal, after all…<br><br>Pushing the dazed mouse aside, you lie down and wait. You don't have to wait long, though; almost instantly, your face and your mid-section are smooshed under hot, sweaty, sand-coated dingo paws.<br><br>The dingo sits back, pops some headphones on and relaxes, all while his paws knead you under the table, his toes curling around your various parts, squishing them mercilessly. No wonder the mouse was dazed; after a while of this, you lose all track of time, the moist dingo paws becoming your entire world as they leave not a single strand of your fur unmarked with their scent.<br><br>"This'll do," the dingo says eventually, sounding far away. "That was lovely, mate. I'll see you around!"<br><br>With that, the dingo leaves. Slowly, dizzily, you get back up, ready to continue on your quest.`);
                    pl.dingone++;
                    enableInteraction();
                    removeRoomObject(`dingo`);
                });
            }
        } else {
            pl.dingone++;
            enableInteraction();
            removeRoomObject(`dingo`);
            if (pl.wolfPet === 1) {
                print(`"You got ${pl.ans} out of 3 correct. Neither success nor failure, huh. Oh, well. At least neither of us have to pay! I'll see you around, mate!"<br><br>With that, he gets up and walks off. <br><br>Suddenly, you remember the mouse! The poor rodent is still there, lying dazed on the ground.<br><br>"Bleuuuuuugh. I never wanna see paws ever again for the rest of my life…" it whines, trying to get up on shaky legs. You lean down and pick it up with your jaws. "H-Hey! Put me down!"<br><br>>&gt; YOU RECEIVED A MOUSE`);
                pl.addMouse();
            } else {
                print(`"You got ${pl.ans} out of 3 correct. Neither success nor failure, huh. Oh, well. At least neither of us have to pay! I'll see you around, mate!"<br><br>With that, he gets up and walks off.`);
            }
        }
    };

    pl.addMouse = function() {
        addInventoryObjectAction(`mouse`, `inspect`, function() {
            print(`It's in your mouth. You can't really see it all that well, but it's squirming energetically, and squeaking obscenities at you.`);
        });
        addInventoryObjectAction(`mouse`, `put down`, function() {
            removeInventoryObject(`mouse`);
            pl.wolfPet = 1;
            print(`"Oh. T-Thanks. I thought you wanted to eat me…"<br><br>With that, the mouse scurries off.`);
        });
        addInventoryObjectAction(`mouse`, `swallow`, function() {
            removeInventoryObject(`mouse`);
            pl.wolfPet = 1;
            print(`You tilt your head backwards and relax your jaws, causing the mouse to fall deeper into your mouth. You push it towards the back of your throat with your tongue, biting at it whenever it tries to grab hold of your teeth and pull itself out. With how slippery your maw is, the mouse easily slides towards that dark, fleshy tunnel, aided by gravity.<br><br>"N-N-No! Please!" the mouse begs. "I have a family to feed! I-I-"<br><br>The mouse never gets to finish its sentence as you send it down to its final destination with a decisive, wet gulp. You can feel it struggling and squirming about as it goes down your throat, but it's too slippery for it to be able to do anything. Down and down your gullet it goes, past your chest, past your beating heart, eventually splashing into your stomach, giving it a pleasant weight. You belch in satisfaction, then continue on your journey.<br><br>&gt;&gt; HP: +50%`);
            pl.modHealth(50);
        });
        pl.wolfPet = 2;
    }
}

definitions['-3,3,10'] = function() {
    roomName(`Jayden's<br>House`);

    print(`You wake up in… a bathtub? A bathtub filled to the brim with a hot, vibrant-blue liquid. Jayden is standing over you, rubbing it thoroughly into your fur. He grins as you stir awake. "G'day, mate."<br><br>"What… what is this?" You try to sit up, but find yourself feeling extraordinarily weak; it takes an immense amount of effort for you to do so.<br><br>"Just a funny lil' potion I bought from the snake merchant on the beach. It's s'pposed to unbind your soul from your body and materialize it into something physical. Pretty cool, eh?"<br><br>"W-Why?" you ask, having barely enough strength to speak. The thing is, you <em>have</em> energy, you just don't seem to be able to use it to move your body. <br><br>"So I can eat it, of course! Physical = edible! This will allow me to absorb all your knowledge! With your smarts, I'll never need to revise ever again! I can party 24/7, and still get my degree! Isn't that awesome?!"`);

    link(`Yes`, function() {
        print(`You nod weakly, allowing yourself to relax. Sure, having your very <em>soul</em> devoured sounds concerning, but… what can you do, really? You barely have enough strength to speak, let alone fight back. Besides, he seems so excited! You don't have the heart to disappoint him. And there are worse places to end your life in than a handsome dingo's stomach~<br><br>"Daww. You're adorable, mate. It's so rare to find prey that knows when it's been bested! Though I should have expected that, I guess. You are a smart one, after all! If you weren't, you wouldn't be in this bathtub right now, eh?"<br><br>A few minutes later, you don't have the strength to even lift a finger. At this point, Jayden drains the bath, and then proceeds to dry you with a towel. He looks up in alarm as someone knocks on the door. "Jayden?" a female voice says, a voice much more confident than that of the skunk you encountered earlier. "What are you doing in there? I need to use the bathroom. Are you gonna be there long?"<br><br>"Uhh… a few more minutes! Almost done!"<br><br>He walks up to the door and places an ear against it, listening for footsteps. Once he's sure whoever it was has retreated to their room, he opens the door and quickly drags you over to his bedroom, locking the door behind him.<br><br>"Phew! Mission accomplished, mate! That was kinda fun. Let's get this party started then, shall we? Thanks for your sacrifice! I 'preciate it!"<br><br>He presses his lips against yours in what feels like a kiss. You close your eyes, bliss taking over your thoughts at the feeling of his warm, moist lips pressed against yours, though it soon turns into something entirely different as he begins to <em>suck</em>, pulling at something deep within your core. You don't resist, which makes the dingo's job a whole lot easier as he all but slurps up your soul from within you like a noodle. It's a bizarre experience as you're pulled right out of your body and into the dingo's maw, where you are instantly sucked down into the dark depths of his throat, but not before getting drenched in slimy dingo drool. Your descent down his throat is fast, your slippery soul needing no push as gravity makes it race down towards the gurgling stomach below.<br><br>You fall into the acids with a splash, and find your delicate soul melting almost instantly with an angry hiss. Meanwhile, your body, still in the dingo's grasp, turns to dust. Jayden burps, the strange, tingly taste of a squirrel soul still lingering on his tongue. Already he can feel your knowledge begin to course through his veins. And it's a glorious feeling, inspiring a surge of confidence within him. He has no doubt that he could sit down to do an exam right at this very moment, and get a full score. He grins gleefully, already making plans for all the fun he's gonna have, now that he never needs to revise or attend a lecture ever again. <br><br>But, there is one more thing that needs to be taken care of before his life of fun can begin. And that is vacuuming your ashes off his carpet. He does his best, though the vacuum cleaner that the landlord left for them wasn't great, so a handful of your dust would remain embedded in the carpet, to be stomped on by the dingo and to cling to his footpaws for years to come.`);
        pl.killGame("dingo");
    });

    link(`No`, function() {
        print(`You growl, trying to crawl out of the bathtub. That <em>does</em> sound awesome… for <em>him</em>! Certainly not for <em>you</em>, though - being eaten in itself sounds terrifying, but having your <em>soul</em> eaten? Who knows what consequences that will have!!! But Jayden just laughs. "Heyyy, chillax, mate! No need to be so dramatic. It's just the circle of life!"<br><br>With that, he pushes you back into the bathtub and continues rubbing the strange liquid into your skin. You get weaker by the second, and it soon becomes apparent to you that you're fighting a losing battle. Nonetheless, you carry on resisting to the bitter end, even if all you can do by now is just glare at him menacingly, no longer having the strength to so much as lift a finger. <br><br>At this point, Jayden drains the bath, and then proceeds to dry you with a towel. He looks up in alarm as someone knocks on the door. "Jayden?" a female voice says, a voice much more confident than that of the skunk you encountered earlier. "What are you doing in there? I need to use the bathroom. Are you gonna be there long?"<br><br>"Uhh… a few more minutes! Almost done!"<br><br>He walks up to the door and places an ear against it, listening for footsteps. Once he's sure whoever it was has retreated to their room, he opens the door and quickly drags you over to his bedroom, locking the door behind him.<br><br>"Phew! Mission accomplished, mate! That was kinda fun. Let's get this party started then, shall we? Thanks for your sacrifice! I 'preciate it!"<br><br>He presses his lips against yours in what feels like a kiss. As grossed out as you may be, you cannot pull away, of course, so are forced to lie there motionless as the dingo's warm, sticky drool slowly seeps into your mouth. The "kiss" soon turns into something entirely different, though, as he begins to <em>suck</em>, pulling at something deep within your core. Now, this - this is something you <em>can</em> fight against! You summon all your willpower in an attempt to hold onto your soul and stop it from being sucked up by the dingo's hungry maw. The struggle causes immense pain to your entire body as your soul is being pulled back and forth, like some weird variation of tug of war. <br><br>In the end, though, Jayden wins; having sucked enough of your soul out, he chomps down on it and pulls with all his might, ripping it out of your body before munching down on it. It feels strange in his mouth, like a jello that exists only 50% of the time. He tilts his head back and swallows it with a decisive gulp. <br><br>It's a bizarre experience as you're pulled right out of your body and into the dingo's maw, where his teeth attempt to pulverize you. While it does feel quite unpleasant, they don't seem to do any damage to you. After that unpleasant encounter, you are sucked down into the dark depths of his throat, soaked in sticky dingo drool both on the outside and on the inside. Your descent down his throat is fast, your slippery soul needing no push as gravity makes it race down towards the gurgling stomach below.<br><br>You fall into the acids with a splash, and find your delicate soul melting almost instantly with an angry hiss. Meanwhile, your body, still in the dingo's grasp, turns to dust. Jayden burps, the strange, tingly taste of a squirrel soul still lingering on his tongue. Already he can feel your knowledge begin to course through his veins. And it's a glorious feeling, inspiring a surge of confidence within him. He has no doubt that he could sit down to do an exam right at this very moment, and get a full score. He grins gleefully, already making plans for all the fun he's gonna have, now that he never needs to revise or attend a lecture ever again. <br><br>But, there is one more thing that needs to be taken care of before his life of fun can begin. And that is vacuuming your ashes off his carpet. He does his best, though the vacuum cleaner that the landlord left for them wasn't great, so a handful of your dust would remain embedded in the carpet, to be stomped on by the dingo and to cling to his footpaws for years to come.`);
        pl.killGame("dingo");
    });
}

definitions['0,4,10'] = function() {
    addExits(south, east, west);
    print(`You're on the beach. Your footpaws sink pleasantly into warm, soft, golden sand. The beach is quite crowded, with patrons of all kinds splashing about in the ocean, sunbathing, playing various ball games, burying each other in the sand… you name it!`);
    roomName(`Beach`);

    addRoomObjectAction(`sand`, `search through`, function() {
        print(`You don't find anything.`);
    });
}

definitions['1,4,10'] = function() {
    print(`You're on the beach. Your footpaws sink pleasantly into warm, soft, golden sand. The beach is quite crowded, with patrons of all kinds splashing about in the ocean, sunbathing, playing various ball games, burying each other in the sand… you name it!<br><br>There's a little hut here, with a big, flashy sign that says "Curiosities 4 Sale". In front of the hut stand a few tables, with various items for sale on display. Behind the tables is a striped red-and-black snake. He stares at you enticingly, daring you to approach.`);
    roomName(`Beach`);
    addExits(west, southwest);

    addRoomObjectAction(`sand`, `search through`, function() {
        print(`You don't find anything.`);
    });

    if (pl.gem === 0) {

        addRoomObjectAction(`snake`, `approach`, function() {
            disableInteraction();
            print(`"Hello there, tas-s-sty s-s-squirrel. How lovely to s-s-see you! Are you interes-s-sted in any of my wares-s-s?"<br><br>You point at the gem he has for sale, the gem you came here for in the first place, the gem that will restore your memories and allow you to finally return to your normal everyday life.`);
            if (pl.money < 1000) {
                print(`"Hmmmmm. You don't s-s-seem to have enough money, my s-s-sweet. Come back when your pockets-s-s are heavier~"`);
                link(`Steal gem`, function() {
                    nukeHyperlinks();
                    print(`Pffft. What's stopping you from stealing the gem? It's literally <em>right there</em>, and it's only guarded by a dumb snake!<br><br>Sooooo that's exactly what you do! You grab it, then run away as fast as your little legs can carry you. But then, all of a sudden…<br><br>The sand below you collapses, and you fall into a deep, deep hole. <br><br>"How dull," the snake says, peering into the hole. "You know, that's-s-s the firs-s-st thief trap I ever s-s-set up. Works-s-s only about 25% of the time. You didn't even get to the exciting ones-s-s."<br><br>With one lightning-fast move, he bites you, and you find your muscles relaxing involuntarily as paralysis sets in. The snake drags you out of the hole and back towards his little shop, where he slowly begins to coil around you. Beachgoers occasionally look at you and either ignore the spectacle, chuckle, or some even turn themselves in your direction to watch the spectacle, sipping on some soda or licking ice cream.`);
                    link(`Remind him that this is illegal`, function() {
                        print(`Mustering all your strength, your tongue barely able to move, you remind the snake that eating preythings is illegal within the city's perimeter. The snake just laughs. "As-s-s is-s-s s-s-stealing! Thieves-s-s have no rights-s-s, my tasty friend."`);
                    });
                    link(`Try to escape`, function() {
                        print(`No way are you becoming food for a dumb, overgrown worm! Your muscles barely respond to your commands, but you force them to move with all your willpower. It works! The more you try to struggle, the more responsive they become! So responsive, in fact, that you can now feebly bite into the snake's scaly body. He just chuckles at that. <br><br>"Looks-s-s like a certain tasty s-s-squirrel needs-s-s s-s-some calming down~"<br><br>Once again the snake bites you with a lightning-fast strike, his fangs pumping poison directly into your veins, but much more this time. You can actually feel the cool liquid circulating in your bloodstream, and it sends shivers down your spine. A few seconds pass before your muscles begin to relax…<br><br>…and relax…<br><br>…and relax…<br><br>…until they're <em>beyond</em> relaxed, and a strange feeling of euphoria overtakes you. You look in awe at the snake, finding yourself wanting nothing more than to slide into the warm, slimy darkness of his gut and digest in peace. <br><br>"That's-s-s better. See? Nothing to be afraid of, little s-s-snack~"<br><br>The snake's jaws open wide, and he admits your head into his drooling, pink maw. You find yourself grinning stupidly as you stare into the dark depths of the snake's body, eager to be swallowed up by the oppressive darkness. What has his poison done to you?! You know you should be terrified, you know you should be fighting for your life, but… what's the point? Squirrels always become someone's food at some point. The only question is <em>when</em>, and <em>who</em> will be lucky enough to fill their guts with one. Well, you have those two answers - your pred is the snake, and your time to get gurgled up is <em>now</em>, and you're content with that. Your final destiny has finally been revealed; all that's left for you to do in this life is relax and let the snake have his way.<br><br>And that's precisely what he does, as he slowly swallows up more and more of your body, until all that's left of you outside his maw is your paws, but those too disappear soon after, and you are reduced to an anonymous bulge traveling towards his gut. The slimy muscles squeezing at you mercilessly are somewhat cool to the touch, but they squish you so hard by pushing you towards the snake's gut that you're pretty sure a few of your bones snap, but you don't care. You don't feel any pain, just pure, undiluted bliss.<br><br>It takes a solid few minutes for you to reach the stomach. It's a caustic pit of slimy acids - as expected - which reeks of spoiled meat and death. There's no escape from the stench, though, as you're gonna be stewing in here until you die and contribute to the stench yourself. In addition to the acids slowly eating away at your skin, the stomach walls that wrap around you begin to shift and squirm, kneading against you, rubbing those digestive juices into you to speed up digestion.<br><br>The snake is still a cold-blooded creature, though, so digestion will take quite a while. He would laze about in the sun for the next few days to speed up the chemical processes happening within his gut, during which the euphoric effects his poison had on you would slowly wear off, to be replaced by dizziness and confusion from slowly being turned into anonymous chyme. It's insanely uncomfortable, as you're forced to lie in this single position for <em>days</em>, squished tight by the stomach walls, with absolutely nothing to do but stare into the oppressive darkness and feel your flesh slowly melting off of your bones. <br><br>A few more days pass, and the snake spits out a beautifully bleached squirrel skull, which he would make into something sellable - like a necklace or a cup, he wasn't sure yet - and sell it to whoever was ready to shell out cold, hard cash for a dumb squirrel skull.`);
                        pl.killGame("snake");
                    });
                });
                link(`Leave`, function() {
                    nukeHyperlinks();
                    print(`"I'll s-s-see you later, friend!"`);
                    enableInteraction();
                });
            } else {
                pl.money -= 1000;
                print(`"Ohh, how I love the s-s-sight of s-s-so many coins-s-s in one place. It's-s-s a deal."<br><br>The snake takes 1000 Astleys off of you, and gives you the gem in exchange.<br><br>&gt;&gt; MONEY: -1000 ASTLEYS<br><br>&gt;&gt; YOU RECEIVED A CHROPHENITE GEM`);
                pl.gem++;
                enableInteraction();
                addInventoryObjectAction(`chrophenite`, `inspect`, function() {
                    print(`A beautiful, dark blue gem. Just holding it makes you feel… <em>unstoppable</em>, immense power tingling at your fingertips. Looking into it is like looking into truth itself, your mind suddenly understanding things that cannot be explained with words. After staring into it for a whole <em>hour</em>, you finally succeed in taking your eyes off of it. You put it away in your backpack, somewhat shaken by this experience.`);
                });
            }
        });

    } else {

        addRoomObjectAction(`snake`, `approach`, function() {
            print(`"Go now, little s-s-snack! You're making my mouth water~"`);
        });

    }
}

definitions['-1,4,10'] = function() {
    print(`You're on the beach. Your footpaws sink pleasantly into warm, soft, golden sand. The beach is quite crowded, with patrons of all kinds splashing about in the ocean, sunbathing, playing various ball games, burying each other in the sand… you name it!`);
    roomName(`Beach`);
    addExits(east, southeast);

    addRoomObjectAction(`sand`, `search through`, function() {
        if (pl.sand === 0) {
            print(`You find 100 Astleys!<br><br>&gt;&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
        } else if (pl.sand === 1) {
            print(`You don't find anything.`);
        } else if (pl.sand === 2) {
            print(`You find 100 Astleys!<br><br>&gt;&gt; MONEY: +100 ASTLEYS`);
            pl.money += 100;
        } else print(`You don't find anything.`);
        pl.sand++;
    });
}

definitions['0,0,5'] = function() {
    clearConsole();

    dom_scene.innerHTML += `<h2 style='text-align: center'>The White Room</h2>`;

    roomName(`White<br>Room`);

    print(`You find yourself falling back into the White Room through the teleporter screen, hitting the smooth, hard, polished floor with a thud, the gem flying out of your paws and clinking against the floor.<br><br>"Oww."<br><br>You get up, rubbing your butt, and pick up the gem, which luckily isn't broken. In fact, there's not a single scratch on it. Phew!<br><br>What strikes you, though, is the ominous silence in the room. <br><br>"Umm… hello? Doc?"<br><br>No response.<br><br>Where are all the other squirrels? <br><br>"Helloooooooo…"<br><br>Your lonely voice echoes around the room, looking for ears to enter. When it finds none, it dies a slow, sad death, bouncing from wall to wall.<br><br>Movement catches your eye, and you turn your attention back to the teleporter screen. You watch in horror as a dark cloud appears to engulf the sunny island, shrouding it in darkness. You watch as it swallows a random passer-by, who instantly begins to snarl, drool dripping from his maw as he pounces on another terrified passer-by, though you can't see what happens next as they go off-screen.<br><br>"What the hell?!"<br><br><em>CLUNK!</em><br><br>All electricity appears to have been cut off with the sound, as the lights in the room die, and so does the teleporter, shrouding the room in impenetrable darkness.<br><br>You hug the gem closer to yourself in fear.<br><br>One second passes…<br><br>Two seconds…<br><br>Three…<br><br>Then, all of a sudden, an "EXIT" sign comes to life at the end of the room, glowing with an alien, greenish hue, illuminating a door below it.`);

    link(`Exit`, function() {
        nukeHyperlinks();
        print(`You slowly, uncertainly approach the door, expecting monsters to jump out at you from the shadows.<br><br>They don't.<br><br>The door creaks as you open it, revealing a much <em>cozier</em> room, with walls made of smooth, polished hardwood panels, and a mighty fire roaring in the fireplace at the end of the room. By the fireplace is a table, and next to the table are two cozy-looking red chairs. In one of the chairs sits a snow-white squirrel, resting its footpaws on the table, their pawpads a vibrant pink in the firelight.<br><br>"Welcome back," the squirrel says, sipping some liquid from a cup, never taking his eyes off you. No, not <em>you</em> - the <em>gem</em>. Judging by the smell, he's sipping coffee.<br><br>"D-Doctor?"<br><br>"That is correct. Though I'm not really a Doctor. You might know me by another name. Can you remember it?"<br><br>You can't, but the memories are tugging wildly at your brain. You <em>do</em> know him. You <em>do</em> recognize him. But… where from?<br><br>"S… S… Something beginning with S…"<br><br>The squirrel grins. "Not bad. <em>Snow.</em>"<br><br>Snow. Yes, that's right. The name makes you feel uneasy, but you don't know why. "General Snow."<br><br>Snow chuckles. "Well, I'm not really a General either." His eyes narrow as he continues, "Not anymore, I'm not."<br><br>"I… I don't remember…"<br><br>"Come," Snow says. "Give me the gem, and we shall make you remember."<br><br>You're not entirely sure if giving him the gem is a good idea - something is clearly off about this character - but what choice do you have? You can't see an escape route anywhere, and something tells you you shouldn't mess with this squirrel. And you <em>really</em> want your memories back…<br><br>So, slowly, hesitantly, you approach Snow, and give him the gem. <br><br>"Good squirrel," he says, staring with awe at the gem in his paws. "Let's get to work, shall we?"<br><br>He pulls a lever next to the chimney, and you watch in amazement as the chandelier high up above you begins to descend with a loud whirring noise. You move out of the way, and watch as a strange device materializes itself from the ceiling, a device which holds two more gems identical to the one you brought Snow, the only difference being their colors - one is red, and the other one is green.<br><br>There's one empty slot in the device, which is where Snow places the blue gem. As soon as he does so, all three gems begin to glow. Snow presses a button on the machine, which then proceeds to emit an ear-piercing, high-pitched wail. You watch as red, green, and blue <em>lightning</em> is sucked out of each respective gem, making its way along metal rods to a vial at the center of the contraption, filled with a clear liquid.<br><br>The liquid quickly changes color, from being transparent to shimmering with all the colors of the rainbow, while the gems themselves begin to lose their glow, eventually becoming black as night, losing their beauty, losing their awe-inspiring <em>power</em>. <br><br>Once the process is complete, Snow grabs the vial, dumps its contents into his coffee, mixes it around with a teaspoon, and then drinks the mixture. Almost instantly, his fur changes color in a similar vain to the liquid he just drank, from snow-white to a <em>glowing</em> white that seems to vaguely shimmer with all the colors of the rainbow. Snow begins to shudder violently. Concerned, you take a few steps back, but he eventually regains control of himself.<br><br>"What the-"<br><br>Snow holds up a paw to silence you. "The Chrophenite gems are the <em>heart</em> of our planet. Why do you think we are the only planet in the entire Universe that has <em>life</em> in it?"<br><br>He makes his way over to the table by the fireplace, and scoops something up from a bowl, curling his fingers around it into a fist. <br><br>"It's because of these gems and their power," he continues. "There is a lot I still don't understand about these gems and how they work. But I do know that they require sacrifices, they require <em>blood</em>. Without it, their power begins to wane. Ancient humans understood that, but this knowledge was eventually lost to time, and life itself began to dwindle. Diseases spread like wildfire, waters turned into poison, magic disappeared off the face of the earth."<br><br>Snow walks back towards you. He stands right in front of you, so close that you can smell the coffee on his warm breath, his eyes regarding you curiously. "And now, their power is within <em>me</em>. I am now a <em>god</em>, the source of what little life remains on this planet. With the power of the gems, I am now able to give you back what I have taken away; I can give you back your memories."<br><br>"Wait… <em>you</em> took them away?! How? <em>Why</em>?"<br><br>Snow shrugs. "After you defeated me, and turned my rat army into nothing more than cockroaches, to be eaten and trodden upon by the island's inhabitants, I learned that The Device, protected by that blasted mink, was nothing more than a mere replica of something called a Chrophenite gem, a replica made by the humans as a last effort to keep The Darkness away from the island. So I started looking for the <em>real</em> thing, the thing that protected the southern part of the island, the gem itself. I never found it. But <em>you</em> did."<br><br>"But-"<br><br>Snow once again holds up a paw to silence you.<br><br>"But you had no idea the gem's power was waning," Snow continues. "When it became so weak that it could no longer protect the island, and The Darkness started devouring everything, you took all the squirrels you could find that were still unaffected by The Darkness, and rushed to the gem. It indeed protected the ten of you from The Darkness… but not from <em>me</em>. I found you, I pacified you, I took the gem. Then I cleared your memories, and made you all get me the <em>second</em> gem from the Isle of Frost using this teleporter the humans left behind when they disappeared. Then I cleared your memories <em>again</em>, and made you get me this final gem from the Isle of Zing, which you just saw being devoured by The Darkness as well, since they no longer have their gem. That dumb snake had no idea what he was selling!"<br><br>"That means… the whole world…"<br><br>"Is now shrouded by darkness. By evil. Correct! But let's not get ahead of ourselves. You need to remember these things <em>yourself</em>. So let me finally restore your memories. But, to do so, I need to restore the gems' power a little. With a sacrifice."<br><br>Snow uncurls his fingers, revealing what it was that he scooped out of the bowl earlier - ${pl.lives - 1} tiny squirrels sitting in the palm of his hand, shaking with terror, their fur plastered against their skin, soaking wet from being held so long in Snow's clammy paw.<br><br>"The size makes things easier. I can absorb ${pl.lives - 1} lives in one swallow!"`);
        link(`Offer yourself in their place`, function() {
            nukeHyperlinks();
            print(`Snow grins. "No, I want <em>you</em> specifically. <em>You're</em> my arch nemesis, not <em>them</em>. I need <em>you</em> to remember everything. Besides, you may be useful. You're very smart for a squirrel. Just like me."<br><br>Without another word, he pops the other squirrels in his maw, then swallows them all with a single gulp, the squirming mass of tangled limbs and coffee-scented squirrel drool making quite an impressive bulge in his throat, before disappearing deep inside his body.<br><br>You find yourself unable to take your eyes off his stomach, where you know your fellow squirrels are now being churned alive, and there is nothing you can do to help them.<br><br>"Hmm. Not bad. Not bad at all. I always wondered what we taste like." He turns, making his way back to his chair. He sits on it calmly, puts his paws back up onto the table, and gestures to the other chair. "Please, sit down. Once your friends digest enough, I'll have enough power to restore your memories. For now, just sit back and relax."<br><br>You do, collapsing onto the chair, using this time to process everything you just learned.`);
            pl.wait();
        });
        link(`Stay silent`, function() {
            nukeHyperlinks();
            print(`You stay silent and watch in horror as Snow pops the squirrels in his maw, then begins to crunch them up.<br><br>Crunch. Crunch. Crunch.<br><br>You find yourself unable to take your eyes off his muzzle, where you know your fellow squirrels are being turned to minced squirrel meat, mixed with Snow's coffee-scented drool. Finally, Snow tilts his head up and swallows the mess in his mouth with a decisive gulp.<br><br>"Hmm. Not bad. Not bad at all. I always wondered what we taste like." He turns, making his way back to his chair. He sits on it calmly, puts his paws back up onto the table, and gestures to the other chair. "Please, sit down. Once your friends digest enough, I'll have enough power to restore your memories. For now, just sit back and relax."<br><br>You do, collapsing onto the chair, using this time to process everything you just learned.`);
            pl.wait();
        });
        link(`Ask if there is another way`, function() {
            print(`"Another way? No, there isn't."<br><br>"But… you <em>cleared</em> our memories <em>without</em> the gem. Can't you restore them without the gem as well?"<br><br>Snow smiles, shaking his head, pity in his eyes. Not for the situation, but for your silly question, your lack of knowledge. "No. It's easy to destroy things. It's much more difficult to <em>repair</em> them."`);
        });
        link(`Say that you don't want your memories back`, function() {
            print(`Snow chuckles. "Even so, I need the power. Whether you want your memories back or not, I need a sacrifice."<br><br>"Well, then… I can get you something else as a sacrifice!"<br><br>Snow shakes his head. "I can't risk it. I need a sacrifice <em>right now</em>, or the power of the gems may fade away entirely, and I will not be able to resurrect it."`);
        });
        link(`Threaten him`, function() {
            print(`Snow grins. "Look, just because I don't like to involve myself in fights doesn't mean I <em>can't</em> fight. Besides - kill me, and you will lose all hope of ever getting rid of The Darkness, of ever returning our world to normal."`);
        });
    });

    pl.wait = function() {
        link(`Wait`, function() {
            nukeHyperlinks();
            print(`"Okay," Snow says after a while. "It is time."<br><br>With a snap of his fingers, your memories are restored. You get a headache as you try to piece your memories together with everything Snow just told you and build a full picture of all the events in your mind, but you get there eventually.<br><br>"So… now what? What do you <em>want</em>?"<br><br>"Now that I have the gems' power at my disposal, I no longer need to be afraid of going out into The Darkness. I have conquered this world, I am now its ruler. I shall go out, and increase my power as much as I can by devouring others. Once I have enough power, I shall begin my research to find where the humans have gone. Evidence suggests they are still out there somewhere, most likely not even on this planet. I shall find them, and I shall conquer that place as well. I will rule <em>everything</em>." He thinks for a moment before adding, with gritted teeth, "I also have a score to settle with the humans…"<br><br>"What about <em>me</em>?" you ask, feeling dumb. But you have no idea! You feel so useless. You're just an ordinary squirrel, facing forces beyond your understanding. And you thought defeating the rats was a grand adventure. Pff. Yeah, right.<br><br>"<em>You</em>, my friend, are now going to lick my paws clean as I devise my schemes."<br><br>"What?!"<br><br>"You heard me. Lick my paws. Surrender to me. Acknowledge that I have bested you. Oh, and apologize for everything you've done to me. You've no idea how long I waited for this moment~"`);
            link(`Lick his paws`, function() {
                nukeHyperlinks();
                print(`You sigh. "I acknowledge defeat. You bested me, Snow. You win. I'm sorry. I humbly ask for your forgiveness."<br><br>With that, you lean towards his paws and begin to lick them submissively. They're actually quite clean, if a little dusty, and you have to admit that his pink paws look gorgeous in the firelight. Snow speaks only once both of his paws are squeaky clean. <br><br>"Good squirrel. Having all this new power to play with, I'm not as mad at you as I once was. I once daydreamed of sinking my teeth into your throat and tasting your red, hot blood on my tongue as you begged for mercy. But I'm willing to forget your transgressions. What you do now is up to you. You can go out there and look for a way to get rid of The Darkness, if you want. Even <em>I</em> can't help you with that, as we would need <em>thousands</em> of years' worth of sacrifices to restore the gems' power to what it once was. Alternatively, you can become my little assistant and help me find the humans. Or, if you've had enough adventures for a lifetime… I'll be more than happy to recycle you into power for myself, like I did to your friends. It's an honor, really. You get to become part of a <em>god</em>~"`);
                pl.sqchoices();
            });
            link(`Refuse`, function() {
                nukeHyperlinks();
                print(`"I will not!" you say with a snort, crossing your arms. <br><br>"Oh? Are you sure you want to anger a god?"<br><br>"You're no god, you're just an ordinary squirrel with some fancy lights in your belly."<br><br>"Very well."<br><br>Snow snaps his fingers, and you find yourself unable to move, save for your head. "Hey, lemme go!"<br><br>Snow gets up and moves towards you on all fours in a silky-smooth motion. "That wasn't a request, my friend. That was an <em>order</em>."<br><br>Without another word, he takes hold of your right paw, and admits one of your fingers into his maw, his delicate tongue a stark contrast to the cold, hard teeth pressing menacingly against it.<br><br>"No. No! Hold on, we can-"<br><br><em>CRUNCH!</em><br><br>You scream as Snow bites off your finger, then proceeds to chew on it menacingly before swallowing it with a single gulp. He then crams another one of your fingers into his now bloodied maw.<br><br>"Okay, okay, you win, I'll do it!" you beg.<br><br><em>CRUNCH!</em><br><br>You once again cry out in pain as Snow repeats the procedure, before releasing his magical grip on you and walking back to his chair. He once again offers his paws to you, looking down expectantly at your sobbing self.<br><br>"I acknowledge d-d-defeat. You b-bested me, Snow. You win. I'm s-sorry. I humbly ask for your f-forgiveness."<br><br>"That's better. Now lick."<br><br>You lean towards his paws and begin to lick them submissively. You're relieved to find that they're actually quite clean, if a little dusty, and you have to admit that his pink paws look gorgeous in the firelight. Snow speaks only once both of his paws are squeaky clean. <br><br>"Good squirrel. Having all this new power to play with, I'm not as mad at you as I once was."<br><br>He reaches towards you and touches your injured paw. You flinch, but he doesn't hurt you; in the blink of an eye, you find that your paw is once again whole, as if nothing ever happened to it. You stare at it in amazement. <br><br>"You know, there was a time when I daydreamed of sinking my teeth into your throat and tasting your red, hot blood on my tongue as you begged for mercy," Snow continues. "I suppose that dream is somewhat fulfilled now! I'm willing to forget your transgressions. What you do now is up to you. You can go out there and look for a way to get rid of The Darkness, if you want. Even <em>I</em> can't help you with that, as we would need <em>thousands</em> of years' worth of sacrifices to restore the gems' power to what it once was. Alternatively, you can become my little assistant and help me find the humans. Or, if you've had enough adventures for a lifetime… I'll be more than happy to recycle you into power for myself, like I did to your friends. It's an honor, really. You get to become part of a <em>god</em>~"`);
                pl.sqchoices();
            });
        });
    };

    pl.sqchoices = function() {
        link(`Become his assistant`, function() {
            nukeHyperlinks();
            print(`"Ahh. Splendid choice! It's been a while since I last had an assistant, let alone a <em>smart</em> one. You're doing the right thing, my friend. It's <em>always</em> better to be on the winning side~"`);
            pl.victory();
        });
        link(`Get out there and look for a way to defeat The Darkness`, function() {
            nukeHyperlinks();
            print(`"Very well. Go out there and do your thing. But be warned, you likely won't last long. And, even if you do manage to survive out there <em>and</em> not let The Darkness take over your mind, I doubt you'll find another way to defeat The Darkness. But I do wish you luck. And never try to spoil my plans ever again. I won't be so merciful next time. Off you go now! I've got lots of god things to do~"<br><br>With that, he shows you the exit, and you venture out into the cold, cruel, eternal night.`);
            pl.victory();
        });
        link(`Sacrifice yourself to Snow`, function() {
            nukeHyperlinks();
            print(`You bury your face in his pawpads so that you don't have to look him in the eye, ashamed of what you're about to say. <br><br>"Eat me," you say, your voice muffled by his feet.<br><br>"What was that?" Snow asks, grinning. "Not sure I quite heard that."<br><br>You pull your face away from his paw, just a little, just enough to make your voice a little more audible. "Eat me."<br><br>"I didn't think you'd agree to this, but it's a wonderful choice, my fluffy friend. A truly honorable death."<br><br>He places a forepaw on your head, and you soon find yourself getting smaller and smaller, until you are the same size as your fellow squirrels were when they went down Snow's throat, never to be seen again. He scoops you up and holds you at eye level. Your face burns with embarrassment, but you find yourself unable to look away from those huge, gleaming eyes taking in the tiny, defeated form of their ex-archnemesis for the very last time. <br><br>"Well, what can I say," Snow says, his hot breath still having the faint smell of coffee on it. "You've been a <em>good</em> pain in the ass. Without your shenanigans, I would probably have never ended up where I am now."<br><br>With that, he simply opens his maw wide, allowing you to hop in at your own pace.`);
            link(`Stare into his maw`, function() {
                print(`You stare into the pink depths of Snow's maw, as pretty as his paws in the warm firelight, if not more. His incisors look freshly sharpened, ever ready for battle, his molars healthy, ready to crush anything that's put under them. The glistening tongue is like a red carpet that leads into the deep darkness of his gullet, and you can't decide if the unexplored darkness looks inviting or terrifying. Snow is patient, letting you take your time as you take in the sight of his cavernous maw, the last thing you will ever see, the entrance to your grave.`);
            });
            link(`Enter his maw`, function() {
                nukeHyperlinks();
                print(`You slowly, uncertainly begin to enter Snow's maw, his soft, warm, squishy tongue feeling ever so welcoming to your weary paws. Once fully in his maw, you turn around to get one last look at the world you're leaving behind, the world you're leaving behind for a new one, the world the world of Snow's body, from which there is no escape. Suddenly, you slip, but Snow's bouncy tongue cushions your fall. You don't get up, instead letting yourself simply relax, thus giving Snow the green light to proceed with devouring you.<br><br>Snow slowly closes his jaws as you stare at the fireplace from in-between his teeth. And then… darkness. You lose all sense of direction as Snow licks your body and drenches you in drool, flinging you all around his mouth. It's like you're in a washing machine - a hot, slimy, <em>fleshy</em> washing machine.<br><br>Eventually, he flings you to the side of his mouth. You can feel his hard, smooth molars beneath your belly, and you know what's going to happen next…`);
                link(`Stay there`, function() {
                    nukeHyperlinks();
                    print(`You've offered yourself to Snow as food, and like food you shall behave, and let him eat you how he wants. If he wants to chew you up, then, well…<br><br>You don't get to finish your thought as Snow suddenly bites down, the upper row of his teeth digging painfully into your back with more and more force, until…<br><br><em>CRUNCH!</em><br><br>Groaning, you open your eyes to the sight of a puddle of bloodied drool on Snow's tongue. How are you still alive?! You should-<br><br><em>CRUNCH! CRUNCH! CRRRRUNCH!</em><br><br>"Mmm. The sweet taste of revenge~" Snow mutters as he continues to pulverize your flesh, eventually sending it down to be processed further by his gut with a wet <em>gulp</em>!<br><br>Your life energy would soon be absorbed by him and used for his nefarious schemes, which would one day lead to him ruling over all life in the Universe. And thus you have willingly let the one you once hated with passion to take your life in his pink lil' paws and end it.`);
                    pl.victory();
                });
                link(`Slide off`, function() {
                    nukeHyperlinks();
                    print(`You slide off of Snow's teeth and back onto the wonderfully squishy softness of his tongue, not really wanting to get crushed to death.<br><br>Snow is merciful enough to adhere to your request, and instead simply tilts his head back and swallows you together with the entire pool of squirrel drool that had accumulated in his mouth.<br><br>You find yourself almost drowning as you are squeezed down his gullet, squirrel drool flooding into your mouth and your nose and your ears and your eyes. When you feel like it's about to flood into your <em>lungs</em> as well, you are finally squeezed into the fellow rodent's stomach. Though you can't see anything, you can certainly <em>smell</em> death - the unmistakable stench of half-digested squirrels and vomit. Oh, and coffee, of course. The pool of stomach acids around you is thick with chyme. Chyme formed of the half-digested remains of your squirrel companions. But no point thinking about this, as you're here to join them, and become chyme yourself.<br><br>"Mmm. The sweet taste of revenge~" Snow mutters, yawning and patting his belly as he prepares to take a short nap. Then, once he wakes up, he would begin his new life as a god, empowered with the life energy of you and your squirrel companions. And thus you have willingly let the one you once hated with passion to take your life in his pink lil' paws and end it.`);
                    pl.victory();
                });
            });
        });
    }
}