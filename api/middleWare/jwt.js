import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const token = req.cookies.accesToken;
  if (!token) return res.status(401).send("you are not authorized");
//burada sorun olabilir incele !!
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("token is invalid");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};