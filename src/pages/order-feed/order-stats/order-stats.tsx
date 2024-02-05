import OrderBoard from "./order-board";

const OrderStats = () => {
  return (
    <div className="ml-15">
      <OrderBoard />
      <div className="mt-15">
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <div className="text text_type_digits-large">28 752</div>
      </div>
      <div className="mt-15">
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <div className="text text_type_digits-large">138</div>
      </div>
    </div>
  );
};

export default OrderStats;