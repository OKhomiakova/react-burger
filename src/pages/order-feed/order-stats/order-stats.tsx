import OrderBoard from "./order-board";

type TOrderStats = {
  totalOrders: number,
  totalTodayOrders: number,
};

const OrderStats: React.FC<TOrderStats & { className?: string}> = ({totalOrders, totalTodayOrders}) => {
  return (
    <div className="ml-15">
      <OrderBoard />
      <div className="mt-15">
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <div className="text text_type_digits-large">{totalOrders}</div>
      </div>
      <div className="mt-15">
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <div className="text text_type_digits-large">{totalTodayOrders}</div>
      </div>
    </div>
  );
};

export default OrderStats;