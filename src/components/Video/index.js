import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../store/actions/course'

const Video = ({activeModule, activeLesson, clean}) => (
    <div>
      <p>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <strong>Aula: {activeLesson.title}</strong>
      </p>
      <button onClick={() => clean()}>Limpar seleção</button>
    </div>
);

// Função que recebe o estado e retorna o objeto
const mapStateToProps = state => ({
  activeLesson: state.course.activeLesson, 
  activeModule: state.course.activeModule
});

const mapDispatchToProps = dispatch =>
    // nome da função, parâmetros, action que deve ser disparada
    //toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module,lesson))
    // forma reduzida: bindActionCreators
    bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Video);