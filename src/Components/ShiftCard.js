import React from "react";

const ShiftCard = (props) => {
    const { nonCashTips, cashTips, shiftDate } = props.shift;
    const totalTips = Number(nonCashTips) + Number(cashTips);

    return (
        <div className="shift-card">
                <h3>{shiftDate}</h3>
                <h3>Total Tips: {totalTips}</h3>
                
        </div>
        

    );
};

export default ShiftCard;
