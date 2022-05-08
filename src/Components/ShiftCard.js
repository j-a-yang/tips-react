import React from "react";

class ShiftCard extends React.Component {
    render() {
        return (
            <div className="shift-card">
                 <h3>{this.props.shift}</h3>
            </div>
           

        );
    };
};

export default ShiftCard;
