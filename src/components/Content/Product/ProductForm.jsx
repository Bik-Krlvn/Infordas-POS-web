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

import React, { Component } from "react";
import { Form, FormGroup, ModalFooter, Card, CardBody } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import TextInputWithIcon from "../../../app/common/forms/TextInputWithIcon";
import { connect } from "react-redux";
import SelectInput from "../../../app/common/forms/SelectInput";
import {
  createProductAction,
  updateProductAction
} from "./reducer/productAction";
import PropTypes from "prop-types";
class ProductForm extends Component {
  onSubmitForm = payload => {
    this.props.toggle();
    if (payload.uuid) {
      this.props.updateProductAction(payload);
      return;
    }
    this.props.createProductAction(payload);
  };
  render() {
    const { toggle, handleSubmit, submitting, pristine } = this.props;
    return (
      <div>
        <Form
          onSubmit={handleSubmit(this.onSubmitForm)}
          className="form-horizontal"
        >
          <div className="row">
            <div className="col-md-8">
              {/* form start */}

              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <Field
                    name="name"
                    type="text"
                    component={TextInputWithIcon}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10">
                  <Field name="brand" component={SelectInput} />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">Category</label>
                <div className="col-sm-10">
                  <Field name="category" component={SelectInput} />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">BuyPrice</label>
                <div className="col-sm-10">
                  <Field
                    name="buyPrice"
                    type="number"
                    component={TextInputWithIcon}
                  />
                </div>
              </FormGroup>

              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">RetailPrice</label>
                <div className="col-sm-10">
                  <Field
                    name="retailPrice"
                    type="number"
                    component={TextInputWithIcon}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">Stock</label>
                <div className="col-sm-10">
                  <Field
                    name="stock"
                    type="number"
                    component={TextInputWithIcon}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">Unit</label>
                <div className="col-sm-10">
                  <Field
                    name="unit"
                    type="text"
                    component={TextInputWithIcon}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <label className="col-sm-2 col-form-label">Barcode</label>
                <div className="col-sm-6">
                  <Field
                    readOnly
                    name="barcode"
                    type="text"
                    component={TextInputWithIcon}
                  />
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-default form-control"
                  >
                    Scan code
                  </button>
                </div>
              </FormGroup>
              <ModalFooter>
                <button onClick={toggle} className="btn btn-danger ">
                  Cancel
                </button>
                <button
                  disabled={submitting || pristine}
                  type="submit"
                  className="btn btn-success"
                >
                  Save Changes
                </button>
              </ModalFooter>
            </div>

            <div className="col-md-4">
              <div className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src="../../dist/img/user1-128x128.jpg"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <div className="form-group">
                    <label>Product Image</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" />
                        <label className="custom-file-label">Choose file</label>
                      </div>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-default">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

ProductForm.propTypes = {
  createProductAction: PropTypes.func.isRequired,
  updateProductAction: PropTypes.func
};
const mapDispatchToProps = {
  createProductAction,
  updateProductAction
};

const mapStateToProps = (state, ownProps) => ({
  product: state.product,
  initialValues: ownProps.currentProduct
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "productForm", enableReinitialize: true })(ProductForm));