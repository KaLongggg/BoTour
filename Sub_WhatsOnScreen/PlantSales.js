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
          <Text style={{fontWeight: 'bold'}}>Please note:</Text> 
          this Plant Sale is only open to residents of the Wollongong City Council area. Refer to 'Payment methods' below for more detail.
          
          
          {'\n'}{'\n'}
          <Text style={styles.heading}>Location</Text>{'\n'}
          65 Northfields Avenue, Keiraville{'\n'}
          (please note: there is no access to the Nursery from within the Garden, you must enter via Northfields Ave).

          {'\n'}{'\n'}
          <Text style={styles.heading}>Upcoming Sales</Text>{'\n'}
          Our next plant sales are shown in {'\b'}
            <Text
              style={{ textDecorationLine: 'underline' }}
              onPress={() => Linking.openURL('https://wollongongbotanicgarden.com.au/events/calendar')}
            >
            our calendar
            </Text>
            <Text>{"\n"}{"\n"}</Text>
            
            <Accordion title="Available plants" >
              <Text>
                Below is the plant list for 21 April 2023. This list is updated a few days prior to each sale.

                Plants are listed with their scientific name in italics, followed by the common name in brackets.

                Illawarra Local Native Species
                Acacia stricta (Hop Wattle)
                Acmena smithii var. minor (Dwarf Lilly Pilly)
                Adiantum spp. (Maidenhair Fern)
                Alocasia bribanensis (Cunjevoi)
                Alpinia caerulea (Native Ginger)
                Asplenium bulbiferum (Hen and Chicken Fern)
                Bacopa
                Baeckia imbricata (Heath Myrtle)
                Banksia integrifolia (Coast Banksia)
                Banksia robur (Swamp Banksia)
                Brachychiton acerifolius (Illawarra Flame Tree)
                Brachyscome angustifolia (Grass Daisy)
                Brachyscome multifida (Rock Daisy)
                Carex appressa (Tall Sedge)
                Carex brunnea (Greater Brown Sedge)
                Carpobrotus glaucescens (Native Pig Face)
                Chrysocephalum apiculatum (Yellow Buttons)
                Citriobatus pauciflorus (Native Orange Thorn)
                Coprosma (Prickley Current Bush)
                Cryptocarya microneura (Murrogun)
                Cymbopogon refractus (Barb Wire Grass)
                Deeringia amaranthoides (Shrubby Deeringia)
                Dianella caerulea (Blue Flax-lily)
                Dianella congesta (Beach Flax Lily)
                Dodonaea triquetra (Large Leaf Hop Bush)
                Dodonaea viscosa (Hop Bush)
                Echinopogon caespitosus (Tufted Hedgehog Grass)
                Emmenosperma alphitonioidoes (Yellow Ash)
                Ehretia acuminata (Koda)
                Eupomatia laurina (Bolwarra)
                Ficinia / Isolepsis nodosa (Knobby Club-rush)
                Ficus marcrophylla (Moreton Bay Fig)
                Ficus superba (Deciduous Fig)
                Gahnia sieberiana (Red-fruit Saw-sedge)
                Glochidion ferdinandi (Cheese Tree)
                Goodia lotifolia (Golden Tip)
                Goodenia ovata-prostrate form (Hop Goodenia)
                Guioa semiglauca (Guioa)
                Hardenbergia violacea (Purple Coral Pea)
                Hibbertia aspera (Rough Guinea Flower)
                Hibbertia obtusifolia (Hoary Guinea Flower)
                Indigofera australis (Native Indigo)
                Juncus kraussii (Sea Rush)
                Kennedia rubicunda (Dusky Coral Pea)
                Kunzea ambigua (White Kunzea)
                Libertia paniculata (Branching Grass-Flag)
                Lomandra longifolia (Spiny-headed Mat-rush)
                Maclura cochinchinensis (Cockspur Thorn)
                Melaleuca hypericifolia (Hillock Bush)
                Melaleuca styphelioides (Prickly Paperbark)
                Melia azedarach (White Cedar)
                Meliocope micrococca (White Euodia)
                Olearia microphylla (Small-leaved Daisy Bush)
                Olearia tomentosa (Toothed Daisy-bush)
                Olearia viscidula (Viscid Daisy Bush)
                Ozothamnus diosmifolius (Rice Flower)
                Pellaea falcata (Sickle Fern)
                Pennisetum alopecuroides (Swamp Foxtail Grass)
                Peperomia blanda var. floribunda (Pepperomia)
                Pittosporum multiflorum (Orange Thorn)
                Pittosporum revolutum (Wild Yellow Jasmine)
                Platysace lanceolata (Shrubby Platysace)
                Plectranthus graveolens (Bush Basil)
                Podocarpus elatus (Plum Pine)
                Pollia crispata (Pollia)
                Pollia crispata dwarf (Dwarf Pollia)
                Polyscias elegans (Celery Wood)
                Polyscias murrayi (Pencil Cedar)
                Pratia pedunculata (Matted Pratia)
                Prostanthera incisa var. sieberi (Cut-leaf Mintbush)
                Prostanthera lasianthos (Victorian Christmas Bush)
                Prostanthera nivea (Snowy Mint Bush)
                Prostanthera ovalifolia (Oval-leaf Mintbush)
                Rhagodia candolleana (Coastal Salt Bush)
                Sambucus australasica (Native Elderberry)
                Scaevola aemulea (Purple Fan Flower)
                Schelhammera undulata (Lilac Lily)
                Scolopia braunii (Flintwood)
                Sorghum leiocladum (Wild Sorghum)
                Stenocarpus salignus (Scrub Beefwood)
                Stipa ramossima (Stout Bamboo Grass)
                Synoum glandulosum (Scentless Rosewood)
                Todea (King Fern)
                Toona ciliata (Red Cedar)
                Tristania nerifolia (Water Gum)
                Trochocarpa laurina (Tree Heath)
                Viola hederacea (Native Violet)
                Westringia fruticosa (Coastal Rosemary)
                Westringia longifolia (Long-leaved Westringia)
                Wilkiea huegeliana (Veiny Wilkiea)
                Zieria smithii (Sandfly Zieria)
                Australian Native Species
                Acacia cognata (Bower Wattle)
                Acacia cultriformis (Knife-leaf Wattle)
                Callistemon sp and cultivars (Bottlebrush)
                Cordyline petiolaris (Broad-leaved Palm Lily)
                Cordyline stricta (Narrow-leaved Palm Lily)
                Correa sp. and cultivars (Native Fuschia)
                Davidsonia jerseyana (Davidson's Plum)
                Diploglottis campbellii (Small-leaved Tamarind)
                Elaeocarpus grandis (Blue Quandong)
                Graptophyllum illicifolium (Mt Blackwood Holly)
                Grevillea sp and cultivars (Grevillea)
                Harpullia pendula (Tulipwood)
                Hypocalymma angustifolium (Pink-flowered Myrtle)
                Leptospermum sp. and cultivars (Tea Tree)
                Lomandra hystrix (Green Mat-rush)
                Lomandra-tanika ('Tankia' Mat Rush)
                Melaleuca 'Claret Tops' (Honey Myrtle)
                Myoporum parvifolium (Creeping Boobialla)
                Patersonia occidentalis (Purple Flag)
                Philotheca myoporoides (Wax Flower)
                Pimelia ferruginea (Rice Flower)
                Pratia puberula (Alpine Pratia)
                Prostanthera ('Mauve Mantle')
                Scaevola 'Pink Form' (Fan Flower)
                Scaevola purple (Fan Flower)
                Syzygium sp. and cultivars (Lillypilly)
                Thryptomene saxicola (F. C. Payne)
                Westringia sp. and cultivars (Coastal Rosemary)
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Prices">
              <Text>
                Current prices for our Native Plant Sales are shown below. Prices include GST.
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Payment methods">
              <Text>
                You can pay by card (not AMEX) or cheque. Cash is not accepted.{"\n"}{"\n"}
                Bring your current rates notice as proof that you’re a resident of the Wollongong City Council area to buy plants at these sales
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Bring back your pots">
              <Text>
                We happily accept the return of pots from any plants you've bought at one of our sales, and we will reuse them.{"\n"}{"\n"}
                Please note, we don't accept damaged pots or any pots that were bought elsewhere.
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

            <Accordion title="Plants for schools and commnity organizations">
              <Text>
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
              </Text>
            </Accordion>
            <Text>{"\n"}</Text>

        
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
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PlantSales;