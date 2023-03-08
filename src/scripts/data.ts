export const plantsDescriptions: Promise<Record<string,string>> = (async function() {
  const oldPlants = await fetch("static/oldPlants.json").then(response => response.text()).then(JSON.parse);
  const kolok4plants = await fetch("static/kolok4.txt").then(response => response.text()).then(formatPlants);
  
  return {
    ...oldPlants,
    ...kolok4plants
  }
}());

//@ts-ignore
window.plants = plantsDescriptions;

function formatPlants(plantsRaw: string) {
  const plants = plantsRaw.split(/(\r?\n){3}/);
  
  const plantsObject: Record<string,string> = {};
  plants.forEach(plant => {
    const rows = plant.split("\n");
    const plantNames = rows[0].split(",").map(x => x.trim());
    plantNames.forEach(plantName => plantsObject[plantName] = rows.slice(1).join("\n"));
  });
  return plantsObject;
}

export type Lesson = {
  header: string,
  plants: string[]
}

export const lessons: Lesson[] = [{
  header: "saponins",
  plants: [
    "Polemonium caeruleum",
    "Hedera helix",
    "Primula veris",
    "Polemonium caeruleum",
    "Dioscorea nipponica",
    "Dioscorea nipponica",
    "Dioscorea nipponica",
    "Panax ginseng",
    "Aesculus hippocastanum",
    "Aralia mandshurica",
    "Glycyrrhiza glabra",
    "Glycyrrhiza glabra",
    "Primula veris",
    "Hedera helix",
    "Aesculus hippocastanum",
    "Что это?",
    "Glycyrrhiza glabra",
  ]},
  {
    header: "anthracens",
    plants: [
      "Rumex confertus",
      "Frangula alnus",
      "Rheum palmatum",
      "Rubia tinctorum",
      "Rhamnus cathartica",
      "Hypericum",
      "Hypericum",
      "Rheum palmatum",
      "Rubia tinctorum",
      "Hypericum",
      "Rumex confertus",
      "Aloe arborescens",
      "Frangula alnus"
    ]
  },
  {
    header: "kolok3",
    plants: [
      "Dioscorea nipponica",
      "Glycyrrhiza glabra",
      "Rhamnus cathartica",
      "Rhamnus cathartica",
      "Leuzea carthamoides",
      "Hypericum",
      "Panax ginseng",
      "Aralia mandshurica",
      "Glycyrrhiza uralensis",
      "Frangula alnus",
      "Dioscorea nipponica",
      "Salix alba",
      "Rubia tinctorum",
      "Hypericum",
      "Schizandra chinensis",
      "Arctostaphylos uva-ursi",
      "Rumex confertus",
      "Vaccinium vitis-idaea",
      "Rheum palmatum",
      "Frangula alnus",
      "Silybum marianum",
      "Salix acutifolia",
      "Eleutherococcus senticosus",
      "Convallaria majalis",
      "Polemonium caeruleum",
      "Primula veris",
      "Aesculus hippocastanum",
      "Glycyrrhiza glabra",
      "Hedera helix",
      "Erysimum diffusum",
      "Digitalis grandiflora",
      "Digitalis lanata",
      "Podophyllum peltatum",
      "Digitalis purpurea",
      "Erysimum diffusum",
      "Adonis vernalis",
      "LRS",
      "LRS",
      "LRS",
      "Leuzea carthamoides",
      "LRS",
      "LRS",
      "LRS",
      "LRS",
      "LRS",
      "LRS",
      "LRS"
    ]
  },
  {
    header: "kolok4",
    plants: [
      "Potentilla erecta",
      "Quercus robur",
      "Quercus robur",
      "Padus avium",
      "Polygonum bistorta",
      "Scutellaria baicalensis",
      "Tanacetum vulgare",
      "Sanguisorba officinalis",
      "Alnus",
      "LRS",
      "Melilotus officinalis",
      "Helichrysum arenarium",
      "Ficus carica",
      "Agrimonia eupatoria",
      "Bergenia crassifolia",
      "Sanguisorba officinalis",
      "Comarum palustre",
      "Vaccinium myrtillus",
      "Ginkgo biloba",
      "Comarum palustre",
      "Padus avium",
      "Agastache rugosa",
      "Viola",
      "Rhus coriaria",
      "Alnus",
      "Alnus",
      "Hypericum",
      "Bidens tripartita",
      "Agrimonia eupatoria",
      "Rhus coriaria",
      "Filipendula ulmaria",
      "Quercus robur",
      "Cotinus coggygria",
      "Crataegus laevigata",
      "Polygonum aviculare",
      "LRS",
      "Polygonum bistorta",
      "Potentilla alba",
      "Centaurea cyanus",
      "Comarum palustre",
      "Vaccinium myrtillus",
      "Potentilla erecta",
      "Alnus",
      "Agrimonia eupatoria",
      "Rhus coriaria",
      "Bergenia crassifolia",
      "Rudbeckia hirta",
      "Bergenia crassifolia",
      "Padus avium",
      "Comarum palustre",
      "Pastinaca sativa",
      "Ononis arvensis",
      "Gnaphalium uliginosum",
      "Potentilla erecta",
      "LRS",
      "LRS",
      "LRS",
      "Fragaria vesca",
      "Padus avium",
      "Potentilla erecta",
      "Vaccinium myrtillus",
      "Sanguisorba officinalis",
      "LRS",
      "Quercus robur",
      "Hypericum",
      "Rhus coriaria",
      "Argimonia eupatoria",
      "LRS",
      "Polygonum bistorta",
      "Ammi majus",
      "Glycyrrhiza glabra",
      "Bergenia crassifolia",
      "Viola",
      "Aronia melanocarpa",
      "Cotinus coggygria",
      "Sanguisorba officinalis",
      "Vaccinium myrtillus",
      "Poentilla erecta",
      "Polygonum bistorta",
      "LRS",
      "Alnus",
      "Alnus",
      "Alnus",
      "Bidens frondosa"
    ]
  }
];
