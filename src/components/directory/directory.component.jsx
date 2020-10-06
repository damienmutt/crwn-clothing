import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectDirectorySection} from "../../redux/directory/directory.selectors"
import MenuItem from "../../components/menu-item/menu-item.component"

import {DirContainer} from "./directory.styles.jsx"

const Directory = ({ sections }) => (
    <DirContainer>
        {
            sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </DirContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);