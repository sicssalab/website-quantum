import NavBlogTitles from "./NavBlogTitles";

export default {
    title: 'Miraro/Nav/NavBlogTitles',
    component: NavBlogTitles,
    argTypes: { },
    decorators : [
      (Story) => (
        <div style={{ margin: '3rem', maxWidth: '330px' }}>
          <Story />
        </div>
      ),
    ]
};
  
const Template = (args) =>  <NavBlogTitles {...args} /> 

export const titlePrimary = Template.bind({});
titlePrimary.args = { 
  isLink:true, //si es link se abre home de la categoria sobre la misma pag // si es false por default es onclick

  items:[{
    title: 'categoria1',
  },
  {
    title: 'categoria2',
  },
]
};




