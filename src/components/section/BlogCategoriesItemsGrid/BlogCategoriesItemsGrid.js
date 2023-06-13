import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import languageUtils from "../../../utils/languageUtils";
import { useGlobalState } from "../../../store/StoreProvider";
import { Button, Card } from "react-bootstrap";
import ImgDefault from "../../../assets/img/default.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
const BlogCategoriesCollage = (props) => {
    const { title, items, textButtonMore } = props;
    const { locale, pageData } = useGlobalState();
    const [itemsMobile, setItemsMobile] = useState({
        page: 0,
        pageTotal: 0,
        items:[]
    });

    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
    const onClickShowMoreItems = () => {
        const nAuxI = [...items];
        const newIMobile = {
            page: itemsMobile.page + 1,
        }
        const auxI = items.length > 0 && items.length >= (3 * newIMobile.page)
        ? nAuxI.splice(0, (3 * newIMobile.page))
        : items;

        setItemsMobile({
            ...itemsMobile,
            ...newIMobile,
            items:[...auxI],
        })
    }

    useEffect(() => {
        //proceso cargar pror primera vez lis itemas max 3
        // setItemsMobile()
        if( items !== undefined && items != null)
        {
            const nAuxI = [...items];
            const auxI = items.length > 0 && items.length >= 3
            ? nAuxI.splice(0, 3)
            : items;
    
            setItemsMobile({
                page: 1,
                pageTotal: Math.ceil(items.length / 3),
                items:[...auxI]
            })
         }
    }, [])

    const renderCards = (items) => {
        return items.map((item, i) => {
            return <Card className="card-topblog" key={i} as={Link} to={`${languageUtils.linksLocale(locale)}blog/${item.slug}`}>
                <LazyLoadImage className="card-img-top"
                    src={isMobile
                        ? item.thumbnailImageMobile
                            ? item.thumbnailImageMobile
                            : item.thumbnailImage
                                ? item.thumbnailImage
                                : ImgDefault
                        : item.thumbnailImage
                            ? item.thumbnailImage
                            : ImgDefault
                    }
                    alt={item.thumbnailTitle}
                />
                <Card.Body>
                    {item.destino && (
                        <p
                            className="destino d-none d-sm-block"
                            dangerouslySetInnerHTML={{ __html: item.destino }}
                        />
                    )}
                    <h5 className="card-title">{item.thumbnailTitle}</h5>
                    <Card.Text>{item.thumbnailDescription}</Card.Text>
                </Card.Body>
            </Card>
        })
    }

    return (<div className="blog-category-grid">
        <h2 className="title">{title}</h2>
        <div className="blog-category-grid-content">
            {(!isMobile && itemsMobile.items.length > 0) && renderCards(items)}
            {(isMobile && itemsMobile.items.length > 0) && renderCards(itemsMobile.items)}
        </div>
        {((isMobile && itemsMobile.items.length > 0) && itemsMobile.page < itemsMobile.pageTotal) && (
            <div className="blog-category-grid-content-btn">
                <Button variant="link" onClick={onClickShowMoreItems}>{textButtonMore}</Button>
            </div>
        )}
    </div>
    );
}

export default BlogCategoriesCollage;