import Image from "next/image";
import * as styles from "./Ordersheet.css";
import React from "react";
import OrderSheet from "@/components/OrderSheet/Ordersheet";
import OrdererInfo from "@/components/OrderSheet/OrderInfo";
import ReceiverInfo from "@/components/OrderSheet/ReceiverInfo";
import ShippingInfo from "@/components/OrderSheet/ShippinInfo";
import Reserves from "@/components/OrderSheet/Reserves";
import PaymentMethod from "@/components/OrderSheet/paymentMethod";
import Payment from "@/components/OrderSheet/Payment";

export default function DeliveryInfoPage() {

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.orderTitle}>주문서</h1>
        <OrderSheet />
        <OrdererInfo />
        <ReceiverInfo />
        <ShippingInfo />
        <Reserves />
        <PaymentMethod/>
        <Payment/>
      </div>
    </div>
  );
}
