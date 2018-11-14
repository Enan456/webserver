module.exports = isntProtectedProperty

function isntProtectedProperty (property) {
  return property !== '_id' && property !== '_rev'
}
