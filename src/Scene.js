class Scene {
  constructor() {
    this.lastTime = 0;
    this.elapsedTime = 0;

    this.element = document.createElement("canvas");
    this.context = this.element.getContext("2d");
    this.size = { width: 1, height: 1 };
  }

  main() {
    const now = Date.now();
    const dt = (now - this.lastTime) / 1000.0;

    this.update(dt);
    this.render();
    this.lastTime = now;

    requestAnimationFrame(this.main.bind(this));
  }

  update(dt) {}

  render() {}

  sizeDidChange(size) {}

  get size() {
    return { width: window.innerWidth, height: window.innerHeight };
  }

  set size(size) {
    const element = this.element;
    const scale = 0.5; //1 //window.devicePixelRatio

    element.width = window.innerWidth * scale;
    element.height = window.innerHeight * scale;
    element.style.width = window.innerWidth + "px";
    element.style.height = window.innerHeight + "px";

    this.context.scale(scale, scale);

    this._size = { width: size.width, height: size.height };
    this.sizeDidChange(this._size);
  }
}

export default Scene;
