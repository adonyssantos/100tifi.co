const resolveRoutes = route => {
  const MAX_ID_LENGTH = 3;
  if (route.length <= MAX_ID_LENGTH) {
    let validRoutes = route === '/' ? route : '/character/:id';
    return validRoutes;
  }

  return `/${route}`;
};

export default resolveRoutes;
