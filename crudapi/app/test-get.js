exports.findAll = (req, res) => {
    const from = req.query.from;
    var condition = from ? { from: { $regex: new RegExp(from), $options: "i" } } : {};
  
    Product.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          product:
            err.product || "Some error occurred while retrieving products."
        });
      });
  };