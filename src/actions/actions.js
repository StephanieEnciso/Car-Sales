// action type:
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE = 'ADD_FEATURE';

// action creators:

export const removeFeatureAction = (info) => {
    return {type: REMOVE_FEATURE, payload: info};
};

export const addFeatureAction = (info) => {
    return {type: ADD_FEATURE, payload: info};
}
