import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import { Row, Col } from 'react-bootstrap'
import FloatBoxs from "../../ui/boxFloat/FloatBox/FloatBoxs";
import FloatInverse from "../../ui/boxFloat/FloatInverse";
import { useMediaQuery } from 'react-responsive';
import breakpointConstants from "../../../constants/breakpointConstants";
import CardOurProyects from "../../ui/CardOurProyects";

const Proyects = (props) => {
    const { title, description, items } = props;
    const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD })

    return (
        <div className="container-own-proyects">
            <ContainerCustom>
                <FloatBoxs sx={{
                    position: "absolute",
                    right: isMobile ? 0 : "70px",
                    top: 0,
                    width: "75px",
                    height: "82px"
                }} />
                {title && <h2 className='text-center' dangerouslySetInnerHTML={{__html: title}} />}
                {description && <p className='text-center description' dangerouslySetInnerHTML={{__html: description}} />}
                {items &&
                    <Row className="proyects-container-inside">
                        {items.map((item, i) => {
                            return (
                                <Col key={'cardOwnProyects' + i} className="col-12 col-sm-6">
                                    <CardOurProyects item={item} />
                                </Col> 
                            )
                        })}
                    </Row>
                }
                 <FloatInverse sx={{
                    width: "90px",
                    height: "90px",
                    position: "absolute",
                    left: 0,
                    bottom: 0
                }} />
            </ContainerCustom>

        </div>
    );
}

export default Proyects;