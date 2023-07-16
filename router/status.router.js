const router = require('express').Router();
const statusService = require('../services/status.service');

router.get('/idle/current', async (req, res, err) => {
    let status = await statusService.getData("game_status","json");
    status = JSON.parse(status);
    res.status(200).json(status);
  });

router.post('/reset/start', async (req, res, err) => {
    let resetData = {
      "x": 0,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    await statusService.createFile("game_status","json",JSON.stringify(resetData))
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
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
  });

  router.put('/movement/left', async (req, res, err) => {
    newData = {
      "x": -10,
      "y": 0,
      "attacking":0,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
  });

  router.put('/movement/up', async (req, res, err) => {
    newData = {
      "x": 0,
      "y": 10,
      "attacking":0,
      "jumping": false
    }
    let status = await statusService.returnStatus("game_status","json",newData);
    res.status(200).json(status);
  });


module.exports = router;