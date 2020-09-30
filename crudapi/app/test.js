exports.create = (req, res) => {
    // Validate request
    if (!req.body.sender) {
      res.status(400).send({ product: "Content can not be empty!" });
      return;
    }
  
    // Create a Product
    const product = new Product({
      sender: req.body.sender,
      receiver: req.body.receiver,
      content: req.body.content,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Product in the database
    product
      .save(product)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          product:
            err.product || "Some error occurred while creating the Product."
        });
      });
  };