import { client } from "../graphql-client";
import gql from "graphql-tag";
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
            state.orders = orders;
        }
    },
    actions: {
        async loadBackendData(store) {
            let { myOrders: orders } = await client.request(gql`
                query {
                    myOrders {
                        _id
                        status
                        price
                        workshop {
                            _id
                            title
                            thumbnail
                        }
                        event {
                            dates {
                                startTime
                                endTime
                            }
                            privateLocation
                        }
                        timestamp
                    }
                }
            `);

            orders = orders.map(prepareOrder);

            store.commit("setOrders", orders);
        }
    }
}