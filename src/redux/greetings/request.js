const getRandomGreeting = async () => {
  const response = await fetch('http://localhost:8000/greetings');

  return response.json();
};

export default getRandomGreeting;
