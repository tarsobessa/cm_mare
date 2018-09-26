class Order {
    constructor(
        public address: string,
        public number: number,
        public ref: string,
        public paymentOptional: string,
        public orderItems: OrderItem[] = [],
        public id?: string
    ) {}
}

class OrderItem {
    constructor(
        public quantity: number,
        public menuId: string
    ) {}
}

export {Order, OrderItem}
