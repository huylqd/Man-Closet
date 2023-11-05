import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {
    FaInfo,
    FaCheck,
    FaExclamationTriangle,
    FaBug,
    FaExclamationCircle
} from "react-icons/fa";
enum ToastType {
    info = "info",
    error = "error",
    warning = "warning",
    success = "success",
}

interface IToaster {
    type: ToastType;
    message: string;
}

// const Toaster = ({ type, message }: IToaster) => {

//     const option: any = {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined
//     };

//     if (type === 'info') {
//         toast.info(message, option)
//     } else if (type === 'error') {
//         toast.error(message, option);
//     } else if (type === 'warning') {
//         toast.warning(message, option);
//     }
//     else {
//         toast.dark(message, option);
//     }

//     return (
//         <ToastContainer />
//     )
// }
export const displayIcon = (type: ToastType) => {
    switch (type) {
        case "success":
            return <FaCheck />;
        case "info":
            return <FaInfo />;
        case "error":
            return <FaExclamationCircle />;
        case "warning":
            return <FaExclamationTriangle />;
        default:
            return <FaBug />;
    }
};

const Toaster = ({ type, message }: any) => {
    const showToast = (type, message) => {

        const option: any = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        };

        if (type === 'info') {
            toast.info(message, option)
        } else if (type === 'error') {
            toast.error(message, option);
        } else if (type === 'warning') {
            toast.warning(message, option);
        }
        else {
            toast.dark(message, option);
        }
    };
    return (
        <ToastContainer />
    );


}





export default Toaster