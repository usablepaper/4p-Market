import { useEffect } from "react";

function ProdcutInput({
  itemName,
  price,
  link,
  setItemName,
  setPrice,
  setLink,
  setIsActive,
  setIsDisabled,
}) {
  // 저장 버튼활성화 기능
  useEffect(() => {
    if (itemName.length > 1 && price.length !== 0 && link.length !== 0) {
      setIsActive(true);
      setIsDisabled(false);
    } else {
      setIsActive(false);
      setIsDisabled(true);
    }
  });

  // 가격인풋창 3자리마다 콤마 붙여주는 기능
  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  function handleChangeProductName(e) {
    setItemName(e.target.value);
  }
  function handleChangePrice(e) {
    setPrice(inputPriceFormat(e.target.value));
  }
  function handleChangeSaleLink(e) {
    setLink(e.target.value);
  }
  return (
    <>
      <div className="container-input-product">
        <div className="wrapper-productname">
          <label htmlFor="input-productname" className="label-productname">
            상품명
          </label>
          <input
            id="input-productname"
            type="text"
            placeholder="2~15자 "
            maxLength="16"
            minLength="2"
            onChange={handleChangeProductName}
            value={itemName}
          ></input>
        </div>
        <div className="wrapper-price">
          <label htmlFor="input-price" className="label-price">
            가격
          </label>
          <input
            id="input-price"
            type="text"
            placeholder="숫자만 입력 가능합니다."
            onChange={handleChangePrice}
            value={price}
          ></input>
        </div>
        <div className="wrapper-salelink">
          <label htmlFor="input-salelink" className="label-salelink">
            판매 링크
          </label>
          <input
            id="input-salelink"
            type="text"
            placeholder="URL을 입력해주세요"
            onChange={handleChangeSaleLink}
            value={link}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ProdcutInput;
