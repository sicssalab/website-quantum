import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useMediaQuery } from 'react-responsive';
import MediaVideo from '../Experience/components/MediaVideo'

const Experience = (props) => {
  const { title, description, ...rest } = props;

  return (
    <div className="experience-container">
      <ContainerCustom>
        <div>
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
          {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }} />}
        </div>
        <div>
          <MediaVideo {...rest} />
        </div>
      </ContainerCustom>
    </div>
  );
};

export default Experience;
