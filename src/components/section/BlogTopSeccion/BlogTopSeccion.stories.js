import BlogTopSeccion from "./BlogTopSeccion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import headerMock from "../../../mocks/headerMock";
import apiBlog from "../../../mocks/apiBlog";
import "../../../theme/boostrap-theme.scss";
import "../../../theme/main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Miraro/Secction/BlogTopSeccion',
    component: BlogTopSeccion,
    argTypes: {
    },
  };

  const Template = (args) => 
  <BrowserRouter>
        <Routes>
        <Route
            path="*"
            element={
                <div className='container-xl  bg-primary'>
                <BlogTopSeccion {...args} />
                </div>
            }
        />
            </Routes></BrowserRouter>;

  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    ...apiBlog.items[1].blogsTop
  };