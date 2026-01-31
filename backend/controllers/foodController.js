import foodModel from "../models/foodModel.js";

import fs from 'fs';



// Create Food Item

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    });
    try {
        await food.save();
        res.json({success: true,  message: "Food item added successfully"});
    }catch (error) {
        console.log(error)
        res.json({success: false, message: "Error adding food item"});
    }
};

//all food list
const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"}); 
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)  // this line is used find the food model using id

        fs.unlink(`uploads/${food.image}`, ()=>{})  //this line is used to delete the image from uploads folder

        await foodModel.findByIdAndDelete(req.body.id);   // this line is used to delete food from db

        res.json({success: true,  message: "Food item removed successfully"});

    } catch (error) {
         console.log(error)
        res.json({success: false, message: "Error"});
    }
}

export { addFood, listFood,removeFood };