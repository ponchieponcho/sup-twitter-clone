export const UPDATE_SUPLIST = 'UPDATE_SUPLIST';

// export let updateSupList = (newSups) => ({
// 	type: UPDATE_SUPLIST,
// 	newSups
// });

export let actionUpdateSupList = (fetchSups) => {
    console.log('RUNNING actionUpdateSupList')
    console.log(fetchSups)
    return { type: UPDATE_SUPLIST, payload: fetchSups}
}
