/**
 *
 * Line of product in a table of 2 columns (name / price)
 * @param {{name: string,stocked:boolean, price: number}}
 */

function ProductRow({ product }) {
  const style = product.stocked ? undefined : { color: "red" };

  const handleClick = () => {
    throw new Error("misclicked");
  };

  return (
    <tr onClick={handleClick}>
      <td style={style}>{product.name}</td>
      <td style={style}>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
