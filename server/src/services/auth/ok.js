module.exports.ok = async (req, res) => {
  res.json({
    user: req.user.username,
    token: req.cookies["connect.sid"],
  });
};
