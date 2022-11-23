function storeInfo(manufacturer, name, ...keywords) {
    return {
      manufacturer,
      "model name": name,
      keywords,
    };
  }
  
  console.log(storeInfo("Alto", "2021"));