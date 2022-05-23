export interface RecipeType {
	_id?: string;
	title: string;
	description: string;
	imageUrl: string;
	timeInMins: number;
	ratings: Array<number>;
	category: Array<string>;
	ingredients: [{ ingredient: string; amount: number; unit: string }];
	instructions: [{ instruction: string }];
	comments?: [{ comment: string; name: string; createdAt: Date }];
}

// export interface RecipeType {
//   _id?: string,
//     title: string,
//     description: string,
//     imageUrl: string,
//     timeInMins: number,
//     ratings: number[],
//     category: [
//       category: string
//     ],
//     ingredients: [{
//       ingredient: string,
//       amount: number,
//       unit: string
//     }],

//     instructions: [{
//       instruction: string,
//       order: number
//     }],

//     comments?: [{
//       comment: string,
//       name: string,
//       createdAt: Date
//     }]
// }

export interface CategoryType {
	categories: [string];
}
