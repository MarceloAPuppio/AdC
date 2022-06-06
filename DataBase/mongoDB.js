import {mongoose} from 'mongoose'
main().then(res=>console.log("🚀")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/autorizaciones');
}