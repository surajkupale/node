var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/shopping-list', (req, res) =>{
    
    if(!req.query.ids){
        res.status(400).end();
    }else{
        let Ids = req.query.ids.split(',');
        let ingredient = []
        let recipe

        Ids.forEach(id => {
            recipe = recipes.find(element =>  element.id === parseInt(id));
            if(!recipe){
                null
            }else{
                ingredient.push(recipe.ingredients);     
            }
            
        });
                      
        if(ingredient.length === 0){
            res.status(404).send('NOT_FOUND');
            res.end()
        }else{
            res.status(200).send(ingredient);   
        }
        
    }
    
})

module.exports = router;

