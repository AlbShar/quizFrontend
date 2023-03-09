import React from 'react';
import { StyledArticle, StyledP } from './Graphic';

const Grpahic = () => {
    return (
        <StyledArticle>
            <img src="https://picsum.photos/200/300" alt="test photo" style={{width: '100%', height: 256, maxWidth: 286}}/>
            <StyledP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id temporibus deleniti maiores fuga dolore, ut sequi ducimus earum consequuntur ab, est enim? Cumque odit repudiandae omnis laudantium nam quae commodi.</StyledP>
        </StyledArticle>
    );
};

export default Grpahic;