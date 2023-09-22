import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useMediaQuery } from "react-responsive";
import { ContainerCustom } from "../../ui/Containers";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useEffect, useState } from "react";
import PagePressSection from "./components/PagePressSection";
import InMystiqueCardBootstrap from "../../cards/MystiqueCardBootstrap";
import ModalProduct from "./components/ModalProduct";

const ProductList = (props) => {
  const { items, title } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [modalShow, setModalShow] = React.useState(false);
  const [itemSelect, setItemSelect] = useState(null);
  const [insieItems, setInsideItems] = useState([]);
  const [pageView, setPageView] = useState(1);
  const [typePagination, setPagination] = useState(
    isMobile ? "list" : "pagination"
  );
  const totalItems = items.length;
  const itemsView = 5;
  const totalPages = Math.ceil(items.length / itemsView);

  useEffect(() => {
    setPagination(isMobile ? "list" : "pagination");
  }, [isMobile]);

  useEffect(() => {
    setInsideItems(items.toSpliced(itemsView, totalItems));
  }, [items]);

  const nextPage = () => {
    if (pageView < totalPages) {
      const newPage = pageView + 1;

      switch (typePagination) {
        case "list":
          setInsideItems(items.toSpliced(itemsView * newPage, totalItems));
          break;
        case "":
        default:
          updateViewItemsInPage(newPage);
      }
      setPageView(newPage);
    }
  };
  const prevPage = () => {
    if (pageView > 1) {
      const newPage = pageView - 1;
      switch (typePagination) {
        case "list":
          setInsideItems(items.toSpliced(itemsView * newPage, totalItems));
          break;
        case "":
        default:
          updateViewItemsInPage(newPage);
      }
      setPageView(newPage);
    }
  };

  const updateViewItemsInPage = (newPage) => {
    const auxItems = [...items];
    const startItems = itemsView * newPage - itemsView;
    const endItems = itemsView * newPage;
    setInsideItems(auxItems.slice(startItems, endItems));
  };
  console.log(totalPages, pageView);

  const onClickButtonItem = (item) => {
    setItemSelect(item);
    setModalShow(true);
  };

  return (
    <section className="press-contact-container-list product-list-container">
      <ContainerCustom>
        <h2 className="title">{title}</h2>
        <div className="body-items">
          {insieItems &&
            insieItems.map((item, i) => {
              return (
                <InMystiqueCardBootstrap
                  key={i}
                  {...item}
                  onClick={() => onClickButtonItem(item)}
                />
              );
            })}
        </div>
        {totalPages !== pageView && (
          <PagePressSection
            onNextPage={nextPage}
            onPrevPage={prevPage}
            totalPages={totalPages}
            pageView={pageView}
          />
        )}
        <ModalProduct
          item={itemSelect}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ContainerCustom>
    </section>
  );
};

export default ProductList;
