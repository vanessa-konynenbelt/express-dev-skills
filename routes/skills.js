import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

//GET
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.get('/:id/edit', skillsCtrl.edit)

//POST
router.post('/', skillsCtrl.create)

//DELETE
router.delete('/:id', skillsCtrl.delete)

//PUT
router.put('/:id', skillsCtrl.update)

export {
  router
}
