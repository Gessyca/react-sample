import { createReducer, createActions } from 'reduxsauce';

// ActionTypes + ActionCreators
export const { Types, Creators } = createActions({
    addLesson: ['moduleId', 'newLesson'],
    clean: null,
    toggleLesson: ['module', 'lesson'],
    helloWorldSaga: null,
    setMessage: ['message']
});

// state inicial
const INITIAL_STATE = {
    messageSaga: null,
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'Iniciando com React',
            lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' }
            ]
        },
        {
            id: 2,
            title: 'Apredendo redux',
            lessons: [
                { id: 3, title: 'Terceira aula' },
                { id: 4, title: 'Quarta aula' }
            ]
        }
    ]
};

//Cada case do reducer vira uma arrow function
// Os parâmetros não ficam mais dentro do payload e sim na action
const toggleLesson = (state = INITIAL_STATE, action) => {
    return { ...state, activeLesson: action.lesson, activeModule: action.module };
};

const clean = (state = INITIAL_STATE) => ({ ...state, activeLesson: {}, activeModule: {} });

const setMessage = (state = INITIAL_STATE, {message}) => ({...state, messageSaga: message});

const addLesson = (state = INITIAL_STATE, action) => {
    const modules = [...state.modules];
    modules.forEach(m => {
        if (m.id === action.moduleId) {
            const lesson = { id: Math.random(), title: action.newLesson }
            m.lessons.push(lesson);
        }
    });
    return { ...state, modules };
};

// mapeamento dos reducers com ActionTypes
const HANDLERS = {
    [Types.ADD_LESSON]: addLesson,
    [Types.CLEAN]: clean,
    [Types.TOGGLE_LESSON]: toggleLesson,
    [Types.HELLO_WORLD_SAGA]: null,
    [Types.SET_MESSAGE]: setMessage
};

export default createReducer(INITIAL_STATE, HANDLERS);