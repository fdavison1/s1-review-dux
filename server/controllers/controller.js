

module.exports ={
    addItem(req, res){
        const db = req.app.get('db')
        const {name , price} = req.body
         db.add_item([name, +price])
         .then(items => res.status(200).send(items))
         
    },
    getItems(req, res){
        const db = req.app.get('db')
        db.get_items().then(items=> res.status(200).send(items))
    },
    editItem(req,res){
        const db = req.app.get('db')
        const {name, price} = req.body
        const {id} = req.params
        db.edit_item([name, +id, +price]).then(items=> res.status(200).send(items))
    },
    deleteItem(req,res){
        const db = req.app.get('db')
        let {id} = req.query
        db.delete_item(+id).then(result=> res.status(200).send(result))
    }
}