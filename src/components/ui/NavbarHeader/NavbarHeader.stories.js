import NavbarHeader from "./NavbarHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import headerMock from "../../../mocks/headerMock";
import mainMock  from "../../../mocks/mainMock";
import languageMenuMock from "../../../mocks/languageMenuMock";
import "../../../theme/boostrap-theme.scss";
import "../../../theme/main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Miraro/Nav/NavbarHeader',
    component: NavbarHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => 
  <BrowserRouter>
        <Routes>
        <Route
            path="*"
            element={
                <div className='container-xl  bg-primary'>
                <NavbarHeader {...args} />
                </div>

            }
        />
            </Routes></BrowserRouter>;

  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = {
    //...headerMock,
    ...mainMock,
    locales: languageMenuMock,
    locale: "en" //value in locales
  };