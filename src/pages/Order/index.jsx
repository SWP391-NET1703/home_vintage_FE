import Breadcrumb from "components/Breadcrumb";
import Table from "components/Table/Table";
import DefaultLayout from "layout/DefaultLayout";
import { getOrders } from "./order.service";
import { useEffect, useState } from "react";

const Orders = () => {
  //đây là data cứng
  const [orders, setOrders] = useState([
    {
      _id: "65de1019bb902eb429d1190c",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      date_order: "2024-02-27T16:38:49.347Z",
      payment_method: "1",
      total_payment: "4000000",
      status_payment: 0,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65d33178c2db96df90fde085",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65de148449fc76835a277cfa",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      date_order: "2024-02-27T16:57:40.481Z",
      payment_method: "1",
      total_payment: "4000000",
      status_payment: 0,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65d33178c2db96df90fde085",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65de14be95c8492b7e01fc8f",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      date_order: "2024-02-27T16:58:38.712Z",
      payment_method: "1",
      total_payment: "4000000",
      status_payment: 0,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65d33178c2db96df90fde085",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65de1583c3b3b8feaa0ef24a",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      date_order: "2024-02-27T17:01:55.236Z",
      payment_method: "1",
      total_payment: "4000000",
      status_payment: "1",
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65d33178c2db96df90fde085",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65de16205130978c6fe4043d",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      date_order: "2024-02-27T17:04:32.419Z",
      payment_method: "1",
      total_payment: "4000000",
      status_payment: "1",
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65d33178c2db96df90fde085",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65e836c7b96025c8d585c044",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "Tang Nhon phu, Thu Duc",
      phone_number: "0123456789",
      date_order: "2024-03-06T09:26:31.081Z",
      payment_method: 1,
      total_payment: "4000000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65dde6d58a5a562d85e04e09",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65ea04a6f2d825294fc5d41d",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "hn",
      phone_number: "0123456789",
      date_order: "2024-03-07T18:17:10.772Z",
      payment_method: 1,
      total_payment: "4000000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
        {
          interior_id: "65dde6d58a5a562d85e04e09",
          price: "",
          quantity: "3",
        },
      ],
    },
    {
      _id: "65ea12761e9007c64d876b5e",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "hn",
      phone_number: "0123456789",
      date_order: "2024-03-07T19:16:06.910Z",
      payment_method: 1,
      total_payment: 10,
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "10.000.000",
          quantity: 1,
        },
      ],
    },
    {
      _id: "65ea12ff1e9007c64d876b5f",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "hn",
      phone_number: "0123456789",
      date_order: "2024-03-07T19:18:23.028Z",
      payment_method: 1,
      total_payment: "10.000.000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "10.000.000",
          quantity: 1,
        },
      ],
    },
    {
      _id: "65ea1be71e9007c64d876b60",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "hn",
      phone_number: "0123456789",
      date_order: "2024-03-07T19:56:23.183Z",
      payment_method: 1,
      total_payment: "10.000.000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "10.000.000",
          quantity: 1,
        },
      ],
    },
    {
      _id: "65ea1c1c1e9007c64d876b61",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "hn",
      phone_number: "0123456789",
      date_order: "2024-03-07T19:57:16.491Z",
      payment_method: 1,
      total_payment: "20.000.000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "10.000.000",
          quantity: 2,
        },
      ],
    },
    {
      _id: "65ea1c841e9007c64d876b62",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "hn",
      phone_number: "0123456789",
      date_order: "2024-03-07T19:59:00.244Z",
      payment_method: 1,
      total_payment: "10.000.000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "10.000.000",
          quantity: 1,
        },
      ],
    },
    {
      _id: "65edfcf20bac5e4757c52bf1",
      customer_id: "65aa9debdef460a8f7ed44d0",
      staff_id: "",
      address: "HCM, VN",
      phone_number: "0123456789",
      date_order: "2024-03-10T18:33:22.668Z",
      payment_method: 1,
      total_payment: "4000000",
      status_payment: 1,
      status_of_order: 1,
      detail: [
        {
          interior_id: "65d5d02787a9706147d870d9",
          price: "",
          quantity: "3",
        },
      ],
    },
  ]);
  // const [orders, setOrders] = useState([]);

  // const fetchData = async () => {
  //   const data = await getOrders("access_token");
  //   const ordersObject = data.result;
  //   setOrders(ordersObject.list_order_wait_confirm);
  // };

  // fetchData();

  const handleDeleteOrder = (orderId) => {
    // try {
    //   const response = await axios.delete(
    //     `https://home-vintage-backend.onrender.com/orders/${orderId}`,
    //     {
    //       headers: {
    //         Authorization: "Bearer " + access_token,
    //         "Content-Type": "application/json",
    //       },
    //       withCredentials: true,
    //     }
    //   );
    //   if ([200, 201].includes(response.status)) {
    //     // fetchData();
    //     return response.data;
    //   } else {
    //     throw new Error(response.statusText);
    //   }
    // } catch (error) {
    //   alert(error);
    // }
    //test delete trên data cứng
    console.log("delete");
    setOrders(orders.filter((order) => order._id !== orderId));
    alert("Delete success");
  };

  useEffect(() => {
    //detele xong fetch lại data
    // fetchData()
    console.log("Update Orders");
  }, [orders]);

  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="Orders" />
        <div className="flex flex-col gap-10">
          <Table orders={orders} handleDeleteOrder={handleDeleteOrder} />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Orders;
