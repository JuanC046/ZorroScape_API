const FileService = require('./file.service');

class StatusService extends FileService {
  constructor() {
    super();
  }

  async getData(fileName, fileType){
    let data = await this.readFile(fileName, fileType);
    return data;
  }

  async updateFile(fileName, fileType,newData) {
    let actualData = await this.getData(fileName,fileType);
    actualData = JSON.parse(actualData);
    let data = {}
    {
      if (actualData.x > -10 && actualData.x < 10){
        data["x"] = actualData.x += newData.x 
      } else {
        data["x"] = actualData.x
      }
      if (actualData.y > -10 && actualData.y < 10){
        data["y"] = actualData.y += newData.y
      }else{
        data["y"] = actualData.y
      }
      if (actualData.attacking > -10 && actualData.attacking < 10){
        data["attacking"] = actualData.attacking += newData.attacking
      }else{
        data["attacking"] = actualData.attacking
      }
        data["jumping"] = actualData.jumping = newData.jumping
    }

    await this.updateText(fileName, fileType,JSON.stringify(data));
  }
}


module.exports = new StatusService();