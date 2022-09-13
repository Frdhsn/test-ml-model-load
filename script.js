const tf = require("@tensorflow/tfjs");
//const myModelJSON = require('./model/model.json');
//import myJson from "./model/model.json" assert { type: 'json' };
async function go() {
    // the following line works fine
    //const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/model.json'); 
    
    // this doesn't work. myJson is the model.json file we've saved from google collab
    const mymodel = await tf.loadLayersModel('https://raw.githubusercontent.com/Frdhsn/test-ml-model-load/main/model/model.json');
    //const mymodel = await tf.models.modelFromJSON(myModelJSON)
    mymodel.summary();
}
go();