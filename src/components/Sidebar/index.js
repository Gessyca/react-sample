import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators as CourseActions } from '../../store/ducks/course';

const Sidebar = () => {

    const data = useSelector(state => state.course);
    const dispatch = useDispatch();

    function add(e, moduleId) {
        dispatch(CourseActions.helloWorldSaga());
        const input = document.getElementById(moduleId);
        if (input && input.value) {
            dispatch(CourseActions.addLesson(moduleId, input.value));
            input.value = '';
            input.focus();
        } else {
            alert('Preencha o campo')
        }
        setTimeout(() => {
            dispatch(CourseActions.setMessage(''));
        }, 2000);
        e.preventDefault();
    }

    return (
        <aside>
            <h1>{data.messageSaga}</h1>
            {data.modules.map(m => (
                <div key={m.id}>
                    <strong>{m.title}</strong>
                    <form autoComplete="off" onSubmit={(e) => add(e, m.id)}>
                        <p>
                            <label>Add new lesson: </label>
                            <input id={m.id} type="text" />
                            <button type="submit">Adicionar</button>
                        </p>
                    </form>
                    <ul>
                        {m.lessons.map(l => (
                            <li key={l.id}>
                                {l.title}
                                <button onClick={() => dispatch(CourseActions.toggleLesson(m, l))}>Selecionar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>);
};

// Função que recebe o estado e retorna o objeto
// const mapStateToProps = state => ({
//     modules: state.course.modules,
//     messageSaga: state.course.messageSaga
// });

// const mapDispatchToProps = dispatch =>
//     // nome da função, parâmetros, action que deve ser disparada
//     //toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module,lesson))
//     // forma reduzida: bindActionCreators
//     bindActionCreators(CourseActions, dispatch)


// export default connect(mapDispatchToProps)(Sidebar);
export default Sidebar;