export function inc(){
    return { type: 'INC' }
}

export function dec(){
    return { type: 'REC' }
}

export function stepChanged(e){
    return{
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}