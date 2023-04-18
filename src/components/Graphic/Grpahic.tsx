import React from "react";

import { StyledArticle, StyledP, StyledImg } from "./Graphic";

const Grpahic = () => {
    return (
        <StyledArticle>
            <StyledImg src="https://picsum.photos/200/300" alt="test photo"/>
            <StyledP>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus 
                deleniti maiores fuga dolore, ut sequi ducimus earum consequuntur ab, est enim? 
                Cumque odit repudiandae omnis laudantium nam quae commodi.
            </StyledP>
        </StyledArticle>
    );
};

export default Grpahic;