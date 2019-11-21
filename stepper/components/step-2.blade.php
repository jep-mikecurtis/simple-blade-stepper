<div class="step" id="step_2">
  <div class="form-group">
    <label for="city">City</label>
    <input class="step_input" type="text" name="city" onchange="Frostbite.stepper.handleChange(this)">
  </div>
  <button onclick="Frostbite.stepper.prevStep()">Back</button>
  <button onclick="Frostbite.stepper.nextStep()">Next</button>
</div>