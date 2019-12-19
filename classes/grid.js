class Grid {
  constructor() {
    this.myMap = strings.tileLayout;
    this.cols = this.myMap.length;
    this.rows = this.myMap[0].length-1;
    this.cellW = width/this.cols;
    this.cellH = height/this.rows;
  }

  makeTileMap(theCols, theRows) {
    for (let x = 0; x < theCols; x++) {
      for (let y = 0; y < theRows; y++) {
        stroke(0);
        strokeWeight(2);
        rect(x * this.cellW, y * this.cellH, this.cellW, this.cellH);
        if (this.myMap[y][x] === "G") {
          image(images.groundImg, x * this.cellW, y * this.cellH, this.cellW, this.cellH);
        }
        else if (this.myMap[y][x] === "S") {
          image(images.stoneImg, x * this.cellW, y * this.cellH, this.cellW, this.cellH);
        }
        else if (this.myMap[y][x] === "W") {
          image(images.waterImg, x * this.cellW, y * this.cellH, this.cellW, this.cellH);
        }
        else if (this.myMap[y][x] === ".") {
          image(images.grassImg, x * this.cellW, y * this.cellH, this.cellW, this.cellH);
        }
      }
    }
  }
}
