import {Schema, model } from 'mongoose';

export interface RecipeType {
    title: string,
    description: string,
    imageUrl: string,
    timeInMins: number,
    // ratings: Array<number>,
    ratings: number[],
    category: Array<string>,
    ingredients: [{ingredient: string, amount: number, unit: string}],
    instructions:  [{instruction: string}],
    comments?: [{comment: string, name: string, createdAt: Date}]
}

const schema = new Schema<RecipeType>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    timeInMins: {type: Number, required: true},
    ratings: {type: [Number], required: true},
    category: {type: [String], required: true},
    ingredients: { type: [Object], required: true},
    instructions: { type: [Object], required: true},
    comments: {
        type: [{
            comment: String,
            name: String,
            createdAt: Date
        }], 
        required: false}
}) 

const RecipeModel = model<RecipeType>('rec', schema, 'recipes')
// const RecipeModel = model<RecipeType>('Recipe', schema)
export default RecipeModel;