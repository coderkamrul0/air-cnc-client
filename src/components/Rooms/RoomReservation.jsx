import React from "react";
import DatePicker from "./DatePicker";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-stone-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="tex-2xl font-semibold"> $ 200</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center items-center">

      <DatePicker />
      </div>
      <hr />
      <div className="p-4">
        <Button label={'Reserved'}></Button>
      </div>
      <div className="p-4 flex flex-row justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
