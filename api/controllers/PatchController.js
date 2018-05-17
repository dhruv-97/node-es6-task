const jsonpatch = require('json-patch');
/*
  Apply JSONPatch to an object
  The request should be of format
  req.body: {
    original: {...},
    patch: {...}
  }
*/
function jsonPatch(req, res, next) {
  if (req.body.original && req.body.patch) {
    try {
      jsonpatch.apply(req.body.original, [req.body.patch]);
      res.status(200).json(req.body.original);
    } catch (err) {
      next(err);
    }
  } else {
    const err = new Error('Either the original object or the patch object is null');
    err.status = 400;
    next(err);
  }
}
module.exports = {
  jsonPatch,
};
