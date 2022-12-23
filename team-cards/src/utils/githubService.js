const fetchUserDetails = async (users) => {
  const userData = [];
  for await (const user of users) {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const json = await data.json();
    userData.push(json);
  }
  return userData;
};

export default fetchUserDetails;
