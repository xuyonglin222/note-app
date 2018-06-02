import * as types from './mutations-type'

export default{
  [types.ADD_NOTE](state){
    let note={
      title:'new note',
      content:'do something',
      favorite:false
    };
    state.notes.push(note);
    state.activeNote=note;
  },
  [types.SET_CURRENT](state,note){
    state.activeNote=note;
  },
  [types.SET_FAV](state){
    state.activeNote.favorite= state.activeNote.favorite?false:true;
  },
  [types.DELETE](state){
    let index = state.notes.indexOf(state.activeNote);
    state.notes.splice(index,1);
    state.activeNote=state.notes.length>0?state.notes[0]:{}
  }
}
