const router = require('express').Router();
const statusService = require('../services/status.service');

router.get('/idle/current', async (req, res, err) => {
    let status = await statusService.getData("game_status","json");
    status = JSON.parse(status);
    res.status(200).json(status);
  });

  router.put('/movement/right', async (req, res, err) => {
    newData = {
      "x": 10,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    await statusService.updateFile("game_status","json",newData);
    let status = await statusService.getData("game_status","json");
    status = JSON.parse(status);
    res.status(200).json(status);
  });

  router.put('/movement/left', async (req, res, err) => {
    newData = {
      "x": -10,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    await statusService.updateFile("game_status","json",newData);
    let status = await statusService.getData("game_status","json");
    status = JSON.parse(status);
    res.status(200).json(status);
  });

module.exports = router;