import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../store/actions/course'

const Sidebar = ({modules, toggleLesson, clean, addLesson}) => {
 
    let inputValue = null;

    return(
    <aside>
    {modules.map(m => (
        <div key={m.id}>
            <strong>{m.title}</strong>
            <p>
                <label>Add new lesson: </label>
                <input id="input" type="text" onChange={(e) => {inputValue = e.target.value}}/>
                <button onClick={() => addLesson(m.id, inputValue)}>Adicionar</button>
            </p>
            <ul>
                {m.lessons.map( l => (
                    <li key={l.id}>
                        {l.title}
                        <button onClick={() => toggleLesson(m,l)}>Selecionar</button>
                    </li>
                ))}
            </ul>
        </div>
    ))}
    <button onClick={() => clean()}>Limpar</button>
    </aside>);
};

// Função que recebe o estado e retorna o objeto
const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
    // nome da função, parâmetros, action que deve ser disparada
    //toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module,lesson))
    // forma reduzida: bindActionCreators
    bindActionCreators(CourseActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);