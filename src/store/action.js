import * as actionType from './actionTypes'

export const add = () => {
  return {type:actionType.ACTION_ADD}
}

export const dec = () => ({
  type:actionType.ACTION_DEC
})

export const more = () => ({type:actionType.ACTION_MORE})

export const less = () => ({type:actionType.ACTION_LESS})
