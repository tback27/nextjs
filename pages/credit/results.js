import React from 'react';
import {connect} from "react-redux";
import Navbar from "../../components/Navbar";

function Results(props) {
    const credits = props.credits;

    return (
        <Navbar>
            <div className="container pt-3">
                <div className="card">
                    <div className="card-header">
                        <h4> Kredit kalendari </h4>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered table-hover text-center">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th> N </th>
                                    <th> Yil </th>
                                    <th> Oy </th>
                                    <th> Kredit sum </th>
                                    <th> Boshlang`ich to`lov foizi </th>
                                    <th> Yillik foiz </th>
                                    <th> Yillik muddat </th>
                                </tr>
                            </thead>
                            <tbody>
                               {credits.map((item,index)=>(
                                   <tr key={index}>
                                       <th> {index+1} </th>
                                       <th> {item.kalendarYil} </th>
                                       <th> {item.kalendarOy} </th>
                                       <th> {item.kreditSum} </th>
                                       <th> {item.initialPay} </th>
                                       <th> {item.yillikFoiz} </th>
                                       <th> {item.yillikMuddat} </th>
                                   </tr>
                               ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

function mapStateToProps(state){
    return state = {
        credits: state.creditReducer
    }
}
/*function mapDispatchToProps(dispatch){
    return {
        changeName : (name) => {
            dispatch({type:"CHANGE_NAME",payload:name})
        }
    }
}*/

export default connect(mapStateToProps,null)(Results);