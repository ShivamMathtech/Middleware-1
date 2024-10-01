const mcbfn1 = (req, res, next) => {
  next();
};
const mcbfn2 = (req, res, next) => {
  //   let fullname = req.query.name + req.query.surname;
  next();
};
const mcbfn3 = function (req, res, next) {
  //   let nadd = fullname + req.query.addr;
  next();
};
const mcbfn4 = (req, rea, next) => {
  //   let pdetails = nadd + req.query.number;
  console.log(req.query);
  /*
  for(key in object){
  //code block to be executed
  }
  */
  let details = "";
  for (k in req.query) {
    details += req.query[k] + " ";
  }
  req.query = { details };
  console.log(details);
  next();
};
module.exports = { mcbfn1, mcbfn2, mcbfn3, mcbfn4 };
