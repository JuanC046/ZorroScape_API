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
      if (actualData.x >= -10 && actualData.x < 10 && newData.x > 0){
        data["x"] = actualData.x += newData.x 
      } 
      else if (actualData.x > -10 && actualData.x <= 10 && newData.x < 0){
        data["x"] = actualData.x += newData.x 
      }else {
        data["x"] = actualData.x
      }
      if (actualData.y >= -10 && actualData.y < 20 && newData.y > 0){
        data["y"] = actualData.y += newData.y 
      } 
      else if (actualData.y > -10 && actualData.y <= 20 && newData.y < 0){
        data["y"] = actualData.y += newData.y 
      }else {
        data["y"] = actualData.y
      }
      if (actualData.attacking >= -10 && actualData.attacking < 10 && newData.attacking > 0){
        data["attacking"] = actualData.attacking += newData.attacking
      }
      else if (actualData.attacking > -10 && actualData.attacking <= 10 && newData.attacking < 0){
        data["attacking"] = actualData.attacking += newData.attacking
      }else{
        data["attacking"] = actualData.attacking
      }
        data["jumping"] = actualData.jumping = newData.jumping
    }

    await this.updateText(fileName, fileType,JSON.stringify(data));
  }

  async returnStatus (fileName, fileType,newData){
    await this.updateFile(fileName, fileType,newData);
    let status = await this.getData(fileName, fileType);
    status = JSON.parse(status);
    return status;
  }
  async writeLog(fileName,fileType,data){
    const date = new Date();
    let time = date.getHours() +":"+ date.getMinutes()
    data = time + " -> " + data
    let files = await this.readDirectory();
    const flag = files.includes(`${fileName}.${fileType}`);
    if (flag){
      await this.writeFile(fileName,fileType,`${data}\n`)
      }
    else{
      data = "New game\n" + data + "\n"
      await this.createFile(fileName, fileType,data)
      }
  }
  async deleteLog(fileName,fileType){
    await this.deleteRef(fileName,fileType)
  }
}


module.exports = new StatusService();