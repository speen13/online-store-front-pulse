import { useEffect, useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import "./ManCatalog.css";
import { brand } from "../../http/ProductsApi.jsx";
import { Aside } from "../../components/Aside/Aside.jsx";
// import { PageTitle } from "../../components/Typography/PageTitle.styled.js";
// import { FilterButton } from "../../components/Buttons/FilterButton/FilterButton.styled.js";
import { CatalogHeader } from "../../components/CatalogHeader/CatalogHeader.jsx";
import { Container } from "../../main.styled.js";

const ManCatalog = observer(() => {
  // const refreshPage = () => {
  //   window.location.reload(false)
  // }
  const { store } = useContext(Context);

  const [asyncData, setAsyncData] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [seasonList, setSeasonList] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  const onSelectionChanged = (type, items) => {
    console.log("onSelectionChanged", type, items);
    switch (type) {
      case "brand":
        setBrandList(items);
        break;
      case "season":
        setSeasonList(items);
        break;
      case "size":
        setSizeList(items);
        break;
    }
  };
  // const brand = async () => {
  //   const {data} = await host.get('/products')
  //   return data
  // }
  // const onShowFilter = () => {
  //   setShowFilter(!showFilter);
  // };
  useEffect(() => {
    brand().then((res) => setAsyncData(res));
    store.setProducts(asyncData);
  }, []);

  // const catProduct = store.product.data
  // console.log(asyncData.products?.filter(el => el.categories.sex !== 'male'))

  // console.log(asyncData.products)
  // console.log(asyncData.products?.map(el => el._id))

  // console.log(catProduct)

  // useEffect(() => {fetch('https://pulse-run-api.onrender.com/api/products')
  //   .then(res => res.json()).then(res => store.setProducts(res))}
  //  , [])

  return (
    <Container>
      {/* Компонетн навігації */}
      <div className="manCatalog-navigation">
        <a href="/">Головна</a> / Чоловіче взуття
      </div>
      {/* Компонент фільтрації */}
      <CatalogHeader brandList={brandList} seasonList={seasonList} sizeList={sizeList} />

      {/* Компонент сторінки */}
      <div className="manCatalog-mainPage">
        <Aside onChanged={onSelectionChanged} />
        <div>
          {asyncData.products
            ?.filter((el) => el.categories.sex !== "female")
            .map((el) => (
              <div key={el._id} className="sport" style={{ cursor: "pointer" }}>
                <Cards info={el.name} image={el.imgThumbnail} price={el.price} id={el._id} />
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
});

export default ManCatalog;

// console.log(data.products.map(el => el.name))
