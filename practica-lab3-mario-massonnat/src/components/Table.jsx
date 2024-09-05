const Table = ({ data }) => {
  const incomes = data.map((item, index) => (
    <tr key={index}>
      <td>{item.brand}</td>
      <td>${item.income}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Brands</th>
          <th>Incomes</th>
        </tr>
      </thead>
      <tbody>{incomes}</tbody>
    </table>
  );
};

export default Table;
