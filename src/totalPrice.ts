interface ITotalPrice {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}
const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
    const discountPrice = price * ((100 - discount) / 100);

    if(isInstallment) {
        return discountPrice / months;
    } else {
        return discountPrice;
    }
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250