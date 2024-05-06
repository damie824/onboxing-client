import ProductContents from "../../components/product/contents";
import ProductThumbnail from "../../components/product/thumbnail";
import ProductTitle from "../../components/product/title";
import "../../styles/product/product.scss";

export default function Product() {
  return (
    <main>
      <div className="product-title">
        <h1>제품 정보를 보여드릴게요!</h1>
        <p>함께 구매할 상대를 찾을 수 있어요.</p>
      </div>
      <ProductThumbnail />
      <ProductTitle />
      <ProductContents />
    </main>
  );
}
