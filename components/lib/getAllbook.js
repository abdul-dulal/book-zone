const getAllbook = async () => {
  const res = await fetch("http://localhost:8080/api/book");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default getAllbook;
