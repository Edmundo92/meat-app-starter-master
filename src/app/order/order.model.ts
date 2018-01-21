class Order{

    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public optionalOption: string,
        public OrderItem: OrderItem[] = []
    ){}
}

class OrderItem{

    constructor(public quantity: number, public menuId: string){}
}

export { Order, OrderItem }