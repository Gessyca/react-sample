import {ADD_LESSON, CLEAN, TOGGLE_LESSON} from '../actionType/course';

export function toggleLesson(module, lesson) {
    return {
        type: TOGGLE_LESSON, payload: {module, lesson}
    }
}

export function clean() {
    return {type: CLEAN}
}

export function addLesson(moduleId, newLesson) {
    return {type: ADD_LESSON, payload: {moduleId, newLesson}}
}

