export const saveValue = (key, value) => {
    localStorage.setItem(key, value);
}

export const getValue = (key) => 
{
    return localStorage.getItem(key);
}

export const resetLocalStorage = () => 
{
    localStorage.clear();
}