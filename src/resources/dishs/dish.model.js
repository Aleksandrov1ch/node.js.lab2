const { v4: uuid } = require('uuid');

class Dish {
    constructor({ id = uuid(),
                    categoryId = 'null',
                    title = 'BOARD',
                    description = `description`,
                    photo = `photo.png`,
                    isPublish=true,
                    ingredients = [''],
                    price = 1000
    } = {}) {
        this.id = id;
        this.categoryId= categoryId;
        this.title = title;

    }

    static toResponse(dish) {
        const { id, categoryId, title, description, photo, isPublish, ingredients, price} = dish;
        return { id, categoryId, title, description, photo, isPublish, ingredients, price};
    }
}

module.exports = Dish;
