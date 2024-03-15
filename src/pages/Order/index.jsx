import Breadcrumb from "components/Breadcrumb";
import Table from "components/Table/Table";
import DefaultLayout from "layout/DefaultLayout";
import { getOrders } from "./order.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const [order, setOrder] = useState([]);
  const user = useSelector((state) => state.auth.currentUser.result);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOrders(user?.access_token);

      setOrder(data.list_order_wait_confirm);
    };

    fetchData();
  }, []);

  console.log("Orders", order);
  const handleDeleteOrder = (orderId) => {
    console.log("delete");
    setOrder(order.filter((order) => order._id !== orderId));
    alert("Delete success");
  };

  useEffect(() => {
    //detele xong fetch lại data
    // fetchData();
    console.log("Update Orders");
  }, [order]);

  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="Orders" />
        <div className="flex flex-col gap-10">
          <Table orders={order} handleDeleteOrder={handleDeleteOrder} />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Orders;
