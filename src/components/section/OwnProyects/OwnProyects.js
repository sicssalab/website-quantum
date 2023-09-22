import React from "react";
import { ContainerCustom } from "../../ui/Containers";
import { Row, Col } from 'react-bootstrap'
import CardOurProyects from "../../ui/CardOurProyects";

const Proyects = (props) => {
    const { title, description, items } = props;

    return (
        <div className="container-own-proyects">
            <ContainerCustom>
                {title && <h2 className='text-center' dangerouslySetInnerHTML={{__html: title}} />}
                {description && <p className='text-center description' dangerouslySetInnerHTML={{__html: description}} />}
                {items &&
                    <Row className="proyects-container-inside justify-content-center">
                        {items.map((item, i) => {
                            return (
                                <Col key={'cardOwnProyects' + i} className="col-12 col-sm-5">
                                    <CardOurProyects item={item} />
                                </Col> 
                            )
                        })}
                    </Row>
                }
            </ContainerCustom>

        </div>
    );
}

export default Proyects;