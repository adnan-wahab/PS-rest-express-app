const bodyParser = require("body-parser");

let fields = ["name", "street", "city", "state", "country"];

let processAddress = (body) => {
  return {
    name: body.name,
    street: body.street,
    city: body.city,
    state: body.state,
    country: body.country,
  }
}

module.exports = (app, Address) => {
  app.use(bodyParser.json());

  app.get( "/", (req, res) =>
    res.end('navigate to /address!')
  );

  app.get( "/address", (req, res) =>
    Address.findAll().then( (result) => res.json(result) )
  );

  app.get( "/address/:id", (req, res) =>
    Address.findByPk(req.params.id).then( (result) =>
    result ? res.json(result) : res.status(404).send({message: "Cannot find Address with that ID"}) )
  );

  app.post("/address", (req, res) => {
    // uncomment when API works :)
    // axios.get('http://groupkt.com/state/get/usa/all')
    // .then(function (response) {
    // if (req.body.state in response.body.states)
    let validBody = fields.every(item => req.body.hasOwnProperty(item))
     validBody ? Address.create(processAddress(req.body)).then( (result) => res.json(result) )
       : res.status(400).send('Missing Fields');

  });

  app.put( "/address/:id", (req, res) =>
    Address.update(processAddress(req.body),
    {
      where: {
        id: req.params.id
      }
    }).then( (result) =>

    result[0] ? res.json(result) : res.status(404).send({message: "Cannot find Address with that ID"}))
  );


  app.delete( "/address/:id", (req, res) =>
    Address.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );
  return app
}
