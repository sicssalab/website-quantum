import React from "react";
import { Link } from "react-router-dom";
import ImgCategory from "./components/ImgCategory";
import languageUtils from "../../../utils/languageUtils";
import { useGlobalState } from "../../../store/StoreProvider";

const BlogCategoriesCollage = (props) => {
    const { titleCategories, items } = props;
    const { locale, pageData } = useGlobalState();
    const auxItems = [...items];
    const nItems = auxItems
        ? auxItems.sort((a, b) => {
            return a.order === b.order ? 0 : a.order > b.order ? 1 : -1;
        })
        : [];

    return (<div className="blog-category-collage">
        <h2 className="title d-none d-sm-block">{titleCategories}</h2>
        <div className="blog-category-collage-grid">
            {nItems && nItems.map((item, i) => {
                return <Link className={`${i === 0 ? 'fisrt' : ''}`}
                    key={i}
                    to={`${languageUtils.linksLocale(locale)}${pageData.slug}/${pageData.slugSub}?category=${item.tag}`}>
                    <ImgCategory item={item} isInitial={i === 0} />
                </Link>
            })}
        </div>
    </div>
    );
}

export default BlogCategoriesCollage;