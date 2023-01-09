import axios from "axios";

const people = {
  getPeople: async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
};

export default people;
