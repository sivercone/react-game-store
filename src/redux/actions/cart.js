export const addGameToCart = (gameObj) => ({
   type: 'ADD_GAME_CART',
   payload: gameObj,
});

export const removeCartItem = (id) => ({
   type: 'REMOVE_CART_ITEM',
   payload: id,
});
