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

import createReducer from "../../../../app/common/util/reducerUtil";
import { CREATE_NEW_CRM, CRM_IS_LOADING, GET_ALL_CRM } from "./crmConstant";

const initialState = {
  loading: false,
  message: "",
  crmData: []
};

export const createCrm = (state, payload) => {
  return { ...state, loading: false, message: payload };
};

export const isLoading = (state, payload) => {
  return { ...state, loading: payload || false };
};

export const fetchAllCrm = (state, payload) => {
  return { ...state, crmData: payload, loading: false };
};

export default createReducer(initialState, {
  [CREATE_NEW_CRM]: createCrm,
  [CRM_IS_LOADING]: isLoading,
  [GET_ALL_CRM]: fetchAllCrm
});
