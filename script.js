import * as tf from '@tensorflow/tfjs';
import myJson from "./model/model.json" assert { type: 'json' };
async function go() {
    // the following line works fine
    //const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/model.json'); 
    
    // this doesn't work. myJson is the model.json file we've saved from google collab
    const mymodel = await tf.loadLayersModel(myJson); 
    mymodel.summary();
}
go();