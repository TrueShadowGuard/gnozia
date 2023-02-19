export const plantsDescriptions: Promise<Record<string,string>> = (async function() {
  const oldPlants = await fetch("static/oldPlants.json").then(response => response.text()).then(JSON.parse);
  const kolok4plants = await fetch("static/kolok4.txt").then(response => response.text()).then(formatPlants);
  console.log(kolok4plants);
  
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
    const plantName = rows[0].trim();
    plantsObject[plantName] = rows.slice(1).join("\n");
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
      "Hypericum perforatum",
      "Hypericum maculatum",
      "Rheum palmatum",
      "Rubia tinctorum",
      "Hypericum perforatum",
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
      "Hypericum maculatum",
      "Panax ginseng",
      "Aralia mandshurica",
      "Glycyrrhiza uralensis",
      "Frangula alnus",
      "Dioscorea nipponica",
      "Salix alba",
      "Rubia tinctorum",
      "Hypericum perforatum",
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
      "Gnaphalium uliginosum",
      "Potentilla alba",
      "Tanacetum vulgare",
      "Ononis arvensis",
      "Ginkgo biloba",
      "Viola",
      "Viola",
      "Equisetum arvense",
      "Bidens tripartita",
      "Scutellaria baicalensis",
      "Polygonum hydropiper",
      "Polygonum persicaria",
      "Polygonum aviculare",
      "Melilotus officinalis",
      "Fragaria vesca",
      "Ficus carica",
      "Pastinaca sativa",
    ]
  }
];
