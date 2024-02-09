export type TIngredientType = {
    _id: string,
    name: string,
    type: string,
    proteins: number, 
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    uniqueId: string,
}; 

export type TOrderType = {
    createdAt: string,
    ingredients: Array<string>,
    name: string,
    number: number,
    status: string,
    updatedAt: string,
    _id: string,
};

export type TMessageType = {
    orders: Array<TOrderType>,
    success: boolean,
    total: number,
    totalToday: number
}
