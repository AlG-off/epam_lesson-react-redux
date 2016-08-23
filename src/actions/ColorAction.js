import { CHANGE_COLOR } from '../constants/ActionTypes';

export default function setColor(color) {
    return {
        type: CHANGE_COLOR,
        payload: color
    }
}