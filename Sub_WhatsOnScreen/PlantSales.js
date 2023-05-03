import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import Accordion from './Accordion'

const PlantSales = () => {

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/WhatsOn/PlantSales.jpg')}
        />
        <Text style={styles.text}>
          Make your garden greener by picking up some gems from our Nursery's Plant Sales.
          {'\n'}{'\n'}
          We offer a wide range of ground covers, grasses, trees and shrubs that are native to the Wollongong area, as well as other Australian natives. You can check our plant list below a week before each sale to find out what will be available.  Worm farms and compost bins can also be bought at our sales.
          {'\n'}{'\n'}
          Our expert horticulturalists are on hand at each sale to help with advice about plant selection for your garden.
          {'\n'}{'\n'}
          <Text style={{fontWeight: 'bold'}}>Please note: </Text> 
          this Plant Sale is only open to residents of the Wollongong City Council area. Refer to 'Payment methods' below for more detail.
          
          
          {'\n'}{'\n'}
          <Text style={styles.heading}>Location</Text>{'\n'}
          65 Northfields Avenue, Keiraville{'\n'}
          (please note: there is no access to the Nursery from within the Garden, you must enter via Northfields Ave).

          {'\n'}{'\n'}
          <Text style={styles.heading}>Upcoming Sales</Text>{'\n'}
          Our next plant sales are shown in{'\b'}
            <Text
              style={{ textDecorationLine: 'underline' }}
              onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/events/calendar')}
            >
            our calendar. {"\n"}{"\n"}
            </Text>
            
            <Accordion title="Available plants" >{'\n'}
              <Text style={styles.justifyText}>Below is the plant list for 21 April 2023. This list is updated a few days prior to each sale.{'\n'}{'\n'}
                Plants are listed with their scientific name in italics, followed by the common name in brackets.{'\n'}{'\n'}

                <Text style={{fontWeight: 'bold'}}>Illawarra Local Native Species </Text>{'\n'}
                ・	Acmena smithii var. minor (Dwarf Lilly Pilly){'\n'}
                ・	Adiantum spp. (Maidenhair Fern){'\n'}
                ・	Alocasia bribanensis (Cunjevoi){'\n'}
                ・	Alpinia caerulea (Native Ginger){'\n'}
                ・	Asplenium bulbiferum (Hen and Chicken Fern){'\n'}
                ・	Bacopa{'\n'}
                ・	Baeckia imbricata (Heath Myrtle){'\n'}
                ・	Banksia integrifolia (Coast Banksia){'\n'}
                ・	Banksia robur (Swamp Banksia){'\n'}
                ・	Brachychiton acerifolius (Illawarra Flame Tree){'\n'}
                ・	Brachyscome angustifolia (Grass Daisy){'\n'}
                ・	Brachyscome multifida (Rock Daisy){'\n'}
                ・	Carex appressa (Tall Sedge){'\n'}
                ・	Carex brunnea (Greater Brown Sedge){'\n'}
                ・	Carpobrotus glaucescens (Native Pig Face){'\n'}
                ・	Chrysocephalum apiculatum (Yellow Buttons){'\n'}
                ・	Citriobatus pauciflorus (Native Orange Thorn){'\n'}
                ・	Coprosma (Prickley Current Bush){'\n'}
                ・	Cryptocarya microneura (Murrogun){'\n'}
                ・	Cymbopogon refractus (Barb Wire Grass){'\n'}
                ・	Deeringia amaranthoides (Shrubby Deeringia){'\n'}
                ・	Dianella caerulea (Blue Flax-lily){'\n'}
                ・	Dianella congesta (Beach Flax Lily){'\n'}
                ・	Dodonaea triquetra (Large Leaf Hop Bush){'\n'}
                ・	Dodonaea viscosa (Hop Bush){'\n'}
                ・	Echinopogon caespitosus (Tufted Hedgehog Grass){'\n'}
                ・	Emmenosperma alphitonioidoes (Yellow Ash){'\n'}
                ・	Ehretia acuminata (Koda){'\n'}
                ・	Eupomatia laurina (Bolwarra){'\n'}
                ・	Ficinia / Isolepsis nodosa (Knobby Club-rush){'\n'}
                ・	Ficus marcrophylla (Moreton Bay Fig){'\n'}
                ・	Ficus superba (Deciduous Fig){'\n'}
                ・	Gahnia sieberiana (Red-fruit Saw-sedge){'\n'}
                ・	Glochidion ferdinandi (Cheese Tree){'\n'}
                ・	Goodia lotifolia (Golden Tip){'\n'}
                ・	Goodenia ovata-prostrate form (Hop Goodenia){'\n'}
                ・	Guioa semiglauca (Guioa){'\n'}
                ・	Hardenbergia violacea (Purple Coral Pea){'\n'}
                ・	Hibbertia aspera (Rough Guinea Flower){'\n'}
                ・	Hibbertia obtusifolia (Hoary Guinea Flower){'\n'}
                ・	Indigofera australis (Native Indigo){'\n'}
                ・	Juncus kraussii (Sea Rush){'\n'}
                ・	Kennedia rubicunda (Dusky Coral Pea){'\n'}
                ・	Kunzea ambigua (White Kunzea){'\n'}
                ・	Libertia paniculata (Branching Grass-Flag){'\n'}
                ・	Lomandra longifolia (Spiny-headed Mat-rush){'\n'}
                ・	Maclura cochinchinensis (Cockspur Thorn){'\n'}
                ・	Melaleuca hypericifolia (Hillock Bush){'\n'}
                ・	Melaleuca styphelioides (Prickly Paperbark){'\n'}
                ・	Melia azedarach (White Cedar){'\n'}
                ・	Meliocope micrococca (White Euodia){'\n'}
                ・	Olearia microphylla (Small-leaved Daisy Bush){'\n'}
                ・	Olearia tomentosa (Toothed Daisy-bush){'\n'}
                ・	Olearia viscidula (Viscid Daisy Bush){'\n'}
                ・	Ozothamnus diosmifolius (Rice Flower){'\n'}
                ・	Pellaea falcata (Sickle Fern){'\n'}
                ・	Pennisetum alopecuroides (Swamp Foxtail Grass){'\n'}
                ・	Peperomia blanda var. floribunda (Pepperomia){'\n'}
                ・	Pittosporum multiflorum (Orange Thorn){'\n'}
                ・	Pittosporum revolutum (Wild Yellow Jasmine){'\n'}
                ・	Platysace lanceolata (Shrubby Platysace){'\n'}
                ・	Plectranthus graveolens (Bush Basil){'\n'}
                ・	Podocarpus elatus (Plum Pine){'\n'}
                ・	Pollia crispata (Pollia){'\n'}
                ・	Pollia crispata dwarf (Dwarf Pollia){'\n'}
                ・	Polyscias elegans (Celery Wood){'\n'}
                ・	Polyscias murrayi (Pencil Cedar){'\n'}
                ・	Pratia pedunculata (Matted Pratia){'\n'}
                ・	Prostanthera incisa var. sieberi (Cut-leaf Mintbush){'\n'}
                ・	Prostanthera lasianthos (Victorian Christmas Bush){'\n'}
                ・	Prostanthera nivea (Snowy Mint Bush){'\n'}
                ・	Prostanthera ovalifolia (Oval-leaf Mintbush){'\n'}
                ・	Rhagodia candolleana (Coastal Salt Bush){'\n'}
                ・	Sambucus australasica (Native Elderberry){'\n'}
                ・	Scaevola aemulea (Purple Fan Flower){'\n'}
                ・	Schelhammera undulata (Lilac Lily){'\n'}
                ・	Scolopia braunii (Flintwood){'\n'}
                ・	Sorghum leiocladum (Wild Sorghum){'\n'}
                ・	Stenocarpus salignus (Scrub Beefwood){'\n'}
                ・	Stipa ramossima (Stout Bamboo Grass){'\n'}
                ・	Synoum glandulosum (Scentless Rosewood){'\n'}
                ・	Todea (King Fern){'\n'}
                ・	Toona ciliata (Red Cedar){'\n'}
                ・	Tristania nerifolia (Water Gum){'\n'}
                ・	Trochocarpa laurina (Tree Heath){'\n'}
                ・	Viola hederacea (Native Violet){'\n'}
                ・	Westringia fruticosa (Coastal Rosemary){'\n'}
                ・	Westringia longifolia (Long-leaved Westringia){'\n'}
                ・	Wilkiea huegeliana (Veiny Wilkiea){'\n'}
                ・	Zieria smithii (Sandfly Zieria){'\n'}{'\n'}

                <Text style={{fontWeight: 'bold'}}>Australian Native Species</Text>{'\n'}
                ・	Acacia cognata (Bower Wattle){'\n'}
                ・	Acacia cultriformis (Knife-leaf Wattle){'\n'}
                ・	Callistemon sp and cultivars (Bottlebrush){'\n'}
                ・	Cordyline petiolaris (Broad-leaved Palm Lily){'\n'}
                ・	Cordyline stricta (Narrow-leaved Palm Lily){'\n'}
                ・	Correa sp. and cultivars (Native Fuschia){'\n'}
                ・	Davidsonia jerseyana (Davidson's Plum){'\n'}
                ・	Diploglottis campbellii (Small-leaved Tamarind){'\n'}
                ・	Elaeocarpus grandis (Blue Quandong){'\n'}
                ・	Graptophyllum illicifolium (Mt Blackwood Holly){'\n'}
                ・	Grevillea sp and cultivars (Grevillea){'\n'}
                ・	Harpullia pendula (Tulipwood){'\n'}
                ・	Hypocalymma angustifolium (Pink-flowered Myrtle){'\n'}
                ・	Leptospermum sp. and cultivars (Tea Tree){'\n'}
                ・	Lomandra hystrix (Green Mat-rush){'\n'}
                ・	Lomandra-tanika ('Tankia' Mat Rush){'\n'}
                ・	Melaleuca 'Claret Tops' (Honey Myrtle){'\n'}
                ・	Myoporum parvifolium (Creeping Boobialla){'\n'}
                ・	Patersonia occidentalis (Purple Flag){'\n'}
                ・	Philotheca myoporoides (Wax Flower){'\n'}
                ・	Pimelia ferruginea (Rice Flower){'\n'}
                ・	Pratia puberula (Alpine Pratia){'\n'}
                ・	Prostanthera ('Mauve Mantle'){'\n'}
                ・	Scaevola 'Pink Form' (Fan Flower){'\n'}
                ・	Scaevola purple (Fan Flower){'\n'}
                ・	Syzygium sp. and cultivars (Lillypilly){'\n'}
                ・	Thryptomene saxicola (F. C. Payne){'\n'}
                ・	Westringia sp. and cultivars (Coastal Rosemary)
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Prices">
              <Text>{'\n'}Current prices for our Native Plant Sales are shown below. Prices include GST.{'\n'}</Text>

                <View style={styles.tableHeader}>
                  <Text style={styles.headerText}>Area</Text>
                  <Text style={styles.headerText}>Fee Name</Text>
                  <Text style={styles.headerText}>GST</Text>
                  <Text style={styles.headerText}>Current Fee{"\n"} (incl. GST)</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.cellText}>Botanic Garden Nursery</Text>
                  <Text style={styles.cellText}>Individual Plants 50mm Tube</Text>
                  <Text style={styles.cellText}>Y</Text>
                  <Text style={styles.cellText}>$2.40</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.cellText}>Botanic Garden Nursery</Text>
                  <Text style={styles.cellText}>Multiple Plants 50mm Tube >50 plants</Text>
                  <Text style={styles.cellText}>Y</Text>
                  <Text style={styles.cellText}>$1.40</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.cellText}>Botanic Garden Nursery</Text>
                  <Text style={styles.cellText}>Individual Plants (70mm) Forest Tube</Text>
                  <Text style={styles.cellText}>Y</Text>
                  <Text style={styles.cellText}>$3.20</Text>
                </View>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Payment methods">
              <Text>{'\n'}
                You can pay by card (not AMEX) or cheque. Cash is not accepted.{"\n"}{"\n"}
                Bring your current rates notice as proof that you’re a resident of the Wollongong City Council area to buy plants at these sales
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Bring back your pots">
              <Text>{'\n'}
                We happily accept the return of pots from any plants you've bought at one of our sales, and we will reuse them.{"\n"}{"\n"}
                Please note, we don't accept damaged pots or any pots that were bought elsewhere.
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Plants for schools and commnity organizations">
              <Text>{'\n'}
                Every financial year, not-for-profit primary and secondary schools, and community centres operating on community land in the Wollongong local government area can request up to 30 plants to be donated from the Botanic Garden's Nursery.{"\n"}{"\n"}

                We cannot accommodate requests for specific plants. The donation will include a mixture of native grasses, ground covers, trees and shrubs from our available supplies. If you have a specific plant request, you can purchase plants directly from the nursery as a special order (see 'Purchasing Plants' below) or come along to one of our sale days.{"\n"}{"\n"}

                Submit your donation request
                If you are interested in receiving free plants for your school or community centre please complete the following:{"\n"}{"\n"}

                Email us to request a donation. Note: we cannot accommodate requests for specific plants.
                Once your request has been approved, we will contact you to arrange a collection time. All orders for the remainder of the year will be scheduled for collection early in the new year when stock will be at its best.{"\n"}{"\n"}
                Collecting plant donations
                Bring a letterhead from the organisation or school authorising you to collect the plants on their behalf, along with photo ID. Plants cannot be collected without this.{"\n"}{"\n"}

                Collections must be pre-booked. Collection times are Monday to Friday 7.30am to 9am, 9.30am to 12pm, or 12.30pm to 2pm.{"\n"}{"\n"}

                Visit our Nursery: 63 Northfields Avenue in Keiraville (Gate 8) at your agreed collection date and time (see above).{"\n"}{"\n"}
                Make sure you have an authorisation letter and photo ID.
                If the gate is locked when you arrive, call 0419 273 818.
                Purchasing plants
                If your school or community centre would like to purchase specific plants you can come to an upcoming Plant Sale (dates listed above) or email us with your request for a special order.{"\n"}{"\n"}

                Make sure you include details of the types and quantity of plants you would like. Please note: There may be a limit on what we can provide you, so we will assess your request to order and if applicable, offer you similar alternatives.{"\n"}{"\n"}
              </Text>{"\n"}
            </Accordion>

        
        </Text>  
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cellText: {
    fontSize: 14,
    borderWidth: 0.5, // Add border
    borderColor: 'black', // Set border color
    width: 90, // Adjust the width of the cell
    height: 55, // Adjust the height of the cell
    textAlign: 'center', // Center the text inside the cell
  },
});

export default PlantSales;