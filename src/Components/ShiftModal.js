import React from "react";
import Modal from "react-modal";
import ShiftForm from "./ShiftForm";

const ShiftModal = (props) => (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.toggleModal}
            contentLabel="Shift Form Modal"
            closeTimeoutMS={200}
            className="modal"
        >
            <div>
                <h1>Shift Form</h1>
            
                <form className="shift-form">
                    <label>Shift Date</label>
                    <input name="shiftDate" type="date" placeholder="shift date"/>
                    <label>Shift Type</label>
                    <input name="shiftType" placeholder="shift type"/>
                    <label>In-Time</label>
                    <input name="inTime" placeholder="in-time"/>
                    <h3>Tips</h3>
                    <label>Non-Cash Tips</label>
                    <input name="nonCashTips" placeholder="non-cash tips"/>
                    <label>Cash Tips</label>
                    <input name="cashTips" placeholder="cash tips"/>
                    <h3>Sales</h3>
                    <label>Bottled Beer</label>
                    <input name="bottledBeer" placeholder="bottled beer sales"/>
                    <label>Draft Beer</label>
                    <input name="draftBeer" placeholder="draft beer sales"/>
                    <label>Liquor</label>
                    <input name="liquor" placeholder="liquor sales"/>
                    <label>Sake</label>
                    <input name="sake" placeholder="sake sales"/>
                    <label>Wine</label>
                    <input name="wine" placeholder="wine sales"/>
                    <label>Totel Net Sales</label>
                    <input name="totalNetSales" placeholder="total net sales"/>

                    <label>Void Amount</label>
                    <input name="voidAmount" placeholder="void amount"/>
                    <label>Removal Amount</label>
                    <input name="removalAmount" placeholder="removal amount"/>
                    <label>Customer Discount</label>
                    <input name="customerDiscount" placeholder="Customer Discount"/>
                    <label>Store Discount</label>
                    <input name="storeDiscount" placeholder="Store Discount"/>
                    <label>Total Guests</label>
                    <input name="totalGuests" placeholder="Total Guests"/>
                    <label>Per-Person Average</label>
                    <input name="ppa" placeholder="Per-Person Average"/>
                    <label>Notes</label>
                    <input name="notes" placeholder="Notes"/>
                    <button>Save Shift</button>
                </form>
            
            </div>
            <button onClick={props.toggleModal}>close</button>
        </Modal>
);
       
export default ShiftModal;