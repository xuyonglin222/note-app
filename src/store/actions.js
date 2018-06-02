import * as types from './mutations-type'

export const addNote=({commit})=>{
  commit(types.ADD_NOTE)
}
export const setCurrent=({commit},note)=>{
  commit(types.SET_CURRENT,note);
}
export const setFav=({commit})=>{
  commit(types.SET_FAV)
}
export const deleteNote=({commit})=>{
  commit(types.DELETE)
}
