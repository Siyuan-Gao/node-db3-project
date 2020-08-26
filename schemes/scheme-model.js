
// find():
// Calling find returns a promise that resolves to an array of all schemes in the database.
// No steps are included.









// findById(id):
// Expects a scheme id as its only parameter.
// Resolve to a single scheme object.
// On an invalid id, resolves to null.


module.exports={
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}