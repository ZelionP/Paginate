const paginate = (users) => {
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(users.length / itemsPerPage);

  const formatedUser = Array.from({ length: numberOfPages }, (item, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });

  return formatedUser;
};
export default paginate;
