import data from "../data";
import Card from "./Card";
//blueprint for each card with data
const CardList = () => {
  return data.map((item, i) => {
    return (
      <Card
        key={i}
        title={item.title}
        price={"$" + item.price}
        image={item.image}
        linkTo={item.linkTo}
        postedOn={item.postedOn}
        location={"(" + item.location + ")"}
        bed={item.beds ? item.beds + "br-" : null}
        sqft={item.sqft ? item.sqft + "ft" : null}
      />
    );
  });
};

export default CardList;
