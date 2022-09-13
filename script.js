import * as tf from '@tensorflow/tfjs';
import myJson from "./model/model.json" assert { type: 'json' };
async function go() {
    //const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/model.json'); 
    const mymodel = await tf.loadLayersModel(myJson); 
    mymodel.summary();
}
go();