var express = require('express');
var router = express.Router();
var pokeio = require('pokemon-go-node-api');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/get-inventory', function(req, res, next) {
    pokeio.GetInventory(function (err, inventory) {
        if (!err) {
            var cleanedInventory = { player_stats: null, eggs : [], pokemon: [], items: [] };
            for (var i = 0; i < inventory.inventory_delta.inventory_items.length; i++) {
                var inventory_item_data = inventory.inventory_delta.inventory_items[i].inventory_item_data;

                // Check for pokemon.
                if (inventory_item_data.pokemon) {
                    var pokemon = inventory_item_data.pokemon;
                    if (pokemon.is_egg) {
                        console.log('  [E] ' + pokemon.egg_km_walked_target + ' Egg');
                        cleanedInventory.eggs.push(pokemon);
                    } else {
                        var pokedexInfo = api.pokemonlist[parseInt(pokemon.pokemon_id) - 1];
                        console.log('  [P] ' + pokedexInfo.name + ' - ' + pokemon.cp + ' CP');
                        cleanedInventory.pokemon.push(pokemon);
                    }
                }

                // Check for player stats.
                if (inventory_item_data.player_stats) {
                    var player = inventory_item_data.player_stats;
                    console.log('  [PL] Level ' + player.level + ' - ' + player.unique_pokedex_entries + ' Unique Pokemon');

                    cleanedInventory.player_stats = player;
                }

                // Check for item.
                if (inventory_item_data.item) {
                    var item = inventory_item_data.item;
                    console.log('  [I] ' + item.item_id + ' - ' + item.count);

                    cleanedInventory.items.push(item);
                }
            }

            // callback(cleanedInventory);
            res.json(cleanedInventory);
        }
    });
    // Post.find(function(err, posts){
    //     if(err){
    //         return next(err);
    //     }
    //
    //     res.json(posts);
    // });
});

module.exports = router;