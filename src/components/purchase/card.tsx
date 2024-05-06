import creditCardType from "credit-card-type";
import { useEffect, useState } from "react";

export default function PurchaseCard(props: {
  number: string;
  background: string;
}) {
  const card = creditCardType(props.number);
  const [parsed, setParsed] = useState("");

  useEffect(() => {
    const prepare = async () => {
      let parsing = "";
      for (let i = 0; i < props.number.length; i++) {
        if (card[0].gaps.indexOf(i) !== -1) {
          parsing = parsing + ` `;
        }
        if (i > card[0].gaps[0] - 1 && i < card[0].gaps[2]) {
          parsing = parsing + `*`;
        } else {
          parsing = parsing + `${props.number[i]}`;
        }
      }
      setParsed(parsing);
    };

    prepare();
  }, []);

  return (
    <div className="purchase-card">
      <div className="purchase-card-body">
        <div className="purchase-card-type">
          <img src={`/assets/cards/${card[0].type}.png`} alt="" />
        </div>
        <div className="purchase-card-container">
          <div className="purchase-card-number">
            <p>{parsed}</p>
          </div>
          <div className="purchase-card-info">
            <div className="purchase-card-info-first"></div>
            <div className="purchase-card-info-last"></div>
          </div>
        </div>
      </div>
      <img
        className="purchase-card-background"
        src={`/assets/cards/backgrounds/${props.background}.png`}
      />
    </div>
  );
}
