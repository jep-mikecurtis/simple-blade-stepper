const hideAll = target => {
  const steps = document.querySelectorAll(target);
  return steps.forEach(step => (step.style.display = 'none'));
};

const showStep = target => {
  return (document.getElementById(`${target}`).style.display = 'block');
};

(_self => {
  Frostbite.stepper = {
    init() {
      // bind this and create state
      _self = this;
      _self.state = {
        step: 1,
        lastStep: document.querySelectorAll('.step').length - 1
      };
      hideAll('.step');
      showStep(`step_1`);
    },
    // Handle Submit and Create State Property
    handleChange(e) {
      _self.state[e.name] = e.value;
    },

    // Go to the next step, if its last step render confirm
    nextStep() {
      _self.state.step = _self.state.step + 1;
      hideAll('.step');
      showStep(`step_${_self.state.step}`);
      if (_self.state.step === _self.state.lastStep) {
        _self.confirmData();
      }
    },

    // Go back a step
    prevStep() {
      _self.state.step = _self.state.step - 1;
      hideAll('.step');
      showStep(`step_${_self.state.step}`);
    },

    // Render data confirm inputs
    confirmData() {
      const form_inputs = document.querySelectorAll('.step_input');

      const confirm_container = document.getElementById(`step_${_self.state.step}`);

      const info = confirm_container.querySelector('.info');
      info.innerHTML = '';

      form_inputs.forEach(form_input => {
        const name = form_input.name.replace('_', ' ');
        const value = _self.state[form_input.name];
        const text = `<p><b>${name}:</b> ${value}`;
        info.innerHTML += text;
      });
    },

    // Submit
    submit() {
      // Make your fetch
      hideAll('.step');
      showStep(`success`);
    }
  };
})();
Frostbite.stepper.init();
