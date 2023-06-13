const resources = (locale) => {
    let data = require(`./pages-${locale.toLowerCase()}.js`);

    return data.default;
};

export default resources;