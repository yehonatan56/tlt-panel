module.exports.ok = async (req, res) => {
  res.json({
    //s   user: req.user.username,
    token: req.cookies["connect.sid"],
  });
};
0;
