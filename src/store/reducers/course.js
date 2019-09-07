import {ADD_LESSON, CLEAN, TOGGLE_LESSON} from '../actionType/course';

const INITIAL_STATE = {
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

export default function course(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_LESSON:
            return { ...state, activeLesson: action.payload.lesson, activeModule: action.payload.module };
        case CLEAN:
            return { ...state, activeLesson: {}, activeModule: {} };
        case ADD_LESSON:
            const modules = [...state.modules];
            modules.forEach( m => {
                if(m.id === action.payload.moduleId){
                    const lesson = {id: Math.random(), title: action.payload.newLesson}
                    m.lessons.push(lesson);
                }
            });
            return { ...state, modules};
        default:
            return state;
    }
}