// Copyright 2019 Bik_krl
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import axios from "axios";
import {
  CRM_IS_LOADING,
  CREATE_NEW_CUSTOMER,
  CREATE_NEW_SUPPLIER,
  GET_ALL_CRM_CUSTOMER,
  GET_ALL_CRM_SUPPLIER,
  RESET_CRM_MESSAGE,
  UPDATE_CUSTOMER,
  UPDATE_SUPPLIER,
  DELETE_CUSTOMER,
  DELETE_SUPPLIER
} from "./crmConstant";
import showLoadingAction from "../../../../app/common/util/showLoadingUtil";
import { errorHandlingAction } from "../../../error/reducer/errorAction";
import { CRM_TYPE } from "../../../../app/common/constants/Constants";

export const createCrmAction = payload => dispatch => {
  const { crmType } = payload;
  if (crmType === undefined) throw new Error("crmType not specified");
  if (crmType === CRM_TYPE.customer) {
    createCrmCustomerAction(payload, dispatch);
    return;
  }
  createCrmSupplierAction(payload, dispatch);
};

const createCrmCustomerAction = (payload, dispatch) => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .post("crm/create-customer", payload)
    .then(res => {
      dispatch({ type: CREATE_NEW_CUSTOMER, payload: res.data.data.message });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

const createCrmSupplierAction = (payload, dispatch) => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .post("crm/create-supplier", payload)
    .then(res => {
      dispatch({ type: CREATE_NEW_SUPPLIER, payload: res.data.data.message });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const fetchAllCrmCustomerAction = () => dispatch => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .get("crm/customers")
    .then(res => {
      dispatch({ type: GET_ALL_CRM_CUSTOMER, payload: res.data.data });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const fetchAllCrmSupplierAction = () => dispatch => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .get("crm/suppliers")
    .then(res => {
      dispatch({ type: GET_ALL_CRM_SUPPLIER, payload: res.data.data });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const updateCrmAction = payload => dispatch => {
  const { crmType } = payload;
  if (crmType === undefined) throw new Error("crmType not specified");
  if (crmType === CRM_TYPE.customer) {
    return updateCusomterAction(payload, dispatch);
  }
  updateSupplierAction(payload, dispatch);
};

export const updateCusomterAction = (payload, dispatch) => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .put("crm/update-customer", payload)
    .then(res => {
      dispatch({ type: UPDATE_CUSTOMER, payload: res.data.data.message });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const updateSupplierAction = (payload, dispatch) => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .put("crm/update-supplier", payload)
    .then(res => {
      dispatch({ type: UPDATE_SUPPLIER, payload: res.data.data.message });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const deleteCrmAction = payload => dispatch => {
  const { crmType } = payload;
  if (crmType === undefined) throw new Error("crmType not specified");
  if (crmType === CRM_TYPE.customer) {
    return deleteCustomerAction(payload);
  }
  deleteSupplierAction(payload);
};

export const deleteCustomerAction = (payload, dispatch) => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .put("crm/delete-customer", payload)
    .then(res => {
      dispatch({ type: DELETE_CUSTOMER, payload: res.data.data.message });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const deleteSupplierAction = (payload, dispatch) => {
  showLoadingAction(CRM_IS_LOADING, true, dispatch);
  axios
    .put("crm/delete-supplier", payload)
    .then(res => {
      dispatch({ type: DELETE_SUPPLIER, payload: res.data.data.message });
    })
    .catch(err => {
      showLoadingAction(CRM_IS_LOADING, false, dispatch);
      errorHandlingAction(err, dispatch);
    });
};

export const resetCrmMessageAction = () => dispatch => {
  dispatch({ type: RESET_CRM_MESSAGE });
};
