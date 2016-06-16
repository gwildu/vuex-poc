"use strict";

export const changeMessage = function ( { dispatch }, message ) {
    dispatch('CHANGE_MESSAGE', message);
    console.log(message)
};
