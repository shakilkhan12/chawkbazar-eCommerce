export const showError = (errors, name) => {
    if(errors.length > 0 )  {
        const exist = errors.find(err => err.param === name);
        if(exist) {
            return exist.msg;
        } else {
            return false;
        }
    } else {
        return false;
    }
}