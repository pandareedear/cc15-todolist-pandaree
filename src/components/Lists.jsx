import ListItem from "./LisItem";

/**
  props ={
    data : Array<{

    }
  }
 */
function Lists(props) {
  return (
    <ul className="list">
      {props.data.map((obj) => (
        <ListItem key={obj.id} {...obj} />
      ))}
    </ul>
  );
}

export default Lists;
