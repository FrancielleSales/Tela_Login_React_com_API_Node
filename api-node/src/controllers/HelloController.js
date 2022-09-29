class HelloController{
    async index(req, res){
        return res.json({hello: 'world test'});
    }
}

export default new HelloController();