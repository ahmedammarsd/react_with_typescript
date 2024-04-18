interface propsInterface {
  name: string;
  age?: number; // may will by nullable
  someData: {
    specilest: string;
    experience: number;
  };
  users: {
    id: number;
    name: string;
  }[];
}
const SayHallo = ({ name, age, someData, users }: propsInterface) => {
  return (
    <div>
      <h3>Hello {name}</h3>
      {age && <h3>Your Age : {age} </h3>}
      <p>Your Specilest is : {someData.specilest}</p>
      <p>Your Experience is : {someData.experience}</p>
      <hr />
      <br />
      <h2>Test Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.id}- {user.name}
        </p>
      ))}
    </div>
  );
};

export default SayHallo;
