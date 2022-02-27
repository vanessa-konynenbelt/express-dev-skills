import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      title: "Express Skills",
      skills: skills,
      error: error,
      time: req.time,
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

function create(req, res) {
  console.log(req.body)
  skillsDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  skillsDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/skills')
  })
}

function update(req, res) {
  skillsDb.update(req.params.id, req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function edit(req, res) {
  const skill = skillsDb.findByIdnoCallback(req.params.id)
    res.redirect(`/skills/${req.params.id}/edit`, skill)
}

function newSkill(req, res) {
  res.render('skills/new')
}

export {
	index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete, 
  update, 
  edit
}