class Kit {
    constructor(name) {
      this.name = name || 'ToolKit';
      this.tools = [];
    }
  
    addTool(tool) {
      this.tools.push(tool);
      console.log(`${tool} added to ${this.name}.`);
    }
  
    removeTool(tool) {
      const index = this.tools.indexOf(tool);
      if (index !== -1) {
        this.tools.splice(index, 1);
        console.log(`${tool} removed from ${this.name}.`);
      } else {
        console.log(`${tool} not found in ${this.name}.`);
      }
    }
  
    displayContents() {
      console.log(`${this.name} contents:`);
      if (this.tools.length === 0) {
        console.log('The kit is empty.');
      } else {
        this.tools.forEach((tool, index) => {
          console.log(`${index + 1}. ${tool}`);
        });
      }
    }
  }
  
  // Example usage
  const handyKit = new Kit('Handy Kit');
  const craftersKit = new Kit('Crafter\'s Kit');
  
  handyKit.addTool('Screwdriver');
  handyKit.addTool('Wrench');
  handyKit.addTool('Tape Measure');
  
  craftersKit.addTool('Scissors');
  craftersKit.addTool('Glue Gun');
  craftersKit.addTool('Paintbrush');
  
  handyKit.displayContents();
  craftersKit.displayContents();
  
  handyKit.removeTool('Wrench');
  craftersKit.removeTool('Paintbrush');
  
  handyKit.displayContents();
  craftersKit.displayContents();
  