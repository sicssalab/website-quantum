import React from "react";
import { useMediaQuery } from "react-responsive";
import { ContainerCustom } from "../../ui/Containers";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import breakpointConstants from "../../../constants/breakpointConstants";
import FloatInverse from "../../ui/boxFloat/FloatInverse";
import Press from "./components/Press";
import { useEffect, useState } from "react";
import PagePressSection from "./components/PagePressSection";

const PressList = (props) => {
  const { items, textLink } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [insieItems, setInsideItems] = useState([]);
  const [pageView, setPageView] = useState(1);
  const [typePagination, setPagination] = useState(
    isMobile ? "list" : "pagination"
  );
  const totalItems = items.length;
  const itemsView = 5;

  const totalPages = Math.ceil(items.length / itemsView);
  const styleFloats = {
    position: "absolute",
    right: isMobile ? 0 : "70px",
    top: 0,
    width: "82px",
    height: "82px",
  };
  const styleFloatsInverse = {
    width: "90px",
    height: "90px",
    position: "absolute",
    left: 0,
    bottom: 0,
  };

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
          updateViewItemsInPage(newPage)
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
          updateViewItemsInPage(newPage)
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

  return (
    <section className="press-contact-container-list">
      <ContainerCustom>
        <FloatBoxs sx={styleFloats} />
        <div>
          {insieItems &&
            insieItems.map((item, i) => {
              return <Press key={i} textLink={textLink} {...item} />;
            })}
        </div>
        <PagePressSection onNextPage={nextPage} onPrevPage={prevPage} totalPages={totalPages} pageView={pageView} />
        <FloatInverse sx={styleFloatsInverse} />
      </ContainerCustom>
    </section>
  );
};

export default PressList;
