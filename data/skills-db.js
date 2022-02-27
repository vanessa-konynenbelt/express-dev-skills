const skills = [
  {text: 'Defining Routes', _id: 125223},
  {text: 'Processing HTTP Requests', _id: 127904},
  {text: 'Rendering View Templates', _id: 139608},
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// 
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

const findByIdnoCallback = (id) =>{
  try {
    console.log('ID', id)
    const skill = skills.find(skill => skill._id === parseInt(id))
    console.log('SKILL', skill)
    if (!skill) throw new Error ('No skill was found')
    return skill
  } catch (error) {
    console.log(error)
    return null
  }
}

function findByIdAndDelete(id, callback) {
  try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skills.push(skill)
  return callback(null, skill)
}

function update(id, skill, callback) {
  try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    skills[idx] = skill
    return callback(null, skill)
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  findByIdAndDelete,
  create, 
  update,
  findByIdnoCallback,
}