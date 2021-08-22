
import {
    BASE_URL,
    config,
    fileConfig,
} from '../../configs/host';
import { saveUser } from "./actions";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clienApiKey } from "../../configs/apiKeys";



export const ADD_INVESTMENT_PAYMENT = (data) => dispatch => {
    return axios.post(`${BASE_URL}/api/v1/investments/add-payment`, data)
        .then((res) => {
            console.log(res.data);
            return Promise.resolve("success");
        }).catch((err) => Promise.reject(err.message))
}


export const ADD_INVESTMENT_INVOICE = (data) => dispatch => {
    return axios.post(`${BASE_URL}/api/v1/investments/invoices`, data)
        .then((res) => {
            const invoice_id = res.data.investment;
            return axios.get(`${BASE_URL}/api/v1/boundless/invoice/${invoice_id}`)
                .then(res => {
                    return Promise.resolve(res.data);
                }).catch(err => {
                    console.log(err)
                })

        }).catch((err) => Promise.reject(err.message))
}



export const GET_INVESTMENT_INVOICE = (id) => dispatch => {
    return axios.get(`${BASE_URL}/api/v1/investments/userinvoices/${id}`)
        .then((res) => {
            console.log("INVOICES FOR INVESTMENTS ===", JSON.stringify(res.data.data.rows, null, 10));
            dispatch({ type: "SAVE_INVESTMENTS", payload: res.data.data.rows })
            return Promise.resolve(res.data.data.rows);
        }).catch((err) => Promise.reject(err.message))
}
export const GET_ADD_INVESTMENT_INVOICE_BY_MATURED = (id) => dispatch => {
    return axios.get(`${BASE_URL}/api/v1/investments/matured-invoice/${id}`)
        .then((res) => {
            console.log("INVOICES FOR INVESTMENTS ===", JSON.stringify(res.data.data.rows, null, 10));
            const data = res.data.data.rows;
            dispatch({ type: "SAVE_INVESTMENTS", payload: data || [] })
            return Promise.resolve(res.data.data.rows || []);
        }).catch((err) => Promise.reject(err.message))
}

export const FUND_WALLET = (id, wallet) => dispatch => {
    console.log("THE ID", id, wallet);
    return axios.post(`${BASE_URL}/api/v1/investments/fund-wallet/${id}`, wallet)
        .then((res) => {
            console.log("REAL WALLET RESPONSE HERE ==", res);
            return Promise.resolve(res)
        }).catch((err) => Promise.reject(err.message))
}


export const GET_WALLET = (id) => dispatch => {
    return axios.get(`${BASE_URL}/api/v1/investments/client-wallet/${id}`)
        .then((res) => {
            return dispatch({ type: "SAVE_WALLET", payload: res.data });
        }).catch((err) => Promise.reject(err.message))
}



export const GET_INVESTMENT_RECEIPTS = (id) => dispatch => {
    return axios.get(`${BASE_URL}/api/v1/investments/userreceipts/${id}`)
        .then((res) => {
            dispatch({ type: "SAVE_INVESTMENT_RECEIPTS", payload: res.data.data.rows })
            return Promise.resolve(res.data.data.rows);
        }).catch(err => Promise.reject(err.message));
}

export const GET_INVESTMENT_RECEIPTS_BY_TRANSACTION_TYPE = (id, transaction) => dispatch => {
    return axios.get(`${BASE_URL}/api/v1/investments/userreceipts/${id}?method=${transaction}`)
        .then((res) => {
            console.log("RESPONSE OBJECT FOR TRANSACTION TYPEN==", res.data.data.rows)
            dispatch({ type: "SAVE_INVESTMENT_RECEIPTS", payload: res.data.data.rows || [] })
            return Promise.resolve(res.data.data.rows);
        }).catch(err => Promise.reject(err.message));

}



export const REQUEST_WITHDRAWAL = (data) => dispatch => {
    return axios.post(`${BASE_URL}/api/v1/investments/withdraw-fund`, data)
        .then(res => {
            console.log("WIDTHDRAWAL RESPONS ===", res.data);
            return Promise.resolve();
        }).catch(err => {
            console.log("WIDTHDRAWAL ERRORS ====", err);
            return Promise.reject();
        })
}


export const GET_INVESTMENTS_EARNINGS = (id) => dispatch => {
    return axios.get(`${BASE_URL}/api/v1/investments/user-earnings/${id}`)
        .then((res) => {
            dispatch({ type: "SAVE_INVESTMENT_EARNINGS", payload: res.data.data });
            return Promise.resolve("success");
        }).catch(err => Promise.reject(err.message))
}