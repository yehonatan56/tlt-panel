module.exports.ok = async (req, res) => {
  res.send(req.user.username);
};
