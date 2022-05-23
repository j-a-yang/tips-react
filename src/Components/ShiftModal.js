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
            <div className="shift-form-container">
                <h1>Shift Form</h1>
                <form className="shift-form">
                    <table>
                    <tbody>
                    <tr>
                        <td className="form-input-cell">
                        <label>Shift Date</label>
                        <input name="shiftDate" type="date"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Non-Cash Tips</label>
                        <input name="nonCashTips" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Cash Tips</label>
                        <input name="cashTips" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Bottled Beer</label>
                        <input name="bottledBeer" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Draft Beer</label>
                        <input name="draftBeer" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Liquor</label>
                        <input name="liquor" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Sake</label>
                        <input name="sake" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Wine</label>
                        <input name="wine" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Total Net Sales</label>
                        <input name="totalNetSales" type="number"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="form-input-cell">
                        <label>Notes</label>
                        <textarea name="notes" rows="1"/>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </form>
            
            </div>
            <button onClick={props.toggleModal}>close</button>
        </Modal>
);
       
export default ShiftModal;