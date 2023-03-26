exports.version = (req, res, next) => {
  return res.status(200).json("Running version 1.0") 
}