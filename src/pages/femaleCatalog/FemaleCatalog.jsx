import { useState } from "react";
// import { observer } from "mobx-react-lite";
import { Aside } from "../../components/Aside/Aside.jsx";
import { CatalogHeader } from "../../components/CatalogHeader/CatalogHeader.jsx";
import { Container, ContentWrapper, PageSection } from "../../main.styled.js";
import { CatalogNavigation } from "../../components/CatalogNavigation/CatalogNavigation.jsx";
import { CardsList } from "../../components/CardsList/CardsList.jsx";

const FemaleCatalog = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizes, setselectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const onSelectionChanged = (type, items) => {
    switch (type) {
      case "brand":
        setSelectedBrands(items);
        break;
      case "season":
        setSelectedSeasons(items);
        break;
      case "size":
        setselectedSizes(items);
        break;
      case "color":
        setSelectedColors(items);
        break;
      default:
        break;
    }
  };
  const onClearFiltersButton = () => {
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setselectedSizes([]);
    setSelectedColors([]);
  };
  return (
    <PageSection>
      <Container>
        <CatalogNavigation title="Жіноче взуття" />

        {/* Компонент фільтрації */}
        <CatalogHeader
          selectedBrands={selectedBrands}
          selectedSeasons={selectedSeasons}
          selectedSizes={selectedSizes}
          selectedColors={selectedColors}
          onClearFiltersButton={onClearFiltersButton}
          title={"Жіноче взуття"}
        />

        {/* Компонент сторінки */}
        <ContentWrapper>
          <Aside
            selectedBrands={selectedBrands}
            selectedSizes={selectedSizes}
            selectedSeasons={selectedSeasons}
            selectedColors={selectedColors}
            onChanged={onSelectionChanged}
          />
          {/* дістати жіночі дані */}
          <CardsList />
        </ContentWrapper>
      </Container>
    </PageSection>
  );
};

export default FemaleCatalog;
