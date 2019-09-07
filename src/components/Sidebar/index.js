import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../store/actions/course'

const Sidebar = ({modules, toggleLesson, clean, addLesson}) => {

    function add(e, moduleId) {
        const input = document.getElementById(moduleId);
        if(input) {
            addLesson(moduleId,input.value);
            input.value = '';
            input.focus();
        } else {
            alert('Preencha o campo')
        }
        e.preventDefault();
    }

    return(
    <aside>
    {modules.map(m => (
        <div key={m.id}>
            <strong>{m.title}</strong>
            <form autoComplete="off" onSubmit={(e) => add(e, m.id)}>
            <p>
                <label>Add new lesson: </label>
                <input id={m.id} type="text"/>
                <button type="submit">Adicionar</button>
            </p>
            </form>
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