import React, {useRef, useState} from 'react';
import Navbar from "../../components/Navbar";
import {connect} from "react-redux";

function Index(props) {

    function formSubmit(e) {
        e.preventDefault();
        let a = {
            kreditSum: e.target[0].value,
            initialPay: e.target[1].value,
            yillikFoiz: e.target[2].value,
            yillikMuddat: e.target[3].value,
            kalendarYil: e.target[4].value,
            kalendarOy: e.target[5].value
        };
        props.pushObject(a);
        e.target.reset()
    }

    return (
        <Navbar>
            <div className="credit pt-3">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h4> Credit calculator </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={formSubmit}>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-g">
                                        <label htmlFor="av1">Kredit sum</label>
                                        <input id="av1" className="form-control" required min={0} name={'kreditSum'} type="number"/>
                                    </div>
                                    <div className="form-g">
                                        <label htmlFor="av2"> Boshlang`ich to`lov foizi </label>
                                        <select id="av2" className="form-control" required name={'initialPay'}>
                                            <option value=""> Select </option>
                                            <option value="20"> 20% </option>
                                            <option value="25"> 25% </option>
                                            <option value="30"> 30% </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-g">
                                        <label htmlFor="av3"> Yillik foiz </label>
                                        <select className="form-control" required name={'yillikFoiz'}>
                                            <option value=""> Select </option>
                                            <option value="12"> 12% </option>
                                            <option value="14"> 14% </option>
                                            <option value="16"> 16% </option>
                                        </select>
                                    </div>
                                    <div className="form-g">
                                        <label htmlFor="av4"> Yillik muddat </label>
                                        <select className="form-control" required name={'yillikMuddat'}>
                                            <option value=""> Select </option>
                                            <option value="1"> 1 yil </option>
                                            <option value="2"> 2 yil </option>
                                            <option value="3"> 3 yil </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-g">
                                        <label htmlFor="av5"> Kalendar yil </label>
                                        <select id="av5" className="form-control" required name={'kalendarYil'}>
                                            <option value=""> Select </option>
                                            <option value="2019"> 2019-yil </option>
                                            <option value="2020"> 2020-yil </option>
                                            <option value="2021"> 2021-yil </option>
                                        </select>
                                    </div>
                                    <div className="form-g">
                                        <label htmlFor="av6"> Kalendar oy </label>
                                        <select id="av6" className="form-control" required name={'kalendarOy'}>
                                            <option value=""> Select </option>
                                            <option value="yanvar"> Yanvar </option>
                                            <option value="iyun"> Iyun </option>
                                            <option value="dekabr"> Dekabr </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-success mt-3">
                                        Calculate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

function mapDispatchToProps(dispatch){
    return {
        pushObject : (value) => {
            dispatch({type:"PUSH_CREDIT",payload:value})
        }
    }
}

export default connect(null,mapDispatchToProps)(Index);