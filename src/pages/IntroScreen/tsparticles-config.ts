// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const tsparticlesConfig: any = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: {
        r: 150,
        g: 150,
        b: 150,
        a: 0,
      },
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.25,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.5,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 120,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const anotherConfig: any = {
  preset: "seaAnemone",
  particles: {
    move: {
      speed: 2,
    },
  },
};

export default tsparticlesConfig;
