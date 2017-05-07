const MixinLog = {
  componentWillMount() {
    console.log("mixin-componentWillMount");
  },
  componentDidMount() {
    console.log("mixin-componentDidMount");
  },
  log() {
    console.log('mixin.js log');
  }
};

export default MixinLog;