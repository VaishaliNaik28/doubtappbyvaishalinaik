//index.js
const express=require("express");
const cors=require("cors");
const {MongoClient} = require ("mongodb");
const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req, res)=>{
	const url="mongodb+srv://vnaik5745:yNyIBPZlszY685Uk@cluster0.efqbpm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client=new MongoClient(url);
	const db=client.db("doubt24july24");
	const coll=db.collection("student");
	const record={"name":req.body.name,"pno":req.body.pno,"doubt":req.body.doubt};	
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
});

app.listen(9000, ()=>{console.log("ready @ 9000");});

