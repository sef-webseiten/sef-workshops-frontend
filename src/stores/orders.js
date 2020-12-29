import { addDateTimeString, formatTemplate } from "../../backend-communication/workshops";
import dayjs from "dayjs";
import "dayjs/locale/de";

function prepareOrder(order) {
    order.event.dates = order.event.dates.map(addDateTimeString);
    order.timestamp = dayjs(order.timestamp).format(formatTemplate)
    return order;
}

export const ordersStore = {
    state:  {
        orders: []
    },
    mutations: {
        setOrders(state, orders) {
            orders = orders.map(prepareOrder);
            state.orders = orders;
        }
    }
}