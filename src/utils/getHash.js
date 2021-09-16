const getHash = (path = '/') =>
  location.hash.slice(1).toLocaleLowerCase().split(path)[1] || '/';

export default getHash;
