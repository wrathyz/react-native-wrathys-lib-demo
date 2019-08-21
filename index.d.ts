type RNWrathysLibDemoDuration = {
    SHORT: number;
    LONG: number;
}

interface RNWrathysLibDemoStatic extends RNWrathysLibDemoDuration{
    show(keys: String, duratioin: RNWrathysLibDemoDuration): void;
}

const RNWrathysLibDemo: RNWrathysLibDemoStatic
export default RNWrathysLibDemo;