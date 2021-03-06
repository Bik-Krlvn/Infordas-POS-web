import React from "react";
import { connect } from "react-redux";
import TestModal from "../../testcomponent/TestModal";
import CompanyModal from "./company/CompanyModal";
import RankModal from "./rank/RankModal";
import AccountModal from "./account/AccountModal";
import ProductModal from "./product/ProductModal";
import ProductCategoryModal from "./product/ProductCategoryModal";
import ProductBrandModal from "./product/ProductBrandModal";
import AlertModal from "./alert/AlertModal";
import PurchaseProductModal from "./product/PurchaseProductModal";
const ModalManager = ({ currentModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUps[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

const modalLookUps = {
  TestModal,
  CompanyModal,
  RankModal,
  AccountModal,
  ProductModal,
  ProductCategoryModal,
  ProductBrandModal,
  AlertModal,
  PurchaseProductModal
};

const mapState = state => ({
  currentModal: state.modals
});

export default connect(mapState)(ModalManager);
