import { ThreeCommonButton } from "../../components/common/ThreeCommonButton";
import OrderHistoryButton from "../../components/orders/orderHistory/OrderHistoryButton";
import OrderHistoryTable from "../../components/orders/orderHistory/OrderHistoryTable";
import Pagination from "../../components/suppliers/Pagination";

export const OrderHistory = () => {
  return (
    <div className="font-sans w-full min-h-screen bg-white m-0 p-0 pb-16">
      <div className="rounded-lg shadow-lg">
        <div className="m-3  rounded-md bg-white shadow-md space-y-4 mb-2 mt-4 pt-2">
          <div className="m-4  rounded-md bg-white shadow-md space-y-4 mb-2 ">
            <h3 className="text-center font-bold pb-2">Order History</h3>
          </div>

          <div className="mt-5 mb-5">
            <ThreeCommonButton
              firstBtn="Master Order"
              firstUrl="/orders/home"
              secondBtn="Order History"
              secondUrl="/orders/history"
              thirdBtn="Repeat Orders"
              thirdUrl="/orders/repeat-orders"
              />
            </div>


          <OrderHistoryButton />

        </div>
        {/* Paginaton */}
        <Pagination />

        {/* Order Table */}
        <OrderHistoryTable />

      </div>
    </div>
  );
};
