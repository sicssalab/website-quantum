import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ContainerCustom } from "../../ui/Containers";
import NavBlogTitles from "../../ui/NavBlogTitles/NavBlogTitles";
import BlogTopSeccion from "../BlogTopSeccion/BlogTopSeccion";
import BlogCategoriesItemsGrid from "../BlogCategoriesItemsGrid";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../store/StoreProvider";
import languageUtils from "../../../utils/languageUtils";

const BodyBlogCategory = (props) => {
    const { items, blogsTop, titleBlog, textButtonMore } = props;
    const [category, setCategory] = useState('');
    const [categoriesItems, setCategoriesItems] = useState([]);
    const [searchParams] = useSearchParams();
    const {locale, pageData} = useGlobalState();
    let navigate = useNavigate();

    const onClickCategory = (response) => {
        setCategory(response);
        setCategoriesItems(items.find(item => item.tag === response));

        const query = {
            category: response
        }
        const location = {
            pathname: `${languageUtils.linksLocale(locale)}${pageData.slug}`,
            search: `?${new URLSearchParams(query).toString()}`,
          };
    
          navigate(location);
    }

    useEffect(() => {
        const auxCat = searchParams.get("category")
            ? searchParams.get("category")
            : items[0].tag;

        setCategory(auxCat);
        setCategoriesItems(items.find(item => item.tag === auxCat));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (<section className="body-content-blog-cateogory">
        <ContainerCustom>
            <NavBlogTitles items={items} onClick={onClickCategory} selectValue={category} />
        </ContainerCustom>
        <BlogTopSeccion title={blogsTop.title} items={blogsTop.items} />
        <ContainerCustom>
            <BlogCategoriesItemsGrid key={category} items={categoriesItems.items} title={titleBlog} textButtonMore={textButtonMore} />
        </ContainerCustom>
    </section>);
}

export default BodyBlogCategory;