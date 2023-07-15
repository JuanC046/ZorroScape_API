const router = require('express').Router();
const statusService = require('../services/status.service');

router.get('/idle/current', async (req, res, err) => {
    const status = await statusService.getData("game_status","json");
    res.status(200).json(status);
  });

module.exports = router;