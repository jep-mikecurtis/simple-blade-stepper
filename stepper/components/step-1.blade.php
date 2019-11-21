<div class="step" id="step_1">
  <div class="form-group">
    <label for="first_name">First Name</label>
    <input class="step_input" type="text" name="first_name" onchange="Frostbite.stepper.handleChange(this)">
  </div>
  <div class="form-group">
    <label for="last_name">Last Name</label>
    <input class="step_input" type="text" name="last_name" onchange="Frostbite.stepper.handleChange(this)">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input class="step_input" type="email" name="email" onchange="Frostbite.stepper.handleChange(this)">
  </div>
  <button data-target="step" onclick="Frostbite.stepper.nextStep()">Next</button>
</div>