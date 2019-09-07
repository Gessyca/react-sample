import React from 'react';
import {connect} from 'react-redux';

const Video = ({activeModule, activeLesson}) => (
    <div>
      <p>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <strong>Aula: {activeLesson.title}</strong>
      </p>
    </div>
);
export default connect(state => ({activeLesson: state.course.activeLesson, activeModule: state.course.activeModule}))(Video);