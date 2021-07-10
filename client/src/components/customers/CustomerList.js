const CustomerList = ({ customers }) => {
  return (
    <div>
      <ul>
        {customers.map((customer, _id) => {
          return <li key={_id}>{customer.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CustomerList;
