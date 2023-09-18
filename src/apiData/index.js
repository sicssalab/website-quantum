const resources = (locale) => {
    let data = require(`./pages-${locale.toLowerCase()}.js`);
    
    return {...data.default, isSuccess: true};
};

export default resources;