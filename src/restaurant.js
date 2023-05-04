/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
    const menu = {
        fetchMenu: () => object,
        consumption: [],
        order: (string) => menu.consumption.push(string),
        pay: () => {
            const produtos = menu.consumption;
            for (let index = 0; index < produtos.length; index += 1) {
                if (produtos[index] === 'coxinha' || produtos[index] === 'agua') {
                    return check(produtos);
                }
            }
        }
    }
    return menu;
};

module.exports = createMenu;
