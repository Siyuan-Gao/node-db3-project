const db = require("../data/config")


// // find():
// // Calling find returns a promise that resolves to an array of all schemes in the database.
// // No steps are included.


function find() {
  return db ('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(ids => {
      return getById(ids[0]);
    });
}


function update(changes, id) {
  return db("schemes")
.where({ id })
.update(changes)
.then( count => {
    return findById(id);
});
};

function remove(id) {
  return db('schemes')
    .where('id', id)
    .del();
}

function findSteps(schemeId) {
  return db("steps")
  innnerJoin("schemes","steps.scheme_id", "schemes.id")

  .select( "steps.scheme_id",
"steps.scheme_name"
  , "steps.step_number","steps.step_number","steps.instructions")

  .where("steps.scheme_id", schemeId)
}



module.exports={
  find,
  findById,
  add,
  update,
  remove,
  findSteps,
}