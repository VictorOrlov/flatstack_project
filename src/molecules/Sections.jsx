import React, {Component} from 'react';
import styles from './Sections.module.css'

const Sections = (props) => (
      <div className="row justify-content-md-center">
        <span className="col-10"><h4>{props.title}</h4></span>
        <div className={styles.section + ' ' + "row justify-content-center"}>
          {props.children}
        </div>
      </div>
    );

export default Sections;